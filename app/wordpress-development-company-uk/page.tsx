import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { TestimonialSlider } from "@/components/shared/TestimonialSlider";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import banner from "@/images/wordpress-development.webp";

import {
    WORDPRESS_HERO,
    WORDPRESS_LIST_ITEMS,
    WORDPRESS_SERVICES,
    WORDPRESS_INDUSTRIES,
    WORDPRESS_WHY_CHOOSE,
    WORDPRESS_GUIDE_ITEMS,
    WORDPRESS_GUIDE_DETAILS,
    WORDPRESS_TESTIMONIALS,
    WORDPRESS_FAQS,
    WORDPRESS_PORTFOLIO,
    WORDPRESS_PROCESS
} from "@/lib/wordpress-development-data";
import { CtaSection } from "@/components/shared/CtaSection";
import { ProcessSection } from "@/components/shared/ProcessSection";

export const metadata = {
    title: "Best WordPress Development Company in the UK | Hidden Brains",
    description: "Hidden Brains provides one of the best WordPress development solutions in the UK, offering solutions to build secure, scalable, and high-performance websites.",
};

export default async function WordPressDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="WordPress Development Company UK"
                title={WORDPRESS_HERO.title}
                description={WORDPRESS_HERO.excerpt}
                ctaText={WORDPRESS_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Open Source Customization", href: "/open-source-customization" },
                    { label: "WordPress Development" }
                ]}
                title="WordPress Development Services in the UK"
                counters={WORDPRESS_LIST_ITEMS}
                content={
                    <>
                        <p className="mb-[10px] text-[#6a7c92]">
                            Hidden Brains provides one of the best <strong>WordPress development solutions in the UK</strong>, offering solutions to build secure, scalable, and high-performance websites. Utilizing the most up-to-date tools, our team of skilled WordPress designers and developers offers end-to-end services that exceed industry standards for quality.
                        </p>
                        <p className="text-[#6a7c92]">
                            With more than <strong>22+ years of experience</strong> providing WordPress development services and serving more than 2400 international clients, we have successfully established ourselves as a leading WordPress agency in the UK. We believe in building long-term relationships with our clients. Therefore, we offer a wide range of WordPress development services under one roof. Our skilled WordPress developers are equipped to handle everything, including creating WordPress plugins, customizing themes, and modifying WordPress functionality.
                        </p>
                    </>
                }
            />
            <CtaSection
                title="Let’s get started on your WordPress Development project!"
            />
            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold
 mb-[18px]">Our Core WordPress Development Services</h2>
                    <p className="text-[#6a7c92] mb-[30px]">At Hidden Brains UK, we have expertise in WordPress development and offer various services to guarantee success for your business.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {WORDPRESS_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full flex flex-col">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-bold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[16px] leading-relaxed flex-grow">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Slider Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Industry We Serve</h2>
                        <p className="text-[#6a7c92] text-[16px]  mx-auto">As a top WordPress development company in the UK, we have a process-driven approach for every industry that helps us to meet our client&apos;s project requirements, timelines, and budgets.</p>
                    </div>
                    <div className="px-12">
                        <IndustrySlider industries={WORDPRESS_INDUSTRIES} />
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[80px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Why Choose Hidden Brains for WordPress Development Services in the UK?</h2>
                        <p className="text-[#6a7c92] text-[16px]  mx-auto">We're one of the top WordPress development companies in the UK and we offer professional WordPress development services to businesses.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WORDPRESS_WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                                <div className="mb-4 text-[#f29111] group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-[18px] font-semibold mb-[11px] group-hover:text-orange-500 transition-colors">{item.title}</h3>
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                title="A Guide to WordPress Development Services"
                description="This guide will provide you insight into WordPress development so that you can take a judicious decision about WordPress development."
                items={WORDPRESS_GUIDE_ITEMS}
                details={WORDPRESS_GUIDE_DETAILS}
            />

            {/* WordPress Development Process Section */}
            <ProcessSection
                title="WordPress Web Development Services Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable WordPress web development services."
                processItems={WORDPRESS_PROCESS}
            />
            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />



            {/* Our Work Section */}
            <PortfolioSection
                subtitle={WORDPRESS_PORTFOLIO.subtitle}
                title={WORDPRESS_PORTFOLIO.title}
                description={WORDPRESS_PORTFOLIO.description}
                projects={WORDPRESS_PORTFOLIO.projects}
            />

            <TestimonialsSection
                testimonials={[{
                    quote: "We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!",
                    author: "Mr. Daniel Vant, UK",
                    videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
                }]}
            />

            <FAQSection
                faqs={WORDPRESS_FAQS}
                title="WordPress Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
