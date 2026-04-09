import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { ChevronRight, Globe, Smartphone, CheckCircle } from "lucide-react";
import bgImage from "@/images/application-maintenance-services.webp";
import { getData } from "@/lib/data";

import {
    APP_MAINTENANCE_PROCESS,
    APP_MAINTENANCE_INFO_BOXES,
    APP_MAINTENANCE_TESTIMONIALS,
    INTRO_CONTENT
} from "@/lib/application-maintenance-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import { IntroductionSection } from "@/components/shared/IntroductionSection";

export const metadata = {
    title: "Application Maintenance Services | Hidden Brains UK",
    description: "Reduce risks and keep your app updated with our next generation customised app maintenance services for web, desktop, and mobile applications.",
};

export default async function ApplicationMaintenancePage() {
    const data = await getData();
    const { PROJECTS } = data;

    // Filter projects for Application Maintenance if needed, or just slice existing ones
    // The provided HTML showed Catwalk88, Dublin Convention Bureau, Evil Escape Game, Food Express, etc.
    // The first 8 from PROJECTS in data.ts match these exactly.
    const maintenanceProjects = PROJECTS.slice(0, 8);

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white bg-black">
                <div className="absolute inset-0 z-0">
                    <Image src={bgImage} alt="Application Maintenance Services" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[700px]">
                        <h1 className="text-4xl md:text-[50px] font-semibold leading-tight mb-[25px] mt-4">
                            Application Maintenance Services
                        </h1>
                        <p className="text-[18px] font-normal text-gray-200 mb-[25px] leading-relaxed font-medium  max-w-[609px]">
                            <span dangerouslySetInnerHTML={{ __html: "With Our Next Generation Customised App Maintenance Services<br/>Reduce Risks and Keep Your App Updated" }} />
                        </p>
                        <Button
                            href="/contact"
                            variant="primary"
                            className="px-7 py-3 rounded-sm"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </section>
            <IntroductionSection
                bgColor="bg-white"
                breadcrumbs={[{ label: "Application Maintenance" }]}
                title={INTRO_CONTENT.title}
                counters={INTRO_CONTENT.stats}
                content={
                    <>
                        {INTRO_CONTENT.paragraphs.map((paragraph, index) => (
                            // <p key={index} className="mb-[14px]">{paragraph}</p>
                            <p key={index} className="mb-[14px]">{paragraph}</p>
                        ))}
                    </>
                }
            />

            {/* Our App Maintenance Services */}
            <section className=" bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Our App Maintenance Services</h2>
                        <p className="text-[#6a7c92] text-[14px] font-normal leading-relaxed">
                            Our experts allows you to meet with the latest trends and opt for the innovative approach to make your software into highly secure and bug free.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
                        <div className="bg-white border flex flex-col items-center text-center border-gray-100 shadow-sm p-[35px] group hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-6 w-[60px] h-[60px] rounded-full bg-orange-50 flex items-center justify-center text-[#f29111]">
                                <Globe size={35} />
                            </div>
                            <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px]">Web Application Maintenance</h3>
                            <p className="text-[#6a7c92] leading-relaxed mb-6 text-[15px] font-normal">
                                We design, develop and maintain web & desktop applications for its fast and flawless performance. We provide complete responsibility of web app support & maintenance.
                            </p>
                            <Link href="/application-maintenance-services" className="!text-[#14133b] font-medium font-[13px] flex items-center hover:text-[#f29111] transition-colors mt-auto">
                                Read More <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>

                        <div className="bg-white border flex flex-col items-center text-center border-gray-100 shadow-sm p-10 group hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-6 w-[60px] h-[60px] rounded-full bg-pink-50 flex items-center justify-center text-[#f06292]">
                                <Smartphone size={35} />
                            </div>
                            <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px]">Mobile Application Maintenance</h3>
                            <p className="text-[#6a7c92] leading-relaxed mb-6 text-[15px] font-normal">
                                We maintain business mobile apps to ensure its robust performance so that they meet the current market trends. Our industry experts optimize the code for flawless performance.
                            </p>
                            <Link href="/application-maintenance-services" className="!text-[#14133b] font-medium font-[13px] flex items-center hover:text-[#f29111] transition-colors mt-auto">
                                Read More <ChevronRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Maintenance Process */}
            <section className="py-[80px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto mb-16">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">App Maintenance Process</h2>
                        <p className="text-[#6a7c92] text-[16px] font-normal leading-relaxed">
                            We have a streamline process based on best practices to maintain your applications for the long period of time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {APP_MAINTENANCE_PROCESS.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center relative">
                                <div className="text-[50px] font-bold text-[#f29111] opacity-20 absolute -top-6 -z-0">
                                    {item.step}
                                </div>
                                <div className="z-10 bg-white p-6 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center w-full h-full">
                                    <div className="w-[70px] h-[70px] relative mb-6">
                                        <Image src={item.icon} alt={item.title} fill className="object-contain" />
                                    </div>
                                    <h4 className="text-[16px] font-semibold text-[#14133b]">{item.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Boxes */}
            <section className="pt-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {APP_MAINTENANCE_INFO_BOXES.map((box, index) => {
                            let iconBg = "bg-[#14133b]";
                            if (box.color === "green") iconBg = "bg-[#4caf50]";
                            if (box.color === "blue") iconBg = "bg-[#03a9f4]";

                            return (
                                <div key={index} className="border border-gray-100 shadow-sm rounded-lg overflow-hidden flex flex-col group">
                                    <div className="relative h-[200px] w-full overflow-hidden">
                                        <Image src={box.image} alt={box.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-8 relative flex-grow flex flex-col">
                                        <div className={`absolute -top-10 left-8 w-16 h-16 rounded-full ${iconBg} flex items-center justify-center border-4 border-white shadow-sm`}>
                                            {box.icon}
                                        </div>
                                        <h3 className="text-[20px] font-semibold text-[#14133b] mb-4 mt-4">{box.title}</h3>

                                        {box.content && (
                                            <p className="text-[#6a7c92] leading-relaxed text-[15px]">
                                                {box.content}
                                            </p>
                                        )}

                                        {box.list && (
                                            <ul className="space-y-3 mt-2">
                                                {box.list.map((item, i) => (
                                                    <li key={i} className="flex items-start text-[#6a7c92] text-[15px]">
                                                        <CheckCircle className="w-5 h-5 text-[#f29111] mr-2 flex-shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <div className="bg-[#f8faff]">
                <PortfolioSection
                    projects={maintenanceProjects}
                    subtitle="Our Work"
                    title="Application Maintenance and Support Services"
                    description="Hidden Brains offers cost-effective, performance-driven, and highly productive services to maintain web, desktop, and mobile applications."
                />

            </div>

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={APP_MAINTENANCE_TESTIMONIALS} />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
