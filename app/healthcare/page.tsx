import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import { ProcessSection } from "@/components/shared/ProcessSection";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";

import healthcareBanner from "@/images/healthcare_banner.png";

import {
    HEALTHCARE_HERO,
    HEALTHCARE_INTRODUCTION,
    HEALTHCARE_WHAT_WE_DO,
    HEALTHCARE_TECHNOLOGIES,
    HEALTHCARE_WHY_CHOOSE_US,
    HEALTHCARE_GUIDE_ITEMS,
    HEALTHCARE_GUID_DETAILS,
    HEALTHCARE_PROCESS,
    HEALTHCARE_FAQ,
    HEALTHCARE_PORTFOLIO
} from "@/lib/healthcare-data";

export const metadata = {
    title: "Healthcare App Development Company in The UK | Medical Software Solutions",
    description: "Get custom healthcare web and mobile app development services in UK. We develop HIPAA compliant medical apps, wellness apps, and Telemedicine systems. Expert Healthcare IT services for doctors, clinics, and patients.",
};

export default async function HealthcarePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white text-[#14133b]">
            <HeroSection
                banner={healthcareBanner}
                alt="Healthcare App Development"
                title={HEALTHCARE_HERO.title}
                description={HEALTHCARE_HERO.description}
                ctaText={HEALTHCARE_HERO.buttonText}
                ctaHref={HEALTHCARE_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Healthcare" }
                ]}
                title={HEALTHCARE_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {HEALTHCARE_INTRODUCTION.content.map((p, i) => (
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
                            {HEALTHCARE_WHAT_WE_DO.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                            {HEALTHCARE_WHAT_WE_DO.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HEALTHCARE_WHAT_WE_DO.items.map((item, index) => (
                            <div key={index} className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-4 hover:border-b-[#f29111] bg-white group flex flex-col items-center text-center">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
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

            {/* Latest Technologies */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {HEALTHCARE_TECHNOLOGIES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                            {HEALTHCARE_TECHNOLOGIES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HEALTHCARE_TECHNOLOGIES.items.map((item, index) => (
                            <div key={index} className="p-10 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-50 flex flex-col items-center text-center group">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <CtaSection title="Need custom healthcare software that drives results? Let's connect!" /> */}

            {/* Why Choose Us */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {HEALTHCARE_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center  mx-auto">
                            {HEALTHCARE_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {HEALTHCARE_WHY_CHOOSE_US.items.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-[35px] rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all hover:bg-gray-50 group">
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
                items={HEALTHCARE_GUIDE_ITEMS}
                details={HEALTHCARE_GUID_DETAILS}
                title="Healthcare App Development Guide"
                description="Everything you need to know about developing healthcare software and mobile applications in one comprehensive guide."
            />

            <ProcessSection
                title="Healthcare App Development Process"
                description="Our team follows a process-driven approach to deliver high-quality, secure, and reliable healthcare IT solutions."
                processItems={HEALTHCARE_PROCESS}
            />

            <FAQSection
                faqs={HEALTHCARE_FAQ}
                title="Healthcare App Development FAQs"
                description="Common questions about our healthcare software development services answered by our experts."
            />
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={HEALTHCARE_PORTFOLIO.title}
                subtitle="Our Work"
                description={HEALTHCARE_PORTFOLIO.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
