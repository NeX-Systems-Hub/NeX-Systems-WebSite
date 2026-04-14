import { create } from 'zustand';
import { type Locale, type Translations, translations } from '@/lib/i18n';

interface LanguageStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: () => Translations;
}

const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return 'en';
  const stored = localStorage.getItem('nex-locale');
  if (stored && ['pt', 'en', 'es', 'fr'].includes(stored)) return stored as Locale;
  const browserLang = navigator.language.slice(0, 2);
  if (['pt', 'en', 'es', 'fr'].includes(browserLang)) return browserLang as Locale;
  return 'en';
};

export const useLanguage = create<LanguageStore>((set, get) => ({
  locale: 'en', // default, will be hydrated
  setLocale: (locale: Locale) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nex-locale', locale);
    }
    set({ locale });
  },
  t: () => translations[get().locale],
}));

// Hook to initialize locale on client side
export const useInitLanguage = () => {
  const setLocale = useLanguage((s) => s.setLocale);
  const locale = useLanguage((s) => s.locale);

  if (typeof window !== 'undefined' && locale === 'en') {
    const initial = getInitialLocale();
    if (initial !== 'en') {
      setLocale(initial);
    }
  }
};
