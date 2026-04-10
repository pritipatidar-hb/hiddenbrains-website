import dynamic from 'next/dynamic';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { getData } from "@/lib/data";

import { TestimonialSlider } from "@/components/shared/TestimonialSlider";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { IPAD_TESTIMONIALS } from '@/lib/ipad-app-data';
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";
import banner from "@/images/cross-platform-app-development.webp";

import {
    FLUTTER_HERO,
    FLUTTER_SERVICES,
    FLUTTER_INDUSTRIES,
    FLUTTER_FAQS,
    FLUTTER_HIGHLIGHTS,
    FLUTTER_COUNTERS,
    FLUTTER_WHY_CHOOSE,
    FLUTTER_GUIDE_ITEMS,
    FLUTTER_GUIDE_DETAILS,
    FLUTTER_TESTIMONIALS
} from "@/lib/flutter-app-data";
import { CtaSection } from '@/components/shared/CtaSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ProcessSection } from '@/components/shared/ProcessSection';
import { ServicesSection } from '@/components/shared/ServicesSection';

export const metadata = {
    title: "Flutter Application Development Company in UK | Hidden Brains",
    description: "Build fast, scalable, and high-performing apps on Android and iOS with our Flutter app development services in the UK.",
};

export default async function FlutterAppDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="Flutter App Development Services"
                title={FLUTTER_HERO.title}
                description={FLUTTER_HERO.excerpt}
                ctaText={FLUTTER_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Mobile App Development", href: "/mobile-application-development" },
                    { label: "Cross Platform App Development", href: "/cross-platform-app-development" },
                    { label: "Flutter App Development" }
                ]}
                title="A Trusted Flutter Development Company in the UK"
                // listItems={FLUTTER_HIGHLIGHTS}
                counters={FLUTTER_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            As a leading web and mobile app development company in the UK, Hidden Brains specialises in next-gen application development using Google’s Flutter framework. Get multi-platform apps with seamless animations and an appealing user interface by hiring our Flutter app development services.
                        </p>
                        <p className="mb-[10px]">
                            If you want to start your project with an industry-best Flutter app development company, Hidden Brains UK is the right option to look for. With over 200+ apps launched, we ensure to meet the requirements of startups and enterprises. We harness Flutter’s technology and our expertise to slash development time and cost, ensuring a seamless user experience across platforms.
                        </p>
                        <p className="mb-[10px]">
                            We offer end-to-end Flutter app development services to help you go beyond your expectations. Partner with us to transform your app vision to reality.
                        </p>
                    </>
                }
            />
            <CtaSection
                title="Let’s get started on your Flutter Development project!"

            />

            {/* Services Section */}
            <ServicesSection
                title="Our Range of Flutter App Development Services"
                description="From conception to completion, and beyond, we offer post-development support & maintenance for Flutter applications. We can assist you in developing apps that have a native feel and look across multiple platforms by using Flutter components, libraries & widgets."
                variant="simple"
                background="bg-gray-50"
                services={FLUTTER_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Our Flutter Development Services in the UK, Tailored to Meet the Needs of Various Industries</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92] text-lg leading-relaxed">
                            We have set the benchmark for Flutter app development services in the UK, with years of experience in crafting Flutter solutions for clients in different industries.
                        </p>
                    </div>
                    <IndustrySlider industries={FLUTTER_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]">Why Choose Us for Flutter Development Services in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-16 leading-relaxed">
                        If you are looking to find the perfect Flutter development company in the UK, Hidden Brains has all your problems solved. With a strong track record, multiple industry experiences, agile development practices, and expert UI/UX design, we help businesses to meet business requirements.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {FLUTTER_WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#f29111] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
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
                description="If you have any queries about Flutter app development services, then you can consider this detailed guide section to get a solution."
                items={FLUTTER_GUIDE_ITEMS}
                details={FLUTTER_GUIDE_DETAILS}
            />

            {/* Process Section */}
            <ProcessSection
                title="Flutter Development Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable Flutter app development services."
                processItems={[
                    { step: "1", title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "2", title: "Analysis of Requirement & Design", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "3", title: "App Development & Testing", icon: <Smartphone size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "4", title: "Application Deployment & Making Site Live", icon: <Rocket size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "5", title: "Upgrades & App Support Services", icon: <CloudCog size={60} className="text-[#f29111] opacity-80" /> }
                ]}
            />
            <CtaSection
                title="Want a Cross-platform Support, High-performance, Beautiful, and Customizable UI App With Flutter?"

            />
            <PortfolioSection
                subtitle="Our Work"
                title="Our Flutter Development Projects"
                description="Your application, your brand, create them any way you want with our professional development team for mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialsSection
                testimonials={FLUTTER_TESTIMONIALS}
            />

            <FAQSection
                faqs={FLUTTER_FAQS}
                title="Flutter Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}


const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
