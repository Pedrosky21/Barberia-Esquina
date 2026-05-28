import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[calc(100dvh-4rem)] w-full overflow-hidden">
            {/* Background and Overlay Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/barber_hero_background.jpg"
                    alt="Barbería"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center md:justify-start h-full px-6 md:px-12 w-full">
                <div className="w-full md:w-2/5 space-y-8 md:space-y-12 text-center md:text-left flex flex-col items-center md:items-start">
                    <div>
                        <h2 className="text-5xl md:text-6xl text-primary font-display animate-blur-appear">VERSE BIEN</h2>
                        <h2 className="text-5xl md:text-6xl text-primary font-display font-italic animate-blur-appear animation-delay-200">También es parte.</h2>
                    </div>
                    <p className="text-lg md:text-xl animate-blur-appear animation-delay-400">Cortes modernos, atención personalizada y un lugar donde sentirse cómodo todos los días.</p>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start w-full sm:w-auto animate-blur-appear animation-delay-600">
                        <a
                            href="https://wa.me/543515183732"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-3.5 bg-primary text-white border-2 border-primary font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-200 shadow-[4px_4px_0px_0px_#D9E6EB] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer text-center"
                        >
                            <span>SACÁ TURNO</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        <a href="#servicios" className="group relative px-8 py-3.5 bg-white text-primary border-2 border-primary font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-200 shadow-[4px_4px_0px_0px_#0E2F3D] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
                            <span>VER SERVICIOS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="hidden md:block relative ml-12 lg:ml-40 ring-6 ring-primary h-96 w-80 rounded-4xl rotate-4 hover:rotate-0 transition-all duration-300 animate-blur-appear animation-delay-800">
                    <Image
                        src="/images/hero/barber_hero_image.avif"
                        alt="Barbería"
                        fill
                        className="rounded-4xl object-cover"
                        priority
                    />
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/543515183732"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20 p-2 group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white border-2 border-primary rounded-2xl shadow-[4px_4px_0px_0px_#0E2F3D] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 cursor-pointer active:scale-95"
                aria-label="Chat on WhatsApp"
            >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white" fill="currentColor"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </a>
        </section>
    );
}