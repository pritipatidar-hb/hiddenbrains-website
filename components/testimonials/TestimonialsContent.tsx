"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import bannerImg from "@/images/Testimonial-Banner.webp";
import { TESTIMONIALS_DATA } from "@/lib/testimonials-data";
import { VideoModal } from "@/components/shared/VideoModal";
import Contact from "@/components/layout/Contact";

export default function TestimonialsContent({ data }: { data: any }) {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayVideo = (url: string) => {
        setSelectedVideo(url);
        setIsModalOpen(true);
    };

    return (
        <main className="">
            {/* Page Header */}
            <section className="relative py-20 md:py-24 text-white overflow-hidden min-h-[400px] flex items-center">
                <Image
                    src={bannerImg}
                    alt="Testimonial Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-4xl md:text-[50px] font-bold text-left leading-tight mb-4 tracking-tight max-w-lg">
                                Video Testimonial | Our Valuable Clients
                            </h1>
                            <nav className="flex items-center text-sm md:text-base font-medium">
                                <Link href="/" className="text-white text-[15px] hover:text-orange-500 transition-colors">Home</Link>
                                <span className="mx-2 text-white/60 ">/</span>
                                <span className="text-white/90 text-[15px]">Video Testimonial | Our Valuable Clients</span>
                            </nav>
                        </div>
                        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 flex lg:justify-end items-center">
                            <ul className="flex flex-wrap lg:flex-nowrap items-center gap-6 text-[13px] font-bold uppercase tracking-wider">
                                <li>
                                    <Link href="/our-clients" className="hover:text-orange-500 transition-colors py-2 block  text-white text-[17px] font-semibold">
                                        Our Clients
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/client-speak" className="hover:text-orange-500 transition-colors py-2 block  text-white text-[17px] font-semibold">
                                        Client Speak
                                    </Link>
                                </li>
                                <li>
                                    <span className="border border-white/40 px-6 py-4 block  text-white bg-black/10">
                                        Video Testimonial | Our Valuable Clients
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TESTIMONIALS_DATA.map((testimonial) => (
                            <div key={testimonial.id} className="group bg-white  overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Thumbnail with Play Button Overlay */}
                                <div
                                    className="relative aspect-video cursor-pointer overflow-hidden"
                                    onClick={() => handlePlayVideo(testimonial.videoUrl)}
                                >
                                    <Image
                                        src={testimonial.thumbnailUrl}
                                        alt={testimonial.clientName}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-[50px] h-[50px] bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                            <Play size={20} className="text-black fill-black ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-[20px] text-left">
                                    <h6 className="text-[22px] font-semibold text-[#000] mb-2">{testimonial.clientName}</h6>
                                    <p className="text-[#6a7c92] text-sm md:text-[15px] leading-relaxed">
                                        {testimonial.projectName}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={selectedVideo || ""}
            />
            {/* <Contact data={data} /> */}
        </main>
    );
}
