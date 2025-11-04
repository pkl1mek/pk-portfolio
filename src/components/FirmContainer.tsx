import React from 'react';
import Image from 'next/image';

interface FirmContainerProps {
  logoSrc: string;
  logoAlt: string;
  jobTitle: string;
  workDuration: string;
}

export default function FirmContainer({ 
  logoSrc, 
  logoAlt, 
  jobTitle, 
  workDuration 
}: FirmContainerProps) {
  return (
    <div 
      className="
        glass 
        flex items-center 
        gap-2.5 
        px-4 py-2 
        rounded-[36px]
        h-20
      "
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={60}
        height={60}
        className="rounded-[36px] object-cover"
      />
      <div className="flex flex-col gap-2.5">
        <p className="text-[20px] font-bold text-primary">
          {jobTitle}
        </p>
        <p className="text-[17px] font-medium text-primary neon neon-green">
          {workDuration}
        </p>
      </div>
    </div>
  );
}