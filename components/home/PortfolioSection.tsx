import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/components/HomeView";
import { PortfolioSectionProps } from '@/types/components/home/PortfolioSection';

export const PortfolioItem = ({ image, title, category, link }: Project) => (
    <Link
        href={link}
        className="group relative overflow-hidden bg-gray-100 aspect-[4/4] min-w-[260px] sm:min-w-[280px] md:min-w-[320px] snap-center flex-shrink-0 w-full sm:w-auto block"
    >
        <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-all duration-700 sm:grayscale sm:opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center pb-6 md:pb-8 px-4">
            <div className="bg-[#f49b1e] w-full py-3 md:py-4 px-3 text-center transform translate-y-0 sm:translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                <h5 className="text-white text-base md:text-xl font-bold uppercase mb-1">
                    {title}
                </h5>
                <p className="text-white/90 text-[10px] font-medium uppercase tracking-widest">
                    {category}
                </p>
            </div>
        </div>
    </Link>
);



export const PortfolioSection = ({ subtitle, title, description, projects }: PortfolioSectionProps) => {
    return (
        <section className="py-10 md:py-[50px] bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                <div className="py-6 md:py-10 bg-white">
                    <div className="max-w-screen-xl mx-auto text-center">
                        <div className="text-[#f29111] bg-[#f2ebe3] inline-flex rounded-[50px] py-1 px-3 font-[600] uppercase tracking-wider text-xs md:text-[13px] mb-3 md:mb-4" style={{ fontFamily: 'Roboto' }}>{subtitle}</div>
                        <h2 className="text-[26px] md:text-[36px] font-[600] text-[#14133b] mb-3 md:mb-[18px] mx-auto leading-tight">{title}</h2>
                        <p className="text-[#6a7c92] text-sm md:text-[19px] font-normal mx-auto leading-relaxed font-['Roboto']">{description} </p>
                    </div>
                </div>
                <div className="relative group/slider">
                    <div className="flex overflow-hidden no-scrollbar">
                        <div className="flex gap-4 md:gap-8 px-0 sm:px-4 animate-infinite-scroll hover:[animation-play-state:paused] w-full">
                            {[...projects, ...projects].map((project, index) => (
                                <PortfolioItem key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-[30px]">
                <Link href="/our-works" className="group flex items-center space-x-2 md:space-x-3 text-gray-900 font-bold hover:text-blue-600 transition-colors duration-300">
                    <span className="uppercase tracking-widest text-xs md:text-[13px] font-[500] text-[#14133b]">View Our Work</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <svg className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </div>
                </Link>
            </div>
        </section>
    );
};
