"use client";

import { useInView } from "@/hooks/use-in-view";

const StarIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const reviews = [
    { name: "Juan Pérez", text: "Excelente atención y el mejor corte que me han hecho. El ambiente es increíble." },
    { name: "Martín Gómez", text: "Muy profesionales. Fui por primera vez y ya tienen un cliente fijo. 100% recomendados." },
    { name: "Lucas Rodríguez", text: "Lugar impecable, te atienden a horario y usan productos de primera calidad." }
];

export default function Reviews() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section ref={ref} className="w-full bg-secondary/30 py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-screen-xl mx-auto">
                <h2 className={`text-3xl md:text-5xl text-primary font-serif mb-16 text-center uppercase transform transition-all duration-1000 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                    Lo que dicen nuestros clientes
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {reviews.map((review, i) => (
                        <div 
                            key={i} 
                            className={`flex flex-col items-center text-center space-y-6 p-8 transform transition-all duration-700 ease-out ${isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
                            style={{ transitionDelay: `${i * 200 + 200}ms` }}
                        >
                            <div className="flex gap-1 text-primary">
                                {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-5 h-5" />)}
                            </div>
                            <p className="text-lg md:text-xl font-serif text-primary/80 italic leading-relaxed">
                                "{review.text}"
                            </p>
                            <span className="text-sm font-bold tracking-widest uppercase text-primary">
                                {review.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
