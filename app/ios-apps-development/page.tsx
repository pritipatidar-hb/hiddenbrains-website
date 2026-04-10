import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import {
    IOS_HERO,
    IOS_COUNTERS,
    IOS_SERVICES,
    IOS_INDUSTRIES,
    IOS_WHY_CHOOSE,
    IOS_GUIDE_ITEMS,
    IOS_GUIDE_DETAILS,
    IOS_PROCESS,
    IOS_FAQ
} from "@/lib/ios-app-data";



import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { getData } from "@/lib/data";

import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { ServicesSection } from "@/components/shared/ServicesSection";
import iosBanner from "@/images/ios-apps-development.webp";
import { IndustrySlider } from '@/components/shared/IndustrySlider';
import { REACT_JS_INDUSTRIES } from '@/lib/react-js-development-data';

export const metadata = {
    title: "iOS App Development Company in UK | Hidden Brains",
    description: "Leading iOS app development company in the UK delivering high-quality, feature-rich iPhone and iPad applications with exceptional user experience.",
};

export default async function IosAppDevelopmentPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={iosBanner}
                alt="iOS App Development"
                title={IOS_HERO.title}
                description={IOS_HERO.excerpt}
                ctaText={IOS_HERO.cta}
            />

            {/* Introduction & Counters Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    { label: "iOS App Development" }
                ]}
                title="Best iOS App Development Company in the UK"
                counters={IOS_COUNTERS}
                content={
                    <>
                        <p className="font-[16px] font-normal mb-[10px] text-[#6a7c92]">
                            Hidden Brains is a trusted partner for businesses looking to bring their iOS app ideas to life. As a recognized iOS mobile app development agency in the UK, we offer comprehensive services that cover the entire journey—from strategy and design to coding, testing, and launching your app on the Apple App Store.
                        </p>
                        <p className="font-[16px] font-normal mb-[10px] text-[#6a7c92]">
                            Our UK-based team of skilled iOS developers leverages modern frameworks, programming languages, and tools such as Swift, Objective-C, and Xcode to create seamless, high-performing applications. With a strong portfolio of successful projects, we focus on building solutions tailored to client goals while ensuring scalability and user engagement.
                        </p>
                    </>
                }
            />

            {/* Middle CTA */}
            <CtaSection title="Let’s get started on your Mobile App Development project!" />

            {/* Services Section */}
            <ServicesSection
                title="Our iOS App Development Services in the UK"
                description="Our custom iOS application development services in the UK are globally recognized for developing secure, scalable, and reliable digital solutions."
                variant="simple"
                services={IOS_SERVICES.map(service => ({
                    title: service.title,
                    description: service.content
                }))}
            />

            {/* Industries Slider Section */}
            <section className="py-[30px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto ">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px] whitespace-nowrap">
                            Industry-Specific - iOS App Development Solutions
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                            Hidden Brains UK believe in providing solutions that give us an edge over our competitors. Here are the benefits of choosing iOS app developers in the UK:
                        </p>
                    </div>
                    {/* <MobileIndustrySlider industries={IOS_INDUSTRIES} /> */}
                    <IndustrySlider industries={REACT_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose HB Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px] whitespace-nowrap">
                            Why Choose Hidden Brains as an iOS App Development Company?
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed">
                            In the top companies listing, we're one of the top mobile app development companies in UK and we offer professional mobile app development services to businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {IOS_WHY_CHOOSE.map((reason, index) => (
                            <div key={index} className="flex gap-6 p-[35px] rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="shrink-0 w-16 h-16 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-semibold mb-[11px] text-[#14133b]">{reason.title}</h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px]">{reason.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                items={IOS_GUIDE_ITEMS}
                details={IOS_GUIDE_DETAILS}
                description="Here is complete guide that help you get an answer to the questions that you may have in mind about iOS app development:"
            />

            {/* Process Section */}
            <ProcessSection
                title="iOS App Development Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable iOS app solutions."
                processItems={IOS_PROCESS}
            />

            {/* Side CTA */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                className="bg-[#14133b]"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Mobile App Development Projects"
                subtitle="Portfolio"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices."
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection
                faqs={IOS_FAQ}
                title="iOS App Development FAQs"
                description="The following section has answers of some of the most commonly asked questions by the clients when they hire iOS app developers."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
