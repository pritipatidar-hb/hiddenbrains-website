import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline";

import { HeroSlide, SiteConfig } from "@/types/components/HomeView";
import { HeroSectionProps } from '@/types/components/home/Hero';



export const HeroSection = ({ slides, siteConfig }: HeroSectionProps) => {
    // Note: This is now a static version without auto-play slider as per pure SSR requirements
    const slide = slides[0];
    return (
        <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
            <div className="absolute inset-0">
                <Image src={slide.image} alt="Hero Background" fill priority className="object-cover" sizes="100vw" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 pt-16 sm:pt-0 text-white">
                <div className="max-w-4xl mx-auto w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white font-extrabold leading-[1.2] sm:leading-[1.1] mb-4 sm:mb-6 drop-shadow-lg px-2 sm:px-0">
                        {slide.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 text-center leading-relaxed font-medium px-2 sm:px-0">
                        {slide.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-center flex-wrap w-full px-2 sm:px-0">
                        <Link href={slide.link} className="w-full sm:w-auto bg-[#f39223] text-white px-8 py-3.5 sm:py-3 rounded-md font-bold text-[15px] sm:text-sm uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-white hover:text-[#f39223] hover:scale-105 shadow-xl flex items-center justify-center text-center">
                            Let&apos;s Explore
                        </Link>
                        <div className="flex items-center gap-3 sm:gap-4 group justify-center w-full sm:w-auto">
                            <div className="bg-white w-[36px] sm:w-[40px] h-[36px] sm:h-[40px] p-2 sm:p-2.5 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                                <PhoneIcon className="w-4 sm:w-5 h-4 sm:h-5 text-[#f39223]" />
                            </div>
                            <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-white font-bold text-lg sm:text-xl md:text-xl hover:text-[#f39223] transition-colors tracking-tight">
                                {siteConfig.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
