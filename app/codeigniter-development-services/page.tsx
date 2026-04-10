import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { ServicesSection } from "@/components/shared/ServicesSection";

import banner from "@/images/codeigniter-development-services.webp";

import {
    CODEIGNITER_HERO,
    CODEIGNITER_COUNTERS,
    CODEIGNITER_SERVICES,
    CODEIGNITER_INDUSTRIES,
    CODEIGNITER_GUIDE_ITEMS,
    CODEIGNITER_GUIDE_DETAILS,
    CODEIGNITER_FAQS,
    CODEIGNITER_TESTIMONIALS,
    CODEIGNITER_PROJECTS,
    CODEIGNITER_REASONS
} from "@/lib/codeigniter-development-data";

export const metadata = {
    title: "CodeIgniter Development Company in The UK | Hidden Brains",
    description: "Hidden Brains is a top CodeIgniter web development company in the UK, offering custom CodeIgniter application development services.",
};

export default async function CodeIgniterDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="CodeIgniter Development Company"
                title={CODEIGNITER_HERO.title}
                description={CODEIGNITER_HERO.excerpt}
                ctaText={CODEIGNITER_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "CodeIgniter" }
                ]}
                title="Best CodeIgniter Development Company in the UK"
                counters={CODEIGNITER_COUNTERS}
                content={
                    <>
                        {/* <p className="mb-[10px]">
                            Hidden Brains UK is known as the best CodeIgniter web development company in the UK and Europe.
                        </p> */}
                        <p className="mb-[10px]">
                             Hidden Brains UK is known as the best CodeIgniter web development company in the UK and Europe.CodeIgniter is an open-source framework based on PHP to build highly intuitive and feature-rich websites. We ensure the highest level of services through profound industry expertise and a commitment to innovation. Right from installation and development of custom CodeIgniter applications to final integration, our team provides feature-rich CodeIgniter web development solutions.
                        </p>
                        <p className="mb-[10px]">
                            Our main focus is to deliver dynamic, world-class web applications to enhance your business productivity. We allow you to leverage all the benefits of the CodeIgniter powerful toolkit and integrate all the latest market trends that ensure you stay ahead in the competition. Hidden Brains has a blend of professional and dedicated CodeIgniter PHP developers for hire to understand your requirements and transform them into reality.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your CodeIgniter Development project!"
            />

            {/* Services Section */}
            <ServicesSection
                title="CodeIgniter Website Development Services"
                description="Take a look at the skills of our Codeigniter PHP developers that you can get in your project by hiring us."
                variant="simple"
                background="bg-gray-50"
                services={CODEIGNITER_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Industry We Serve</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                            As a top CodeIgniter development company, we have an industry-wise process-driven approach that helps us to meet our client’s project requirements, timescales, and budgets.
                        </p>
                    </div>
                    <IndustrySlider industries={CODEIGNITER_INDUSTRIES} />
                </div>
            </section>

            {/* Why Hidden Brains Section */}
            <BenefitsSection
                title="Why Hidden Brains Is a Top CodeIgniter Web Development Company in The UK?"
                description="Hidden Brains is one of the most trustworthy companies you can rely on for Codeigniter development. Take a look at our core values that distinguish us in the market."
                items={CODEIGNITER_REASONS}
            />

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here is a guide to help you with the common questions related to Codeigniter web development"
                items={CODEIGNITER_GUIDE_ITEMS}
                details={CODEIGNITER_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Value-Driven CodeIgniter Development Services"
                description="Our highly qualified and extremely dedicated CodeIgniter developers work on client’s projects to build robust website applications."
                projects={CODEIGNITER_PROJECTS}
            />

            <TestimonialsSection
                testimonials={CODEIGNITER_TESTIMONIALS}
            />

            <FAQSection
                faqs={CODEIGNITER_FAQS}
                title="CodeIgniter Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
