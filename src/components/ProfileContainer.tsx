"use client";

import PhotoContainer from './PhotoContainer';
import IconLink from './IconLink';
import Image from 'next/image';
import { useTranslations } from '@/hooks/useTranslations';

export default function ProfileContainer() {
  const t = useTranslations('ProfileContainer');

  return (
    <div
      className="
      flex-shrink-0
        flex flex-col items-center
        gap-12
        max-w-[362px] xl:w-[362px]
      "
    >
      <PhotoContainer />

      <div className="w-full flex items-center justify-center gap-9">
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
          href="mailto:pk.pklimek@gmail.com"
          ariaLabel="Napisz do mnie e-mail"
          iconName="mail.svg"
        />
        <IconLink
          href="tel:+48792939551"
          ariaLabel="Zadzwoń do mnie"
          iconName="phone.svg"
        />
      </div>

      <a
        href="/certificates.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          w-full
          flex items-center justify-center
          gap-2.5 
          px-6 py-2 
          font-bold text-primary
          text-[20px] xl:text-2xl
          glass bg-glass-gradient
          transition-transform duration-200 hover:scale-105
          rounded-[36px]
        `}
      >
        <Image
          src="/icons/certificates.svg"
          alt="Certyfikaty"
          width={24} 
          height={24}
          className="object-contain"
        />
        <span>{t('certificatesButton')}</span>
      </a>
    </div>
  );
}