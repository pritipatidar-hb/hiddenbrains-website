import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import {
    SWIFT_HERO,
    SWIFT_COUNTERS,
    SWIFT_SERVICES,
    SWIFT_INDUSTRIES,
    SWIFT_WHY_CHOOSE_HB,
    SWIFT_GUIDE_ITEMS,
    SWIFT_GUIDE_DETAILS,
    SWIFT_APP_FAQ
} from "@/lib/swift-app-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { getData } from "@/lib/data";

import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import swiftBanner from "@/images/swift-app-development.webp";

export const metadata = {
    title: "Swift App Development Services UK | Hidden Brains",
    description: "Expert Swift app development services in the UK. We build high-performance iOS applications using Swift for iPhone, iPad, and Apple Watch.",
};

export default async function SwiftAppDevelopmentPage() {
    const data = await getData();

    return (
        <div className="bg-white">
            <HeroSection
                banner={swiftBanner}
                alt="Swift App Development"
                title={SWIFT_HERO.title}
                description={SWIFT_HERO.excerpt}
                ctaText={SWIFT_HERO.cta}
            />

            {/* Intro & Counters Section */}
            <IntroductionSection
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    // { label: "Mobile App Development", href: "/mobile-application-development" },
                    { label: "Swift App Development" }
                ]}
                title="Top-Rated Swift App Development Company in the UK"
                counters={SWIFT_COUNTERS}
                showHomeIcon={true}
                content={
                    <>
                        <p className="mb-[14px]">
                            At Hidden Brains UK, we have an experienced and skilful team of Swift developers who provide customized Swift app development services, designed according to your business needs. In order to develop a robust, responsive, and accessible app, we use carefully selected elements of the Swift language and create a unique solution that satisfies the modern needs of your business.
                        </p>
                        <p>
                            With a transparent approach to our Swift development services, it becomes easy for our clients to understand the process. We keep up to date with the latest trends in mobile app development at Hidden Brains UK with regular training and creative sessions. We benchmark in our speciality, and our sole commitment is to your satisfaction.
                        </p>
                    </>
                }
            />

            {/* Mid CTA Section */}
            <CtaSection title="Let’s get started on your Swift App Development project!" />

            {/* Services Grid */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Trusted Swift Development Services for Your Business
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal">
                            Here at Hidden Brains UK, we provide world-class iOS development services by harnessing the power of the Swift programming language. Our Swift app developers are proficient at a number of development services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SWIFT_SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-10  border border-gray-100 shadow-sm hover:shadow-lg transition-all border-b-4 hover:border-b-orange-500 group"
                            >
                                <h3 className="text-xl font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Slider Section */}
            <section className="py-[50px]">
                <div className="container mx-auto px-6 ">
                    <div className="text-center  mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industries We Serve Swift App Development Services
                        </h2>
                        <p className="text-gray-600 text-[19px]">
                            Since we've been crafting Swift solutions for clients in different industries for years, we've set the standard for swift development services in the following industries.
                        </p>
                    </div>

                    <div className="mt-8">
                        <MobileIndustrySlider industries={SWIFT_INDUSTRIES} />
                    </div>
                </div>
            </section>

            {/* Why Choose HB Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-3xl md:text-[36px] font-bold text-[#14133b] mb-[18px]">
                            Why Is Hidden Brains UK Trusted For The Best Swift App Development Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal">
                            To create an intuitive Swift app, we follow an agile development process with a pool of talent and seasoned developers, designers, and content creators. Apart, here are the reasons why Hidden Brains UK is best for Swift app development:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SWIFT_WHY_CHOOSE_HB.map((reason, index) => (
                            <div key={index} className="bg-white p-6 hover:bg-gray-50 rounded-xl transition-colors flex flex-wrap gap-6 border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md">
                                <div className="shrink-0 w-16 h-16 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-[#14133b]">{reason.title}</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">{reason.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                items={SWIFT_GUIDE_ITEMS}
                details={SWIFT_GUIDE_DETAILS}
            />

            {/* Final CTA */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                className="text-white"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="Our Work"
                title="Our Swift App Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection
                title="Swift App Development Guide FAQs"
                faqs={SWIFT_APP_FAQ}
            />

            <Contact data={data} />
        </div>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
