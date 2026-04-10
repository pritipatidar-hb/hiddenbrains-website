import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServicesSection } from "@/components/shared/ServicesSection";

import banner from "@/images/node-js-development.webp";

import {
    NODEJS_HERO,
    NODEJS_COUNTERS,
    NODEJS_SERVICES,
    NODEJS_INDUSTRIES,
    NODEJS_GUIDE_ITEMS,
    NODEJS_GUIDE_DETAILS,
    NODEJS_FAQS,
    NODEJS_TESTIMONIALS,
    NODEJS_PROJECTS
} from "@/lib/node-js-development-data";

export const metadata = {
    title: "Node.JS Development Company in The UK | Hidden Brains",
    description: "Being a leading Node.JS development company in the UK, we build real time, fast, and scalable backends using Node.JS.",
};

export default async function NodeJSDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="Node.JS Development Company"
                title={NODEJS_HERO.title}
                description={NODEJS_HERO.excerpt}
                ctaText={NODEJS_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "Node.js Development" }
                ]}
                title="A Leading Node.JS Development Company In the UK"
                counters={NODEJS_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            Hidden Brains is a top-rated Node.JS development company in the UK with an established track record of building apps that are feature-rich, secure, scalable and extensible.
                        </p>
                        <p className="mb-[10px]">
                            Our Node.JS developer’s team is highly skilled and extensively trained to develop bespoke Node.JS apps for any industry. We combine domain knowledge, technical expertise and industry insights with innovative technology to drive growth for your business.
                        </p>
                        <p className="mb-[10px]">
                            Our Node.JS development services include real-time app development, microservices app development, ecommerce solutions, IoT based applications, and many more. We are known as the one-stop Node.JS development company in UK that allows you to build complex and dynamic applications for your customers by integrating advanced functionalities such as bots, social media integration, and many more.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Node.JS App Development project!"
            />

            {/* Services Section */}
            <ServicesSection
                title="Our Node.JS Web Development Services"
                description="We use cutting-edge technologies like Express, AngularJS, MongoDB, MVC, REST APIs, Web Sockets etc., to build robust and scalable web applications."
                variant="simple"
                background="bg-gray-50"
                services={NODEJS_SERVICES.map(service => ({
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
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            As a top Node.JS development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget.
                        </p>
                    </div>
                    <IndustrySlider industries={NODEJS_INDUSTRIES} />
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="This guide will give you everything you need to know about node js development, including the language features and why you should choose nodejs."
                items={NODEJS_GUIDE_ITEMS}
                details={NODEJS_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Our NodeJS Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of experts. Contact us to start your own chapter on this fun application development journey."
                projects={NODEJS_PROJECTS}
            />

            <TestimonialsSection
                testimonials={NODEJS_TESTIMONIALS}
            />

            <FAQSection
                faqs={NODEJS_FAQS}
                title="FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
