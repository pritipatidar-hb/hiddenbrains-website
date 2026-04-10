import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { ServicesSection } from "@/components/shared/ServicesSection";


import banner from "@/images/magento-development-Banner.webp";

import {
    MAGENTO_HERO,
    MAGENTO_LIST_ITEMS,
    MAGENTO_SERVICES,
    MAGENTO_INDUSTRIES,
    MAGENTO_WHY_CHOOSE,
    MAGENTO_GUIDE_ITEMS,
    MAGENTO_GUIDE_DETAILS,
    MAGENTO_TESTIMONIALS,
    MAGENTO_FAQS,
    MAGENTO_PORTFOLIO
} from "@/lib/magento-development-data";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";

export const metadata = {
    title: "Magento Development Services Company in UK | Hidden Brains",
    description: "Hidden Brains UK is a dominant name in Magento development services, providing a wide range of eCommerce solutions using Magento 2 framework.",
};

export default async function MagentoDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Magento Development Company"
                title={MAGENTO_HERO.title}
                description={MAGENTO_HERO.excerpt}
                ctaText={MAGENTO_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Open Source Customization", href: "/open-source-customization" },
                    { label: "Magento Development" }
                ]}
                title="One Stop Shop for Magento Development Services Company in UK"
                listItems={MAGENTO_LIST_ITEMS}
                content={
                    <>
                        <p className="mb-[20px] text-[#6a7c92]">
                            Hidden Brains UK is a dominant name in Magento development services, providing a wide range of eCommerce solutions. Magento 2 is the most preferred <strong>PHP-based open-source framework</strong>, widely used by Magento 2 developers to create lucrative, <strong>fast-performing</strong>, and scalable eCommerce websites and web apps.
                        </p>
                        <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[15px]">Experienced Magento Developers</h3>
                        <p className="mb-[15px] text-[#6a7c92]">
                            Hidden Brains employs certified Magento developers who are well-versed with the technology. Hire open-source professionals from Hidden Brains who utilise the finest tools and features of Magento for website creation. The teamwork of such highly qualified industry experts results in the development of a website that is not only appealing but also engaging and user-friendly.
                        </p>
                        <p className="text-[#6a7c92]">
                            These professionals ensure the swift integration of new solutions into the existing Magento ecosystem as per the client’s requirements.
                        </p>
                    </>
                }
            />



            {/* Services Section */}
            <ServicesSection
                title="Magento Development Services"
                variant="simple"
                background="bg-[#f7f8fd]"
                services={MAGENTO_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />



            <IndustryGridSection
                title="Industry We Serve"
                description="As a top Magento development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={MAGENTO_INDUSTRIES}
            />


            {/* Our Work Section */}
            <PortfolioSection
                subtitle={MAGENTO_PORTFOLIO.subtitle}
                title={MAGENTO_PORTFOLIO.title}
                description={MAGENTO_PORTFOLIO.description}
                projects={MAGENTO_PORTFOLIO.projects}
            />

            {/* Testimonials Section */}
            <TestimonialSlider
                testimonials={MAGENTO_TESTIMONIALS}
            />

            {/* Magento Company Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[18px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Hidden Brains: Magento Development Company</h2>
                        <p className="mx-auto text-[#6a7c92] text-[16px] md:text-[16px] font_regular leading-relaxed">
                            We at Hidden Brains provide a full range of Magento shopping cart development, from design and development to hosting and support for the client's Magento web project.
                        </p>
                        <p className="mx-auto text-[#6a7c92] md:text-[16px] font_regular leading-relaxed mt-[10px]">
                            Our decades of experience in the field of Magento development speak to our expertise and the success that follows.
                        </p>
                        <p className="mx-auto text-[#6a7c92] md:text-[16px] font_regular leading-relaxed mt-[10px]">
                            Best known as the best Magento development company in the UK, Hidden Brains uses advanced technologies to build scalable web projects that outperform market competition.
                        </p>
                    </div>
                </div>
            </section>
            <FAQSection
                faqs={MAGENTO_FAQS}
                title="Magento Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
