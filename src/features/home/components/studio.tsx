"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

const reasons = [
    { type: "reason", number: "1", title: "Atención al detalle", description: "Ambiente cómodo y buena onda desde que entras.", bgImage: "/images/studio/attention.webp" },
    { type: "reason", number: "2", title: "Estilo", description: "Asesoramiento personalizado para encontrar tu mejor versión.", bgImage: "/images/studio/style.webp" },
    { type: "logo" },
    { type: "reason", number: "3", title: "Productos", description: "Utilizamos líneas de primera calidad para cuidar tu cabello.", bgImage: "/images/studio/equipment.webp" },
    { type: "reason", number: "4", title: "Ambiente", description: "Un espacio pensado para tu comodidad y relax absoluto.", bgImage: "/images/studio/ambience.webp" },
    { type: "cta" },
];

export default function Studio() {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section id="studio" ref={ref} className="min-h-[calc(100dvh-4rem)] w-full bg-white flex flex-col justify-center py-16 px-4 md:px-8 lg:px-16">
            <h2 className={`text-4xl md:text-5xl lg:text-7xl text-primary font-serif mb-12 uppercase tracking-wide transform transition-all duration-1000 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                POR QUÉ NOS ELIGEN
            </h2>
            <div className="w-full max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {reasons.map((item, index) => {
                        const animationClass = `transform transition-all duration-700 ease-out ${isInView ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"}`;
                        const delayStyle = { transitionDelay: `${index * 100 + 100}ms` };

                        if (item.type === "logo") {
                            return (
                                <div key={index} className={`hidden md:flex relative aspect-square rounded-4xl overflow-hidden w-full items-center justify-center ${animationClass}`} style={delayStyle}>
                                    <div className="relative w-full h-full opacity-90 hover:scale-105 transition-transform duration-500">
                                        <Image
                                            src="/images/logo/logo.png"
                                            alt="Esquina Studio Logo"
                                            fill
                                            className="object-contain drop-shadow-xl"
                                        />
                                    </div>
                                </div>
                            );
                        }

                        if (item.type === "cta") {
                            return (
                                <div key={index} className={`relative aspect-square w-full rounded-4xl overflow-hidden shadow-md bg-primary flex flex-col items-center justify-center p-6 md:p-8 text-white text-center hover:-translate-y-2 hover:shadow-xl ${animationClass}`} style={delayStyle}>
                                    <h3 className="text-2xl md:text-4xl font-serif mb-8 uppercase">¿Listo para un cambio?</h3>
                                    <a
                                        href="https://wa.me/543515183732"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative px-8 py-3 bg-white text-primary border-2 border-white font-bold uppercase tracking-widest text-sm rounded-xl transition-all duration-200 shadow-[4px_4px_0px_0px_#D9E6EB] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer mt-2 text-center"
                                    >
                                        <span>SACÁ TURNO</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            );
                        }

                        return (
                            <div key={index} className={`relative aspect-square w-full rounded-4xl overflow-hidden shadow-md p-6 flex flex-col justify-between text-white group hover:-translate-y-2 hover:shadow-xl bg-primary ${animationClass}`} style={delayStyle}>
                                {item.bgImage && (
                                    <>
                                        <Image
                                            src={item.bgImage}
                                            alt={item.title || "Razón"}
                                            fill
                                            className={`object-cover group-hover:scale-110 transition-all duration-1000 ease-in-out ${isInView ? "opacity-100" : "opacity-0"}`}
                                            style={{ transitionDelay: `${index * 150 + 700}ms` }}
                                        />
                                        <div className="absolute inset-0 bg-primary/75 group-hover:bg-primary/60 transition-colors duration-500 pointer-events-none" />
                                    </>
                                )}
                                <div className="relative z-10 flex justify-end w-full">
                                    <span className="text-4xl md:text-5xl font-serif opacity-60 font-bold">{item.number}</span>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-lg md:text-2xl font-bold mb-2 uppercase tracking-wide">{item.title}</h3>
                                    <p className="text-lg opacity-90 leading-relaxed font-sans">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
