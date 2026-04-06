import dynamic from 'next/dynamic';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { getData } from "@/lib/data";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import banner from "@/images/xamarin-app-developmen.webp";

import {
    XAMARIN_HERO,
    XAMARIN_COUNTERS,
    XAMARIN_SERVICES,
    XAMARIN_INDUSTRIES_GRID,
    XAMARIN_WHY_CHOOSE,
    XAMARIN_FAQS,
    XAMARIN_HIGHLIGHTS
} from "@/lib/xamarin-app-data";
import { TestimonialSlider } from '@/components/shared/TestimonialSlider';
import { IPAD_TESTIMONIALS } from '@/lib/ipad-app-data';

export const metadata = {
    title: "Xamarin App Development Company in UK | Hidden Brains",
    description: "Build robust cross-platform mobile apps with our Xamarin app development services in the UK.",
};

export default async function XamarinAppDevelopmentPage() {
    const data = await getData();

    // Map industries to the format expected by IndustryGridSection
    const industryItems = XAMARIN_INDUSTRIES_GRID.map(item => ({
        name: item.name,
        icon: item.icon,
        color: item.color,
    }));

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="Xamarin App Development Services"
                title={XAMARIN_HERO.title}
                description={XAMARIN_HERO.excerpt}
                ctaText={XAMARIN_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Mobile App Development", href: "/mobile-application-development" },
                    { label: "Cross Platform App Development", href: "/cross-platform-app-development" },
                    { label: "Xamarin Application Development" }
                ]}
                title="Best Xamarin App Development Company"
                // counters={XAMARIN_COUNTERS}
                listItems={XAMARIN_HIGHLIGHTS}
                content={
                    <>
                        <p className="mb-[10px]  text-[#6a7c92]">
                            Hidden Brains is an industry-dominant Xamarin app development company in the UK, helping clients to build feature-rich and fully functioning cross-platform mobile apps. Our decade of experience and expertise in C# enable us to develop robust Xamarin app development services that run on multiple platforms.
                        </p>
                        <p className="mb-[10px]">
                            Xamarin mobile apps designed and developed by us share the same code across all platforms, such as Android, Windows, and iOS. With the same code used everywhere, other components such as data structure, languages, and APIs also resemble each other.
                        </p>
                        <p>
                            Proven knowledge and expertise of Xamarin developers working at Hidden Brains contribute to the efficient Xamarin mobile application development services.
                        </p>
                    </>
                }
            />

            {/* <CtaSection title="Get started on your Xamarin Development project!" /> */}

            {/* Services Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center max-w-7xl">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]">Xamarin Development Services</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed ">
                        Hidden Brains is recognized as one of the dominating Xamarin app development companies in the UK, offering comprehensive cross-platform solutions.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-16">
                        {XAMARIN_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100">
                                <div className="mb-6 text-[#f29111]">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-semibold mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Grid Section - Reusing the component created earlier */}
            <IndustryGridSection
                title="Industries We Serve"
                description="As a top Xamarin app development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={industryItems}
            />
            <PortfolioSection
                subtitle="Our Work"
                title="Bespoke Xamarin App Development Projects"
                description="We deliver native iOS, Android, and Windows apps that share a common C# codebase."
                projects={data.PROJECTS.slice(0, 8)}
            />
            <TestimonialSlider testimonials={IPAD_TESTIMONIALS} />
            {/* Why Choose Section */}
            <section className="py-24 bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Hidden Brains UK for Xamarin App Development Services?</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92] text-lg leading-relaxed">
                            We, at Hidden Brains, strive hard to live up to the client’s expectations by considering all the requirements, specifications, and preferences of the client. Our tech team maps the project plan right from design to development, testing, and deployment to ensure streamlined execution of the project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {XAMARIN_WHY_CHOOSE.map((reason, idx) => (
                            <div key={idx} className="flex flex-col p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center items-center group">
                                <div className="shrink-0 w-16 h-16 bg-[#14133b] text-white flex items-center justify-center rounded-2xl mb-6 group-hover:bg-[#f29111] transition-colors duration-300 shadow-lg">
                                    {reason.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3 text-[#14133b] group-hover:text-[#f29111] transition-colors">{reason.title}</h4>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px]">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            <FAQSection
                faqs={XAMARIN_FAQS}
                title="Xamarin App Development FAQs"
                description="Find answers to common questions about Xamarin and cross-platform development."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
