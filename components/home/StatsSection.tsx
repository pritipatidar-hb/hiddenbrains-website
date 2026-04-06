import React from "react";
import { IconMap } from "./Icons";
import { Stat, StatsSectionProps } from '@/types/components/home/StatsSection';





export const StatsSection = ({ subtitle, title, description, stats, isLight = false }: StatsSectionProps) => {
    return (
        <section className={`py-10 md:py-[50px] ${isLight ? 'bg-white text-[#14133b]' : 'bg-[#14133b] text-white'} relative overflow-hidden`}>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    {subtitle && (
                        <div className="text-[#f29111] py-1 px-3  font-bold uppercase tracking-widest text-xs  md:text-sm font-[500]">
                            {subtitle}
                        </div>
                    )}
                    <h2 className={`text-[26px] md:text-[36px] font-semibold ${isLight ? 'text-[#14133b]' : 'text-white'} leading-tight max-w-4xl mx-auto mb-4 md:mb-[18px]`}>
                        {title}
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className={`${isLight ? 'text-[#6a7c92]' : 'text-white/80'} text-sm sm:text-lg md:text-base font-normal text-center leading-relaxed `}>
                            {description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 md:gap-x-12">
                    {stats.map((stat, index) => {
                        const Icon = IconMap[stat.icon];
                        return (
                            <div key={index} className="flex flex-col items-center text-center  group">
                                <div className="text-[#f29111] mb-3 md:mb-[15px] transform group-hover:scale-110 transition-transform duration-300">
                                    {Icon ? <Icon className="w-10 h-10 md:w-12 md:h-12" /> : null}
                                </div>
                                <div className="flex items-baseline mb-2">
                                    <h3 className={`text-4xl md:text-[48px] font-bold ${isLight ? 'text-[#f29111]' : 'text-white'} tracking-tighter`}>
                                        {stat.count}
                                    </h3>
                                    <span className="text-3xl md:text-[48px] font-bold text-[#f29111] ml-1 md:ml-[5px]">
                                        {stat.symbol}
                                    </span>
                                </div>
                                <h6 className={`${isLight ? 'text-[#14133b]' : 'text-white'} text-sm md:text-base font-bold uppercase tracking-tight`}>
                                    {stat.label}
                                </h6>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
