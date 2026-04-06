import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";



import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";
import banner from "@/images/iphone-apps-development.webp";
import {
    HIRE_IPHONE_HERO,
    HIRE_IPHONE_COUNTERS,
    HIRE_IPHONE_SERVICES,
    HIRE_IPHONE_WHY_CHOOSE,
    HIRE_IPHONE_GUIDE_ITEMS,
    HIRE_IPHONE_GUIDE_DETAILS,
    HIRE_IPHONE_FAQ,
    HIRE_IPHONE_PROCESS,
    HIRE_IPHONE_INDUSTRIES
} from "@/lib/hire-iphone-data";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata = {
    title: "Hire iPhone App Developers in the UK | Hidden Brains",
    description: "Hire dedicated and certified iPhone app developers in UK to build scalable, secure and feature-packed iOS apps of all complexities.",
};

export default async function HireIPhoneDevelopersPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire iPhone App Developers"
                title={HIRE_IPHONE_HERO.title}
                description={HIRE_IPHONE_HERO.excerpt}
                ctaText={HIRE_IPHONE_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers", href: "/hire-dedicated-developers" },
                    { label: "Hire iPhone App Developers" }
                ]}
                title="Hire iPhone App Developers in The UK From Hidden Brains"
                counters={HIRE_IPHONE_COUNTERS}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        <p>
                            Hidden Brains UK is a leading iPhone app development company with a team of experienced professionals engaged in providing high-end iPhone app development solutions to global clients. As an award-winning and certified iPhone application development services provider in the UK, we help our clients extend their teams by hiring highly passionate iPhone app developers on an hourly, part-time and full-time basis.
                        </p>
                        <p>
                            With 22+ years of industry experience, we have established a strong reputation for delivering top-notch iPhone applications within a committed timeframe. We produce innovative applications that seamlessly integrate with other business systems. To create bespoke solutions, our experts leverage powerful programming languages such as Objective C, Swift, Xcode, and Cocoa Touch frameworks to ensure a seamless user experience.
                        </p>
                    </div>
                }
            />

            <CtaSection title="Let’s get started on your iPhone App Development project!" />

            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Our iPhone App Developers Have Expertise In
                        </h2>
                        <p className="text-[#6a7c92] text-lg">
                            Whether you want to build an app for the iPhone, iPad, Apple Watch or any other Apple device, all you need is a dedicated iPhone app development team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_IPHONE_SERVICES.map((service, index) => (
                            <div key={index} className="bg-gray-50 p-10 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-orange-100">
                                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#f29111] mb-8 group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-4">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[60px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industries We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-lg">
                            With more than a decade of experience in customizing iPhone applications, we have specialized in creating unmatched quality solutions for various industries.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_IPHONE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[60px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[40px]">
                        Why Hidden Brains: Top Choice to Hire iPhone App Developers In The UK
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_IPHONE_WHY_CHOOSE.map((item, index) => (
                            <div key={index} className="flex flex-wrap gap-6 text-left p-6 rounded-xl hover:shadow-md transition-shadow">
                                <div className="shrink-0 w-14 h-14 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px]">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                title="A Guide to Hiring iPhone App Developers in the UK"
                items={HIRE_IPHONE_GUIDE_ITEMS}
                details={HIRE_IPHONE_GUIDE_DETAILS}
                description="Based upon our experience and industry expertise, here we cover some of the most common questions and answers."
            />

            {/* <StepperProcessSection
                title="iPhone App Development Services Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable mobile application development services."
                items={HIRE_IPHONE_PROCESS}
            /> */}
            <ProcessSection
                title="iPhone App Development Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable iPhone app development services."
                processItems={[
                    { step: "1", title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "2", title: "Analysis of Requirement & Design", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "3", title: "App Development & Testing", icon: <Smartphone size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "4", title: "Application Deployment & Making Site Live", icon: <Rocket size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "5", title: "Upgrades & App Support Services", icon: <CloudCog size={60} className="text-[#f29111] opacity-80" /> }
                ]}
            />
            <CtaSection title="Your idea is most important to us. Share Now!" />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Mobile App Development Projects"
                subtitle="Expertise in Motion"
                description="Your application, your brand, create them any way you want it with our professional development team."
            />
            <TestimonialsSection testimonials={TESTIMONIALS} />
            <FAQSection
                faqs={HIRE_IPHONE_FAQ}
                title="iPhone App Development FAQs"
                description="Check out some of the most common questions about hiring iPhone developers."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
