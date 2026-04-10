import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { ServicesSection } from "@/components/shared/ServicesSection";



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
                    <div className="space-y-4 text-[#6a7c92]">
                        {BANKING_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Industry IT Solutions Section */}
            <ServicesSection
                subtitle={BANKING_SERVICES.subtitle}
                title={BANKING_SERVICES.title}
                description={BANKING_SERVICES.description}
                headerAlign="split"
                columns={4}
                variant="simple"
                background="bg-[#f8faff]"
                services={BANKING_SERVICES.items.map(service => ({
                    title: service.title,
                    description: service.content,
                    icon: service.icon
                }))}
            />

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

            {/* Financial IT Solutions Section */}
            <ServicesSection
                title={BANKING_SOLUTIONS.title}
                columns={4}
                variant="simple"
                background="bg-[#f8faff]"
                services={BANKING_SOLUTIONS.items.map(solution => ({
                    title: solution.title,
                    description: solution.content,
                    icon: solution.icon
                }))}
            />
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
