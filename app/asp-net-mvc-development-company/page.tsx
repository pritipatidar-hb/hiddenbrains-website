import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";

import banner from "@/images/asp-dot-net-web-development.webp";

import {
    ASP_NET_MVC_HERO,
    ASP_NET_MVC_COUNTERS,
    ASP_NET_MVC_SERVICES,
    ASP_NET_MVC_INDUSTRIES,
    ASP_NET_MVC_WHY_CHOOSE,
    ASP_NET_MVC_GUIDE_ITEMS,
    ASP_NET_MVC_GUIDE_DETAILS,
    ASP_NET_MVC_FAQS,
    ASP_NET_MVC_TESTIMONIALS
} from "@/lib/asp-net-mvc-data";

export const metadata = {
    title: "ASP.NET MVC Development Company In The UK | Hidden Brains",
    description: "Leading ASP.NET MVC development company in the UK offering robust, scalable, and extensible web applications using Microsoft .NET framework.",
};

export default async function AspNetMvcDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="ASP.NET MVC Development Company"
                title={ASP_NET_MVC_HERO.title}
                description={ASP_NET_MVC_HERO.excerpt}
                ctaText={ASP_NET_MVC_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "ASP.NET MVC Development" }
                ]}
                title="ASP.NET MVC Web Development Company in the UK"
                counters={ASP_NET_MVC_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            With ASP.NET MVC, businesses can build robust, scalable, and extensible applications for a variety of enterprise niches and requirements. For a wide range of niches, we develop dynamic, flexible, and standards-based web and enterprise applications using the Microsoft .NET framework.
                        </p>
                        <p className="mb-[10px]">
                            For top-notch development services, you can hire dedicated MVC .NET developers from Hidden Brains. As we understand the complexity of .NET project requirements, we help you build software applications from scratch or upgrade existing systems. You can explore the complete range of ASP.NET MVC web development services, including Core MVC, ASP.NET MVC eCommerce, ASP.NET MVC enterprise applications, .NET microservices and ASP.NET MVC migration, as well as other .NET MVC development services.
                        </p>
                        <p className="mb-[10px]">
                            Our expertise in DotNet MVC development serves a wide range of industries, including e-commerce, healthcare, accounting, retail, manufacturing, transportation, web portals, CRM, CMS, and web ERP. In addition to web and app development, we can undertake large enterprise projects utilizing .NET MVC.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your ASP.NET MVC Web Development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Our Expertise in ASP.NET MVC Development Services</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px]">
                        Our company is the leading provider of ASP.NET MVC development services. We have an in-depth understanding of the framework and the skills necessary to deliver the best results. As the experts in ASP.NET development, we are at your service for top-notch website development services.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {ASP_NET_MVC_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-semibold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">ASP.NET MVC Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            We have an industry-specific, process-driven approach that enables us to meet the project requirements, timelines, and budgets of our clients as a leading ASP.Net MVC development company in the UK.
                        </p>
                    </div>
                    <IndustrySlider industries={ASP_NET_MVC_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Why Choose Us For ASP.NET MVC Web Development Services in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        Business owners must identify ASP.NET service providers in order to build their online business. As the first step of the development process, finding the right ASP.NET MVC web development firm is crucial. If you are looking for ASP.NET developers in the UK, here are a few reasons why you should hire us:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {ASP_NET_MVC_WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#f29111] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here is a guide to help you with the common questions related to ASP.Net MVC development."
                items={ASP_NET_MVC_GUIDE_ITEMS}
                details={ASP_NET_MVC_GUIDE_DETAILS}
            />

            {/* Process Section */}
            {/* <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-6 text-[#14133b]">Our ASP.NET MVC Development Process</h2>
                        <p className="max-w-3xl mx-auto text-[#6a7c92] text-lg">
                            Our team has effective development methodologies to deliver intuitive and scalable ASP.NET MVC web development services.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
                        {[
                            { title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={40} />, color: "bg-[#00bcd4]" },
                            { title: "Analysis of Requirement & Design", icon: <PencilRuler size={40} />, color: "bg-[#f39112]" },
                            { title: "Software Development & Testing", icon: <Smartphone size={40} />, color: "bg-[#6bc3ad]" },
                            { title: "Application Deployment & Making Site Live", icon: <Rocket size={40} />, color: "bg-[#f2b600]" },
                            { title: "Upgrades & App Support Services", icon: <CloudCog size={40} />, color: "bg-[#48acef]" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center group text-center">
                                <div className={`relative w-32 h-36 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                                    <div
                                        className={`absolute inset-0 ${item.color} shadow-lg shadow-black/10`}
                                        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                    ></div>
                                    <div className="relative z-10 text-white">
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className="text-[17px] font-bold text-[#14133b] leading-tight max-w-[180px]">{item.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            {/* <PortfolioSection
                subtitle="Our Work"
                title="Our Web Development Projects"
                description="Detailed look at our creative and results-driven projects delivered using latest technologies."
                projects={data.PROJECTS.slice(0, 8)}
            /> */}

            <TestimonialsSection
                testimonials={ASP_NET_MVC_TESTIMONIALS}
            />

            <FAQSection
                faqs={ASP_NET_MVC_FAQS}
                title=".NET MVC Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
