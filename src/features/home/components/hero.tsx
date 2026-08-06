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
                    sizes="100vw"
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
                            href="https://wa.me/543515520115"
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
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="rounded-4xl object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}