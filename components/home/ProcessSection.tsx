import React from "react";
import Image from "next/image";
import { ANALYZE_SVG, DESIGN_SVG, DEVELOP_SVG, DELIVER_SVG } from "./Icons";
import { Step, ProcessSectionProps } from '@/types/components/home/ProcessSection';

export const StepIcon = ({ index, color }: { index: number, color: string }) => {
    switch (index) {
        case 0: return <ANALYZE_SVG color={color} />;
        case 1: return <DESIGN_SVG color={color} />;
        case 2: return <DEVELOP_SVG color={color} />;
        case 3: return <DELIVER_SVG color={color} />;
        default: return null;
    }
};

export const ProcessSection = ({ title, subtitle, description, steps }: ProcessSectionProps) => {
    return (
        <section className="py-12 md:py-[50px] bg-[#f8faff] overflow-hidden text-[#14133b]">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-20">
                    <div className="text-[#f29111] py-1 px-3 font-[500] uppercase tracking-wider text-xs md:text-sm mb-3 md:mb-4 font-family: 'Roboto'">{subtitle}</div>
                    <h2 className="text-3xl md:text-[36px] font-[600] text-[#14133b] mb-[12px] md:mb-[18px] leading-tight">
                        {title}
                    </h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        <p className="text-sm md:text-base leading-relaxed font-[400] text-[#6a7c92]">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => {
                        const colors = ["#2196f3", "#9c27b0", "#455a64", "#e91e63"];
                        return (
                            <div key={index} className="flex flex-col rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-visible group hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 bg-white">
                                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[4px]">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                                </div>
                                <div className="relative p-6 md:p-[40px] flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="absolute -top-8 md:-top-10 left-1/2 md:left-[75%] -translate-x-1/2 w-[60px] h-[60px] md:w-[70px] md:h-[70px] text-[#29b2fe] bg-white rounded-full flex items-center justify-center shadow-lg z-10 border border-gray-50 transform group-hover:scale-110 transition-transform duration-500">
                                        <StepIcon index={index} color={colors[index]} />
                                    </div>
                                    <h3 className="text-[20px] md:text-[22px] font-[600] text-[#14133b] mb-[8px] md:mb-[11px] pt-[12px] md:pt-[15px]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#6a7c92] text-[14px] md:text-[15px] leading-relaxed font-[400]">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
