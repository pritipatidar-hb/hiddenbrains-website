import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";
import banner from "@/images/web-design-development.webp"; // Using a placeholder banner for now
import {
    HIRE_WEB_DESIGNERS_HERO,
    HIRE_WEB_DESIGNERS_COUNTERS,
    HIRE_WEB_DESIGNERS_FEATURED,
    HIRE_WEB_DESIGNERS_PROCESS,
    HIRE_WEB_DESIGNERS_MODELS,
    HIRE_WEB_DESIGNERS_FAQ
} from "@/lib/hire-web-designers-data";
import { HIRE_MOBILE_PROCESS } from "@/lib/hire-mobile-apps-data";

export const metadata = {
    title: "Hire Dedicated Web Designers UK | Hidden Brains UK",
    description: "Hire Dedicated Web Designers UK, Who Add a Value and Touch of Uniqueness to Your Solutions. Hidden Brains provides flexible options to hire user Interface specialists and web designers.",
};

export default async function HireWebDesignersPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Web Designers UK"
                title={HIRE_WEB_DESIGNERS_HERO.title}
                description={HIRE_WEB_DESIGNERS_HERO.excerpt}
                ctaText={HIRE_WEB_DESIGNERS_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Web Designers UK" }
                ]}
                title="Hire Web Designer to Transform Your Vision"
                counters={HIRE_WEB_DESIGNERS_COUNTERS}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        <p>
                            Looking to Hire web designer in the UK for your project? Hidden Brains provides flexible options to hire user Interface specialists and web designers for your project at affordable rates. For us user interface design is all about simplicity and ease of use. Our UI Designers are proficient and professionally skilled in HTML, CSS, and HTML5, which help them in transforming ideas into reality, and deliver high-quality web designing solutions.
                        </p>
                        <p>
                            You can hire web designers on hourly, monthly, or on the full-time equivalent (FTE) arrangement basis, as per your business or project requirements. Our web designers will translate your prototype site navigation and strategy into a highly intuitive website.
                        </p>
                    </div>
                }
            />

            <FeatureDetailedGrid items={HIRE_WEB_DESIGNERS_FEATURED} />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Interactive Design Solutions by Our Top Web Designer Team"
                subtitle="Our Work"
                description="Our portfolio of web design spans across diverse industry verticals. We comply with the latest web technology standards."
            />

            <StepperProcessSection
                title="Hire UI Designer"
                description="Hire experts and creative web designers for your team to build appealing and user friendly interfaces."
                items={HIRE_WEB_DESIGNERS_PROCESS}
            />

            <HiringModelsSection
                description="Our expert website designers are at your service once you hire them on remotely, hourly, part-time or full time basis. Get your coding done by experienced remote web designer by following a transparent procedure."
                models={HIRE_WEB_DESIGNERS_MODELS}
                bgClass="bg-white"
            />

            <FAQSection
                faqs={HIRE_WEB_DESIGNERS_FAQ}
                title="Hire Web Designers FAQs"
                description="Common questions about hiring dedicated web designers."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
