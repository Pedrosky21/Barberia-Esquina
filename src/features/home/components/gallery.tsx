"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";

const images = [
    "hair_model.jpg",
    "hair_model2.jpg",
    "hair_model3.jpg",
    "hair_model4.jpg",
    "hair_model5.jpg",
    "hair_model6.jpg",
    "hair_model7.jpg",
    "hair_model8.jpg",
    "hair_model9.png",
    "hair_model11.jpg",
    "hair_model12.jpg",
    "hair_model13.jpg",
];

export default function Gallery() {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    return (
        <section id="galeria" ref={ref} className="min-h-[calc(100dvh-4rem)] w-full bg-white flex flex-col justify-center py-12 px-4 md:px-8 lg:px-16">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl text-primary font-serif mb-6 uppercase tracking-wide transform transition-all duration-1000 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                CORTES PARA TODO TIPO DE CABELLO
            </h2>
            <div className="w-full max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
                    {images.map((img, index) => (
                        <div 
                            key={index} 
                            className={`${index >= 6 ? 'hidden md:block' : ''} relative aspect-square w-full rounded-2xl overflow-hidden shadow-md group cursor-pointer transform transition-all duration-700 ease-out ${isInView ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${index * 75 + 100}ms` }}
                        >
                            <Image
                                src={`/images/gallery/${img}`}
                                alt={`Galería de cortes ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                            {/* Primary color overlay */}
                            <div className="absolute inset-0 bg-primary opacity-70 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
