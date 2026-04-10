import dynamic from 'next/dynamic';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { getData } from "@/lib/data";

import { TestimonialSlider } from "@/components/shared/TestimonialSlider";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustryGridSection } from "@/components/shared/IndustryGridSection";
import { ServicesSection } from "@/components/shared/ServicesSection";
import { IPAD_TESTIMONIALS } from '@/lib/ipad-app-data';
import banner from "@/images/ionic-app-development-Banner.webp";

import {
    IONIC_HERO,
    IONIC_SERVICES,
    IONIC_INDUSTRIES_GRID,
    IONIC_FAQS,
    IONIC_HIGHLIGHTS
} from "@/lib/ionic-app-data";

export const metadata = {
    title: "Ionic App Development Company in UK | Hidden Brains",
    description: "Build robust cross-platform mobile apps with our Ionic app development services in the UK.",
};

export default async function IonicAppDevelopmentPage() {
    const data = await getData();

    // Map industries to the format expected by IndustryGridSection
    const industryItems = IONIC_INDUSTRIES_GRID.map(item => ({
        name: item.name,
        icon: item.icon,
        color: item.color,
    }));

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="Ionic App Development Services"
                title={IONIC_HERO.title}
                description={IONIC_HERO.excerpt}
                ctaText={IONIC_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Mobile App Development", href: "/mobile-application-development" },
                    { label: "Cross Platform App Development", href: "/cross-platform-app-development" },
                    { label: "Ionic App Development" }
                ]}
                title="Best Ionic App Development Company in UK"
                listItems={IONIC_HIGHLIGHTS}
                content={
                    <>
                        <p className="mb-[10px]">
                            Hidden Brains is a reputed Ionic mobile app development company in the UK that is ready to go the extra mile to offer the best ionic app development services to clients within the stipulated time period. We build highly interactive ionic mobile apps for clients using the library, in-built tools and functionalities of Ionic framework.
                        </p>
                        <p className="mb-[10px]">
                            We leverage the power of ionic mobile app development services to create highly scalable, robust and excellent functioning Ionic apps that perfectly meet the needs of clients.
                        </p>

                        <div className="mt-[20px]">
                            <h3 className=" text-[26px] smd:text-[36px] font-bold mb-4 text-[#14133b]">Ionic Developers for Hire</h3>
                            <p className="text-[#6a7c92] leading-relaxed">
                                When you hire Ionic Framework Developers from Hidden Brains UK, you get access to unmatched experience and domain knowledge to deliver mobile applications that function seamlessly across platforms. Our Ionic mobile app development team is well versed with HTML5, CSS, JavaScript, AngularJS and SASS technologies.
                            </p>
                        </div>
                    </>
                }
            />

            {/* Services Section */}
            <ServicesSection
                title="Ionic App Development Services"
                description="We provide comprehensive Ionic development services, from custom framework development to enterprise-grade solutions."
                variant="simple"
                background="bg-white"
                services={IONIC_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />

            {/* Industry Grid Section */}
            <IndustryGridSection
                title="Industry We Serve"
                description="As a top Ionic app development company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget."
                items={industryItems}
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Deliver the Best Ionic App Development Services"
                description="Our integrated cross platform development process and competitive prices have benefitted over 2400+ clients from over 108+ countries."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialSlider testimonials={IPAD_TESTIMONIALS} />

            {/* Why Choose Section - Custom content from snippet */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[18px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-6">Select Hidden Brains UK as Ionic App Development Company</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            Hidden Brains UK welcomes client’s vision of the mobile app and discusses its future prospects to unleash the full potential of the mobile app idea. Our decade of industry experience coupled with the technical expertise of professionals enables us to excel in everything that we undertake.
                        </p>
                        <p className=" mx-auto text-[#6a7c92] text-lg leading-relaxed mt-4">
                            We follow a transparent work process and result-driven approach to connect with clients and deliver satisfying as well as benefiting Ionic mobile app solutions.
                        </p>
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={IONIC_FAQS}
                title="Ionic App Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
