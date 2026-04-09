import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import heroBanner from "@/images/Ecommerce-Industries-Banner.webp"; // Fallback banner

import {
    ECOMMERCE_HERO,
    ECOMMERCE_INTRODUCTION,
    ECOMMERCE_SOLUTIONS,
    ECOMMERCE_TECHNOLOGIES,
    ECOMMERCE_WHY_CHOOSE_US,
    ECOMMERCE_FAQ,
    ECOMMERCE_PORTFOLIO
} from "@/lib/ecommerce-data";

export const metadata = {
    title: "Ecommerce IT Solutions | Software Development",
    description: "End-to-End Ecommerce Solutions & Services that adds value to your business.",
};

export default async function EcommercePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={heroBanner}
                alt="Ecommerce IT Solutions"
                title={ECOMMERCE_HERO.title}
                description={ECOMMERCE_HERO.description}
                ctaText={ECOMMERCE_HERO.buttonText}
                ctaHref={ECOMMERCE_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Custom eCommerce Solutions Provider" }
                ]}
                title={ECOMMERCE_INTRODUCTION.title}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        {ECOMMERCE_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Our Range of Ecommerce App Development Solutions */}
            <section className="py-[80px] bg-[#14133b] text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-[36px] font-semibold mb-4 leading-tight">
                            {ECOMMERCE_SOLUTIONS.title}
                        </h2>
                        <p className="text-gray-300 text-[18px] leading-relaxed">
                            {ECOMMERCE_SOLUTIONS.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ECOMMERCE_SOLUTIONS.items.map((item, idx) => (
                            <div key={idx} className="bg-[#1c1b4b] rounded-xl p-8 hover:bg-[#25245c] transition-all duration-300 group">
                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#f29111] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Most Disruptive Technologies */}
            <section className="py-[80px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {ECOMMERCE_TECHNOLOGIES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] leading-relaxed">
                            {ECOMMERCE_TECHNOLOGIES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ECOMMERCE_TECHNOLOGIES.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-[#f29111] mb-6 group-hover:scale-110 group-hover:bg-[#f29111] group-hover:text-white transition-all duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#14133b] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {ECOMMERCE_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] leading-relaxed">
                            {ECOMMERCE_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ECOMMERCE_WHY_CHOOSE_US.items.map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-wrap gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-gray-100">
                                <div className="text-[#f29111] shrink-0 transform group-hover:-translate-y-1 transition-transform">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#14133b] mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#6a7c92] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQSection
                title={ECOMMERCE_FAQ.title}
                description={ECOMMERCE_FAQ.description}
                faqs={ECOMMERCE_FAQ.items}
            />

            {/* Portfolio Section */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)} // You could filter by ecommerce if you map projects in data
                subtitle="PORTFOLIO"
                title={ECOMMERCE_PORTFOLIO.title}
                description={ECOMMERCE_PORTFOLIO.description}
            />

            {/* Contact Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
