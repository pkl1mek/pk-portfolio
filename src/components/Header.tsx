import Image from 'next/image';
import Link from 'next/link';
import HeaderButton from './HeaderButton';

export default function Header() {
  return (
    <header className="w-full px-4 py-9 max-w-[1440px]">
        <div className="max-w-screen-xl mx-auto">
        <nav className="flex items-center justify-between">
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

            <ul className="flex items-center gap-20">
            <li>
                <HeaderButton href="#o-mnie" text="o mnie" />
            </li>
            <li>
                <HeaderButton href="#portfolio" text="portfolio" />
            </li>
            <li>
                <HeaderButton href="#kontakt" text="kontakt" />
            </li>
            <li>
                <HeaderButton href="/en" text="english" />
            </li>
            </ul>
        </nav>
        </div>
    </header>
  );
}