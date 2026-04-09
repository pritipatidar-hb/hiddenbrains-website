import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import heroBanner from "@/images/Social-Networking-Industries-Banner.webp"; // Fallback banner

import {
    SOCIAL_NETWORKING_HERO,
    SOCIAL_NETWORKING_INTRODUCTION,
    SOCIAL_NETWORKING_WHAT_WE_DO,
    SOCIAL_NETWORKING_SOLUTIONS,
    SOCIAL_NETWORKING_COMPANY,
    SOCIAL_NETWORKING_PORTFOLIO
} from "@/lib/social-networking-data";

export const metadata = {
    title: "Social Networking Solutions | Software Development",
    description: "Connecting Users and Creating a Richer Community with Custom Social Networking Solutions",
};

export default async function SocialNetworkingPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={heroBanner}
                alt="Social Networking Solutions"
                title={SOCIAL_NETWORKING_HERO.title}
                description={SOCIAL_NETWORKING_HERO.description}
                ctaText={SOCIAL_NETWORKING_HERO.buttonText}
                ctaHref={SOCIAL_NETWORKING_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Social Networking Solutions" }
                ]}
                title={SOCIAL_NETWORKING_INTRODUCTION.title}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        {SOCIAL_NETWORKING_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* WHAT WE DO */}
            <section className="py-[80px] bg-[#14133b] text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 mb-16">
                        <div className="flex-1">
                            <h5 className="text-[#f29111] uppercase font-bold text-sm tracking-widest mb-4">
                                {SOCIAL_NETWORKING_WHAT_WE_DO.superTitle}
                            </h5>
                            <h2 className="text-[26px] md:text-[36px] font-semibold leading-tight">
                                {SOCIAL_NETWORKING_WHAT_WE_DO.title}
                            </h2>
                        </div>
                        <div className="flex-1 flex items-center">
                            <p className="text-gray-300 text-[18px] leading-relaxed">
                                {SOCIAL_NETWORKING_WHAT_WE_DO.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SOCIAL_NETWORKING_WHAT_WE_DO.items.map((item, idx) => (
                            <div key={idx} className="bg-[#1c1b4b] p-8 rounded-xl hover:bg-[#25245c] transition-colors group">
                                <div className="text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 group-hover:text-[#f29111]">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold">
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Networking Solutions (Lists) */}
            <section className="py-[80px] bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-16 relative z-10">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {SOCIAL_NETWORKING_SOLUTIONS.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] leading-relaxed">
                            {SOCIAL_NETWORKING_SOLUTIONS.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {SOCIAL_NETWORKING_SOLUTIONS.columns.map((column, colIdx) => (
                            <div key={colIdx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                                <ul className="space-y-4">
                                    {column.map((item, itemIdx) => (
                                        <li key={itemIdx} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
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

            {/* Application Development Company */}
            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b]">
                            {SOCIAL_NETWORKING_COMPANY.title}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SOCIAL_NETWORKING_COMPANY.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-[#14133b] rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="mb-6 h-[60px] flex items-center justify-start transform group-hover:scale-105 transition-transform duration-300">
                                    <img src={item.image} alt={item.title} className="max-h-full object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-[#14133b] mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                subtitle={SOCIAL_NETWORKING_PORTFOLIO.superTitle}
                title={SOCIAL_NETWORKING_PORTFOLIO.title}
                description={SOCIAL_NETWORKING_PORTFOLIO.description}
            />

            {/* Contact Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
