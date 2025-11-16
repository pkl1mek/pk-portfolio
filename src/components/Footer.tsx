"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconLink from './IconLink';
import { useTranslations } from '@/hooks/useTranslations';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer id="contact" className="w-full bg-[#2C2F37] py-9 mt-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:items-stretch">
          <div className="flex flex-col justify-between gap-8 h-full lg:max-w-1/2">
            <Link href="/">
              <div className="relative h-20 w-20">
                <Image
                  src="/logo.svg" 
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="font-normal text-primary text-[20px] lg:text-[17px] xl:text-[24px]">
              {t('description')}
            </p>

            <div className="flex items-center gap-6">
              <IconLink 
                href="https://github.com/pkl1mek"
                ariaLabel="Mój profil GitHub"
                iconName="github.svg" 
              />
              <IconLink 
                href="https://www.linkedin.com/in/patryk-klimek-215993362"
                ariaLabel="Mój profil LinkedIn"
                iconName="linkedin.svg"
              />
              <IconLink 
                href="mailto:pk.pkprojects@gmail.com"
                ariaLabel="Napisz do mnie e-mail"
                iconName="mail.svg"
              />
              <IconLink 
                href="tel:+48792939551"
                ariaLabel="Zadzwoń do mnie"
                iconName="phone.svg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 h-full">
            <h3 className="font-bold text-primary text-[24px] lg:text-[24px] xl:text-[29px]">
              {t('contactTitle')}
            </h3>

            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-primary text-[20px] lg:text-[17px] xl:text-[24px]">
                {t('projectsTitle')}
              </h4>
              <a href="mailto:pk.pkprojects@gmail.com" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  pk.pkprojects@gmail.com
                </span>
              </a>
              <a href="tel:+48792939551" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/phone.svg" alt="Phone" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  +48 792 939 551
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-primary text-[20px] lg:text-[17px] xl:text-[24px]">
                {t('privateTitle')}
              </h4>
              <a href="mailto:pk.pklimek@gmail.com" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  pk.pklimek@gmail.com
                </span>
              </a>
              <a href="tel:+48792939551" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/phone.svg" alt="Phone" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  +48 792 939 551
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full mt-12 lg:mt-0 flex items-center gap-2">
          <FaRegCopyright className="text-primary/60" />
          <p className="text-primary/60 text-sm">
            Copyright Patryk Klimek
          </p>
        </div>
      </div>
    </footer>
  );
}