"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from './HeaderButton';
import IconLink from './IconLink';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

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
            <HeaderButton href="#o-mnie" text="o mnie" />
          </li>
          <li>
            <HeaderButton href="#portfolio" text="portfolio" />
          </li>
          <li>
            <HeaderButton href="#kontakt" text="kontakt" />
          </li>
          <li>
            <HeaderButton href="/en" text="english" />
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
            fixed top-0 right-0 h-full w-full py-14
            flex flex-col items-start
            bg-[#2C2F37]
            p-6 lg:hidden
            transform translate-x-full
            z-40
            ${animationClass}
          `}
        >
          <div className="w-full flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-primary">Menu</h2>
          </div>

          <div className="flex flex-col items-start gap-8 pl-4">
            <ul className="flex flex-col items-start gap-8">
              <li onClick={handleLinkClick}>
                <HeaderButton href="#o-mnie" text="o mnie" />
              </li>
              <li onClick={handleLinkClick}>
                <HeaderButton href="#portfolio" text="portfolio" />
              </li>
              <li onClick={handleLinkClick}>
                <HeaderButton href="#kontakt" text="kontakt" />
              </li>
              <li onClick={handleLinkClick}>
                <HeaderButton href="/en" text="english" />
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