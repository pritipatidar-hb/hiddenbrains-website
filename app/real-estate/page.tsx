import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import { CtaSection } from "@/components/shared/CtaSection";

import realEstateBanner from "@/images/Real-Estate-Industries-Banner.webp";

import {
    REAL_ESTATE_HERO,
    REAL_ESTATE_INTRODUCTION,
    REAL_ESTATE_EXPERTISE,
    REAL_ESTATE_TECH,
    REAL_ESTATE_WHY_CHOOSE_US,
    REAL_ESTATE_FAQ,
    REAL_ESTATE_PORTFOLIO
} from "@/lib/real-estate-data";

export const metadata = {
    title: "Real Estate App Development Company UK | PropTech Software Solutions",
    description: "Expert real estate software development company in the UK. We build property rental apps, real estate portals, and enterprise management solutions with IoT and Blockchain.",
};

export default async function RealEstatePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={realEstateBanner}
                alt="Real Estate Software Solutions"
                title={REAL_ESTATE_HERO.title}
                description={REAL_ESTATE_HERO.description}
                ctaText={REAL_ESTATE_HERO.buttonText}
                ctaHref={REAL_ESTATE_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Real Estate" }
                ]}
                title={REAL_ESTATE_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {REAL_ESTATE_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Expertise Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {REAL_ESTATE_EXPERTISE.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center max-w-4xl mx-auto">
                            {REAL_ESTATE_EXPERTISE.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {REAL_ESTATE_EXPERTISE.items.map((item, index) => (
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

            {/* Technologies Section */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {REAL_ESTATE_TECH.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center max-w-4xl mx-auto">
                            {REAL_ESTATE_TECH.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {REAL_ESTATE_TECH.items.map((item, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-50 flex flex-col items-center text-center group">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px]">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Why Choose Us */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {REAL_ESTATE_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {REAL_ESTATE_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {REAL_ESTATE_WHY_CHOOSE_US.items.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-[35px] rounded-2xl bg-white border border-transparent hover:border-gray-50 hover:shadow-xl transition-all group">
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

            <FAQSection
                faqs={REAL_ESTATE_FAQ}
                title="Frequently Asked Questions"
                description="Common questions about our real estate app development services and project costs."
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={REAL_ESTATE_PORTFOLIO.title}
                subtitle="Our Work"
                description={REAL_ESTATE_PORTFOLIO.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
