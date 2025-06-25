'use client';

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation({ translations, locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href={`/${locale}`} className="text-2xl font-bold text-[#1e90ff]">
            Bagni Lina
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${locale}#home`} className="text-gray-700 hover:text-[#1e90ff] transition-colors">
              {translations.nav.home}
            </Link>
            <Link href={`/${locale}#services`} className="text-gray-700 hover:text-[#1e90ff] transition-colors">
              {translations.nav.services}
            </Link>
            <Link href={`/${locale}#gallery`} className="text-gray-700 hover:text-[#1e90ff] transition-colors">
              {translations.nav.gallery}
            </Link>
            <Link href={`/${locale}#contact`} className="text-gray-700 hover:text-[#1e90ff] transition-colors">
              {translations.nav.contact}
            </Link>
            <LanguageSwitcher currentLocale={locale} />
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href={`/${locale}#home`} 
                className="text-gray-700 hover:text-[#1e90ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.nav.home}
              </Link>
              <Link 
                href={`/${locale}#services`} 
                className="text-gray-700 hover:text-[#1e90ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.nav.services}
              </Link>
              <Link 
                href={`/${locale}#gallery`} 
                className="text-gray-700 hover:text-[#1e90ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.nav.gallery}
              </Link>
              <Link 
                href={`/${locale}#contact`} 
                className="text-gray-700 hover:text-[#1e90ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations.nav.contact}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher currentLocale={locale} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}