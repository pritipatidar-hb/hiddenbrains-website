import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";



import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import banner from "@/images/hire-mobile-apps-developer.webp";
import {
    HIRE_MOBILE_HERO,
    HIRE_MOBILE_COUNTERS,
    HIRE_MOBILE_PLATFORMS,
    HIRE_MOBILE_SERVICES,
    HIRE_MOBILE_WHY_CHOOSE,
    HIRE_MOBILE_GUIDE_ITEMS,
    HIRE_MOBILE_GUIDE_DETAILS,
    HIRE_MOBILE_FAQ,
    HIRE_MOBILE_PROCESS,
    HIRE_MOBILE_MODELS,
    HIRE_MOBILE_INDUSTRIES
} from "@/lib/hire-mobile-apps-data";

export const metadata = {
    title: "Hire Mobile App Developers In the UK | Hidden Brains",
    description: "Hire dedicated and certified mobile app developers in UK for React Native, Flutter, iOS, Android, and Kotlin apps.",
};

export default async function HireMobileDevelopersPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Mobile App Developers"
                title={HIRE_MOBILE_HERO.title}
                description={HIRE_MOBILE_HERO.excerpt}
                ctaText={HIRE_MOBILE_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Mobile Developers" }
                ]}
                title="Hire Mobile App Developer In the UK"
                counters={HIRE_MOBILE_COUNTERS}
                content={
                    <>
                        <p className="mb-[14px] text-[#6a7c92]">
                            Hidden Brains UK offers flexibility to hire mobile app developers in the UK for any kind of development requirements. Our experienced, skilled, and proficient mobile app developers are capable of delivering a wide range of mobile app development services as per our client’s business requirements. We offer you an opportunity to hire dedicated app developers from India that helps you to launch your successful mobile applications for different platforms.
                        </p>
                        <p className="text-[#6a7c92]">
                            Our mobile app developers for hire are valuable, cooperative, and productive to clients that assist them in their several development projects. This is one strong reason for clients to place their trust in Hidden Brains remote mobile app developers. We regularly train our app developers in the UK to work on the latest technologies more effectively and serve seamlessly to clients.
                        </p>
                    </>
                }
            />

            {/* Platforms Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Covering All Platforms / Latest Technologies
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            We offer mobile app developers in the UK on all mobile app development platforms and latest technologies to cater to even advanced app development need of our clients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_MOBILE_PLATFORMS.map((platform, index) => (
                            <div key={index} className="group p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col items-center text-center rounded-xl">
                                <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                                    {platform.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px] group-hover:text-[#f29111] transition-colors">{platform.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal mb-8">
                                    {platform.content}
                                </p>
                                {platform.link && (
                                    <Link href={platform.link} className="mt-auto !text-[#14133b] text-[13px] uppercase tracking-wider font-medium flex items-center gap-2 hover:text-[#f29111] transition-all group/link">
                                        Explore <span className="text-[20px] transition-transform group-hover/link:translate-x-1">→</span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <CtaSection title="Our Mobile App Development Services" /> */}

            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Our Mobile App Development Services
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            From our initial mobile app consulting to the app's final delivery and deployment in the store, we cover all of your needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_MOBILE_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <h3 className="text-[20px] font-semibold text-[#14133b] mb-[11px]">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industry We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            As a top mobile app development company in UK, we have a process-driven approach for every industry that helps us to meet our client’s project requirements, timescales and budgets.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Choose Hidden Brains for App Developers?
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            In the top companies listing, we're one of the top mobile app development companies in UK and we offer professional mobile app development services to businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_MOBILE_WHY_CHOOSE.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-[50px] rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="shrink-0 w-12 h-12 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2 text-[#14133b]">{reason.title}</h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px]font-normal">{reason.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                items={HIRE_MOBILE_GUIDE_ITEMS}
                details={HIRE_MOBILE_GUIDE_DETAILS}
                description="Here is a guide to help you with the common questions related to mobile application development."
            />

            <StepperProcessSection
                title="Hire Mobile App Developer In 5 Easy Steps"
                description="Our expert app developers are at your service once you hire them on an hourly, part-time or full-time basis. Get your coding done by experienced remote mobile app developers by following a transparent procedure."
                items={HIRE_MOBILE_PROCESS}
            />

            {/* Hiring Models Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Hiring Models</h2>
                            <p className="text-[#6a7c92] text-[16px] leading-relaxed">
                                Our expert mobile app developers are at your service once you hire them on an hourly, part-time, or full-time basis. Get your coding done by experienced remote mobile app developers by following a transparent procedure.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {HIRE_MOBILE_MODELS.map((model, index) => (
                                <div key={index} className={`p-8 border rounded-lg flex flex-col items-center text-center ${model.active ? 'border-[#f29111] shadow-xl relative scale-105 z-10 bg-white' : 'border-gray-100 bg-gray-50'}`}>
                                    <h3 className="text-xl font-bold text-[#14133b] mb-4">{model.title}</h3>
                                    <div className="text-3xl font-bold text-[#f29111] mb-6">{model.price}</div>
                                    <ul className="space-y-4 mb-8 text-[14px] text-[#6a7c92] text-left w-full">
                                        {model.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex gap-2">
                                                <span className="text-[#f29111] font-bold">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        href="/contact"
                                        variant={model.active ? "primary" : "outline"}
                                        fullWidth
                                        className={`py-3 rounded-md font-semibold transition-colors ${!model.active ? 'border border-[#f29111] !text-[#f29111] hover:bg-orange-50' : 'hover:bg-[#d9810f]'}`}
                                    >
                                        Hire Now
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Certified Mobile App Developers In UK"
                subtitle="Our Portfolio"
                description="Our mobile app developers are proficient and have the ability to transform your dream into reality. Let's have a look at some of our successful projects done by our developers."
            />

            <FAQSection
                faqs={HIRE_MOBILE_FAQ}
                title="Hire Mobile Developer FAQs"
                description="Is there anything about mobile app development you want to know? Check out these frequently asked questions about our services."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
