import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getData } from "@/lib/data";

import {
    EMERGING_TECH_BOXES,
    EMERGING_SERVICES,
    HOW_WE_WORK_STEPS,
    ADVANTAGES_PROPOSITIONS
} from "@/lib/emerging-technology-services-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


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
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2021/07/emerging-technology.webp"
                        alt="Emerging Technology Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[700px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-tight mb-[18px] mt-4">
                            Emerging <br />Technology Services
                        </h1>
                        <p className=" text-[16px] md:text-[18px] font-normal text-gray-200 mb-[25px] leading-relaxed pr-10 max-w-[650px]">
                            Gain The First-Mover Advantage and A Competitive Edge With Our Expertise in Emerging Technologies
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-7 py-3 bg-[#f29111] hover:bg-[#e08b1a] text-white font-medium rounded-sm transition-all text-[15px] uppercase tracking-wider"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[{ label: "Emerging Technology Services" }]}
                title="Emerging IT Technologies"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Mobile Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "Mobile Experts" }
                ]}
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
            <section className="py-[60px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Emerging Technologies Services</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] mx-auto font-normal leading-relaxed max-w-[800px]">
                            Our emerging technology services are based on proper R&D that allows you to leverage the next generation experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {EMERGING_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group rounded-md overflow-hidden flex flex-col p-[35px]">
                                <div className="h-[50px] w-[50px] relative  bg-gray-100 mb-[15px]">
                                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className=" flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px] group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                        <p className="text-[#6a7c92] text-[15px] leading-relaxed font-normal mb-[12px]">{service.desc}</p>
                                    </div>
                                    <div className="mt-auto">
                                        <Link href={service.link} className="inline-flex items-center text-[#14133b] font-semibold uppercase text-[13px] group-hover:text-orange-500 transition-colors tracking-wide">
                                            Explore
                                            <ChevronRight size={18} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
