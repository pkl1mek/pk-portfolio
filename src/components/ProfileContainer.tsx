import PhotoContainer from './PhotoContainer';
import IconLink from './IconLink';
import Image from 'next/image';

export default function ProfileContainer() {
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
          href="https://linkedin.com/in/twoj-profil"
          ariaLabel="Mój profil LinkedIn"
          iconName="linkedin.svg"
        />
        <IconLink
          href="mailto:twoj-email@example.com"
          ariaLabel="Napisz do mnie e-mail"
          iconName="mail.svg"
        />
        <IconLink
          href="tel:+48123456789"
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
          text-[20px] lg:text-sm xl:text-2xl
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
        <span>Certyfikaty</span>
      </a>
    </div>
  );
}