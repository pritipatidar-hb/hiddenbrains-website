import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import travelBanner from "@/images/Healthcare-Industries-Banner.webp"; // Using generic banner due to image generation quota

import {
    TRAVEL_HERO,
    TRAVEL_INTRODUCTION,
    TRAVEL_SERVICES,
    TRAVEL_FEATURES,
    TRAVEL_WHY_CHOOSE,
    TRAVEL_FAQ
} from "@/lib/travel-hospitality-data";

export const metadata = {
    title: "Travel & Hospitality IT Solutions | Software Development UK",
    description: "Innovative travel and hospitality software development services. We specialize in custom booking systems, travel management portals, and hotel software solutions in the UK.",
};

export default async function TravelHospitalityPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={travelBanner}
                alt="Travel & Hospitality IT Solutions"
                title={TRAVEL_HERO.title}
                description={TRAVEL_HERO.description}
                ctaText={TRAVEL_HERO.buttonText}
                ctaHref={TRAVEL_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Travel & Hospitality" }
                ]}
                title={TRAVEL_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {TRAVEL_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Services Section */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[60px]">
                        <h5 className="text-[#f29111] font-bold text-[14px] uppercase tracking-widest mb-4">
                            {TRAVEL_SERVICES.subtitle}
                        </h5>
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[20px]">
                            {TRAVEL_SERVICES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto leading-relaxed">
                            {TRAVEL_SERVICES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TRAVEL_SERVICES.items.map((service, index) => (
                            <div key={index} className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[16px] leading-relaxed">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b]">
                            {TRAVEL_FEATURES.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {TRAVEL_FEATURES.items.map((feature, index) => (
                            <div key={index} className="flex flex-wrap gap-6 items-start">
                                <div className="w-16 h-16 bg-[#f8faff] rounded-xl flex items-center justify-center text-[#f29111] flex-shrink-0 group-hover:bg-[#f29111] transition-all">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-bold text-[#14133b] mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[#6a7c92] text-[15px] leading-relaxed">
                                        {feature.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl border-y border-gray-200 py-20 translate-y-[-1px]">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-6">
                            {TRAVEL_WHY_CHOOSE.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto">
                            {TRAVEL_WHY_CHOOSE.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {TRAVEL_WHY_CHOOSE.items.map((item, index) => (
                            <div key={index} className="p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#f29111]"></div>
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={TRAVEL_FAQ}
                title="Travel & Hospitality IT Solutions FAQ"
                description="Common questions about our digital transformation services for the travel industry."
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Delivering Travel and Hospitality Solutions"
                subtitle="Our Portfolio"
                description="We have delivered a wide range of innovative Travel and Hospitality solutions - Have a look on our work."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
