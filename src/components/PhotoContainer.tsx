import Image from 'next/image';

export default function PhotoContainer() {
  return (
    <div 
      className="
        flex flex-col items-center 
        gap-2.5 p-4 
        bg-glass-gradient glass 
        rounded-[36px]
        max-w-[362px]
        max-h-[419px]
      "
    >
      <Image
        src="/profilepicture.png"
        alt="Zdjęcie profilowe Patryk Klimek"
        className="object-cover"
        width={300}
        height={300}
      />
      <p className="text-[35px] font-bold text-primary">
        Patryk Klimek
      </p>
    </div>
  );
}