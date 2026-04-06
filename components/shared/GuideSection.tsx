"use client";

import React, { useState, useEffect, useRef } from 'react';
import { GuideItem, GuideDetail, GuideSectionProps } from '@/types/components/shared/GuideSection';







export const GuideSection: React.FC<GuideSectionProps> = ({
    items,
    details,
    title = "Guide",
    description = "Here is a guide to help you with the common questions related to mobile application development."
}) => {
    const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when center/top of section is visible
            threshold: 0
        });

        details.forEach((detail) => {
            const el = document.getElementById(detail.id);
            if (el && observer.current) {
                observer.current.observe(el);
            }
        });

        return () => observer.current?.disconnect();
    }, [details]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            setActiveId(id);
            const offset = 100; // Account for sticky header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-[50px] bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mx-auto mb-[40px]">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{title}</h2>
                    <p className="text-[#6a7c92] text-[16px] md:text-[19px] leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-24 border-t border-gray-100">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left group block py-6 px-1 border-b border-gray-100 transition-all flex justify-between items-center ${activeId === item.id
                                        ? 'text-[#f29111] border-r-[3px] border-r-[#f29111]'
                                        : 'text-[#14133b] hover:text-[#f29111]'
                                        }`}
                                >
                                    <span className={`text-[17px] font-bold leading-[26px] max-w-[340px] transition-colors ${activeId === item.id ? 'text-[#f29111]' : 'text-[#14133b] group-hover:text-[#f29111]'
                                        }`}>
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-2/3 space-y-0">
                        {details.map((detail, index) => (
                            <div
                                key={detail.id}
                                id={detail.id}
                                className={`py-12 first:pt-0 last:pb-0 scroll-mt-24 ${index !== details.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                            >
                                <h3 className="text-2xl md:text-[28px] font-bold mb-8 text-[#14133b] leading-tight">
                                    {detail.title}
                                </h3>
                                <div className="prose prose-lg max-w-none text-gray-500 leading-relaxed font-normal">
                                    {detail.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
