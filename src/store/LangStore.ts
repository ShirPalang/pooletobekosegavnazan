import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../i18n';

export type Language = 'fa' | 'en' | 'de';

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: (i18n.language as Language) || 'fa',
      setLanguage: (lang) => {
        i18n.changeLanguage(lang);
        set({ language: lang });
      },
    }),
    {
      name: 'language-storage',
      onRehydrateStorage: () => (state) => {
        if (state?.language && i18n.language !== state.language) {
          i18n.changeLanguage(state.language);
        }
      }
    }
  )
);