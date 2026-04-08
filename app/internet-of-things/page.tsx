import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";


import banner from "@/images/internet-of-things-Banner.webp";

import {
    IOT_HERO,
    IOT_INTRO,
    IOT_SERVICES,
    IOT_INDUSTRIES,
    IOT_TESTIMONIALS
} from "@/lib/iot-solutions-data";

export const metadata = {
    title: "Internet of Things Solutions | Hidden Brains",
    description: "High-Performance Internet of Things (IoT) Solutions for business scale and connected world ecosystem.",
};

export default async function InternetOfThingsPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Internet of Things Solutions"
                title={IOT_HERO.title}
                description={IOT_HERO.description}
                ctaText={IOT_HERO.ctaText}
                ctaHref={IOT_HERO.ctaHref}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Emerging Technology Services", href: "/emerging-technology-services" },
                    { label: "Internet Of Things" }
                ]}
                title={IOT_INTRO.title}
                content={(
                    <div className="space-y-4 text-[#6a7c92]">
                        {IOT_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                )}
                listItems={IOT_INTRO.listItems}
                bgColor="bg-gray-50"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-[#f7f8fd] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Internet Of Things Services</h2>
                    <p className="text-[#6a7c92] max-w-3xl mx-auto mb-12">
                        As a top Internet of Things services provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                        {IOT_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full flex flex-col">
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
                description="As a top IoT company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={IOT_INDUSTRIES}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Best-In-Class Internet of Things (IoT) Development Services"
                description="Providing quality services at competitive pricing, we have worked with clients from all over the world."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider
                testimonials={IOT_TESTIMONIALS}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
