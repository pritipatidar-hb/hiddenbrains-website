import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import {
    MOBILE_HERO,
    MOBILE_COUNTERS,
    MOBILE_PLATFORMS,
    MOBILE_SERVICES,
    MOBILE_INDUSTRIES,
    MOBILE_WHY_CHOOSE_HB,
    MOBILE_GUIDE_ITEMS,
    MOBILE_GUIDE_DETAILS,
    MOBILE_APP_FAQ
} from "@/lib/mobile-app-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { getData } from "@/lib/data";

import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import heroBanner from "../../images/mobile-application-development.webp";
import { IndustrySlider } from '@/components/shared/IndustrySlider';
import { REACT_JS_INDUSTRIES } from '@/lib/react-js-development-data';

export const metadata = {
    title: "Mobile Application Development Company UK | Hidden Brains",
    description: "Top mobile application development company in the UK. We build custom Android, iOS, and cross-platform mobile apps with 22+ years of experience.",
};

export default async function MobileAppDevelopmentPage() {
    const data = await getData();

    return (
        <div className="bg-white">
            <HeroSection
                banner={heroBanner}
                alt="Mobile App Development"
                title={MOBILE_HERO.title}
                description={MOBILE_HERO.excerpt}
                ctaText={MOBILE_HERO.cta}
            />

            {/* Intro & Counters Section */}
            <IntroductionSection
                breadcrumbs={[{ label: "Mobile App Development" }]}
                title="Get Custom Mobile Applications from a Trusted Brand"
                counters={MOBILE_COUNTERS.map(c => ({ value: c.count, symbol: c.symbol, label: c.label }))}
                showHomeIcon={true}
                content={
                    <>
                        <p className="mb-[14px]">
                            Counted among the most <strong className="text-gray-900">trusted mobile app development companies in the UK</strong>, our aim is to deliver robust and feature-packed mobile applications to our clients that can be customized as per their business needs. Our expert mobile application developers specialize in developing apps using trending technologies such as IoT, AR/VR, AI, etc.
                        </p>
                        <p>
                            We develop easy-to-use and user-centric mobile applications that allow you to stay ahead in the market competition. From initial mobile app technology consulting to designing and development, we provide end-to-end mobile app development services to our clients all across the UK and European Union.
                        </p>
                    </>
                }
            />

            {/* Platforms Grid */}
            <section className="py-[50px]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-5xl mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px] leading-tight">
                            Covering All Major Platforms / Technologies
                        </h2>
                        <p className="text-[#6a7c92]  text-[16px] md:text-[19px] font-normal leading-relaxed">
                            Stay ahead of the competition with our professional & enterprise-grade mobile application development services. We combine our custom application development expertise with modern technologies to address the critical business needs of global clients across the UK & European Union.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOBILE_PLATFORMS.map((platform, index) => (
                            <Link
                                key={index}
                                href={platform.link}
                                className={`group p-[35px] rounded-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/50 block ${platform.isHighlighted
                                    ? 'bg-[#f5f3ff] shadow-sm'
                                    : 'bg-white shadow-sm hover:shadow-xl'
                                    }`}
                            >
                                <div className="mb-[15px] flex items-start">
                                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm ${platform.circleBg} ${platform.iconColor}`}>
                                        {platform.icon}
                                    </div>
                                </div>

                                <div className="text-left">
                                    <h3 className="text-[22px] font-semibold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                        {platform.title}
                                    </h3>
                                    <p className="text-[#6a7c92] mb-[18px] text-[15px] font-normal leading-relaxed">
                                        {platform.content}
                                    </p>
                                    <div className="inline-flex items-center text-[13px] font-black uppercase tracking-widest text-gray-900">
                                        <span className="group-hover:text-orange-500 transition-colors text-[13px] font-semibold text-[#14133b]">EXPLORE</span>
                                        <span className="ml-3 w-10 h-[2px] bg-gray-900 group-hover:bg-orange-500 transition-colors"></span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mid CTA Section */}
            <CtaSection title="Let's get started on your Mobile App Development project!" />

            {/* Services Grid */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Our Mobile App Development Services
                        </h2>
                        <p className="text-[#6a7c92]  text-[16px] md:text-[19px] font-normal">
                            From our initial mobile app consulting to the app's final delivery and deployment in the store, we cover all of your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOBILE_SERVICES.map((service, index) => (
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
                <div className="container mx-auto px-6 max-w-7xl ">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Best Services from Mobile App Development Company in The UK for Different Industries
                        </h2>
                        <p className="text-gray-600 text-[16px] md:text-[19px]">
                            Hidden Brains offers app development services for different industries and verticals. We're pleased to provide you with more information about our experience.
                        </p>
                    </div>

                    {/* <div className="mt-8">
                        <MobileIndustrySlider industries={MOBILE_INDUSTRIES} />
                    </div> */}
                    <IndustrySlider industries={REACT_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose HB Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">
                            Why Hidden Brains for Mobile Development Services?
                        </h2>
                        <p className="text-[#6a7c92]  text-[16px] md:text-[19px] font-normal
">
                            We're one of the top mobile app development companies in the UK and offer professional mobile app development services to businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {MOBILE_WHY_CHOOSE_HB.map((reason, index) => (
                            <div key={index} className="bg-white  p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className="shrink-0  mb-4 w-16 h-16 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl">
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
                items={MOBILE_GUIDE_ITEMS}
                details={MOBILE_GUIDE_DETAILS}
            />

            {/* Final CTA */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                className="text-white"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="Portfolio"
                title="Our Mobile App Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection
                title="Mobile App Development FAQs"
                faqs={MOBILE_APP_FAQ}
            />

            <Contact data={data} />
        </div>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
