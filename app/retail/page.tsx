import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import { GuideSection } from "@/components/shared/GuideSection";

import retailBanner from "@/images/Retail-Industries-Banner.webp";

import {
    RETAIL_HERO,
    RETAIL_INTRODUCTION,
    RETAIL_WHAT_WE_DO,
    RETAIL_WHY_CHOOSE_US,
    RETAIL_GUIDE_ITEMS,
    RETAIL_GUIDE_DETAILS,
    RETAIL_FAQ,
    RETAIL_PORTFOLIO
} from "@/lib/retail-data";

export const metadata = {
    title: "Retail IT Solutions | Retail POS & Management Systems",
    description: "Retail IT Solutions by Hidden Brains ensures that your business stays ahead of the competition by helping you develop your brand, increase productivity, and optimize processes with minimal downtime.",
};

export default async function RetailPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={retailBanner}
                alt="Retail IT Solutions"
                title={RETAIL_HERO.title}
                description={RETAIL_HERO.description}
                ctaText={RETAIL_HERO.buttonText}
                ctaHref={RETAIL_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Retail" }
                ]}
                title={RETAIL_INTRODUCTION.title}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        {RETAIL_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* What We Do Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {RETAIL_WHAT_WE_DO.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center  mx-auto">
                            {RETAIL_WHAT_WE_DO.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {RETAIL_WHAT_WE_DO.items.map((item, index) => (
                            <div key={index} className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-4 hover:border-b-[#f29111] bg-white group flex flex-col items-center text-center">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-4 uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed font-normal text-[15px]">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {RETAIL_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {RETAIL_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {RETAIL_WHY_CHOOSE_US.items.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-[35px] rounded-2xl bg-white border border-transparent hover:border-gray-100 hover:shadow-xl transition-all group">
                                <div className="shrink-0 w-16 h-16 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-semibold mb-[11px] text-[#14133b] group-hover:text-orange-500 transition-colors">
                                        {reason.title}
                                    </h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                        {reason.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                items={RETAIL_GUIDE_ITEMS}
                details={RETAIL_GUIDE_DETAILS}
                title="Retail IT solutions: A Detailed Guide"
                description="This guide will help you get started by presenting some of the most effective retail IT solutions out there today and how they can help you turn your business into an industry leader."
            />


            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={RETAIL_PORTFOLIO.title}
                subtitle="Our Work"
                description={RETAIL_PORTFOLIO.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
