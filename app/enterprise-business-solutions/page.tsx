import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { ServicesSection } from "@/components/shared/ServicesSection";


import banner from "@/images/enterprise-business-solutions.webp";

import {
    ENTERPRISE_HERO,
    ENTERPRISE_LIST_ITEMS,
    ENTERPRISE_INTRO,
    ENTERPRISE_SERVICES,
    ENTERPRISE_INDUSTRIES,
    ENTERPRISE_TESTIMONIALS
} from "@/lib/enterprise-business-solutions-data";

export const metadata = {
    title: "Enterprise Business Solutions | Hidden Brains",
    description: "Custom Web and Mobile App Development Services for Startups, Mid-Size Businesses & Enterprises",
};

export default async function EnterpriseBusinessSolutionsPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Enterprise Business Solutions"
                title={ENTERPRISE_HERO.title}
                description={ENTERPRISE_HERO.description}
                ctaText={ENTERPRISE_HERO.ctaText}
                ctaHref={ENTERPRISE_HERO.ctaHref}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Software Development", href: "/software-development" },
                    { label: "Enterprise Business Solutions" }
                ]}
                title={ENTERPRISE_INTRO.title}
                content={(
                    <div className="space-y-6 text-[#6a7c92]">
                        {ENTERPRISE_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                        <div className="mt-[10px]">
                            <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4 pt-4 leading-tight">
                                {ENTERPRISE_INTRO.secondaryTitle}
                            </h3>
                            {ENTERPRISE_INTRO.secondaryContent.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                )}
                listItems={ENTERPRISE_LIST_ITEMS}
                bgColor="bg-gray-50"
            />

            {/* Services Section */}
            <ServicesSection
                title="Enterprise Business Services"
                variant="simple"
                background="bg-[#f7f8fd]"
                services={ENTERPRISE_SERVICES.map(service => ({
                    title: service.title,
                    icon: service.icon
                }))}
            />

            <IndustryGridSection
                title="Industry We Serve"
                description="As a top Enterprise Business Solutions provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={ENTERPRISE_INDUSTRIES}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Robust Enterprise Business Solutions"
                description="We deliver enterprise solutions that help you manage business operations and transform the way your enterprise runs."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider
                testimonials={ENTERPRISE_TESTIMONIALS}
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">
                            Advantages of Choosing Hidden Brains
                        </h2>
                        <div className="text-[#6a7c92] text-lg leading-relaxed space-y-6">
                            <p>
                                Hidden Brains works with you to build a personalized solution that meets your enterprise business needs. We amalgamate cloud solutions and business communication to smoothen your business operations. Our result-oriented approach to work and completely transparent work process ensures development of a robust enterprise business solution.
                            </p>
                            <p>
                                Hidden Brains has extensive experience in developing Enterprise Business Solutions that integrates enterprise resource planning, performance management and business intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
