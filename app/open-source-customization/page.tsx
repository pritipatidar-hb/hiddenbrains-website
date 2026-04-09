import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import openSource from "@/images/open-source-customization.webp"; // Reusing the dark banner image

import { getData } from "@/lib/data";
import {
    TECH_EXPERTISE,
    OS_SERVICES,
    INDUSTRIES_SERVED,
    WHY_CHOOSE_HB,
    OS_GUIDE_ITEMS,
    OS_GUIDE_DETAILS,
    OS_FAQ,
} from "@/lib/open-source-customization-data";

import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";


import { GuideSection } from "@/components/shared/GuideSection";
import { WebIndustrySlider } from "@/components/shared/WebIndustrySlider";
import { IntroductionSection } from "@/components/shared/IntroductionSection";

export const metadata = {
    title: "Open Source Customization Services | Hidden Brains UK",
    description: "Expert open source customization services from Hidden Brains UK. We customize and integrate open source solutions to meet your unique business needs.",
};

export default async function OpenSourceCustomizationPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={openSource} alt="Top-Rated Open Source Customization Services" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[650px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-[60px] mb-[15px] mt-4">
                            Top-Rated Open Source Customization Services
                        </h1>
                        <p className=" text-[16px] md:text-[18px] max-w-[617px] text-gray-200 mb-8 leading-relaxed font-normal pr-10">
                            Our pool of highly trained open-source developers empowers us to understand your needs and seamlessly transform the app idea into reality. Based on our deep knowledge of various open-source platforms, we have developed many custom solutions for small to large-scale organisations.
                        </p>
                        <Button
                            href="/contact"
                            variant="primary"
                            className="px-7 py-3 rounded-sm uppercase tracking-wider"
                        >
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[{ label: "Open Source Customization" }]}
                title="Open Source Customization Services For Limitless Opportunities"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Mobile Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "Mobile Experts" }
                ]}
                content={
                    <>
                        <p className="mb-[14px]">
                            Using Open Source customization services with our experienced team will help you to reduce the time, resources, and costs associated with removing old technologies. We have a team skilled in leveraging the industry’s best open-source technologies and proven methodologies in open-source customization services to generate results with the quickest turnaround possible. In addition to the variety of open-source tools available on the market, our professional team helps clients choose the right tool/product according to their business requirements.
                        </p>
                        <p>
                            At Hidden Brains UK, we believe in offering tailored business solutions by setting up every one of your departments with efficient workflow systems. We have years of experience in customizing and tailoring solutions that go above and beyond the client’s needs, so we assure you to deliver the best experience to your users.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Open Source Development project!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Technology Expertise Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Technology Expertise Uses In Open Source Customization Services</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto leading-relaxed font-normal">
                            We at Hidden Brains UK, create amazing digital experiences for our clients by using the latest open-source technologies and making them stand apart in the market competition. Here is the list of technologies and platforms we leverage while offering open-source customization services.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TECH_EXPERTISE.map((tech, index) => {
                            // Map generic color tags to Tailwind hover background classes instead of icon backgrounds
                            const bgHoverMap: Record<string, string> = {
                                orange: "hover:bg-[#fff9f0]",
                                purple: "hover:bg-[#f8f0f8]",
                                dark: "hover:bg-[#f0f4f8]",
                                green: "hover:bg-[#f0fdf4]",
                                yellow: "hover:bg-[#fffbeb]"
                            };
                            const hoverBg = bgHoverMap[tech.color] || "hover:bg-gray-50";

                            return (
                                <div key={index} className={`bg-white border border-gray-100 p-[35px] transition-colors duration-300 ${hoverBg} group flex flex-col rounded-sm shadow-sm hover:shadow-md h-full`}>
                                    <div className="mb-8">
                                        <Image src={tech.image} alt={tech.title} width={57} height={57} className="object-contain" />
                                    </div>

                                    <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px] group-hover:text-black transition-colors">{tech.title}</h3>

                                    <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-8 flex-grow">
                                        {tech.desc}
                                    </p>

                                    <Button
                                        href={tech.link || "#"}
                                        variant="ghost"
                                        className="inline-flex items-center !text-[#14133b] font-semibold uppercase text-[13px] tracking-widest mt-auto group/btn transition-all duration-300 px-0"
                                    >
                                        EXPLORE <span className="ml-[14px] w-[35px] h-[2px] bg-[#14133b] group-hover/btn:w-[45px] transition-all duration-300"></span>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-[50px] bg-[#f8faff] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Broad Range of Open Source Customization Services We Offer</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] mx-auto font-normal leading-relaxed">
                            At Hidden Brains UK, we aim to provide superior open-source web development services by using a top-class open-source platform. Our broad range of customization services caters to a number of diverse client needs, as demonstrated by the following.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {OS_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Hidden Brains: Open Source Development Services for Different Industries</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal leading-relaxed">
                            Hidden Brains offers open source development services for different industries and verticals. We’re pleased to provide you with more information about our experience in the industry and what sets us apart from other app developers out there.
                        </p>
                    </div>

                    <WebIndustrySlider industries={INDUSTRIES_SERVED} />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10 bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] mb-4">
                            Why Chooses Hidden Brains UK For The Open Source Customization Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[17px] max-w-4xl mx-auto font-medium leading-relaxed">
                            We, Hidden Brains UK, are an experienced, reliable team of developers who specialize in open-source customization services. Along with software developers, programmers, and coders, we also provide assistance with clients' needs. This means we can handle anything from mobile to web development. If you are still looking for reasons to hire experts at Hidden Brains, then you should check out the reasons below:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_HB.map((reason, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="text-[#f29111] mb-6 flex justify-start">
                                    <div className="w-16 h-16 bg-[#f8faff] rounded-full flex items-center justify-center group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300">
                                        {reason.icon}
                                    </div>
                                </div>
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-[#f29111] transition-colors duration-300">
                                    {reason.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[16px] md:text-[18px] leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                description="Here is a guide to help you with the common questions related to open source development."
                items={OS_GUIDE_ITEMS.map(item => ({ id: item.id, label: item.label }))}
                details={OS_GUIDE_DETAILS.map(detail => ({ id: detail.id, title: detail.title, content: detail.content }))}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="OUR WORK"
                title="Our Open Source Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of experts. Contact us to start your own chapter on this fun application development journey."
                projects={PROJECTS}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection title="Open Source Development FAQs" faqs={OS_FAQ} />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
