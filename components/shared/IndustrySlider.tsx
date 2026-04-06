"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IndustryItem } from "@/lib/hire-dedicated-developers-data";

export const IndustrySlider = ({ industries }: { industries: IndustryItem[] }) => {
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
        return () => window.removeEventListener("resize", checkScrollable);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            // re-check after slight delay to see if buttons should hide
            setTimeout(checkScrollable, 350);
        }
    };

    return (
        <div className="relative group">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-5 pb-4"
                onScroll={checkScrollable}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {industries.map((industry, index) => (
                    <Link
                        key={index}
                        href={industry.link || "#"}
                        className="group/card relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer shrink-0 snap-start w-full sm:w-[calc(50%-10px)] md:w-[calc(33.333%-13.33px)] lg:w-[calc(25%-15px)] xl:w-[calc(20%-16px)] block"
                    >
                        {industry?.image && !industry.image.includes('data:image') && (
                            <Image
                                src={industry.image}
                                alt={industry.name || (industry as any).title || "Industry"}
                                fill
                                className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left">
                            <h5 className="text-white text-xl font-bold mb-3">{industry.name || (industry as any).title}</h5>
                            <div className="h-auto opacity-100 mb-4 sm:h-0 sm:opacity-0 sm:mb-0 group-hover/card:h-auto group-hover/card:opacity-100 group-hover/card:mb-4 transition-all duration-500 overflow-hidden">
                                <h6 className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-none">{industry.desc}</h6>
                                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white sm:bg-white/20 sm:group-hover/card:bg-orange-500 transition-colors shadow-lg">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {canScrollLeft && (
                <button
                    onClick={() => scroll("left")}
                    className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#f29111] hover:bg-[#e08b1a] rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-all duration-300"
                    aria-label="Previous"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {canScrollRight && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#f29111] hover:bg-[#e08b1a] rounded-full flex items-center justify-center text-white shadow-lg z-10 transition-all duration-300"
                    aria-label="Next"
                >
                    <ChevronRight size={20} />
                </button>
            )}
        </div>
    );
};
