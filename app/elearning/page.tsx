import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import heroBanner from "@/images/elearning.webp"; // Using fallback banner, update if needed

import {
    ELEARNING_HERO,
    ELEARNING_INTRODUCTION,
    ELEARNING_SOLUTIONS,
    ELEARNING_TIERS,
    ELEARNING_WHY_CHOOSE_US,
    ELEARNING_GUIDE,
    ELEARNING_FAQS,
    ELEARNING_PORTFOLIO
} from "@/lib/elearning-data";

export const metadata = {
    title: "Custom E-Learning Solutions | Education App Development",
    description: "Custom e-Learning Solutions to Drive Engaging & Interactive Virtual Learning Specifically Designed for Your Organization.",
};

export default async function ELearningPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={heroBanner}
                alt="Custom E-Learning Solutions"
                title={ELEARNING_HERO.title}
                description={ELEARNING_HERO.description}
                ctaText={ELEARNING_HERO.buttonText}
                ctaHref={ELEARNING_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Education / eLearning" }
                ]}
                title={ELEARNING_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {ELEARNING_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* OUR SOLUTIONS */}
            <section className="py-[50px] bg-[#14133b] text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12 mb-16">
                        <div className="flex-1">
                            <h5 className="text-[#f29111] uppercase font-bold text-sm tracking-widest mb-4">
                                {ELEARNING_SOLUTIONS.superTitle}
                            </h5>
                            <h2 className="text-[26px] md:text-[36px] font-semibold leading-tight">
                                {ELEARNING_SOLUTIONS.title}
                            </h2>
                        </div>
                        <div className="flex-1 flex items-center">
                            <p className="text-gray-300 text-[18px] leading-relaxed">
                                {ELEARNING_SOLUTIONS.description}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ELEARNING_SOLUTIONS.items.map((item, idx) => (
                            <div key={idx} className="bg-[#1c1b4b] p-8 rounded-xl hover:bg-[#25245c] transition-colors group">
                                <div className="text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 group-hover:text-[#f29111]">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 mt-4 leading-relaxed line-clamp-4">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUPPORTING TIERS */}
            <section className="py-[50px] bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-16 relative z-10">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {ELEARNING_TIERS.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] leading-relaxed">
                            {ELEARNING_TIERS.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {ELEARNING_TIERS.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-6 text-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
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

            {/* WHY CHOOSE US */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {ELEARNING_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px]">
                            {ELEARNING_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ELEARNING_WHY_CHOOSE_US.items.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 border border-gray-100 hover:border-[#f29111] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group">
                                <div className="mb-6 text-[#14133b] group-hover:text-[#f29111] transition-colors duration-300">
                                    {item.icon}
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

            {/* EXPERT GUIDE */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">
                            {ELEARNING_GUIDE.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[18px]">
                            {ELEARNING_GUIDE.description}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar Navigation */}
                        <div className="md:w-1/3">
                            <div className="sticky top-24 space-y-2">
                                {ELEARNING_GUIDE.items.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={`#guide-${idx}`}
                                        className="block p-4 rounded-lg !text-[#14133b] hover:bg-white hover:shadow-sm hover:text-[#f29111] transition-all font-medium border border-transparent hover:border-gray-200"
                                    >
                                        {item.question}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 space-y-12">
                            {ELEARNING_GUIDE.items.map((item, idx) => (
                                <div key={idx} id={`guide-${idx}`} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                    <h3 className="text-2xl font-bold text-[#14133b] mb-6">
                                        {item.question}
                                    </h3>
                                    <p className="text-[#6a7c92] leading-relaxed text-lg">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-[50px]" style={{ backgroundColor: '#F8F9FA' }}>
                <FAQSection
                    faqs={ELEARNING_FAQS.items}
                    title={ELEARNING_FAQS.title}
                    description={ELEARNING_FAQS.description}
                />
            </section>

            {/* Portfolio Section */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                subtitle={ELEARNING_PORTFOLIO.superTitle}
                title={ELEARNING_PORTFOLIO.title}
                description={ELEARNING_PORTFOLIO.description}
            />

            {/* Contact Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
