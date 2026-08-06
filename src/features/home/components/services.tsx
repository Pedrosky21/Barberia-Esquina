"use client";

import Image from "next/image";
import { ScissorsIcon, BrushIcon, BeardIcon, EyebrowIcon } from "@/components/shared/icons";
import { useInView } from "@/hooks/use-in-view";

const servicesList = [
    {
        name: "Corte masculino",
        price: "$12.000",
        description: "Corte clásico o moderno adaptado a tu estilo y facciones.",
        icon: ScissorsIcon
    },
    {
        name: "Coloración",
        price: "$25.000",
        description: "Tinte, reflejos o matizado de canas con productos premium.",
        icon: BrushIcon
    },
    {
        name: "Barba",
        price: "$5.000",
        description: "Recorte, perfilado y afeitado tradicional con toalla caliente.",
        icon: BeardIcon
    },
    {
        name: "Perfilado de cejas",
        price: "$2.000",
        description: "Diseño y depilación precisa para definir y armonizar tu mirada.",
        icon: EyebrowIcon
    },
];

export default function Services() {
    const { ref, isInView } = useInView();

    return (
        <section id="servicios" className="md:min-h-[calc(100dvh-4rem)] w-full overflow-hidden bg-primary pt-10 pb-16 md:pb-0 flex items-center">
            <div className="h-full w-full flex flex-col md:flex-row gap-10">
                <div className="hidden md:block w-1/2 relative min-h-[calc(100dvh-4rem)]">
                    <Image
                        src="/images/services/haircut.png"
                        alt="cut"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>
                <div ref={ref} className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:p-12 lg:p-16">
                    <div className="max-w-2xl mx-auto md:mx-0 w-full">
                        <h2 className={`text-white font-serif text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-12 transition-all duration-500 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                            SERVICIOS
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {servicesList.map((service, index) => {
                                const Icon = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`group relative flex flex-col justify-between p-6 bg-white/5 border-2 border-white/10 rounded-2xl transition-all duration-200 hover:bg-white/10 hover:border-secondary hover:shadow-[6px_6px_0px_0px_#D9E6EB] hover:-translate-y-1 transform ${isInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                                        style={{ transitionDelay: `${index * 80}ms` }}
                                    >
                                        <div className="flex flex-col h-full justify-between gap-6">
                                            <div className="flex items-center justify-between">
                                                <div className="p-3 bg-secondary/10 text-secondary rounded-xl group-hover:bg-secondary group-hover:text-primary transition-all duration-200">
                                                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                                </div>
                                                <span className="text-2xl md:text-3xl font-display text-secondary font-bold group-hover:text-white transition-colors duration-200">{service.price}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-serif text-white mb-2 tracking-wide">{service.name}</h3>
                                                <p className="text-sm text-white/60 leading-relaxed font-sans group-hover:text-white/80 transition-colors duration-200">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}