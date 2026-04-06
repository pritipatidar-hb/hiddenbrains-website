import React from "react";
import { IconMap } from "./Icons";
import Link from "next/link";
import { Project, Service } from "@/types/components/HomeView";
import { ServicesSectionProps } from '@/types/components/home/ServicesSection';

export const ServiceCard = ({ icon, title, description, iconBgColor, iconColor, accentColor, id, link }: Service) => {
    const Icon = (IconMap as any)[icon];
    return (
        <Link
            href={link || "#"}
            className="bg-white p-6 md:pt-[25px] md:px-[25px] md:pb-[25px] min-h-[220px] my-3 md:mt-[15px] md:mb-[15px] rounded-[4px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left relative overflow-hidden hover:-translate-y-2 block"
        >
            {/* Icon Container - Fades out and height shrinks on hover */}
            <div className={`flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0 mb-4 md:mb-[15px] w-14 h-14 md:w-[65px] md:h-[65px] rounded-full ${iconBgColor}`}>
                <div className={`w-7 h-7 md:w-[32px] md:h-[32px] flex items-center justify-center ${iconColor}`}>
                    {Icon ? <Icon /> : null}
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-[600] text-[#14133b] mb-2 md:mb-[8px] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-4 md:mb-[15px] text-sm md:text-[14px] font-[400] text-[#6a7c92] font-sans line-clamp-3">
                {description}
            </p>

            {/* Explore Button - Fades in  and slides up on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 h-0 group-hover:h-6 overflow-hidden">
                <span className="text-[11px] md:text-[12px] font-bold tracking-wider text-[#14133b]">EXPLORE</span>
                <div className={`w-8 h-[2px] ${accentColor}`} />
            </div>

            {/* Bottom accent bar */}
            <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 ${accentColor}`} />
        </Link>
    );
};



export const ServicesSection = ({ title, services }: ServicesSectionProps) => {
    return (
        <section className="pt-12 md:pt-16 sm:pt-32 pb-8 md:pb-10 bg-white overflow-hidden text-[#14133b]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-[12px] md:mb-[18px] leading-tight">{title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => <ServiceCard key={index} {...service} />)}
                </div>
            </div>
        </section>
    );
};
