import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import crossPlatformBanner from "@/images/cross-platform-app-development.webp";

import {
    CROSS_PLATFORM_SERVICES,
    CROSS_PLATFORM_LIST,
    CROSS_PLATFORM_FAQS,
    CROSS_PLATFORM_TESTIMONIALS
} from "@/lib/cross-platform-app-data";

import { INDUSTRY_SERVED } from "@/lib/it-technology-consultancy-data";


import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



export const metadata = {
    title: "Cross Platform App Development Services UK | Hidden Brains",
    description: "Top cross platform mobile app development agency in the UK. We deliver robust and secure solutions with high-quality cross-platform mobile applications.",
};

export default async function CrossPlatformAppDevelopmentPage() {
    const data = await getData();
    const { PROJECTS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={crossPlatformBanner}
                        alt="Cross Platform App Development Banner"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0e1726]/70"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[800px]">
                        <h1 className="text-4xl md:text-[50px] font-semibold leading-tight mb-[25px] mt-4">
                            Cross Platform <br /> App Development Services
                        </h1>
                        <p className="text-[18px] font-normal text-gray-200 mb-[25px] leading-relaxed max-w-[700px]">
                            With our team of experts, we deliver robust and secure solutions through cross-platform app development services. Boost your business ROI with high-quality cross-platform mobile applications built by our experienced developers.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-7 py-3 bg-[#f29111] hover:bg-[#e08b1a] border border-[#f29111] text-white font-medium rounded-[5px] transition-all text-[15px] uppercase tracking-wider"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Mobile App Development", href: "/mobile-application-development" },
                    { label: "Cross Platform App Development" }
                ]}
                title="Top Cross Platform Mobile App Development Agency In UK"
                // counters={[
                //     { value: "22", symbol: "+", label: "Years of experience" },
                //     { value: "1200", symbol: "+", label: "Mobile Projects" },
                //     { value: "30", symbol: "+", label: "Domain served" },
                //     { value: "125", symbol: "+", label: "Mobile Experts" }
                // ]}
                content={
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3">
                            <div className="space-y-6 text-[#6a7c92] text-[16px] font-normal
 leading-relaxed">
                                <p>
                                    Hidden Brains, a name that has been dominating the IT industry since 2003, has a proven track record of developing robust cross-platform app development that can function on multiple platforms including iOS, Android and Windows. Our vast experience in the field of <Link href="/mobile-application-development" className="text-blue-500 hover:underline">custom mobile development</Link> combined with the expertise of our employees makes us the most preferred choice for cross-platform mobile app development services.
                                </p>
                                <p>
                                    We have developed over 1200+ mobile apps so far, and you can count on our expertise and ability to excel. Our developers are proficient with the latest technologies that support cross-platform mobile app development services and launch innovative, robust, and secure solutions on different platforms with a single codebase. Hidden Brains is also known as the best cross-platform development company as we offer applications with native look and feel under rigorous deadlines.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 mt-[-146px]">
                            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg mt-[40px]p]">
                                <ul className="space-y-4">
                                    {CROSS_PLATFORM_LIST.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 rounded-full bg-[#f29111] mt-2 mr-3 flex-shrink-0"></span>
                                            <h4 className="text-[17px] font-semibold text-[#14133b]">{item}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* Cross Platform App Services */}
            <section className="py-[60px] bg-[#f7f8fd]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b]">Cross Platform App Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CROSS_PLATFORM_SERVICES.map((service, index) => {
                            let iconBg = "bg-[#fff8f0]";
                            let iconColor = "text-[#f29111]";

                            switch (service.color) {
                                case "pink":
                                    iconBg = "bg-[#fff0fa]";
                                    iconColor = "text-[#e91e63]";
                                    break;
                                case "dark":
                                    iconBg = "bg-[#f4f7fa]";
                                    iconColor = "text-[#0e1726]";
                                    break;
                                case "green":
                                    iconBg = "bg-[#f0fdf4]";
                                    iconColor = "text-[#22c55e]";
                                    break;
                                case "yellow":
                                    iconBg = "bg-[#fffbeb]";
                                    iconColor = "text-[#f59e0b]";
                                    break;
                                case "purple":
                                    iconBg = "bg-[#faf5ff]";
                                    iconColor = "text-[#a855f7]";
                                    break;
                            }

                            return (
                                <div key={index} className="bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 flex items-center gap-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 group">
                                    <div className={`flex-shrink-0 h-[70px] w-[70px] flex justify-center items-center rounded-full ${iconBg} ${iconColor}`}>
                                        <div className="flex items-center justify-center [&>svg]:w-9 [&>svg]:h-9">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h6 className="text-[19px] font-semibold
 text-[#14133b] leading-tight">{service.title}</h6>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industry We Serve (Grid) */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold
 text-[#14133b] mb-[18px]">Industry We Serve</h2>
                        <p className="text-[#6a7c92] text-[16px] mx-auto font-normal leading-relaxed max-w-[800px]">
                            As a top Cross Platform app development services provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {INDUSTRY_SERVED.map((item, index) => {
                            let hoverBg = "hover:bg-orange-50";
                            switch (item.color) {
                                case "pink": hoverBg = "hover:bg-pink-50"; break;
                                case "dark": hoverBg = "hover:bg-slate-50"; break;
                                case "yellow": hoverBg = "hover:bg-yellow-50"; break;
                                case "purple": hoverBg = "hover:bg-purple-50"; break;
                                case "green": hoverBg = "hover:bg-green-50"; break;
                            }

                            return (
                                <div key={index} className={`bg-white rounded-md border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer min-h-[160px] group ${hoverBg}`}>
                                    <div className="w-[60px] h-[60px] relative mb-4">
                                        <Image src={item.image} alt={item.title} fill className="object-contain" />
                                    </div>
                                    <h3 className="text-[#14133b] font-semibold text-[15px] sm:text-[16px] text-center">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <div className="bg-[#f8faff]">
                <PortfolioSection
                    projects={PROJECTS}
                    subtitle="Our Work"
                    title="Cross-Platform Mobile App Development Services UK"
                    description="Over 22+ years of experience and 1200+ mobile apps to our credit, we have the most experienced and knowledgeable development team that works for several industry domains."
                />
            </div>

            {/* Testimonials Section */}
            <section className="bg-white">
                <div className="w-full">
                    <TestimonialSlider testimonials={CROSS_PLATFORM_TESTIMONIALS} />
                </div>
            </section>

            {/* Why Hidden Brains Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Why Hidden Brains for Cross-Platform Development</h2>
                            <div className=" text-[#6a7c92] text-[16px] font-normal leading-relaxed ">
                                <p className="mb-[14px]">
                                    Hidden Brains being a renowned cross-platform app development company takes care of all the requirements, specifications and preferences of clients. We map a precise plan to design and develop a low-cost cross-platform app development project that can beat the market competition.
                                </p>
                                <p>
                                    Our technical team coordinates with the client at every stage of project execution right from planning, design, development to deployment of the application. Thus, we believe in the power of a completely transparent working process.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection
                title="Cross-Platform App Development FAQs"
                faqs={CROSS_PLATFORM_FAQS}
                className="bg-white"
            />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
