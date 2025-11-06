import Link from 'next/link';
import React from 'react';

interface HeaderButtonProps {
  href: string;
  text: string;
}

export default function HeaderButton({ href, text }: HeaderButtonProps) {
  return (
    <Link
      href={href}
      className="
        group relative inline-block py-2
        font-bold text-primary
        transition-colors duration-300
        hover:neon hover:neon-green
        text-2xl  xl:text-[29px]
      "
    >
      {text}
      <span 
        className="
          absolute bottom-0 left-0 block h-[3px] w-full 
          transform scale-x-0 group-hover:scale-x-75 
          transition-transform duration-300 ease-in-out
          origin-left
          bg-white neon neon-green
        "
      />
    </Link>
  );
}