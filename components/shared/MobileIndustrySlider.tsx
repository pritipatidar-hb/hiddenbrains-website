"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
export type MobileIndustryItem = {
    title: string;
    image: string;
    content: string;
    link: string;
};

export const MobileIndustrySlider = ({ industries }: { industries: MobileIndustryItem[] }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollable = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1);
        }
    };

    useEffect(() => {
        checkScrollable();
        window.addEventListener("resize", checkScrollable);
        // Initial check
        setTimeout(checkScrollable, 100);
        return () => window.removeEventListener("resize", checkScrollable);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            // Scroll by one card width approximately (clientWidth / 4) or full page
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setTimeout(checkScrollable, 350);
        }
    };

    return (
        <div className="relative group max-w-7xl mx-auto">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8 pt-4 px-4 -mx-4"
                onScroll={checkScrollable}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="group/card relative flex flex-col bg-white overflow-hidden rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 shrink-0 snap-start w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
                    >
                        <div className="relative h-[240px] w-full overflow-hidden shrink-0">
                            <Image
                                src={industry.image}
                                alt={industry.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                        </div>

                        <div className="p-6 flex-grow flex flex-col bg-white border-x border-b border-gray-100/50">
                            <h4 className="text-[20px] font-semibold text-[#14133b] mb-[10px]">{industry.title}</h4>
                            <p className="text-[#6a7c92] text-[15px] leading-relaxed font-normal flex-grow">
                                {industry.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className={`absolute -left-4 lg:-left-6 xl:-left-12 top-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full flex items-center justify-center z-10 transition-all duration-300 shadow-md ${
                    canScrollLeft
                        ? "bg-[#f29111] hover:bg-[#e08b1a] text-white cursor-pointer"
                        : "bg-white text-[#f29111] border border-[#f29111] opacity-70 cursor-not-allowed"
                }`}
                disabled={!canScrollLeft}
                aria-label="Previous"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className={`absolute -right-4 lg:-right-6 xl:-right-12 top-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full flex items-center justify-center z-10 transition-all duration-300 shadow-md ${
                    canScrollRight
                        ? "bg-white text-[#f29111] border border-[#f29111] hover:bg-[#f29111] hover:text-white cursor-pointer"
                        : "bg-white text-[#f29111] border border-[#f29111] opacity-70 cursor-not-allowed"
                }`}
                disabled={!canScrollRight}
                aria-label="Next"
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};
