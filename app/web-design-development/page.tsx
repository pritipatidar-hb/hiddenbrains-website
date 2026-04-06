import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import bannerImage from "@/images/web-design-development.webp";

import { getData } from "@/lib/data";
import {
    TECH_EXPERTISE,
    WEB_SERVICES,
    INDUSTRIES_SERVED,
    WHY_CHOOSE_HB,
    WEB_GUIDE_ITEMS,
    WEB_GUIDE_DETAILS,
    WEB_APP_FAQ,
    WEB_PROCESS_STEPS
} from "@/lib/web-app-data";

import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { GuideSection } from "@/components/shared/GuideSection";
import { WebIndustrySlider } from "@/components/shared/WebIndustrySlider";

export const metadata = {
    title: "Web Design & Development Services UK | Hidden Brains",
    description: "Professional web design and development services in the UK. We create responsive, user-friendly websites that drive business growth and engagement.",
};

export default async function WebDevelopmentPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={bannerImage} alt="Top Web Application Development Company in the UK" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[650px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold leading-tight mb-[18px] mt-4">
                            Top Web Application Development Company in the UK
                        </h1>
                        <p className="text-[16px] md:text-[18px] font-normal text-gray-200 mb-8 leading-relaxed font-medium pr-10 max-w-[609px]">
                            Leverage our agile expertise to build secure, scalable, and quick
                            progressive web apps at a competitive cost. As one of the most
                            renowned web app development agencies in the UK, we thrive on
                            building unmatched quality web apps with incredible user experiences
                            and conversion rates by fusing creative talent with cutting-edge
                            technology.
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
                breadcrumbs={[{ label: "Web Development" }]}
                title="Custom Web Development Services"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Mobile Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "Mobile Experts" }
                ]}
                content={
                    <>
                        <p className="mb-[14px]">
                            <strong>Hidden Brains UK</strong> is a leading name in the IT industry and offers web design and web application development services to clients across the UK and Europe. In our 22+ years of history as a top <strong>web application development company in the UK</strong>, Hidden Brains has set a track record of 4000+ web app development.
                        </p>
                        <p>
                            With the continuous technological advances and the programming landscape changes to adapt to the world's growing technological requirements, we constantly evaluate the upcoming web design and development trends in the custom web application development community, though we can deliver the latest <strong>custom web development services to our customers</strong>. At Hidden Brains, we provide client-centered website development solutions based on cutting-edge technologies and fully interactive web applications that are ideally suited to the needs of the client.
                        </p>
                    </>
                }
            />
            {/* Technology Expertise Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Our Technology Expertise</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] mx-auto leading-relaxed font-normal max-w-4xl">
                            We are known as the one-stop solution for all your website development services. Our proficient team has delivered innovative and secure web solutions for B2B and B2C Clients.
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
                                <div key={index} className={`bg-white border border-gray-100 p-[35px] transition-colors duration-300 ${hoverBg} group flex flex-col rounded-sm shadow-sm hover:shadow-md`}>
                                    <div className="mb-8">
                                        <Image src={tech.image} alt={tech.title} width={57} height={57} className="object-contain" />
                                    </div>

                                    <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px] group-hover:text-black transition-colors">{tech.title}</h3>

                                    <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-8 flex-grow">
                                        {tech.desc}
                                    </p>

                                    <Link
                                        href={tech.link || "#"}
                                        className="inline-flex items-center !text-[#14133b] font-semibold uppercase text-[13px] tracking-widest mt-auto group/btn transition-all duration-300"
                                    >
                                        EXPLORE <span className="ml-[14px] w-[35px] h-[2px] bg-[#14133b] group-hover/btn:w-[45px] transition-all duration-300"></span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section 1 */}
            {/* <section className="py-20 bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#14133b] rounded-xl p-12 relative overflow-hidden">
                        
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 w-full md:w-2/3">
                            <h3 className="text-3xl md:text-[32px] font-bold text-white leading-tight">
                                Let's get started on your Web Development project!
                            </h3>
                        </div>
                        <div className="relative z-10 w-full md:w-1/3 text-left md:text-right">
                            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-[#14133b] font-bold rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 uppercase tracking-wider text-[15px]">
                                Get a Quote <ChevronRight size={16} className="inline ml-1 -mt-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}
            <CtaSection
                title=" Let's get started on your Web Development project!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />
            {/* Services Section */}
            <section className="py-[50px] bg-[#f8faff] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Our Full-Stack Web App Development Services</h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto font-normal leading-relaxed">
                            As one of the UK's leading website development service providers, we offer a complete web application solution to global clients. Have a look at the variety of web app development services we offer.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WEB_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-[10px] group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[16px] leading-relaxed font-normal">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section 1 */}


            {/* Process Section */}


            {/* Industries Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Hidden Brains: Web Development Services for Different Industries</h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto font-normal leading-relaxed">
                            As a leading web app development company in the UK, our process-driven approach has been instrumental in helping us meet client's needs in various industry domains.
                        </p>
                    </div>

                    <WebIndustrySlider industries={INDUSTRIES_SERVED} />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains UK for Web Development Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto font-normal
 leading-relaxed">
                            Hidden Brains is a globally recognized web app development company based in the UK, proficient in creating scalable solutions that drive business growth. Our expert team efficiently delivers innovative web development services, from simple applications to complex, feature-rich portals. By partnering with Hidden Brains UK, you gain access to unmatched expertise and valuable business advantages.
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
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                description="Here are some of the common queries related to Web application development."
                items={WEB_GUIDE_ITEMS.map(item => ({ id: item.id, label: item.label }))}
                details={WEB_GUIDE_DETAILS.map(detail => ({ id: detail.id, title: detail.title, content: detail.content }))}
            />
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Custom Web Application Development Process
                        </h2>
                        <p className="text-[#6a7c92] text-[19px]  mx-auto font-normal
 leading-relaxed">
                            We build your web application with proper understanding and with effective strategies to avoid future delays.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {WEB_PROCESS_STEPS.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="mb-6 overflow-hidden rounded-full flex items-center justify-center p-4 bg-transparent transition-transform duration-300 group-hover:-translate-y-2">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-[16px] font-bold text-[#6a7c92] leading-[29px]">
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />
            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="OUR WORK"
                title="Custom Website Development Services"
                description="We have delivered a wide range of web applications across the world. Have a glance at our work process."
                projects={PROJECTS}
            />


            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection faqs={WEB_APP_FAQ} />



            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
