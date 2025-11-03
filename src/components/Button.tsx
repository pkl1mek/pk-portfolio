import React from 'react';
import Image from 'next/image';

interface ButtonProps {
  content: string;
  iconName: string;
  radius: number;
}

export default function Button({ content, iconName, radius }: ButtonProps) {
  const radiusStyle = `rounded-[${radius}px]`;

  return (
    <button
      className={`
        w-full
        flex items-center justify-center
        gap-2.5 
        px-6 py-2 
        font-bold text-[20px] text-primary
        glass bg-glass-gradient
        transition-transform duration-200 hover:scale-105
        ${radiusStyle}
      `}
    >
      <Image
        src={`/icons/${iconName}`}
        alt={content}
        width={24} 
        height={24}
        className="object-contain"
      />
      <span>{content}</span>
    </button>
  );
}