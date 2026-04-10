import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { getData } from "@/lib/data";

import {
    EMERGING_TECH_BOXES,
    EMERGING_SERVICES,
    HOW_WE_WORK_STEPS,
    ADVANTAGES_PROPOSITIONS
} from "@/lib/emerging-technology-services-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { ServicesSection } from "@/components/shared/ServicesSection";
import { HeroSection } from "@/components/shared/HeroSection";
import emergingTechnologyServicesBanner from "@/images/emerging-technology-services-Banner.webp";
export const metadata = {
    title: "Emerging Technology Services | Hidden Brains UK",
    description: "Gain the first-mover advantage with our expertise in emerging technologies including cloud computing, wearables, and augmented reality services in the UK.",
};

export default async function EmergingTechnologyServicesPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <HeroSection
                banner={emergingTechnologyServicesBanner}
                alt="Emerging Technology Services"
                title={<>Emerging <br />Technology Services</>}
                description="Gain The First-Mover Advantage and A Competitive Edge With Our Expertise in Emerging Technologies"
                ctaText="Get In Touch"
                ctaHref="/contact"
                minHeight="500px"
                darkOverlay={true}
            />

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[{ label: "Emerging Technology Services" }]}
                title="Emerging IT Technologies"
                content={
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2">
                            <p className="text-[#6a7c92] leading-relaxed text-[16px] font-normal mb-6">
                                Hidden Brains provides specialised services to adopt emerging technologies that have the power to reshape businesses in terms of sustainable growth and high productivity. Our experts utilise the strength of high-end technologies such as cloud computing, wearables and augmented reality to deliver the best of everything. We help you to lead the race for innovation with our best-in-class technology-based services in the UK.
                            </p>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                                {EMERGING_TECH_BOXES.map((box, index) => (
                                    <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow group h-40">
                                        <div className="text-[#f29111] mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {box.icon}
                                        </div>
                                        <h6 className="text-[#14133b] font-semibold text-[20px] leading-tight group-hover:text-orange-500 transition-colors">{box.title}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            />

            {/* Services Section */}
            <ServicesSection
                title="Emerging Technologies Services"
                description="Our emerging technology services are based on proper R&D that allows you to leverage the next generation experience."
                variant="colorful"
                background="bg-white"
                services={EMERGING_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    image: service.image,
                    link: service.link
                }))}
            />

            {/* How We Work on Emerging Technologies Section */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            How We Work on Emerging Technologies?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {HOW_WE_WORK_STEPS.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div className="w-[60px] h-[60px] bg-[#fbf5ee] rounded-full flex items-center justify-center font-bold text-[22px] text-[#14133b] mb-[25px]">
                                    {step.number}
                                </div>
                                <div className="h-[90px] w-[90px] mb-[20px] relative hover:-translate-y-2 transition-transform duration-300">
                                    <Image src={step.icon} alt={step.title} fill className="object-contain" />
                                </div>
                                <p className="font-bold text-[13px] text-[#6a7c92] leading-[22px] max-w-[170px] mx-auto">{step.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages and Propositions Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ADVANTAGES_PROPOSITIONS.map((item, index) => (
                            <div key={index} className="bg-white shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:shadow-[0_5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col rounded-sm">
                                <div className="h-56 relative">
                                    <div className="absolute inset-0 overflow-hidden rounded-t-sm">
                                        <Image src={item.image} alt={item.title} fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                </div>
                                <div className="p-8 pt-10 flex-1 relative bg-white z-0 rounded-b-sm">
                                    <h3 className="text-[20px] font-semibold mb-[20px] text-[#14133b]">{item.title}</h3>
                                    {item.desc && (
                                        <p className="text-[15px] leading-[26px] text-[#6a7c92]">{item.desc}</p>
                                    )}
                                    {item.list && (
                                        <ul className="space-y-[12px]">
                                            {item.list.map((listItem, i) => (
                                                <li key={i} className="flex text-[14px] leading-relaxed text-[#6a7c92] items-start">
                                                    <span className="w-[6px] h-[6px] min-w-[6px] rounded-full bg-[#6a7c92] mr-3 mt-[9px] shrink-0 opacity-80"></span>
                                                    <span>{listItem}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <div className="bg-[#f8faff] ">
                <PortfolioSection
                    projects={PROJECTS}
                    subtitle="Our Work"
                    title="Our Best-In-Class Technology Solutions"
                    description="We enable our clients to harness the power of a number of technologies with our disruptive solutions that create a culture of innovation."
                />

            </div>

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
