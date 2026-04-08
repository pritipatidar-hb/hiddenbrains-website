import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";

import { Award } from "@/types/components/HomeView";
import { AwardsSectionProps } from '@/types/components/home/AwardsSection';



export const AwardsSection = ({ subtitle, title, description, awards }: AwardsSectionProps) => {
    return (
        <section className="py-8 md:py-10 bg-white overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 text-center">
                <div className="text-[#f49b1e] font-bold tracking-widest mb-3 md:mb-4 uppercase text-xs">{subtitle}</div>
                <h2 className="text-2xl md:text-[36px] font-[600] text-[#14133b] mb-4 md:mb-[18px] leading-tight max-w-2xl mx-auto">{title}</h2>
                <p className="text-gray-500 max-w-5xl mx-auto leading-relaxed text-sm md:text-[16px] font-[400] text-[#6a7c92] mb-10 md:mb-16 text-center">{description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-16">
                    {awards.map((award, index) => (
                        <div key={index} className="group relative flex flex-col items-center text-center bg-[#f9f9f9] rounded-2xl p-6 md:p-[35px] border border-gray-100">
                            <div className="relative w-full aspect-square mb-4 md:mb-6 overflow-hidden flex items-center justify-center">
                                <Image src={award.image} alt={award.title} fill className="object-contain" />
                            </div>
                            <div className="flex flex-col flex-grow"><div className="text-xs md:text-sm font-medium  text-[#6a7c92] leading-relaxed">{award.title}: <strong className="font-bold">{award.subtitle}</strong></div></div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <Button href="/awards-accolades" variant="primary" size="lg" className="inline-flex items-center !text-white font-bold rounded-lg shadow-sm text-sm md:text-base">View Our Awards</Button>
                </div>
            </div>
        </section>
    );
};
