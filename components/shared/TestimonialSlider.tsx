"use client";

import React, { useRef, useState } from "react";
import { SliderTestimonial } from '@/types/components/shared/TestimonialSlider';

const AVATARS = [
    { src: "https://randomuser.me/api/portraits/women/44.jpg", size: "w-[70px] h-[70px]", top: "top-[12%]", left: "left-[4%]" },
    { src: "https://randomuser.me/api/portraits/women/68.jpg", size: "w-[80px] h-[80px]", top: "top-[30%]", left: "left-[14%]" },
    { src: "https://randomuser.me/api/portraits/women/32.jpg", size: "w-[120px] h-[120px]", bottom: "bottom-[20%]", left: "left-[6%]" },
    { src: "https://randomuser.me/api/portraits/men/32.jpg", size: "w-[70px] h-[70px]", bottom: "bottom-[15%]", left: "left-[20%]" },

    { src: "https://randomuser.me/api/portraits/women/12.jpg", size: "w-[90px] h-[90px]", top: "top-[15%]", right: "right-[4%]" },
    { src: "https://randomuser.me/api/portraits/women/9.jpg", size: "w-[60px] h-[60px]", top: "top-[28%]", right: "right-[18%]" },
    { src: "https://randomuser.me/api/portraits/men/45.jpg", size: "w-[130px] h-[130px]", bottom: "bottom-[20%]", right: "right-[6%]" },
    { src: "https://randomuser.me/api/portraits/women/8.jpg", size: "w-[70px] h-[70px]", bottom: "bottom-[16%]", right: "right-[20%]" },
];

export const TestimonialSlider = ({ testimonials }: { testimonials: SliderTestimonial[] }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const newIndex = Math.round(scrollLeft / clientWidth);
            setActiveIndex(newIndex);
        }
    };

    const scrollTo = (index: number) => {
        if (scrollContainerRef.current) {
            const { clientWidth } = scrollContainerRef.current;
            scrollContainerRef.current.scrollTo({
                left: index * clientWidth,
                behavior: "smooth"
            });
            setActiveIndex(index);
        }
    };

    return (
        <div className="relative w-full bg-[#111030] py-[80px] md:py-[100px] overflow-hidden">
            {/* Floating Avatars Background */}
            {AVATARS.map((avatar, i) => (
                <div
                    key={i}
                    className={`absolute rounded-full border-[3px] border-white overflow-hidden shadow-lg ${avatar.size} ${avatar.top || ''} ${avatar.left || ''} ${avatar.right || ''} ${avatar.bottom || ''} hidden lg:block`}
                >
                    <img src={avatar.src} alt="Client Avatar" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
            ))}

            <div className="relative group max-w-4xl mx-auto z-10 px-6">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
                    onScroll={handleScroll}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-full shrink-0 snap-center flex flex-col items-center justify-center text-center px-4 md:px-20"
                        >
                            <div className="bg-[#242345] rounded-full px-6 py-2 mb-8 inline-block shadow-md">
                                <h4 className="text-[15px] md:text-[16px] font-semibold text-[#f29111] m-0">
                                    {testimonial.title}
                                </h4>
                            </div>

                            <p className="text-[#a5b0c0] text-[18px] md:text-[22px] leading-[1.6] mb-8 max-w-3xl">
                                {testimonial.quote}
                            </p>

                            <h5 className="text-[18px] font-bold text-white mb-1">
                                {testimonial.author.split(',')[0]}
                            </h5>

                            <h6 className="text-[13px] font-medium text-[#6a7c92]">
                                {testimonial.author.split(',')[1] || ""}
                            </h6>
                        </div>
                    ))}
                </div>

                {/* Dots Pagination */}
                <div className="flex justify-center items-center space-x-2 mt-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollTo(index)}
                            className={`rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 h-1.5 bg-[#f29111]" : "w-1.5 h-1.5 bg-[#f29111]/40 hover:bg-[#f29111]/80"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
