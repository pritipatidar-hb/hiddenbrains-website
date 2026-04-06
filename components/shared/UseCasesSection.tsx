import React from 'react';
import Image from 'next/image';
import { UseCaseItem, UseCasesSectionProps } from '@/types/components/shared/UseCasesSection';





export const UseCasesSection = ({
    title,
    description,
    items,
    bgColor = "bg-[#f7f7f7]"
}: UseCasesSectionProps) => {
    return (
        <section className={`py-[50px] ${bgColor}`}>
            <div className="container px-6 mx-auto max-w-7xl">
                <div className=" mx-auto text-center mb-[40px]">
                    <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                        {title}
                    </h2>
                    <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden group border border-slate-100 flex flex-col h-full"
                        >
                            <div className="p-8 pb-0 flex justify-center">
                                <div className="relative w-full h-48">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 192px, 192px"
                                    />
                                </div>
                            </div>

                            <div className="p-8 pt-6 flex flex-col flex-1 text-center">
                                <h3 className="text-[#14133b] text-xl font-bold mb-4 group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] text-sm leading-relaxed flex-1">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
