import React from "react";

export const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="bg-white border border-gray-100 rounded-lg p-5 md:p-[15px] my-3 md:mt-[15px] md:mb-[15px] shadow-sm hover:shadow-xl transition-all duration-300 group min-h-[220px] md:min-h-[250px]">
        <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 w-10 h-10 md:w-[41px] md:h-[41px]">
            {icon}
        </div>
        <h3 className="text-lg sm:text-xl md:text-[22px] font-bold md:font-[600] text-gray-900 my-2 md:mt-[10px] md:mb-[10px] group-hover:text-blue-600 transition-colors">
            {title}
        </h3>
        <p className="text-[#6a7c92] text-sm md:text-[14px] leading-relaxed font-medium mb-2 md:mb-[10px]">
            {description}
        </p>
    </div>
);

const RowOverlay = () => (
    <div className="mo-vc-row-ovelay pointer-events-none absolute inset-0 z-[1] opacity-50"></div>
);

import { HomeContent } from "@/types/components/HomeView";
import { AboutSectionProps } from '@/types/components/home/AboutSection';

export const AboutSection = ({ whoWeAre, whyChooseUs }: AboutSectionProps) => {
    return (
        <section className="relative py-12 lg:py-24 overflow-hidden bg-white">
            <RowOverlay />
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-3xl md:text-[36px] font-bold md:font-[600] text-gray-900 leading-tight mb-4 md:mb-[18px]">{whoWeAre.title}</h2>
                        <div className="space-y-4 md:space-y-6 text-[#6a7c92] leading-relaxed text-base md:text-[16px] my-4 md:mt-[10px] md:mb-[20px] mr-0 lg:mr-[20px]">
                            {whoWeAre.description.map((para: string, idx: number) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        {whyChooseUs.map((item: any, index: number) => {
                            const icons = [
                                <svg key="0" className="w-10 h-10 md:w-12 md:h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>,
                                <svg key="1" className="w-10 h-10 md:w-12 md:h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25L12 3.75L3 8.25L12 12.75L21 8.25Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V15.75L12 20.25L21 15.75V8.25" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V20.25" /></svg>,
                                <svg key="2" className="w-10 h-10 md:w-12 md:h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75a1.125 1.125 0 00-1.125 1.125v3.375m9 0h-9M12 14.25v-9m0 0l-3.375 3.375M12 5.25l3.375 3.375" /></svg>,
                                <svg key="3" className="w-10 h-10 md:w-12 md:h-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0h1.5m-1.5 0a6.75 6.75 0 10-13.5 0m13.5 0a6.75 6.75 0 11-13.5 0m13.5 0l3 3m-3-3l3-3m-16.5 3l-3 3m3-3l-3-3" /></svg>
                            ];
                            return (
                                <FeatureCard
                                    key={index}
                                    icon={icons[index % icons.length]}
                                    title={item.title}
                                    description={item.description}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
