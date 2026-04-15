import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const WEBHOOK_SECRET = process.env.NEXFLOWX_WEBHOOK_SECRET || '';

/**
 * POST /api/webhook/nexflowx
 * Receives payment confirmation webhooks from NeXFlowX.
 * Validates HMAC-SHA256 signature and processes the payload.
 */
export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-nexflowx-signature');

    // Validate signature if secret is configured
    if (WEBHOOK_SECRET && signature) {
      const expectedSignature = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(rawBody)
        .digest('hex');

      if (!crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
      )) {
        console.warn('[Webhook] Invalid HMAC signature');
        return NextResponse.json(
          { error: 'Invalid signature' },
          { status: 401 }
        );
      }
    } else if (!WEBHOOK_SECRET) {
      console.warn('[Webhook] No NEXFLOWX_WEBHOOK_SECRET configured - skipping signature validation');
    }

    const payload = JSON.parse(rawBody);

    console.log('[Webhook] Received event:', payload.event);
    console.log('[Webhook] Transaction ID:', payload.transaction_id);
    console.log('[Webhook] Amount:', payload.amount, payload.currency);
    console.log('[Webhook] Metadata:', JSON.stringify(payload.customer_details || payload.metadata));

    // Handle the payment confirmation event
    if (payload.event === 'payment.gateway_confirmed') {
      // Process the confirmed payment
      const transactionData = {
        event: payload.event,
        transaction_id: payload.transaction_id,
        store_id: payload.store_id,
        amount: payload.amount,
        net_amount: payload.net_amount,
        method: payload.method,
        currency: payload.currency,
        country: payload.country,
        customer_email: payload.customer_email,
        logistics_status: payload.logistics_status,
        customer_details: payload.customer_details,
        metadata: payload.metadata,
        received_at: new Date().toISOString(),
      };

      // Here you would typically:
      // 1. Store in database (Prisma)
      // 2. Send notification email to the team
      // 3. Trigger any post-payment workflows
      // 4. Update project status

      console.log('[Webhook] Payment confirmed successfully:', JSON.stringify(transactionData));

      // TODO: Uncomment and customize database storage when Prisma schema is ready
      // await db.customDevProject.create({
      //   data: {
      //     transactionId: payload.transaction_id,
      //     projectName: payload.metadata?.project_name || payload.customer_details?.project_name,
      //     details: payload.metadata?.details || payload.customer_details?.details,
      //     meetingDate: payload.metadata?.meeting_date,
      //     contact: payload.metadata?.contact,
      //     solutionId: payload.metadata?.solution_id,
      //     solutionName: payload.metadata?.solution_name,
      //     amount: parseFloat(payload.amount),
      //     currency: payload.currency,
      //     method: payload.method,
      //     status: 'confirmed',
      //   },
      // });
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[Webhook] Error processing webhook:', error);
    // Still return 200 to prevent retry storms
    return NextResponse.json({ received: true, error: 'Processing error' });
  }
}

// Optional: GET for webhook verification/testing
export async function GET() {
  return NextResponse.json({
    status: 'Webhook endpoint active',
    endpoint: '/api/webhook/nexflowx',
    configured: !!WEBHOOK_SECRET,
  });
}
