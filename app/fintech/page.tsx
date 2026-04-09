import dynamic from 'next/dynamic';
import React from 'react';
import { getData } from '@/lib/data';
import { HeroSection } from '@/components/shared/HeroSection';
import { IntroductionSection } from '@/components/shared/IntroductionSection';

import heroBanner from '@/images/FinTech.webp';

import {
    FINTECH_HERO,
    FINTECH_INTRODUCTION,
    FINTECH_TECHNOLOGY_EXPERTISE,
    FINTECH_SERVICES,
    FINTECH_WHY_CHOOSE_US,
    FINTECH_FAQS,
    FINTECH_PORTFOLIO
} from '@/lib/fintech-data';

export const metadata = {
    title: "FinTech Development Company In The UK",
    description: "Modernize your traditional financial and banking services with unmatched quality FinTech applications developed with high-level security features and advanced UX.",
};

export const revalidate = 3600;

export default async function FintechPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO SECTION */}
            <HeroSection
                banner={heroBanner}
                alt="FinTech Development Company"
                title={FINTECH_HERO.title}
                description={FINTECH_HERO.description}
                ctaText={FINTECH_HERO.buttonText}
                ctaHref={FINTECH_HERO.buttonLink}
            />

            {/* 2. INTRODUCTION SECTION */}
            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Fintech" }
                ]}
                title={FINTECH_INTRODUCTION.title}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        {FINTECH_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* 3. TECHNOLOGY EXPERTISE SECTION */}
            <section className="py-[50px] bg-[#14133b] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-white mb-4">
                            {FINTECH_TECHNOLOGY_EXPERTISE.title}
                        </h2>
                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            {FINTECH_TECHNOLOGY_EXPERTISE.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {FINTECH_TECHNOLOGY_EXPERTISE.items.map((item, idx) => (
                            <div key={idx} className="bg-[#1c1b4b] p-8 rounded-xl shadow-sm border border-transparent hover:border-[#f29111] transition-all duration-300 group">
                                <div className="w-20 h-20 rounded-full bg-[#14133b] flex items-center justify-center mb-6 text-[#f29111] group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. OUR EXPERTISE IN FINTECH DEVELOPMENT SERVICES */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {FINTECH_SERVICES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px]">
                            {FINTECH_SERVICES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FINTECH_SERVICES.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group hover:-translate-y-2">
                                <div className="text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#14133b] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WHY CHOOSE US */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {FINTECH_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px]">
                            {FINTECH_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FINTECH_WHY_CHOOSE_US.items.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-xl border-l-4 border-transparent hover:border-[#f29111] hover:bg-white hover:shadow-lg transition-all duration-300 group">
                                <div className="text-[#14133b] mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#14133b] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQS */}
            <section className="py-[50px] bg-gray-50">
                <FAQSection
                    faqs={FINTECH_FAQS.items}
                    title={FINTECH_FAQS.title}
                    description={FINTECH_FAQS.description}
                />
            </section>

            {/* 7. PORTFOLIO SECTION */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                subtitle={FINTECH_PORTFOLIO.subtitle}
                title={FINTECH_PORTFOLIO.title}
                description={FINTECH_PORTFOLIO.description}
            />

            {/* 8. CONTACT SECTION */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
