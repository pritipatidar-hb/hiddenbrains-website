import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";


import banner from "@/images/ecommerce-solutions.webp";

import {
    B2B_ECOMMERCE_HERO,
    B2B_ECOMMERCE_LIST_ITEMS,
    B2B_ECOMMERCE_INTRO,
    B2B_ECOMMERCE_SERVICES,
    B2B_ECOMMERCE_INDUSTRIES,
    B2B_ECOMMERCE_TESTIMONIALS
} from "@/lib/b2b-ecommerce-solutions-data";

export const metadata = {
    title: "B2B eCommerce Solutions | Hidden Brains",
    description: "Hidden Brains UK offers end-to-end B2B eCommerce solutions for manufacturers, wholesalers and distributors to simplify business workflows.",
};

export default async function B2B_EcommercePage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="B2B eCommerce Solutions"
                title={B2B_ECOMMERCE_HERO.title}
                description={B2B_ECOMMERCE_HERO.description}
                ctaText={B2B_ECOMMERCE_HERO.ctaText}
                ctaHref={B2B_ECOMMERCE_HERO.ctaHref}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Ecommerce Solutions", href: "/ecommerce-solutions" },
                    { label: "B2B eCommerce Solutions" }
                ]}
                title={B2B_ECOMMERCE_INTRO.title}
                content={(
                    <div className="space-y-6 text-[#6a7c92]">
                        {B2B_ECOMMERCE_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                        <div className="mt-[10px]">
                            <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4 pt-4 leading-tight">
                                {B2B_ECOMMERCE_INTRO.secondaryTitle}
                            </h3>
                            {B2B_ECOMMERCE_INTRO.secondaryContent.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                )}
                listItems={B2B_ECOMMERCE_LIST_ITEMS}
                bgColor="bg-gray-50"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-[#f7f8fd] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">B2B eCommerce Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                        {B2B_ECOMMERCE_SERVICES.map((service, idx) => (
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
                description="As a top B2B eCommerce solutions provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={B2B_ECOMMERCE_INDUSTRIES}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="B2B eCommerce Software Solutions"
                description="Secure, scalable and high-performance B2B eCommerce sites for optimum performance."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider
                testimonials={B2B_ECOMMERCE_TESTIMONIALS}
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">
                            Why Hidden Brains for B2B eCommerce Solutions?
                        </h2>
                        <div className="text-[#6a7c92] text-lg leading-relaxed space-y-6">
                            <p>
                                Our experienced B2B eCommerce web programmers extend support into the complex problems associated with implementations. We focus on developing simple B2B eCommerce solutions that guide your target audience through the purchase process in a seamless manner.
                            </p>
                            <p>
                                At Hidden Brains, our team has integrated eCommerce platforms with various back-office systems such as ERP, CRM, and retail systems to increase overall efficiency and streamline operations of your business.
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
