import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";

import { CtaSection } from "@/components/shared/CtaSection";

import banner from "@/images/payment-gateway-integration.webp";

import {
    PAYMENT_GATEWAY_HERO,
    PAYMENT_GATEWAY_LIST_ITEMS,
    PAYMENT_GATEWAY_INTRO,
    PAYMENT_GATEWAY_SERVICES,
    PAYMENT_GATEWAY_FEATURES,
    PAYMENT_GATEWAY_INDUSTRIES,
    PAYMENT_GATEWAY_TESTIMONIALS
} from "@/lib/payment-gateway-integration-data";

export const metadata = {
    title: "Payment Gateway Integration services | Hidden Brains",
    description: "Hidden Brains UK offers secure and reliable payment gateway integration services to help businesses accept online payments smoothly and safely.",
};

export default async function PaymentGatewayPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Payment Gateway Integration services"
                title={PAYMENT_GATEWAY_HERO.title}
                description={PAYMENT_GATEWAY_HERO.description}
                ctaText={PAYMENT_GATEWAY_HERO.ctaText}
                ctaHref={PAYMENT_GATEWAY_HERO.ctaHref}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Ecommerce Solutions", href: "/ecommerce-solutions" },
                    { label: "Payment Gateway Integration services" }
                ]}
                title={PAYMENT_GATEWAY_INTRO.title}
                content={(
                    <div className="space-y-6 text-[#6a7c92]">
                        {PAYMENT_GATEWAY_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                        <div className="mt-[10px]">
                            <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4 pt-4 leading-tight">
                                {PAYMENT_GATEWAY_INTRO.teamTitle}
                            </h3>
                            {PAYMENT_GATEWAY_INTRO.teamContent.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                )}
                listItems={PAYMENT_GATEWAY_LIST_ITEMS}
                bgColor="bg-gray-50"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-[#f7f8fd] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Payment Gateway Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                        {PAYMENT_GATEWAY_SERVICES.map((service, idx) => (
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

            {/* Features Section */}
            {/* <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-4">
                            Secure Payment Gateway Integration Services
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
                        {PAYMENT_GATEWAY_FEATURES.map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-orange-50 flex items-center justify-center text-[#f29111] mb-6 transition-all duration-300 group-hover:bg-[#f29111] group-hover:text-white group-hover:rotate-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-3 group-hover:text-[#f29111] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-[#6a7c92] text-sm leading-relaxed max-w-xs mx-auto">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <IndustryGridSection
                title="Industry We Serve"
                description="As a top Payment Gateway Integration services provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={PAYMENT_GATEWAY_INDUSTRIES}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Payment Gateway Integration Services"
                description="Secure integration to enable payments in an easy manner for various shopping carts such as Zencart, Oscommerce, Xcart, and Magento."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider
                testimonials={PAYMENT_GATEWAY_TESTIMONIALS}
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-8">
                            Why Hidden Brains for Payment Gateway Solutions?
                        </h2>
                        <div className="text-[#6a7c92] text-lg leading-relaxed space-y-6">
                            <p>
                                Our payment gateway integration services and solutions have helped several companies to provide different payment options on their site, based on long-term needs. We provide expertise in PCI integrations, SSL integrations, as well as API and hosted payment integrations. Our team has experience implementing payment integrations for various shopping carts such as Zencart, Oscommerce, Xcart, Magento and others.
                            </p>
                            <p>
                                No matter the complexity of your project, we are a leading Payment Gateway solutions provider with profound understanding and technical expertise to help you stay ahead and gain a competitive advantage to expand your business around the world.
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
