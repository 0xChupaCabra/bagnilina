'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher({ currentLocale }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale) => {
    const currentPath = pathname.replace(/^\/(it|en)/, '');
    router.push(`/${locale}${currentPath}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLanguage('it')}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentLocale === 'it'
            ? 'bg-[#1e90ff] text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to Italian"
      >
        IT
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-md transition-colors ${
          currentLocale === 'en'
            ? 'bg-[#1e90ff] text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}