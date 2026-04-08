import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import qaImage from "@/images/qa-engineers-Banner.webp";

import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import {
    QA_HERO,
    QA_WHY_HB,
    QA_PROCESS,
    QA_OFFERINGS,
    COUNTERS
} from "@/lib/qa-testing-services-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";


export const metadata = {
    title: "QA Testing Services | Hidden Brains UK",
    description: "Comprehensive QA testing services from Hidden Brains UK. We ensure your applications are bug-free, secure, and deliver the best user experience.",
};

export default async function QaTestingServicesPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={qaImage}
                alt="Quality Testing Services"
                title={QA_HERO.title}
                description={QA_HERO.excerpt}
                ctaText={QA_HERO.cta}
            />

            {/* Introduction Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="md:w-1/2">
                            <div className="flex items-center space-x-2 text-sm md:text-base font-normal mb-6 text-gray-900">
                                <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
                                <span className="text-gray-400">/</span>
                                <span className=" text-[#6a7c92] font-medium">Quality Testing Services</span>
                            </div>
                            <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px] leading-tight pr-10">
                                Quality Assurance Services for Optimum Performance
                            </h2>
                            <div className="space-y-6 text-[#6a7c92] leading-relaxed text-[16px] font-normal">
                                <p className="mb-[14px]">
                                    Hidden Brains offers a comprehensive range of quality assurance and testing services in the UK. We serve companies of all sizes – from dynamic start-ups, midsize businesses to large enterprises. We collaborate with our clients throughout the development phase right from application testing to security testing. Our core focus is to provide quality assurance testing services while improving quality, time to market factor, reducing costs and empowering efficient IT processes.
                                </p>
                            </div>
                        </div>

                        {/* Counters */}
                        <div className="md:w-1/2 lg:w-2/5 flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-6">
                                {COUNTERS.map((item, index) => (
                                    <div key={index} className="bg-white border text-center border-gray-100 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                        <h3 className="text-[40px] font-bold text-[#f29111] leading-none">
                                            {item.number.replace(/[^0-9]/g, '')}<span className="text-2xl font-semibold text-[#f29111] ml-1">{item.number.replace(/[0-9]/g, '')}</span>
                                        </h3>
                                        <div className="text-gray-500 text-sm font-medium mt-2">{item.text}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Hidden Brains UK Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-left ">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains UK for Quality Assurance Services?
                        </h2>
                    </div>
                    <div className="space-y-4">
                        <ul className="list-disc pl-6 text-[#6a7c92] text-[16px] leading-relaxed space-y-3 font-normal">
                            {QA_WHY_HB.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-[30px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Quality Testing Services Process
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] max-w-[587px] mx-auto font-normal leading-relaxed">
                            With the core set of testing processes and best practices we offer testing services of different solutions by the experts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {QA_PROCESS.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="mb-6 overflow-hidden flex items-center justify-center p-4 bg-transparent transition-transform duration-300 group-hover:-translate-y-2">
                                    {step.icon && (
                                        <Image
                                            src={step.icon}
                                            alt={step.title}
                                            width={93}
                                            height={86}
                                            className="object-contain"
                                        />
                                    )}
                                </div>
                                <h3 className="text-[16px] font-bold text-[#6a7c92] leading-[29px]">
                                    <span dangerouslySetInnerHTML={{ __html: step.title.replace("Code for Testing", "Code <br/> for Testing").replace("Analysis", " <br/> Analysis").replace("create Test Cases", " <br/> and create Test Cases").replace("Carefully", "<br/> Carefully").replace("Retest", "<br/> Retest") }} />
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section className="pt-[100px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {QA_OFFERINGS.map((offering, index) => (
                            <div key={index} className="flex flex-col bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-sm overflow-hidden group">
                                {/* Image Container */}
                                <div className="relative h-[220px]">
                                    <img
                                        src={offering.image}
                                        alt={offering.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Icon Circle */}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md z-10 border border-gray-50">
                                        <div className="text-[#d25ba1]">
                                            {offering.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="pt-12 pb-10 px-8 flex flex-col items-center flex-grow">
                                    <div className='w-full text-left'>
                                    <h3 className="text-[22px] font-bold text-[#14133b] mb-8 ">
                                        {offering.title}
                                    </h3>
                                    </div>
                                    <ul className="space-y-4 w-full">
                                        {offering.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start text-[#6a7c92] text-[15px] leading-relaxed">
                                                <span className="mr-3 text-[#f29111] text-lg font-bold">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="py-[30px] flex justify-center">
                <Button
                    href="/portfolio"
                    variant="primary"
                    className="px-10 py-3 rounded-full text-[16px]"
                >
                    View Our Work <span className="ml-2">›</span>
                </Button>
            </div>

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="Our Work"
                title="Delivered QA and Testing Projects Worldwide"
                description="Our portfolio spans diverse industries, companies & geography with adherence to high quality and time."
                projects={PROJECTS}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
