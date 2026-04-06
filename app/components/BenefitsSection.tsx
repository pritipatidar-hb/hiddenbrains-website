import React from 'react';
import { BenefitItem, BenefitsSectionProps } from '@/types/app/components/BenefitsSection';





export const BenefitsSection = ({ title, subtitle, description, items }: BenefitsSectionProps) => {
    return (
        <section className="py-[50px] bg-slate-50">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className=" mx-auto text-center mb-[30px]">
                    {subtitle && (
                        <h5 className="flex inline-flex px-[15px] py-[4px] bg-[#fdf4e7] rounded-[40px] text-[13px] text-orange-500 font-medium uppercase tracking-widest mb-4">{subtitle}</h5>
                    )}
                    <h2 className="  text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{title}</h2>
                    <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col h-full"
                        >
                            {item.icon && (
                                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                                    {item.icon}
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
