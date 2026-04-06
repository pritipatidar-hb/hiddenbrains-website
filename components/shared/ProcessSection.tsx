import React from 'react';
import Image from 'next/image';

export interface ProcessItem {
    step: string;
    title: string;
    icon: React.ReactNode | string;
}

export interface ProcessSectionProps {
    title: string;
    description: string;
    processItems: ProcessItem[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ title, description, processItems }) => {
    return (
        <section className="py-[60px] bg-[#f8faff] overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mx-auto mb-[40px]">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{title}</h2>
                    <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {processItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center relative pt-10">
                            {/* Large Background Step Number */}
                            <span className="text-[100px] font-black text-[#f29111] opacity-[0.07] absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                                {item.step}
                            </span>

                            {/* Card */}
                            <div className="z-10 bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center w-full h-full transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                <div className="w-[70px] h-[70px] flex items-center justify-center mb-4 text-[#f29111] group-hover:scale-110 transition-transform duration-300">
                                    {typeof item.icon === 'string' ? (
                                        <div className="relative w-full h-full">
                                            <Image src={item.icon as string} alt={item.title} fill className="object-contain" />
                                        </div>
                                    ) : (
                                        item.icon
                                    )}
                                </div>
                                <h4 className="text-[16px] font-bold text-[#14133b] leading-snug">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
