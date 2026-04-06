import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import openSource from "@/images/shopify-development.webp";

import { getData } from "@/lib/data";
import {
    SHOPIFY_SERVICES,
    WHY_CHOOSE_HB_SHOPIFY,
    SHOPIFY_FAQ,
    SHOPIFY_INTRO_LIST,
    SHOPIFY_INDUSTRIES,
    SHOPIFY_TESTIMONIALS
} from "@/lib/shopify-development-data";

import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialSlider } from "@/components/shared/TestimonialSlider";


import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";

export const metadata = {
    title: "Shopify Development Services UK | Hidden Brains",
    description: "Expert Shopify development services in the UK. We build custom Shopify stores, themes, and apps to grow your eCommerce business.",
};

export default async function ShopifyDevelopmentPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    // Filter projects for Shopify if available, otherwise use all
    const shopifyProjects = PROJECTS.filter((p: any) =>
        p.title.toLowerCase().includes('shopify') ||
        ['Catwalk88', 'Dublin Convention Bureau', 'Evil Escape Game', 'Food Express', 'Guess The Price', 'Cay Guide', 'Neoxeo App', 'Werko'].includes(p.title)
    );

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <HeroSection
                banner={openSource}
                alt="Shopify Development Services"
                title="Shopify Development Services"
                description="Custom Shopify Development Services for Startups, Mid-Size Businesses & Enterprises"
                minHeight="500px"
            />

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    { label: "Open Source Customization", href: "/open-source-customization" },
                    { label: "Shopify Development" }
                ]}
                title="Shopify Web Development Services Company in The UK"
                listItems={SHOPIFY_INTRO_LIST}
                content={
                    <>
                        <p className="mb-[10px]">
                            Hidden Brains is a renowned Shopify web development company that serves its clients with a responsive and sensational eCommerce website. 22+ years of experience in the field of development and record of serving over 2400+ clients worldwide are enough for anyone to place their trust in the company.
                        </p>
                        <p className="mb-[10px]">
                            Hidden Brains UK employs <strong>Certified Shopify Web developers</strong> who are well-versed with the use of the latest tools and technologies. As a leading Shopify development services company in the UK, we are regularly trained to keep themselves updated on the latest trends in the industry to deliver robust Shopify development services. Having a sound knowledge of current market trends and requirements, Hidden Brains Shopify theme development expert designs and develops a website that survives in the saturated online market.
                        </p>
                        <p>
                            With a highly talented Shopify web development expert working on the Shopify project, we promise to deliver the best of the Shopify development services to the clients. As a leading Shopify development services company, we provide customized eCommerce solutions across the globe. We ensure to <strong>make your eCommerce website</strong> set apart from the crowd, considerable enough to be noticed and catch the attention of the audience.
                        </p>
                    </>
                }
            />

            {/* Services Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Shopify Web Development Services</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] mx-auto font-normal leading-relaxed">
                            We offer a comprehensive suite of Shopify development services to help you build, launch, and grow your online presence.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SHOPIFY_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white border border-gray-100 p-[35px] transition-all duration-300 hover:shadow-xl group flex flex-col rounded-sm h-full">
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-[#f29111] bg-[#f8faff] group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-semibold text-[#14133b] mb-[11px] group-hover:text-black transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-8 flex-grow">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <IndustryGridSection
                title="Industry We Serve"
                description="As a top Shopify development company, we have a process-driven approach that helps us to meet our client's project requirements, timescales and budget."
                items={SHOPIFY_INDUSTRIES}
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="Our Work"
                title="Scalable Shopify Development Services"
                description="As a Top Shopify development company we have an expert team who has considerable knowledge and experience to build world-class and appealing eCommerce websites."
                projects={shopifyProjects.length > 0 ? shopifyProjects : PROJECTS.slice(0, 8)}
            />

            {/* Testimonials Section */}
            <TestimonialSlider testimonials={SHOPIFY_TESTIMONIALS} />

            {/* Why Choose Us Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains for Shopify Development Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[17px] mx-auto font-medium leading-relaxed">
                            Hidden Brains understands the importance of completing the project on time and maps out a full proof plan for project execution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {WHY_CHOOSE_HB_SHOPIFY.map((reason, index) => (
                            <div key={index} className="bg-[#f8faff] p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group rounded-sm text-center flex flex-col items-center">
                                <div className="text-[#f29111] mb-6 w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300 shadow-sm">
                                    {reason.icon}
                                </div>
                                <h4 className="text-[18px] font-semibold text-[#14133b] mb-3 leading-tight">
                                    {reason.title}
                                </h4>
                                <p className="text-[#6a7c92] text-[14px] leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection title="Shopify Web Development FAQs" faqs={SHOPIFY_FAQ} />



            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
