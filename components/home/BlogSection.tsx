import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/types/components/HomeView";
import { BlogSectionProps } from '@/types/components/home/BlogSection';



export const BlogSection = ({ subtitle, title, posts }: BlogSectionProps) => {
    return (
        <section className="py-10 md:py-12 bg-gray-50 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-20">
                <div className="text-center ">
                    <div className="text-[#f49b1e] font-bold py-1 px-3 uppercase text-xs">{subtitle}</div>
                    <h2 className="text-3xl md:text-4xl text-[#14133b] font-semibold mb-4 md:mb-5">{title}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4 md:pt-6">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white  overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="relative aspect-[16/10] overflow-hidden group">
                                <Image src={post.image} alt={post.title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-2 flex flex-col gap-8 md:gap-20 bg-[#f4f4f4] h-full">
                                <div className="flex flex-col gap-3 md:gap-4 px-2">
                                    <h3 className="text-lg md:text-xl font-bold text-[#14133b] line-clamp-3 pt-3 md:pt-5 transition-colors"><Link href={post.link}>{post.title}</Link></h3>
                                    <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed">{post.excerpt}</p>
                                </div>
                                <Link
                                    href={post.link}
                                    className="mt-auto mx-2 mb-2 bg-[#f29111] text-white w-fit p-2 md:p-3 px-4 rounded text-[11px] md:text-[12px] font-medium tracking-wide text-center"
                                >
                                    Blog Explore
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center text-sm md:text-base mt-10 md:mt-12">
                    <Link href="/blog" className="inline-flex items-center group">
                        <span className="text-[#14133b] font-bold text-xs md:text-sm uppercase tracking-wider mr-3 md:mr-4 group-hover:text-[#f49b1e] transition-colors duration-300">View Our Blog</span>
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#f49b1e] group-hover:text-[#f49b1e] transition-all duration-300"><svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};
