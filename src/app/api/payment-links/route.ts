import { NextRequest, NextResponse } from 'next/server';

const NEXFLOWX_API_BASE = process.env.NEXFLOWX_API_BASE || 'https://api-core.nexflowx.tech';
const NEXFLOWX_API_KEY = process.env.NEXFLOWX_API_KEY || '';
const NEXFLOWX_STORE_ID = process.env.NEXFLOWX_STORE_ID || 'NeX-Store';

interface PaymentLinkPayload {
  amount: number;
  currency: 'EUR' | 'BRL' | 'USDT';
  store_id: string;
  description: string;
  metadata: {
    project_name: string;
    details: string;
    meeting_date: string;
    contact: string;
    solution_id: string;
    solution_name: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: PaymentLinkPayload = await request.json();

    // Validate required fields
    if (!body.amount || !body.currency || !body.description) {
      return NextResponse.json(
        { error: 'Campos obrigatórios em falta: amount, currency, description' },
        { status: 400 }
      );
    }

    if (!body.metadata?.project_name || !body.metadata?.details || !body.metadata?.meeting_date || !body.metadata?.contact) {
      return NextResponse.json(
        { error: 'Campos do formulário em falta no metadata' },
        { status: 400 }
      );
    }

    // Build the NeXFlowX API payload
    const currencyMap: Record<string, string> = {
      'EUR': 'EUR',
      'BRL': 'BRL',
      'USDT': 'USDT_TRC20',
    };

    const payload = {
      amount: body.amount,
      currency: currencyMap[body.currency] || body.currency,
      store_id: body.store_id || NEXFLOWX_STORE_ID,
      description: body.description,
      webhook_url: process.env.NEXFLOWX_WEBHOOK_URL || 'https://www.nex-systems.xyz/api/webhook/nexflowx',
      metadata: body.metadata,
    };

    // Call NeXFlowX API
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (NEXFLOWX_API_KEY) {
      headers['Authorization'] = `Bearer ${NEXFLOWX_API_KEY}`;
    }

    const apiResponse = await fetch(`${NEXFLOWX_API_BASE}/api/v1/payment-links`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error('[NeXFlowX] API Error:', apiResponse.status, data);
      return NextResponse.json(
        { error: data.error || data.message || 'Erro ao criar link de pagamento na NeXFlowX' },
        { status: apiResponse.status }
      );
    }

    // Return the checkout URL and shareable_url
    return NextResponse.json({
      url: data.url || data.checkout_url || data.payment_url,
      shareable_url: data.shareable_url || data.url || data.checkout_url,
      payment_link_id: data.id || data.payment_link_id,
    });
  } catch (error) {
    console.error('[Payment Links] Error:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor ao processar pagamento' },
      { status: 500 }
    );
  }
}
