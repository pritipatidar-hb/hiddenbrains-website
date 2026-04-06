"use client";

import React from 'react';
import Link from 'next/link';
import { Home, Check } from 'lucide-react';
import { Breadcrumb, Counter, IntroductionSectionProps } from '@/types/components/shared/IntroductionSection';


export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
    breadcrumbs,
    title,
    counters = [],
    listItems = [],
    content,
    bgColor = "bg-[#f8faff]",
    showHomeIcon = true
}) => {
    const hasCounters = counters && counters.length > 0;
    const hasListItems = listItems && listItems.length > 0;
    const hasRightContent = hasCounters || hasListItems;

    return (
        <section className={`py-12 md:py-[50px] ${bgColor}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
                    {/* Left Column: Content */}
                    <div className={hasRightContent ? "md:w-[63%]" : "w-full"}>
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm md:text-[14px] font-medium mb-[15px] text-[#6a7c92]">
                            {showHomeIcon && (
                                <>
                                    <Link href="/" className="hover:text-[#f29111] transition-colors">
                                        Home
                                    </Link>
                                    <span className="text-gray-400">/</span>
                                </>
                            )}
                            {breadcrumbs.map((crumb, index) => (
                                <React.Fragment key={index}>
                                    {crumb.href ? (
                                        <Link href={crumb.href} className="hover:text-[#f29111] transition-colors">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span className="text-[#6a7c92]">
                                            {crumb.label}
                                        </span>
                                    )}
                                    {index < breadcrumbs.length - 1 && <span className="text-gray-400">/</span>}
                                </React.Fragment>
                            ))}
                        </nav>

                        {/* Title */}
                        <h2 className="text-[26px] md:text-[36px] max-w-[490px]  font-semibold text-[#14133b] mb-[18px] leading-[1.2]">
                            {title}
                        </h2>

                        {/* Body Content */}
                        <div className="text-[#6a7c92] leading-relaxed text-[16px] font-normal">
                            {content}
                        </div>
                    </div>

                    {/* Right Column: Counters or List */}
                    {hasRightContent && (
                        <div className="md:w-1/3 mt-1 md:mt-0">
                            {hasCounters && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {counters.map((counter, index) => (
                                        <div
                                            key={index}
                                            className="bg-white p-6 flex flex-col items-center justify-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 aspect-square group hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-sm"
                                        >
                                            <div className="flex items-baseline mb-2">
                                                <span className="text-4xl md:text-[52px] font-bold text-[#f29111] tracking-tight">
                                                    {counter.value}
                                                </span>
                                                <span className="text-2xl md:text-[30px] font-bold text-[#f29111] ml-0.5">
                                                    {counter.symbol}
                                                </span>
                                            </div>
                                            <span className="text-[14px] font-bold text-[#6a7c92] leading-tight">
                                                {counter.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {hasListItems && (
                                <ul className="space-y-4 mt-10">
                                    {listItems.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="mt-[2px] shrink-0 text-[#f29111]">
                                                <Check size={20} strokeWidth={3} />
                                            </div>
                                            <span className="text-[20px] font-semibold text-[#14133b]">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
