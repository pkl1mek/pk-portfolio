"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from './HeaderButton';
import IconLink from './IconLink';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from '@/hooks/useTranslations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  
  const { language, setLanguage } = useLanguage();
  const t = useTranslations('Header');

  useEffect(() => {
    if (isMenuOpen) {
      setAnimationClass('animate-slide-in-right');
      document.body.style.overflow = 'hidden';
    } else if (animationClass) {
      setAnimationClass('animate-slide-out-right');
      const timer = setTimeout(() => {
        setAnimationClass('');
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <header className="w-full py-9 relative z-30">
      <nav className="flex items-center justify-between">
        <Link href="/" onClick={handleLinkClick}>
          <div className="relative h-20 w-20">
            <Image
              src="/logo.svg" 
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-12 lg:gap-20">
          <li>
            <HeaderButton href="#about-me" text={t('o-mnie')} />
          </li>
          <li>
            <HeaderButton href="#portfolio" text={t('portfolio')} />
          </li>
          <li>
            <HeaderButton href="#contact" text={t('kontakt')} />
          </li>
          <li>
            <button
              onClick={toggleLanguage}
              className="
                group relative inline-block py-2
                font-bold text-primary
                transition-colors duration-300
                hover:neon hover:neon-green
                text-2xl  xl:text-[29px]
              "
            >
              {t('toggle')}
              <span 
                className="
                  absolute bottom-0 left-0 block h-[3px] w-full 
                  transform scale-x-0 group-hover:scale-x-75 
                  transition-transform duration-300 ease-in-out
                  origin-left
                  bg-white neon neon-green
                "
              />
            </button>
          </li>
        </ul>

        <button
          className="lg:hidden z-50 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Otwórz lub zamknij menu"
        >
          {isMenuOpen ? <FaTimes size={32} /> : <FaBars size={32} />}
        </button>
      </nav>

      {(isMenuOpen || animationClass) && (
        <div 
          className={`
            fixed top-0 right-0 h-full w-full
            flex flex-col items-start
            bg-[#2C2F37]
            p-6 lg:hidden
            transform translate-x-full
            z-40
            ${animationClass}
          `}
        >
          <div className="w-full flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary">Menu</h2>
          </div>

          <div className="flex flex-col items-start gap-8 pl-4">
            <ul className="flex flex-col items-start gap-8">
              <li>
                <HeaderButton href="#about-me" text={t('o-mnie')} onClick={handleLinkClick} />
              </li>
              <li>
                <HeaderButton href="#portfolio" text={t('portfolio')} onClick={handleLinkClick} />
              </li>
              <li>
                <HeaderButton href="#contact" text={t('kontakt')} onClick={handleLinkClick} />
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleLanguage();
                    handleLinkClick();
                  }}
                  className="
                    group relative inline-block py-2
                    font-bold text-primary
                    transition-colors duration-300
                    hover:neon hover:neon-green
                    text-2xl
                  "
                >
                  {t('toggle')}
                  <span 
                    className="
                      absolute bottom-0 left-0 block h-[3px] w-full 
                      transform scale-x-0 group-hover:scale-x-75 
                      transition-transform duration-300 ease-in-out
                      origin-left
                      bg-white neon neon-green
                    "
                  />
                </button>
              </li>
            </ul>

            <div className="w-full h-[2px] bg-primary neon neon-green my-4" />
            
            <div className="flex items-center w-full justify-between gap-12">
              <IconLink 
                href="https://github.com/pkl1mek"
                ariaLabel="Mój profil GitHub"
                iconName="github.svg" 
              />
              <IconLink 
                href="https://linkedin.com/in/twoj-profil"
                ariaLabel="Mój profil LinkedIn"
                iconName="linkedin.svg"
              />
              <IconLink 
                href="mailto:prywatny@example.com"
                ariaLabel="Napisz do mnie e-mail"
                iconName="mail.svg"
              />
              <IconLink 
                href="tel:+48123456789"
                ariaLabel="Zadzwoń do mnie"
                iconName="phone.svg"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}