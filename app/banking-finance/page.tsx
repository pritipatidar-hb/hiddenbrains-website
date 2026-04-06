import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import bankingBanner from "@/images/Banking-Financial-Industries-Banner.webp";

import {
    BANKING_HERO,
    BANKING_INTRODUCTION,
    BANKING_SERVICES,
    BANKING_SOFTWARE_SOLUTIONS,
    BANKING_SOLUTIONS,
    BANKING_CTA,
    BANKING_FAQ
} from "@/lib/banking-finance-data";

export const metadata = {
    title: "Banking & Finance IT Solutions | Secure Financial Software UK",
    description: "Next-gen banking and finance IT solutions. We offer secure software development, mobile banking apps, loan management, and Fintech modernization services.",
};

export default async function BankingFinancePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={bankingBanner}
                alt="Banking & Finance IT Solutions"
                title={BANKING_HERO.title}
                description={BANKING_HERO.description}
                ctaText={BANKING_HERO.buttonText}
                ctaHref={BANKING_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Banking & Finance" }
                ]}
                title={BANKING_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {BANKING_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Services Section */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-[40px]">
                        <div>
                            <h5 className="text-[#f29111] font-bold text-[14px] uppercase tracking-widest mb-4">
                                {BANKING_SERVICES.subtitle}
                            </h5>
                            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px] leading-tight">
                                {BANKING_SERVICES.title}
                            </h2>
                        </div>
                        <div>
                            <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                                {BANKING_SERVICES.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {BANKING_SERVICES.items.map((service, index) => (
                            <div key={index} className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Software Solutions List */}
            <section className="py-[60px] bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mx-auto mb-[60px]">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[20px]">
                            {BANKING_SOFTWARE_SOLUTIONS.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto leading-relaxed">
                            {BANKING_SOFTWARE_SOLUTIONS.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                        {BANKING_SOFTWARE_SOLUTIONS.lists.map((list, listIdx) => (
                            <div key={listIdx} className="space-y-6">
                                {list.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-start gap-4 group">
                                        <div className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-[#f29111] transition-all duration-300 group-hover:scale-150"></div>
                                        <p className="text-[#14133b] text-[17px] font-medium leading-tight">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Solutions Grid */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b]">
                            {BANKING_SOLUTIONS.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BANKING_SOLUTIONS.items.map((solution, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full hover:-translate-y-2 p-8">
                                <div className="mb-6 w-16 h-16 bg-[#f8faff] rounded-2xl flex items-center justify-center text-[#f29111] transition-all duration-500 group-hover:bg-[#f29111] group-hover:text-white group-hover:rotate-6">
                                    {solution.icon}
                                </div>
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                    {solution.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={BANKING_CTA.title}
                subtitle={BANKING_CTA.subtitle}
                description={BANKING_CTA.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
