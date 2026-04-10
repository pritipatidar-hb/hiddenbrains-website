import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { ServicesSection } from "@/components/shared/ServicesSection";


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
            <ServicesSection
                title="Internet Of Things Services"
                description="As a top Internet of Things services provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                variant="simple"
                background="bg-[#f7f8fd]"
                services={IOT_SERVICES.map(service => ({
                    title: service.title,
                    icon: service.icon
                }))}
            />

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
