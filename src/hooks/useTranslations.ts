import { useLanguage } from '@/context/LanguageContext';
import pl from '@/translations/pl.json';
import en from '@/translations/en.json';

const translations = { pl, en };

type TranslationKeys = keyof typeof pl;

export function useTranslations(namespace: TranslationKeys) {
  const { language } = useLanguage();
  
  return (key: string) => {
    const ns = translations[language][namespace] as Record<string, string>;
    
    return ns[key] || key;
  };
}