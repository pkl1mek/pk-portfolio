import Image from 'next/image';

interface IconLinkProps {
  href: string;
  iconName: string;
  ariaLabel: string;
}

export default function IconLink({ href, iconName, ariaLabel }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="
        w-9 h-9
        lg:w-12 lg:h-12
        flex items-center justify-center
        transition-all duration-300
        hover:neon hover:neon-green
      "
    >
      <Image
        src={`/icons/${iconName}`}
        alt={ariaLabel}
        width={36}
        height={36}
        className="object-contain"
      />
    </a>
  );
}