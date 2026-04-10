import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { ServicesSection } from "@/components/shared/ServicesSection";

import banner from "@/images/C_Banner.webp";

import {
    C_SHARP_HERO,
    C_SHARP_COUNTERS,
    C_SHARP_SERVICES,
    C_SHARP_INDUSTRIES,
    C_SHARP_GUIDE_ITEMS,
    C_SHARP_GUIDE_DETAILS,
    C_SHARP_FAQS,
    C_SHARP_TESTIMONIALS,
    C_SHARP_REASONS
} from "@/lib/c-sharp-development-data";

export const metadata = {
    title: "C# Development Company in The UK | Hidden Brains",
    description: "Utilise our award-winning C# Development services in the UK by our C sharp programmers, who have expertise in developing enterprise-level applications.",
};

export default async function CSharpDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="C# Development Company"
                title={C_SHARP_HERO.title}
                description={C_SHARP_HERO.excerpt}
                ctaText={C_SHARP_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "C# Development" }
                ]}
                title="Top-Rated C# Development Company To Build Scalable and Secure Apps"
                counters={C_SHARP_COUNTERS}
                content={
                    <>
                        {/* <p className="mb-[10px]">
                            Here at Hidden Brains UK, we provide custom C # development services that cover every need of the industry and your business has.
                        </p> */}
                        <p className="mb-[10px]">
                            Here at Hidden Brains UK, we provide custom C # development services that cover every need of the industry and your business has. We utilise the many possibilities of this technology in developing a flexible business solution that is capable of providing our clients with highly efficient processes. A major factor in the wide usage of C # is its simplistic coding structures that promote programming ease while achieving comprehensive and time-effective results. No matter what type of company, we provide customised C-sharp web development services and solutions.
                        </p>
                        <p className="mb-[10px]">
                            It is our goal to provide our clients with high-quality applications developed by Microsoft-certified developers. We offer a wide range of services, including exploring C #, integrating a business solution set, and migrating existing apps/websites. The Hidden Brains UK project planning and budgeting will depend on your needs and budget. However, at the end of the day, our enterprise-level expertise as a C # software development company will take care of it.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your C# development project!"
            />

            {/* Services Section */}
            <ServicesSection
                title="Our Exclusive C# Development Services Offered By Hidden Brains In The UK"
                description="Our company is the leading provider of ASP.NET MVC development services. We have an in-depth understanding of the framework and the skills necessary to deliver the best results. As the experts in ASP.NET development, we are at your service for top-notch website development services."
                variant="simple"
                background="bg-gray-50"
                services={C_SHARP_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">C# Application Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            We are recognized as the best C# development solution-providing company in the UK for a variety of industries because of our experience working with clients from various industries.
                        </p>
                    </div>
                    <IndustrySlider industries={C_SHARP_INDUSTRIES} />
                </div>
            </section>

            {/* Why Hidden Brains Section */}
            <BenefitsSection
                title="Why Choose Hidden Brains For C# App Development Services?"
                description="Business owners must identify ASP.NET service providers in order to build their online business. As the first step of the development process, finding the right ASP.NET MVC web development firm is crucial. If you are looking for ASP.NET developers in the UK, here are a few reasons why you should hire us:"
                items={C_SHARP_REASONS}
            />

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here is a guide to help you with the common questions related to C# programming language"
                items={C_SHARP_GUIDE_ITEMS}
                details={C_SHARP_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <TestimonialsSection
                testimonials={C_SHARP_TESTIMONIALS}
            />

            <FAQSection
                faqs={C_SHARP_FAQS}
                title="C# Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
