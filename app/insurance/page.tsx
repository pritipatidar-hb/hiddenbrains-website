import dynamic from 'next/dynamic';
import React from 'react';
import { getData } from '@/lib/data';
import { HeroSection } from '@/components/shared/HeroSection';
import { IntroductionSection } from '@/components/shared/IntroductionSection';


import heroBanner from '@/images/Insurance-Industries-Banner.webp'; // Using healthcare banner as a fallback for internal industry pages
import backgroundParallax from '@/images/location-based.webp'; // Fallback for the parallax, or we can use another image
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

import {
    INSURANCE_HERO,
    INSURANCE_INTRODUCTION,
    INSURANCE_FEATURES,
    INSURANCE_TECHNOLOGY_SOLUTIONS,
    INSURANCE_MANAGEMENT_SOFTWARE,
    INSURANCE_PORTFOLIO
} from '@/lib/insurance-data';

export const metadata = {
    title: "Insurance Solution & App Development Services | Hidden Brains UK",
    description: "Enabling Technology Innovation and Transformation with Web & Mobile Solutions for The Insurance Industry.",
};

export const revalidate = 3600;

export default async function InsurancePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO SECTION */}
            <HeroSection
                banner={heroBanner}
                alt="Insurance Software Solutions"
                title={INSURANCE_HERO.title}
                description={INSURANCE_HERO.description}
                ctaText={INSURANCE_HERO.buttonText}
                ctaHref={INSURANCE_HERO.buttonLink}
            />

            {/* 2. INTRODUCTION SECTION */}
            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Insurance" }
                ]}
                title={INSURANCE_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {INSURANCE_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* 3. WHAT WE DO (Features) */}
            <section className="py-[50px] bg-[#14133b] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="md:w-1/2">
                            <span className="text-[#f29111] font-bold tracking-wider uppercase text-sm mb-4 block">
                                {INSURANCE_FEATURES.superTitle}
                            </span>
                            <h2 className="text-[26px] md:text-[36px] font-semibold text-white leading-tight">
                                {INSURANCE_FEATURES.title}
                            </h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-gray-300 text-[18px] leading-relaxed">
                                {INSURANCE_FEATURES.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {INSURANCE_FEATURES.items.map((item, idx) => (
                            <div key={idx} className="bg-[#1c1b4b] p-8 rounded-xl shadow-sm border border-transparent hover:border-[#f29111] transition-all duration-300 group text-center flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-[#14133b] flex items-center justify-center mb-6 text-[#f29111] group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. INSURANCE TECHNOLOGY SOLUTIONS (Lists) */}
            <section className="py-[50px] bg-gray-50 relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {INSURANCE_TECHNOLOGY_SOLUTIONS.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px]">
                            {INSURANCE_TECHNOLOGY_SOLUTIONS.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {INSURANCE_TECHNOLOGY_SOLUTIONS.categories.map((col, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                                <ul className="space-y-4 text-left">
                                    {col.items.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-4">
                                            <span className="text-[#f29111] mt-1 shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="text-[#14133b] font-medium leading-relaxed">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. INSURANCE MANAGEMENT SOFTWARE SOLUTIONS */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {INSURANCE_MANAGEMENT_SOFTWARE.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {INSURANCE_MANAGEMENT_SOFTWARE.items.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-xl border-t-4 border-transparent hover:border-[#f29111] hover:bg-white hover:shadow-lg transition-all duration-300 group">
                                <div className="text-[#14133b] mb-6 group-hover:scale-110 transition-transform duration-300 origin-bottom">
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

            {/* 6. PORTFOLIO SECTION */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                subtitle={INSURANCE_PORTFOLIO.subtitle}
                title={INSURANCE_PORTFOLIO.title}
                description={INSURANCE_PORTFOLIO.description}
            />

            {/* 7. CONTACT SECTION */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
