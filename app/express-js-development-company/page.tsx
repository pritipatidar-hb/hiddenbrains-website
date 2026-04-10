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

import banner from "@/images/Express_Js.webp";

import {
    EXPRESS_JS_HERO,
    EXPRESS_JS_COUNTERS,
    EXPRESS_JS_SERVICES,
    EXPRESS_JS_INDUSTRIES,
    EXPRESS_JS_WHY_CHOOSE,
    EXPRESS_JS_GUIDE_ITEMS,
    EXPRESS_JS_GUIDE_DETAILS,
    EXPRESS_JS_TESTIMONIALS,
    EXPRESS_JS_FAQS
} from "@/lib/express-js-development-data";

export const metadata = {
    title: "Express JS Development Company in UK | Hidden Brains",
    description: "Hidden Brains UK is a top-of-the-line app development company offering Express.js app development services in the UK.",
};

export default async function ExpressJSDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Express JS Development Company"
                title={EXPRESS_JS_HERO.title}
                description={EXPRESS_JS_HERO.excerpt}
                ctaText={EXPRESS_JS_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Front End Development", href: "/front-end-development-company" },
                    { label: "Express JS Development" }
                ]}
                title="Trusted Express.js Development Company in the UK"
                counters={EXPRESS_JS_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px] ">
                            Hidden Brains is a specialised Express.js web application development company with extensive knowledge of the technology, delivering scalable and feature-rich web solutions that are dependable and user-friendly. We have extensive experience building high-performance solutions using Express.js for clients. We are talented, hard-working developers who give our clients the attention they deserve to create tailored web solutions.
                        </p>
                        <p className="mb-[10px]">
                            Our expertise in working with Express.js leads to solutions that are hard to match. We collaborate as a team to deliver unique and in-demand solutions to our clients. At Hidden Brains UK, we know how to get the best out of the Express.js framework, including database integration, template engines, and multiple routing, along with other capabilities expected from professional Express.js service providers with years of experience. To ensure our products are polished, we deliver projects iteratively and incorporate client feedback.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Express.js Development project!"
            />

            {/* Services Section */}
            <ServicesSection
                title="Our Range of Express.js Development Services at Hidden Brains UK"
                description="With Hidden Brains UK you will be able to develop high-end Express JS applications with the help of professional and experienced programmers on board. Here are some of the web application development services we offer."
                variant="simple"
                background="bg-gray-50"
                services={EXPRESS_JS_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Express.js Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            Offering years of experience with tailoring Express.js solutions for clients in the UK and abroad, we set the benchmark in providing Express.js services in the following industries.
                        </p>
                    </div>
                    <IndustrySlider industries={EXPRESS_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Why Choose Hidden Brains for Express.js Development Services in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        We'll want to be careful in our selection when trying to identify the right Express.js developer, as this decision will ultimately affect our online business for years to come. This is why we are the best choice for Express.js development services in the UK.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {EXPRESS_JS_WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-[#f29111] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="If you have a query regarding Express.js app development services, then you can refer to our guide section and clear the basic doubts."
                items={EXPRESS_JS_GUIDE_ITEMS}
                details={EXPRESS_JS_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <TestimonialsSection
                testimonials={EXPRESS_JS_TESTIMONIALS}
            />

            <FAQSection
                faqs={EXPRESS_JS_FAQS}
                title="Express.Js FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
