import React from "react";
import Image from "next/image";
import { ClientLogosProps } from '@/types/components/home/ClientLogos';



export const ClientLogos = ({ logos }: ClientLogosProps) => {
    return (
        <section className="relative z-20 -mt-12 md:-mt-24 px-4 sm:px-6">
            <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-6 md:px-[15px] md:py-[25px]">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-6 md:gap-4">
                    {logos.map((logo, index) => (
                        <div key={index} className="group relative flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-105 px-2">
                            <Image
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                width={160}
                                height={80}
                                className="h-10 sm:h-12 md:h-[60px] lg:h-[80px] w-auto object-contain opacity-70 group-hover:opacity-100"
                                sizes="(max-width: 768px) 100px, 160px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
