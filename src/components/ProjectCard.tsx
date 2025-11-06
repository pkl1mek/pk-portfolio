import React from 'react';
import Image from 'next/image';
import ProjectTag from './ProjectTag';
import Button from './Button';

interface ProjectCardProps {
  type: string;
  color: string;
  title: string;
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({
  type,
  color,
  title,
  imageUrl,
  projectUrl
}: ProjectCardProps) {
  return (
    <div
      className="
        glass
        flex flex-col gap-2.5
        px-6 py-4 rounded-[36px]
        w-full lg:w-[500px]
        flex-shrink-0
      "
    >
      <ProjectTag text={type} color={color} />
      
      <h3 className="font-bold text-primary mt-1 text-[29px] lg:text-[24px] xl:text-[35px]">
        {title}
      </h3>
      
      <div className="relative w-full h-64 rounded-[12px] overflow-hidden my-4">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="block">
        <Button
          content="Zobacz projekt"
          iconName="certificates.svg" 
          radius={36}
        />
      </a>
    </div>
  );
}