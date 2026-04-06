import dynamic from 'next/dynamic';
import React from 'react';

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";
import banner from "@/images/php-web-development.webp";

import {
    PHP_HERO,
    PHP_SERVICES,
    PHP_INDUSTRIES,
    PHP_FAQS,
    PHP_COUNTERS,
    PHP_WHY_CHOOSE,
    PHP_GUIDE_ITEMS,
    PHP_GUIDE_DETAILS,
    PHP_TESTIMONIALS
} from "@/lib/php-app-data";
import { CtaSection } from '@/components/shared/CtaSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ProcessSection } from '@/components/shared/ProcessSection';

export const metadata = {
    title: "PHP Web Development Company in UK | Hidden Brains",
    description: "Build robust, scalable and secure web applications with our top-notch PHP development services in the UK.",
};

export default async function PHPWebDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="PHP Web Development Company"
                title={PHP_HERO.title}
                description={PHP_HERO.excerpt}
                ctaText={PHP_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "PHP Web Development" }
                ]}
                title="Custom PHP Development Services"
                counters={PHP_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            With 22+ years of experience in web development solutions, Hidden Brains is recognized as a dominating PHP development company in the UK that offers a complete range of PHP development services. By blending their domain-specific knowledge and years of experience, they build solutions that help enhance your business performance, accelerate business growth, and maximize productivity.
                        </p>
                        <p className="mb-[10px]">
                            Hidden Brains, a PHP application development company in the UK, provides excellent web solutions for startups, mid-scale businesses, and enterprises. We, as a PHP development company in the UK, build feature-rich applications using PHP and MySQL to seamlessly meet the client’s requirements and business objectives.
                        </p>
                        <p className="mb-[10px]">
                            Our skilled PHP developers build feature-rich, scalable websites, eCommerce sites, or web applications at competitive prices because we want to ensure that our clients stand out from the market competition.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your PHP Development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold
 mb-[18px] text-[#14133b]">Our Core PHP Web Application Development Services</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px]">
                        We regularly offer training for our PHP web developers to keep them knowledgeable about the newest technologies and trends, helping us to maintain our reputation in the market for providing high-end digital solutions. Hidden Brains can be your one stop platform for PHP web development needs.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {PHP_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-bold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold
 mb-[18px] text-[#14133b]">Best PHP Development Company In The UK - Industry We Serve</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            We have an industry-specific, process-driven approach that enables us to meet the project requirements, timelines, and budgets of our clients as a leading PHP development company in the UK.
                        </p>
                    </div>
                    <IndustrySlider industries={PHP_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Why Hidden Brains for PHP Development Services?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        We understand the changing needs of the market, therefore enable you to hire the best PHP development team that strives to deliver secure, scalable, and robust solutions. Here are a few highlights that make us stand apart in the market:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {PHP_WHY_CHOOSE.map((item, idx) => (
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
                description="Here is a guide to help you with the common questions related to PHP web development."
                items={PHP_GUIDE_ITEMS}
                details={PHP_GUIDE_DETAILS}
            />

            {/* Process Section */}
            <ProcessSection
                title="PHP Web Development Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable PHP web development services."
                processItems={[
                    { step: "1", title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "2", title: "Analysis of Requirement & Design", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "3", title: "Software Development & Testing", icon: <Smartphone size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "4", title: "Application Deployment & Making Site Live", icon: <Rocket size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "5", title: "Upgrades & App Support Services", icon: <CloudCog size={60} className="text-[#f29111] opacity-80" /> }
                ]}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Our Web Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialsSection
                testimonials={PHP_TESTIMONIALS}
            />

            <FAQSection
                faqs={PHP_FAQS}
                title="PHP Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
