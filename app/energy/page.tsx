import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import energyBanner from "@/images/Energy-Industries-Banner.webp";

import {
    ENERGY_HERO,
    ENERGY_INTRODUCTION,
    ENERGY_SERVICES,
    ENERGY_FEATURES,
    ENERGY_SOLUTIONS,
    ENERGY_CTA,
    ENERGY_FAQ
} from "@/lib/energy-data";

export const metadata = {
    title: "Energy Industry Solutions & Software UK | Oil & Gas IT Services",
    description: "Advanced energy management software and IT solutions for oil and gas companies in the UK. Upstream, midstream, and downstream digital transformation.",
};

export default async function EnergyPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={energyBanner}
                alt="Energy Industry Solutions"
                title={ENERGY_HERO.title}
                description={ENERGY_HERO.description}
                ctaText={ENERGY_HERO.buttonText}
                ctaHref={ENERGY_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Energy" }
                ]}
                title={ENERGY_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {ENERGY_INTRODUCTION.content.map((p, i) => (
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
                                {ENERGY_SERVICES.subtitle}
                            </h5>
                            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px] leading-tight">
                                {ENERGY_SERVICES.title}
                            </h2>
                        </div>
                        <div>
                            <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                                {ENERGY_SERVICES.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {ENERGY_SERVICES.items.map((service, index) => (
                            <div key={index} className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors tracking-tight">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features List Section */}
            <section className="py-[60px] bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mx-auto mb-[60px]">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[20px]">
                            {ENERGY_FEATURES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto leading-relaxed">
                            {ENERGY_FEATURES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
                        {ENERGY_FEATURES.lists.map((list, listIdx) => (
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

            {/* Solutions Grid */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b]">
                            {ENERGY_SOLUTIONS.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ENERGY_SOLUTIONS.items.map((solution, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                                <div className="p-8 pb-4">
                                    <h3 className="text-[24px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                        {solution.content}
                                    </p>
                                </div>
                                <div className="mt-auto p-8 pt-0">
                                    <div className="w-full h-1 bg-gray-50 overflow-hidden rounded-full">
                                        <div className="h-full bg-[#f29111] transition-all duration-500 w-0 group-hover:w-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Reduce Administrative Costs with our Energy Management Software"
                subtitle="Our Work"
                description="We build custom energy efficiency software that provides real-time access and visibility of operations through easily accessible dashboard."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
