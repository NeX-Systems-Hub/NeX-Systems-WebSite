'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '@/components/nex/navbar';
import { Hero } from '@/components/nex/hero';
import { Services } from '@/components/nex/services';
import { FeaturedProduct } from '@/components/nex/featured-product';
import { DigitalVault } from '@/components/nex/digital-vault';
import { EnterpriseSolutions } from '@/components/nex/enterprise-solutions';
import { Support } from '@/components/nex/support';
import { Footer } from '@/components/nex/footer';
import { AIChat } from '@/components/nex/ai-chat';
import { LegalModals } from '@/components/nex/legal-modals';
import { MatrixBackground } from '@/components/nex/matrix-bg';
import { DevFormModal } from '@/components/nex/dev-form-modal';

type LegalPage = 'terms' | 'privacy' | 'refund' | 'shipping';

const hashToPage: Record<string, LegalPage> = {
  terms: 'terms',
  privacy: 'privacy',
  refunds: 'refund',
  delivery: 'shipping',
};

export default function Home() {
  const [legalPage, setLegalPage] = useState<LegalPage | null>(null);

  // Dev Form Modal State
  const [isDevFormOpen, setIsDevFormOpen] = useState(false);
  const [selectedSolutionId, setSelectedSolutionId] = useState('');
  const [selectedSolutionName, setSelectedSolutionName] = useState('');

  // Handle hash-based routing for legal pages (#terms, #privacy, #refunds, #delivery)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const page = hashToPage[hash];
      if (page) {
        setLegalPage(page);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openLegalPage = (page: LegalPage) => {
    setLegalPage(page);
    const hashMap: Record<LegalPage, string> = {
      terms: 'terms',
      privacy: 'privacy',
      refund: 'refunds',
      shipping: 'delivery',
    };
    window.location.hash = hashMap[page];
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeLegalPage = () => {
    setLegalPage(null);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleOpenDevForm = (solutionId: string, solutionName: string) => {
    setSelectedSolutionId(solutionId);
    setSelectedSolutionName(solutionName);
    setIsDevFormOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDevForm = () => {
    setIsDevFormOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen flex flex-col bg-nex-dark relative">
      {/* Animated Matrix Background */}
      <MatrixBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-1">
        <Hero />
        <Services />
        <FeaturedProduct />
        <DigitalVault />
        <EnterpriseSolutions onOpenDevForm={handleOpenDevForm} />
        <Support />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={openLegalPage} />

      {/* AI Chat */}
      <AIChat />

      {/* Legal Modals */}
      <LegalModals
        openPage={legalPage}
        onClose={closeLegalPage}
      />

      {/* Dev Form Modal */}
      <DevFormModal
        isOpen={isDevFormOpen}
        onClose={handleCloseDevForm}
        solutionId={selectedSolutionId}
        solutionName={selectedSolutionName}
      />
    </div>
  );
}
