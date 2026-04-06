"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Testimonial } from "@/types/components/HomeView";
import { VideoModal } from "../shared/VideoModal";
import { TestimonialsSectionProps } from '@/types/components/home/TestimonialsSection';



export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoUrl = testimonials[0]?.videoUrl || "https://www.youtube.com/watch?v=yMc4s7lEt8w";

    return (
        <section className="py-[50px] bg-white overflow-hidden ">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-[26px] md:text-[36px] font-[600] text-[#14133b] mb-[18px] text-left">Our Clients Speak For Us</h2>
                <div className="grid lg:grid-cols-2 !sm:grid-cols-1 !md:grid-cols-1 gap-16 items-start">
                    <div
                        className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-xl w-full  md:h-[332px] cursor-pointer group mx-auto"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <Image
                            src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/Daniel-Vant-1.webp"
                            alt="Daniel Vant Testimonial"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <Play size={24} className="text-orange-500 fill-orange-500 ml-1 md:w-[28px] md:h-[28px]" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pt-0 md:pt-4 text-center md:text-left">
                        {testimonials.map((testimonial, index) => (
                            <article key={index} className="relative mb-10 md:mb-12 last:mb-0">
                                <blockquote className="text-lg md:text-[22px] text-[#6a7c92] leading-relaxed mb-3 md:mb-[10px] font-[400] italic">
                                    “{testimonial.quote}”
                                </blockquote>
                                <cite className="text-lg md:text-xl text-[#14133b] font-[600] not-italic">— {testimonial.author}</cite>
                            </article>
                        ))}
                        <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
                            <Link href="/testimonials" className="inline-flex items-center py-2 px-6 md:py-[10px] md:px-[30px] bg-[#f29111] !text-[#fff] font-bold rounded-lg shadow-sm hover:bg-[#e08b1a] transition-all duration-300 text-sm md:text-[15px] font-[500 ]">View All</Link>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={videoUrl}
            />
        </section>
    );
};
