import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";


import banner from "@/images/shopping-cart-development.webp";

import {
    SHOPPING_CART_HERO,
    SHOPPING_CART_LIST_ITEMS,
    SHOPPING_CART_INTRO,
    SHOPPING_CART_SERVICES,
    SHOPPING_CART_INDUSTRIES,
    SHOPPING_CART_TESTIMONIALS
} from "@/lib/shopping-cart-development-data";

export const metadata = {
    title: "Shopping Cart Development Services in UK | Hidden Brains",
    description: "Hidden Brains UK provides reliable shopping cart development services in the UK to help businesses create smooth, user-friendly online shopping experiences.",
};

export default async function ShoppingCartDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Shopping Cart Development Services"
                title={SHOPPING_CART_HERO.title}
                description={SHOPPING_CART_HERO.description}
                ctaText={SHOPPING_CART_HERO.ctaText}
                ctaHref={SHOPPING_CART_HERO.ctaHref}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Ecommerce Solutions", href: "/ecommerce-solutions" },
                    { label: "Shopping Cart Development" }
                ]}
                title={SHOPPING_CART_INTRO.title}
                listItems={SHOPPING_CART_LIST_ITEMS}
                content={
                    <div className="space-y-5 text-[#6a7c92]">
                        {SHOPPING_CART_INTRO.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}

                        <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] pt-4">
                            {SHOPPING_CART_INTRO.teamTitle}
                        </h3>

                        {SHOPPING_CART_INTRO.teamContent.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Services Section */}
            <section className="py-[50px] bg-[#f7f8fd] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Shopping Cart Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                        {SHOPPING_CART_SERVICES.map((service, idx) => (
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
                description="As a top Shopping Cart development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={SHOPPING_CART_INDUSTRIES}
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="Our Work"
                title="Feature-Rich eCommerce Shopping Cart Development Services"
                description="We develop state-of-the-art shopping carts by using advanced programming knowledge of PHP, Magento, Shopify, WooCommerce VirtueMart, and Volusion."
                projects={data.PROJECTS.slice(0, 8)}
            />

            {/* Testimonials Section */}
            <TestimonialSlider
                testimonials={SHOPPING_CART_TESTIMONIALS}
            />

            {/* Company Info Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[18px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">eCommerce Shopping Cart Development at Hidden Brains</h2>
                        <p className="mx-auto text-[#6a7c92] text-[16px] leading-relaxed">
                            Our custom eCommerce shopping cart development solutions lead to the robust, scalable and bespoke end user-friendly shopping cart product that is in accordance with your shopping-related project needs. We integrate all the required features in a single shopping cart package to boost customer conversion rates, sales growth, number of leads and customer interaction.
                        </p>
                    </div>
                </div>
            </section>

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
