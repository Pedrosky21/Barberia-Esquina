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
          <Link href="#servicios" className="relative py-1 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
            Servicios
          </Link>
          <Link href="#galeria" className="relative py-1 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
            Galería
          </Link>
          <Link href="#studio" className="relative py-1 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
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
