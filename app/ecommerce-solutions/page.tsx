import dynamic from 'next/dynamic';
import React from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { ServicesSection } from "@/components/shared/ServicesSection";
import bannerImage from "@/images/web-design-development.webp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";

import { getData } from "@/lib/data";
import {
    ECOMMERCE_SERVICES,
    PROCESS_STEPS,
    INFO_BOXES,
    RELATED_SERVICES,
} from "@/lib/ecommerce-solutions-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";

export const metadata = {
    title: "eCommerce Website Development Company UK | Hidden Brains",
    description: "Leading eCommerce website development company in the UK offering robust eCommerce solutions with tailor-made websites for small, mid, and large-sized businesses.",
};

export default async function EcommerceSolutionsPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={bannerImage}
                alt="eCommerce Website Development Company UK"
                title={<>eCommerce Website Development Company <br /> UK</>}
                description="Leading eCommerce Website Development Company in The UK Offering Robust eCommerce Solutions"
                ctaText="Get in Touch"
                ctaHref="/contact"
                minHeight="500px"
                className="pt-20 pb-20"
                darkOverlay={true}
            />
            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[{ label: "Ecommerce Solutions" }]}
                title="Best eCommerce Website Development Services"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "eCommerce Experts" }
                ]}
                content={
                    <>
                        <p>
                            Hidden Brains is an industry dominant eCommerce website development Company in the UK, delivering tailor-made websites that have excellent design and smooth user interface. In our decades of existence, we have provided multichannel eCommerce development services in the UK for small, mid as well as large-sized businesses. As a top eCommerce development company in the UK, we revamp or create a new eCommerce web development that has the capability to engage a more audience. Hidden Brains UK eCommerce website development services are acclaimed by our clients because we create websites that offer smooth navigation and secure Payment experience to the end-users. We are an expert eCommerce web design company, with our eCommerce web design and development services you can grow your online sales.
                        </p>
                    </>
                }
            />

            {/* Services Section */}
            <ServicesSection
                title="Our Ecommerce Development Services"
                description="Scale up your business productivity with our effective E-commerce services."
                variant="colorful"
                services={ECOMMERCE_SERVICES.map(service => ({
                    ...service,
                    hoverBg: {
                        orange: "hover:bg-[#fff9f0]",
                        pink: "hover:bg-[#fcecf0]",
                        dark: "hover:bg-[#f0f4f8]",
                        green: "hover:bg-[#f0fdf4]",
                        yellow: "hover:bg-[#fffbeb]",
                        purple: "hover:bg-[#f8f0f8]"
                    }[service.color] || "hover:bg-gray-50"
                }))}
            />
            {/* Process Section */}
            <ProcessSection
                title="eCommerce Web Development Process"
                description="We follow effective steps to launch your powerful E-commerce solutions that allow our clients to leverage all the advanced functionalities."
                processItems={PROCESS_STEPS.map((step, index) => ({
                    ...step,
                    step: String(index + 1),
                }))}
            />

            {/* Info Images Boxes */}
            <FeatureDetailedGrid
                items={INFO_BOXES.map((box) => ({
                    title: box.title,
                    image: box.image,
                    icon: (
                        <svg viewBox="0 0 64 64" fill="none" stroke="#14133b" strokeWidth="2" strokeMiterlimit="10" width="35" height="35">
                            <path d="M1,59L22,51L42,59L63,51L63,5L42,13L22,5L1,13Z"></path>
                            <path d="M22,5L22,51"></path>
                            <path d="M42,13L42,59"></path>
                        </svg>
                    ),
                    description: !box.isList ? box.content : undefined,
                    items: box.isList ? (box.content as string[]) : undefined,
                }))}
                bgClass="bg-white"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="OUR WORK"
                title="Best eCommerce Website Development"
                description="Our comprehensive, flexible, retail and B2B eCommerce development services UK have benefited several clients from all over the world."
                projects={PROJECTS.filter(p => p.category === 'ecommerce' || p.category === 'travel-tourism' || p.category === 'manufacturing' || p.category === 'game' || p.category === 'restaurant' || p.category === 'entertainment')}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* Related Services */}
            <section className="py-[30px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold mb-[18px]">Related Services</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        {RELATED_SERVICES.map((service, index) => (
                            <Link
                                href={service.link || "#"}
                                key={index}
                                className="bg-white hover:bg-[#f8faff] flex flex-col items-center justify-center group  shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 py-[30px] px-[15px]"
                            >
                                <div className="mb-6 relative w-[64px] h-[64px] flex items-center justify-center">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h6 className="text-[18px] font-semibold text-[#14133b] text-center group-hover:text-[#f29111] transition-colors leading-snug">
                                    {service.title}
                                </h6>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <Contact data={data} />
        </main >
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
