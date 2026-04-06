import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import heroBanner from "@/images/Media-and-Entertainment-Industries-Banner.webp"; // fallback banner

import {
    MEDIA_ENTERTAINMENT_HERO,
    MEDIA_ENTERTAINMENT_INTRODUCTION,
    MEDIA_ENTERTAINMENT_WHAT_WE_DO,
    MEDIA_ENTERTAINMENT_INDUSTRY_SOLUTIONS,
    MEDIA_ENTERTAINMENT_IT_SOLUTIONS,
    MEDIA_ENTERTAINMENT_PORTFOLIO
} from "@/lib/media-and-entertainment-data";
import { LayoutDashboard, CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Media & Entertainment Tech Solutions | Software Development",
    description: "Innovative Solutions to Enable Technology-Led Transformation of Media & Entertainment Companies.",
};

export default async function MediaEntertainmentPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={heroBanner}
                alt="Media & Entertainment IT Solutions"
                title={MEDIA_ENTERTAINMENT_HERO.title}
                description={MEDIA_ENTERTAINMENT_HERO.description}
                ctaText={MEDIA_ENTERTAINMENT_HERO.buttonText}
                ctaHref={MEDIA_ENTERTAINMENT_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Media & Entertainment" }
                ]}
                title={MEDIA_ENTERTAINMENT_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {MEDIA_ENTERTAINMENT_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* What We Do Section */}
            <section className="py-[60px] bg-[#14133b] text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="w-full md:w-1/2">
                            <h5 className="text-[#f29111] uppercase tracking-wider font-semibold mb-4 text-sm">
                                {MEDIA_ENTERTAINMENT_WHAT_WE_DO.superTitle}
                            </h5>
                            <h2 className="text-[26px] md:text-[36px] font-semibold leading-tight">
                                {MEDIA_ENTERTAINMENT_WHAT_WE_DO.title}
                            </h2>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-gray-300 text-[19px] leading-relaxed">
                                {MEDIA_ENTERTAINMENT_WHAT_WE_DO.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MEDIA_ENTERTAINMENT_WHAT_WE_DO.items.map((item, index) => (
                            <div key={index} className="bg-[#1c1b4b] p-8 rounded-xl hover:bg-[#25245c] transition-colors group text-center flex flex-col items-center">
                                <div className="text-[#f29111] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h6 className="text-white text-lg font-semibold h-14 flex items-center justify-center">
                                    {item.title}
                                </h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IT Solutions for Entertainment Industry */}
            <section className="py-[80px] bg-gray-50 bg-opacity-90 relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {MEDIA_ENTERTAINMENT_INDUSTRY_SOLUTIONS.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                            {MEDIA_ENTERTAINMENT_INDUSTRY_SOLUTIONS.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {MEDIA_ENTERTAINMENT_INDUSTRY_SOLUTIONS.columns.map((column, colIdx) => (
                            <div key={colIdx} className="space-y-4">
                                {column.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                                        <CheckCircle2 className="w-6 h-6 text-[#f29111] shrink-0" />
                                        <h4 className="text-[#14133b] font-medium">{item}</h4>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media & Entertainment IT Solutions (Image Cards) */}
            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b]">
                            {MEDIA_ENTERTAINMENT_IT_SOLUTIONS.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {MEDIA_ENTERTAINMENT_IT_SOLUTIONS.items.map((item, idx) => {
                            // Using varying bg colors for the top part to mimic the images and colored tops in HTML
                            const bgColors = ['bg-orange-600', 'bg-purple-600', 'bg-blue-500', 'bg-gray-800'];
                            return (
                                <div key={idx} className="bg-white border rounded-xl overflow-hidden hover:shadow-xl transition-shadow group flex flex-col h-full">
                                    <div className={`h-40 w-full ${bgColors[idx % 4]} relative flex items-center justify-center p-6 text-white text-center group-hover:bg-opacity-90 transition-all`}>
                                        <LayoutDashboard className="w-12 h-12 opacity-50 absolute right-4 bottom-4" />
                                        <h3 className="text-xl font-bold z-10 relative">{item.title}</h3>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col justify-center">
                                        <p className="text-[#6a7c92] text-sm leading-relaxed text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={MEDIA_ENTERTAINMENT_PORTFOLIO.title}
                subtitle={MEDIA_ENTERTAINMENT_PORTFOLIO.subtitle}
                description={MEDIA_ENTERTAINMENT_PORTFOLIO.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
