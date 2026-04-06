import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/images/web-design-development.webp";

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

export const metadata = {
    title: "eCommerce Website Development Company UK | Hidden Brains",
    description: "Leading eCommerce website development company in the UK offering robust eCommerce solutions with tailor-made websites for small, mid, and large-sized businesses.",
};

export default async function EcommerceSolutionsPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={bannerImage} alt="eCommerce Website Development Company UK" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[650px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-[60px] mb-[15px] mt-4">
                            eCommerce Website Development Company <br /> UK
                        </h1>
                        <p className=" text-[16px] md:text-lg text-gray-200 mb-[25px] leading-relaxed font-normal pr-10">
                            Leading eCommerce Website Development Company in The UK Offering Robust eCommerce Solutions
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-7 py-3 bg-[#f29111] hover:bg-[#e08b1a] text-white font-medium rounded-sm transition-all text-[15px] uppercase tracking-wider"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

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
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Our Ecommerce Development Services</h2>
                        <div className="text-[#6a7c92] text-[16px] md:text-[19px] mx-auto font-normal leading-relaxed">
                            Scale up your business productivity with our effective E-commerce services.
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ECOMMERCE_SERVICES.map((service, index) => {
                            const bgHoverMap: Record<string, string> = {
                                orange: "hover:bg-[#fff9f0]",
                                pink: "hover:bg-[#fcecf0]",
                                dark: "hover:bg-[#f0f4f8]",
                                green: "hover:bg-[#f0fdf4]",
                                yellow: "hover:bg-[#fffbeb]",
                                purple: "hover:bg-[#f8f0f8]"
                            };
                            const hoverBg = bgHoverMap[service.color] || "hover:bg-gray-50";

                            return (
                                <div key={index} className={`bg-[#f8faff] border border-gray-100 p-[35px] transition-colors duration-300 ${hoverBg} group flex flex-col rounded-sm shadow-sm hover:shadow-md`}>
                                    <div className="mb-[15px] w-[57px] h-[57px] relative overflow-hidden flex items-center justify-center">
                                        <Image src={service.image} alt={service.title} fill className="object-contain transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px] group-hover:text-[#f29111] transition-colors">{service.title}</h3>
                                    <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-8 flex-grow">
                                        {service.desc}
                                    </p>
                                    <Link
                                        href={service.link || "#"}
                                        className="inline-flex items-center text-[#14133b] font-semibold text-[13px] tracking-widest mt-auto group/btn transition-all duration-300 uppercase"
                                    >
                                        Explore <span className="ml-[14px] w-[35px] h-[2px] bg-[#14133b] group-hover/btn:w-[45px] transition-all duration-300"></span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

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
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {INFO_BOXES.map((box, index) => (
                            <div key={index} className="group flex flex-col bg-[#f8faff] rounded-sm shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                <div className="h-[250px] relative overflow-hidden w-full">
                                    <Image src={box.image} alt={box.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-8 flex-grow">
                                    <div className="mb-6 w-[70px] h-[70px] bg-[#fff] absolute mt-[-64px] md:ml-[243px] lg:ml-[200px] rounded-full flex items-center justify-center text-[#f29111]">
                                        <svg viewBox="0 0 64 64" fill="none" stroke="#14133b" strokeWidth="2" strokeMiterlimit="10" width="35" height="35">
                                            <path d="M1,59L22,51L42,59L63,51L63,5L42,13L22,5L1,13Z"></path>
                                            <path d="M22,5L22,51"></path>
                                            <path d="M42,13L42,59"></path>
                                        </svg>
                                    </div>
                                    <h6 className="text-[22px] font-semibold pt-[15px]  text-[#14133b] mb-4 group-hover:text-black transition-colors">{box.title}</h6>
                                    {box.isList ? (
                                        <ul className="text-[#6a7c92] text-[15px] font-normal leading-relaxed space-y-2 list-disc pl-5">
                                            {(box.content as string[]).map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed">
                                            {box.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
