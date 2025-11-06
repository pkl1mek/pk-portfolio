import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IconLink from './IconLink';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C2F37] py-9">
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
              Lorem ipsum dolor sit amet consectetur. Tristique nec elementum amet cras egestas eget libero cras tempus. Sagittis pulvinar etiam hac hendrerit. Amet vestibulum orci velit diam. Non pellentesque maecenas ullamcorper vestibulum.
            </p>

            <div className="flex items-center gap-6">
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
          <div className="flex flex-col justify-between gap-8 h-full">
            <h3 className="font-bold text-primary text-[24px] lg:text-[24px] xl:text-[29px]">
              Kontakt
            </h3>

            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-primary text-[20px] lg:text-[17px] xl:text-[24px]">
                Projekty / Zlecenia
              </h4>
              <a href="mailto:projekty@example.com" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  projekty@example.com
                </span>
              </a>
              <a href="tel:+48123456789" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/phone.svg" alt="Phone" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  +48 123 456 789
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <h4 className="font-bold text-primary text-[20px] lg:text-[17px] xl:text-[24px]">
                Prywatny
              </h4>
              <a href="mailto:prywatny@example.com" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  prywatny@example.com
                </span>
              </a>
              <a href="tel:+48987654321" className="flex items-center gap-2.5 text-primary/80 transition-colors hover:neon hover:neon-green">
                <Image src="/icons/phone.svg" alt="Phone" width={24} height={24} />
                <span className="font-normal text-[20px] lg:text-[17px] xl:text-[24px]">
                  +48 987 654 321
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}