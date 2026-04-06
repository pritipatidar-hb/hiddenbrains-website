import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import { ProcessSection } from "@/components/shared/ProcessSection";
import { GuideSection } from "@/components/shared/GuideSection";

import logisticsBanner from "@/images/Logistics-Industries.webp";

import {
    LOGISTICS_HERO,
    LOGISTICS_INTRODUCTION,
    LOGISTICS_WHAT_WE_DO,
    LOGISTICS_CHALLENGES,
    LOGISTICS_WHY_CHOOSE_US,
    LOGISTICS_GUIDE_ITEMS,
    LOGISTICS_GUIDE_DETAILS,
    LOGISTICS_PROCESS,
    LOGISTICS_FAQ,
    LOGISTICS_PORTFOLIO
} from "@/lib/logistics-data";

export const metadata = {
    title: "Logistics Software Solutions | Smart Supply Chain & Transport IT",
    description: "Get custom logistics and transport software solutions. We build warehouse management systems, fleet tracking apps, and supply chain automation software.",
};

export default async function LogisticsPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={logisticsBanner}
                alt="Logistics Software Solutions"
                title={LOGISTICS_HERO.title}
                description={LOGISTICS_HERO.description}
                ctaText={LOGISTICS_HERO.buttonText}
                ctaHref={LOGISTICS_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Logistics" }
                ]}
                title={LOGISTICS_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {LOGISTICS_INTRODUCTION.content.map((p, i) => (
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
                            {LOGISTICS_WHAT_WE_DO.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center  mx-auto">
                            {LOGISTICS_WHAT_WE_DO.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {LOGISTICS_WHAT_WE_DO.items.map((item, index) => (
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
            {/* Critical Challenges Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {LOGISTICS_CHALLENGES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {LOGISTICS_CHALLENGES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {LOGISTICS_CHALLENGES.items.map((item, index) => (
                            <div key={index} className="p-8 border border-gray-100 rounded-2xl bg-white hover:bg-gray-50 transition-all group shadow-sm hover:shadow-md">
                                <div className="w-16 h-16 bg-orange-50 text-[#f29111] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[21px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[14px]">
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
                            {LOGISTICS_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {LOGISTICS_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {LOGISTICS_WHY_CHOOSE_US.items.map((reason, index) => (
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
                items={LOGISTICS_GUIDE_ITEMS}
                details={LOGISTICS_GUIDE_DETAILS}
                title="Logistics IT Solutions Guide"
                description="Everything you need to know about choosing and implementing the right logistics software for your company."
            />

            <ProcessSection
                title="Logistics App Development Process"
                description="Our team follows a process-driven approach to deliver high-quality, scalable, and reliable mobile application development services."
                processItems={LOGISTICS_PROCESS}
            />



            <FAQSection
                faqs={LOGISTICS_FAQ}
                title="Frequently Asked Questions"
                description="Common questions about our logistics software development services and business approach."
            />
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={LOGISTICS_PORTFOLIO.title}
                subtitle="Our Work"
                description={LOGISTICS_PORTFOLIO.description}
            />
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
