import React, { ReactNode } from 'react';
import Image from 'next/image';

interface FeatureDetailedItem {
    title: string;
    image: string;
    icon: ReactNode;
    description?: string | ReactNode;
    items?: string[];
    color?: string; // Optional color class for the icon wrap
}

interface FeatureDetailedGridProps {
    items: FeatureDetailedItem[];
    className?: string;
    bgClass?: string;
}

export const FeatureDetailedGrid = ({ items, className = "", bgClass = "bg-white" }: FeatureDetailedGridProps) => {
    return (
        <section className={`py-[60px] md:py-[50px] ${bgClass} ${className}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <article
                            key={index}
                            className="flex flex-col bg-white rounded-[20px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                        >
                            {/* Card Image Header with Floating Icon */}
                            <div className="h-[240px] relative ">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    unoptimized
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>

                                {/* Centered Floating Icon Attached to Bottom */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:left-[52%] w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10 text-[#f29111] border border-gray-50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Card Content Area */}
                            <div className="p-8 md:p-10 pt-12 flex flex-col items-center grow">
                                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#14133b] mb-8 text-center transition-colors duration-300 group-hover:text-[#f29111]">
                                    {item.title}
                                </h3>
                                
                                {item.description && (
                                    <div className="text-[#6a7c92] text-[15px] font-normal leading-relaxed text-center mb-6">
                                        {item.description}
                                    </div>
                                )}

                                {item.items && item.items.length > 0 && (
                                    <ul className="space-y-4 w-full">
                                        {item.items.map((bullet, bIndex) => (
                                            <li key={bIndex} className="flex items-start gap-3 group/item text-sm md:text-base">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#f29111] shrink-0 mt-2 transition-transform duration-300 group-hover/item:scale-125"></div>
                                                <span className="text-[#6a7c92] leading-relaxed group-hover/item:text-[#14133b] transition-colors duration-300">
                                                    {bullet}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
