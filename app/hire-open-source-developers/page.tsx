import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";
import banner from "@/images/open-source-development.webp"; // Using available banner if exists, or fallback
import {
    HIRE_OPEN_SOURCE_HERO,
    HIRE_OPEN_SOURCE_COUNTERS,
    HIRE_OPEN_SOURCE_FEATURED,
    HIRE_OPEN_SOURCE_PROCESS,
    HIRE_OPEN_SOURCE_MODELS,
    HIRE_OPEN_SOURCE_FAQ
} from "@/lib/hire-open-source-data";

export const metadata = {
    title: "Hire Open Source Developer | Dedicated Open Source Experts UK",
    description: "Hire Open Source Developers to build robust and scalable bespoke solutions. Our experts specialize in CMS development, e-commerce, and custom open-source customization.",
};

export default async function HireOpenSourceDevelopersPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Open Source Developer"
                title={HIRE_OPEN_SOURCE_HERO.title}
                description={HIRE_OPEN_SOURCE_HERO.excerpt}
                ctaText={HIRE_OPEN_SOURCE_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Open Source Developer" }
                ]}
                title="Proficient & Skilled Open Source Developer for Hire"
                counters={HIRE_OPEN_SOURCE_COUNTERS}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        <p>
                            Hidden Brains is a reliable provider of web development services offering flexible options to hire expert Open Source developers, who work dedicatedly for your projects. Whether it is CMS or e-commerce, we offer expert Open Source developers exclusively for your project.
                        </p>
                        <p>
                            With this hiring model, you can manage your resources directly and all the source codes will be owned by you. Our dedicated resources offer you the flexibility to hire top Open Source developers at affordable rates as long as you need them for your project at a monthly fee.
                        </p>
                        <p>
                            You have the option to hire one Open Source developer and scale the team based on your requirements. You have the flexibility to hire a developer on full-time, part-time or even hourly basis depending on your project requirements.
                        </p>
                    </div>
                }
            />

            <FeatureDetailedGrid items={HIRE_OPEN_SOURCE_FEATURED} />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Hire Expert Open Source Developer - View Our Portfolio"
                subtitle="Our Work"
                description="Experienced and skilled team of Open Source Developer for your projects at affordable pricing."
            />

            <StepperProcessSection
                title="Hire Dedicated Open Source Developer"
                description="Top Developers for all your open source customization requirements across different industry verticals."
                items={HIRE_OPEN_SOURCE_PROCESS}
            />

            <HiringModelsSection
                description="Our expert open source developers are at your service once you hire them on remotely, hourly, part-time or full time basis. Get your coding done by experienced remote open source developers by following a transparent procedure."
                models={HIRE_OPEN_SOURCE_MODELS}
                bgClass="bg-white"
            />

            <FAQSection
                faqs={HIRE_OPEN_SOURCE_FAQ}
                title="Hire Open Source Developers FAQs"
                description="Common questions about hiring dedicated open source developers."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
