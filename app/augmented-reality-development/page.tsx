import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";


import banner from "@/images/augmented-reality-development.webp";

import {
    AR_HERO,
    AR_INTRO,
    AR_SERVICES,
    AR_INDUSTRIES,
    AR_TESTIMONIALS
} from "@/lib/ar-app-development-data";

export const metadata = {
    title: "AR App Development Company | Augmented Reality Services | Hidden Brains",
    description: "Augmented Reality (AR) app development company UK. We offer AR app development services for Android and iOS using ARKit and ARCore.",
};

export const revalidate = 3600;

export default async function AugmentedRealityDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Augmented Reality App Development"
                title={AR_HERO.title}
                description={AR_HERO.description}
                ctaText={AR_HERO.ctaText}
                ctaHref={AR_HERO.ctaHref}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Emerging Technology Services", href: "/emerging-technology-services" },
                    { label: "AR App Development" }
                ]}
                title={AR_INTRO.title}
                content={(
                    <div className="space-y-6 text-[#6a7c92]">
                        {AR_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                )}
                listItems={AR_INTRO.listItems}
            />

            <section className="py-[50px] bg-[#f7f8fd] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">AR App Development Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                        {AR_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 flex flex-col items-center text-center">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-semibold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <IndustryGridSection
                title="Industry We Serve"
                description="As a top AR app development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={AR_INDUSTRIES}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Best Augmented Reality App Development Services"
                description="Providing smart Augmented reality app development services at competitive pricing, We have worked with over 2400+ clients from all over the world."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider
                testimonials={AR_TESTIMONIALS}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
