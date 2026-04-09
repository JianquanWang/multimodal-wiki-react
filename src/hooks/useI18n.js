import { useState, useCallback } from 'react';
import { T } from '../i18n/translations';

export function useI18n() {
  const [lang, setLang] = useState('cn'); // 'cn' | 'en'
  const L = { CN: 'cn', EN: 'en' };

  const t = useCallback((cnKey, enKey) => lang === 'cn' ? T[cnKey] : T[enKey], [lang]);
  const toggleLang = useCallback(() => setLang(l => l === 'cn' ? 'en' : 'cn'), []);

  return { lang, setLang, t, toggleLang, L, isCN: lang === 'cn' };
}
