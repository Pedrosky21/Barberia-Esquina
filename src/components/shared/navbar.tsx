import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Logo and Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/logo.png"
            alt="Esquina Studio Logo"
            width={40}
            height={40}
            className="rounded-2xl object-cover"
          />
          <span className="text-xl font-bold tracking-tight">Esquina Studio</span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#servicios" className="transition-colors hover:text-primary/80">
            Servicios
          </Link>
          <Link href="#galeria" className="transition-colors hover:text-primary/80">
            Galería
          </Link>
          <Link href="#studio" className="transition-colors hover:text-primary/80">
            Studio
          </Link>
        </nav>

        {/* Right: Button */}
        <div className="flex items-center">
          <a
            href="https://wa.me/543515183732"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-5 py-2.5 bg-primary text-white border-2 border-primary font-bold uppercase tracking-widest text-xs rounded-xl transition-all duration-200 hover:bg-white hover:text-primary active:scale-[0.98] cursor-pointer text-center"
          >
            SACÁ TURNO
          </a>
        </div>
      </div>
    </header>
  );
}
