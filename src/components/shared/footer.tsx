import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-primary text-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                            <Image src="/images/logo/logo.png" alt="Esquina Studio Logo" fill sizes="48px" className="object-cover" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Esquina Studio</span>
                    </Link>
                    <p className="opacity-80 text-center md:text-left text-sm max-w-xs">
                        Tu barbería de confianza. Estilo, profesionalismo y el mejor ambiente.
                    </p>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <h4 className="font-serif text-xl uppercase tracking-widest">Navegación</h4>
                    <nav className="flex flex-col space-y-2 text-center opacity-80">
                        <Link href="#servicios" className="hover:text-white hover:opacity-100 transition-opacity">Servicios</Link>
                        <Link href="#galeria" className="hover:text-white hover:opacity-100 transition-opacity">Galería</Link>
                        <Link href="#studio" className="hover:text-white hover:opacity-100 transition-opacity">Studio</Link>
                    </nav>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-4">
                    <h4 className="font-serif text-xl uppercase tracking-widest">Contacto</h4>
                    <div className="flex flex-col space-y-2 text-center md:text-right opacity-80 text-sm">
                        <p>Av. Siempre Viva 742</p>
                        <p>Tel: 3515520115</p>
                        <p>@esquinastudio</p>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-60">
                <p>&copy; {new Date().getFullYear()} Esquina Studio. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
