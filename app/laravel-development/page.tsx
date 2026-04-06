import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BenefitsSection } from "@/app/components/BenefitsSection";

import banner from "@/images/fa.laravel-development.webp";

import {
    LARAVEL_HERO,
    LARAVEL_COUNTERS,
    LARAVEL_SERVICES,
    LARAVEL_INDUSTRIES,
    LARAVEL_GUIDE_ITEMS,
    LARAVEL_GUIDE_DETAILS,
    LARAVEL_FAQS,
    LARAVEL_TESTIMONIALS,
    LARAVEL_PROJECTS,
    LARAVEL_REASONS
} from "@/lib/laravel-development-data";


export const metadata = {
    title: "Laravel Development Company in The UK | Hidden Brains",
    description: "As the most trusted Laravel development company in the UK, we can help you succeed with cutting-edge Laravel solutions. All of our developers are well-trained, professional, and experts in Laravel development.",
};

export default async function LaravelDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Laravel Development Company"
                title={LARAVEL_HERO.title}
                description={LARAVEL_HERO.excerpt}
                ctaText={LARAVEL_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "Laravel Development" }
                ]}
                title="Top-Rated Laravel Development Company in the UK"
                counters={LARAVEL_COUNTERS}
                content={
                    <>
                        {/* <p className="mb-[10px] ">
                            Hidden Brains is the best Laravel development agency in the UK. It provides highly secure, Bug-free, flexible, and robust web applications.
                        </p> */}
                        <p className="mb-[10px]">
                           Hidden Brains is the best Laravel development agency in the UK. It provides highly secure, Bug-free, flexible, and robust web applications. Our Laravel developers write clean, well-commented, reusable code, which allows you to easily add new functionality to the web application at any time. Testing and debugging Laravel code becomes far easier by hiring Laravel programmers.
                        </p>
                        <p className="mb-[10px]">
                            Our Laravel Web Development services can provide you with both professional and highly imaginative mobile and web applications. Our professional Laravel developers can help you build simple apps to complex CMS for eCommerce websites in a short turnaround time without breaking the bank. Our first-class infrastructure gives us a competitive edge in developing and delivering projects based on Laravel technology of any size.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Laravel Web Development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Best Laravel Development Services We Offer At Hidden Brains UK</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg  leading-relaxed">
                        We are the foremost Laravel development firm. We have an in-depth understanding of the framework and the skills to give you the finest-in-class Laravel web development services. With our team of expert Laravel developers, we are your go-to experts for top-notch website development solutions.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {LARAVEL_SERVICES.map((service, idx) => (
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

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Laravel Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            With years of experience in crafting Laravel solutions for clients from different industries, we have set the benchmark in offering Laravel development services in the UK for the following industries.
                        </p>
                    </div>
                    <IndustrySlider industries={LARAVEL_INDUSTRIES} />
                </div>
            </section>

            {/* Why Hidden Brains Section */}
            <BenefitsSection
                title="Why Choose Us for Laravel Development Services in the UK?"
                description="There are many options to choose from when trying to identify the perfect Laravel development company. Laravel service providers are imperative when developing your online business, as this will be the first step and will influence your business for years to come. Here's why we're your best choice for Laravel development services in the UK:"
                items={LARAVEL_REASONS}
            />

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here is a complete guide to resolve your common questions and answers regarding Laravel development services:"
                items={LARAVEL_GUIDE_ITEMS}
                details={LARAVEL_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="BEST PROJECTS"
                title="Our Laravel Web Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={LARAVEL_PROJECTS}
            />

            <TestimonialsSection
                testimonials={LARAVEL_TESTIMONIALS}
            />

            <FAQSection
                faqs={LARAVEL_FAQS}
                title="FAQs About Laravel Development Services"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
