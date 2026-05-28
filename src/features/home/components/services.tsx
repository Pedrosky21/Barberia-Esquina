"use client";

import Image from "next/image";
import { ScissorsIcon, BrushIcon, BeardIcon, EyebrowIcon } from "@/components/shared/icons";
import { useInView } from "@/hooks/use-in-view";

const servicesList = [
    { name: "Corte masculino", price: "$12.000", icon: ScissorsIcon },
    { name: "Coloración", price: "$25.000", icon: BrushIcon },
    { name: "Barba", price: "$5.000", icon: BeardIcon },
    { name: "Perfilado de cejas", price: "$2.000", icon: EyebrowIcon },
];

export default function Services() {
    const { ref, isInView } = useInView();

    return (
        <section id="servicios" className="md:min-h-[calc(100dvh-4rem)] w-full overflow-hidden bg-primary pt-10 pb-16 md:pb-0">
            <div className="h-full w-full flex flex-col md:flex-row gap-10">
                <div className="hidden md:block w-1/2 relative">
                    <Image
                        src="/images/services/haircut.png"
                        alt="cut"
                        fill
                        className="object-cover"
                    />
                </div>
                <div ref={ref} className="w-full md:w-1/2 flex flex-col justify-center px-6 py-8 md:p-16">
                    <h2 className={`text-center text-white font-serif text-6xl md:text-[10rem] mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                        Servicios
                    </h2>
                    <ul className="flex ml-0 md:ml-8 flex-col gap-8 text-white">
                        {servicesList.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <li
                                    key={index}
                                    className={`flex justify-between items-end border-b border-white pb-4 transform transition-all duration-700 ease-out ${isInView ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"}`}
                                    style={{ transitionDelay: `${index * 150 + 200}ms` }}
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white/80" />
                                        <span className="text-3xl md:text-4xl font-serif">{service.name}</span>
                                    </div>
                                    <span className="text-2xl md:text-3xl font-display">{service.price}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}