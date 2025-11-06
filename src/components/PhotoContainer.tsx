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
        flex-shrink-0
      "
    >
      <Image
        src="/profilepicture.png"
        alt="Zdjęcie profilowe Patryk Klimek"
        className="object-cover rounded-[36px]"
        width={300}
        height={300}
      />
      <p className="font-bold text-primary sm:text-[29px] lg:text-[35px] ">
        Patryk Klimek
      </p>
    </div>
  );
}