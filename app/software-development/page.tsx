import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import bannerImage from "@/images/slide1.webp";

import { getData } from "@/lib/data";
import {
    SOFTWARE_SERVICES,
    INDUSTRIES_SERVED,
    WHY_CHOOSE_HB,
    SOFTWARE_GUIDE_ITEMS,
    SOFTWARE_GUIDE_DETAILS,
    SOFTWARE_FAQ
} from "@/lib/software-development-data";

import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";


import { GuideSection } from "@/components/shared/GuideSection";
import { WebIndustrySlider } from "@/components/shared/WebIndustrySlider";
import { IntroductionSection } from "@/components/shared/IntroductionSection";

export const metadata = {
    title: "Software Development Company UK | Hidden Brains",
    description: "Leading software development company in the UK offering custom software solutions, enterprise applications, and digital transformation services.",
};

export default async function SoftwareDevelopmentPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={bannerImage} alt="Top Software Development Company in the UK" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[650px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-tight mb-[25px] mt-4">
                            Top Software Development Company in the UK
                        </h1>
                        <p className=" text-[16px] md:text-[18px] font-normal text-gray-200 mb-8 leading-relaxed font-medium pr-10 max-w-[609px]">
                            Having established itself as an award-winning custom software development company in the UK, Hidden Brains is committed to bringing secure, robust, and scalable software development services to startups, SMEs, and enterprises.
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
                breadcrumbs={[{ label: "Software Development" }]}
                title="Trusted Software Development Company in the UK"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Mobile Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "Mobile Experts" }
                ]}
                content={
                    <>
                        <p className="mb-[14px] font-normal">
                            Boost your business growth with innovative software, designed and developed to suit your unique needs. From product design and coding to testing, deployment, and support, we oversee every stage of development to deliver unmatched quality products to your business. Our team is globally trusted for software development solutions since we have set a track record of 5000+ solutions.
                        </p>
                        <p className="font-normal">
                            Our team of professionals provides businesses with creative, custom-built software solutions that help them gain a competitive edge. To make these digital solutions stand out in the crowd, our software development team incorporates modern technologies like IoT, AR/VR, Artificial Intelligence, Machine Learning, Blockchain, and AI.
                        </p>
                    </>
                }
            />

            {/* CTA Section 1 */}
            <CtaSection
                title="Let's get started on your Software Development project!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Our Software Development Expertise and Services</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] mx-auto font-normal leading-relaxed">
                            As one of the leading software development companies, we have thousands of business partners worldwide. Our teams of skilled and dedicated software developers at our company develop secure and scalable software applications, whether they are for the web, mobile, or SaaS. Among the services we offer are:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SOFTWARE_SERVICES.map((service, index) => (
                            <div key={index} className="bg-[#f8faff] p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-[10px] group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[16px] leading-relaxed font-normal">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Hidden Brains UK: Industry-Specific Software Development Solutions</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] mx-auto font-normal leading-relaxed">
                            As a leading custom software development company in the UK, we work with all major industries and offer a bespoke service per a client's individual needs. As the leading provider of custom software in the UK, we offer custom solutions for companies in retail, eLearning, tour and travel, logistics, media and entertainment, healthcare apps, and more.
                        </p>
                    </div>

                    <WebIndustrySlider industries={INDUSTRIES_SERVED} />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Choose Hidden Brains UK For Software Development Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] mx-auto font-normal leading-relaxed">
                            Need some guidance with an idea? We'll show you the way! Outsourcing software development services from us can help your business grow exponentially. Our experts can provide revolutionary software development services right from conceptualization to final deployment. Still, here are some potent reasons why Hidden Brains is considered a trusted platform for software development services in the UK:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_HB.map((reason, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
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
                description="Here we have a guide covering all the important questions and answers regarding software development services at Hidden Brains UK:"
                title="Software Development Guide"
                items={SOFTWARE_GUIDE_ITEMS.map(item => ({ id: item.id, label: item.label }))}
                details={SOFTWARE_GUIDE_DETAILS.map(detail => ({ id: detail.id, title: detail.title, content: detail.content }))}
            />

            {/* CTA Section 2 */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="OUR WORK"
                title="Our Software Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of experts. Contact us to start your own chapter on this fun application development journey."
                projects={PROJECTS}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection
                faqs={SOFTWARE_FAQ}
            />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
