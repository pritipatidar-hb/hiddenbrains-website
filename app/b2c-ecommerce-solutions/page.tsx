import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";

import banner from "@/images/B2C-ecommerce-solutions.webp";
import {
    B2C_ECOMMERCE_HERO,
    B2C_ECOMMERCE_LIST_ITEMS,
    B2C_ECOMMERCE_INTRO,
    B2C_ECOMMERCE_SERVICES,
    B2C_ECOMMERCE_INDUSTRIES,
    B2C_ECOMMERCE_TESTIMONIALS
} from "@/lib/b2c-ecommerce-solutions-data";

export const metadata = {
    title: "B2C eCommerce Solutions | Hidden Brains",
    description: "Connect Your Customers with Our Bespoke and Secure Online Solutions with Hidden Brains UK end-to-end B2C eCommerce solutions.",
};

export default async function B2C_EcommercePage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="B2C eCommerce Solutions"
                title={B2C_ECOMMERCE_HERO.title}
                description={B2C_ECOMMERCE_HERO.description}
                ctaText={B2C_ECOMMERCE_HERO.ctaText}
                ctaHref={B2C_ECOMMERCE_HERO.ctaHref}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Ecommerce Solutions", href: "/ecommerce-solutions" },
                    { label: "B2C ECommerce Solutions" }
                ]}
                title={B2C_ECOMMERCE_INTRO.title}
                content={(
                    <div className="space-y-6 text-[#6a7c92]">
                        {B2C_ECOMMERCE_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                        <div className="mt-10">
                            <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4 pt-4 leading-tight">
                                {B2C_ECOMMERCE_INTRO.secondaryTitle}
                            </h3>
                            {B2C_ECOMMERCE_INTRO.secondaryContent.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                )}
                listItems={B2C_ECOMMERCE_LIST_ITEMS}
                bgColor="bg-gray-50"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-[#f7f8fd] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">B2C eCommerce Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                        {B2C_ECOMMERCE_SERVICES.map((service, idx) => (
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
                description="As a top B2C eCommerce services provider development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={B2C_ECOMMERCE_INDUSTRIES}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Integrated B2C eCommerce Solutions"
                description="We deliver powerful and multi-channel eCommerce web solutions to businesses all over the globe."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider
                testimonials={B2C_ECOMMERCE_TESTIMONIALS}
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">
                            Why Select Hidden Brains for B2C eCommerce Solutions?
                        </h2>
                        <div className="text-[#6a7c92] text-lg leading-relaxed space-y-6">
                            <p>
                                We build appealing eCommerce websites that are easy to update and have all the tools you need to manage products, pricing and invoices. Whether you want to build a new eCommerce website or revamp an existing one for boosting sales, our team of B2C eCommerce web programmers is always ready at your service.
                            </p>
                            <p>
                                Hidden Brains has a proven track record of building successful eCommerce websites for an array of clients. We are proud to say that we have always lived up to our client’s expectations.
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
