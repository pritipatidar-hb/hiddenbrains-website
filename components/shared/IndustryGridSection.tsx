import React, { ReactNode } from 'react';
import Image from 'next/image';

interface IndustryItem {
    name: string;
    icon?: ReactNode;
    image?: string;
    color: string;
}

interface IndustryGridSectionProps {
    title: string;
    description: string;
    items: IndustryItem[];
}

export const IndustryGridSection = ({ title, description, items }: IndustryGridSectionProps) => {
    return (
        <section className="py-[50px] bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center max-w-[800px] mx-auto mb-[40px]">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                        {title}
                    </h2>
                    <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white rounded-md border border-[#eeeef0] flex flex-col items-center justify-center p-10 text-center hover:bg-[#ebedf1] transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110 relative overflow-hidden ${item.color}`}>
                                {item.image ? (
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-contain p-5 brightness-0 invert"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="text-white scale-[1.3] flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                )}
                            </div>
                            <span className="text-[#14133b] font-bold text-[18px] leading-tight block">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
