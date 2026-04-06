import dynamic from 'next/dynamic';
import React from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import { StepperProcessSection } from "@/components/shared/StepperProcessSection";

import { HiringModelsSection } from "@/components/shared/HiringModelsSection";

// import { TestimonialsSection } from "@/components/home/TestimonialsSection";
// import { Contact } from "@/components/shared/Contact";
import { getData } from "@/lib/data";
// import { TESTIMONIALS } from "@/lib/constants";
import {
    HIRE_SHOPIFY_HERO,
    HIRE_SHOPIFY_COUNTERS,
    HIRE_SHOPIFY_FEATURED,
    HIRE_SHOPIFY_PROCESS,
    HIRE_SHOPIFY_FAQ,
    HIRE_SHOPIFY_MODELS
} from "@/lib/hire-shopify-data";
import banner from "@/images/hire-shopify-developer.webp";


export const metadata = {
    title: "Hire Shopify Developers UK | Dedicated Shopify Experts",
    description: "Hire certified Shopify developers from Hidden Brains UK. We offer flexible models to hire expert Shopify app developers on hourly, part-time, and full-time basis."
};

export default async function HireShopifyDeveloperPage() {
    const data = await getData();

    return (
        <main className="min-h-screen">
            <HeroSection
                title={HIRE_SHOPIFY_HERO.title}
                description={HIRE_SHOPIFY_HERO.excerpt}
                ctaText={HIRE_SHOPIFY_HERO.cta}
                ctaHref="/contact"
                banner={banner}
                alt="Shopify Development Services"
            />

            <IntroductionSection
                title="Hire Shopify App Developer"
                content={
                    <div >
                        <p className='text-base font-normal text-[#6a7c92] mb-[12px]'>
                            Hidden Brains offers flexible models to hire expert Shopify developers on hourly, part-time, and full-time basis at affordable pricing. Whether you are looking to develop an eCommerce site from scratch or completely overhaul your existing website, our team will provide technical expertise to build scalable and secure eCommerce sites adhering to the highest levels of industry standards.
                        </p>
                        <p className="text-base font-normal text-[#6a7c92] mb-[12px]">
                            You have the option to hire one Shopify app developer and later increase Shopify developer team size based on your requirements. The Shopify web developer team size can be quickly adjusted to meet your business requirements. No hidden charges or upfront investment throughout the course of the project.
                        </p>
                        <p className="text-base font-normal text-[#6a7c92] mb-[12px]">
                            Hire our industry-best Shopify web developer to get a competitive advantage and steer ahead of your competitors. Our Shopify developer will provide bespoke solutions to meet your business needs and ensure that you focus on your core eCommerce business.
                        </p>
                    </div>
                }
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers", href: "/hire-dedicated-developers" },
                    { label: "Open Source Developer", href: "/hire-open-source-developers" },
                    { label: "Shopify Developer" }
                ]}
                counters={HIRE_SHOPIFY_COUNTERS}
            />

            <FeatureDetailedGrid
                items={HIRE_SHOPIFY_FEATURED}
                bgClass="bg-[#f8faff]"
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Hire Shopify Experts for Ecommerce Solutions- Our Portfolio"
                subtitle="Our Work"
                description="Industry and domain-specific eCommerce solutions for increased audience reach and improved bottom-line results."
            />

            <StepperProcessSection
                title="Hire Shopify Web Designer and Developer"
                description="Our team of expert Shopify developer will fill the gaps in your Shopify project, while maintaining complete transparency and control."
                items={HIRE_SHOPIFY_PROCESS.map(p => ({
                    step: p.id.toString(),
                    title: p.title,
                    content: p.description
                }))}
            />

            <HiringModelsSection
                description="Our expert Shopify developers are at your service once you hire them on remotely, hourly, part-time or full time basis."
                models={HIRE_SHOPIFY_MODELS}
                bgClass="bg-[#f8faff]"
            />



            <FAQSection
                faqs={HIRE_SHOPIFY_FAQ}
                title="Hire Shopify Developers FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
