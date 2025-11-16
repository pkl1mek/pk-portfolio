"use client";

import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

interface HeaderButtonProps {
  href: string;
  text: string;
  onClick?: () => void;
}

export default function HeaderButton({ href, text, onClick }: HeaderButtonProps) {
  
  if (!href.startsWith('#')) {
    return (
      <a href={href} className="">
        {text}
      </a>
    );
  }

  return (
    <ScrollLink
      to={href.substring(1)}
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      onClick={onClick}
      className="
        group relative inline-block py-2
        font-bold text-primary
        transition-colors duration-300
        hover:neon hover:neon-green
        text-2xl  xl:text-[29px]
        cursor-pointer
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
    </ScrollLink>
  );
}