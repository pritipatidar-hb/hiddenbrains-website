import dynamic from 'next/dynamic';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { getData } from "@/lib/data";

import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import ipadBanner from "@/images/ipad-apps-development-Banner-2.webp";


import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";

import {
    IPAD_HERO,
    IPAD_COUNTERS,
    IPAD_SERVICES,
    IPAD_INDUSTRY_GRID_DATA,
    WHY_CHOOSE_IPAD,
    IPAD_APPS_FAQ,
    IPAD_FEATURES_LIST,
    IPAD_TESTIMONIALS
} from "@/lib/ipad-app-data";

export const metadata = {
    title: "iPad App Development Company in UK | Hidden Brains",
    description: "Introduce Your Business with Quality Standards on iPad Devices Across The World. Boost ROI with Secure and Features Rich iPad App Development Company in UK.",
};

export default async function IPadAppDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={ipadBanner}
                alt="iPad App Development Company in UK"
                title={IPAD_HERO.title}
                description={IPAD_HERO.excerpt}
                ctaText={IPAD_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[{ label: "iPad App Development" }]}
                title="Best iPad App Development Services in UK"
                listItems={IPAD_FEATURES_LIST}
                content={
                    <>
                        <p className="mb-6">
                            Hidden Brains UK is the leading iPad app development company that delivers end-to-end iPad app development services for enterprise solutions and consumer apps. The iPad apps we develop offer high performance, create a better user experience, and have higher reliability.
                        </p>
                        <p className="mb-6">
                            Strong technical expertise and well-defined methodology help us identify the areas to enhance user experience and bring ideas to life. We at Hidden Brains UK are focused on offering customer-centric iPad applications matching the client’s specific requirements – and deliver result-driven technology solutions that give momentum to your business growth.
                        </p>
                        <p>
                            Our mission is to deliver you the next generation of futuristic applications. We work with startups and large enterprises to expand their businesses with innovative & secure applications. After an effective development process, our quality testers and analysts ensure we deliver high performance and secure applications.
                        </p>
                    </>
                }
            />

            {/* <CtaSection title="Let’s get started on your iPad App Development project!" /> */}

            <section className="py-[50px] bg-gray-100 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]">iPad Apps Development Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-16">
                        {IPAD_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group">
                                <h3 className="text-[19px] font-semibold mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <IndustryGridSection
                title="Industry Specific - iPad App Development"
                description="As a top iPad app development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={IPAD_INDUSTRY_GRID_DATA}
            />
            <PortfolioSection
                subtitle="Our Work"
                title="Custom iPad App development Services Projects"
                description="Delivering result-driven technology solutions that give momentum to your business growth - Have a reflection on our work"
                projects={data.PROJECTS.slice(0, 8)}
            />
            <TestimonialSlider testimonials={IPAD_TESTIMONIALS} />
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]   ">Why Hidden Brains for iPad Application Development Services?</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Hidden Brains iPad application development process starts with understanding your app idea, its alignment with your business goals, and your budget – helping you achieve your business objectives. We offer custom solutions for iPad app development, powered by transparency in our workflow and excellent client communication. This is what makes us stand apart from the rest of the iPad application development companies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {WHY_CHOOSE_IPAD.map((reason, idx) => (
                            <div key={idx} className="bg-white  p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className=" mb-4 shrink-0 w-16 h-16 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-[#14133b]">{reason.title}</h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px]">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* <CtaSection
                title="Your idea is most important to us. Share Now!"
                className="bg-[#14133b]"
            /> */}

            <FAQSection faqs={IPAD_APPS_FAQ} />
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
