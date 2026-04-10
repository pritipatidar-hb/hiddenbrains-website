import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServicesSection } from "@/components/shared/ServicesSection";

import banner from "@/images/web-design-development.webp";

import {
    ANGULAR_HERO,
    ANGULAR_COUNTERS,
    ANGULAR_SERVICES,
    ANGULAR_INDUSTRIES,
    ANGULAR_WHY_CHOOSE,
    ANGULAR_GUIDE_ITEMS,
    ANGULAR_GUIDE_DETAILS,
    ANGULAR_FAQS,
    ANGULAR_TESTIMONIALS
} from "@/lib/angular-development-data";

export const metadata = {
    title: "AngularJS Development Company In The UK | Hidden Brains",
    description: "Leading AngularJS development company in the UK offering reliable, secure, and scalable web solutions using open-source framework.",
};

export default async function AngularJSDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="Angular Development Company"
                title={ANGULAR_HERO.title}
                description={ANGULAR_HERO.excerpt}
                ctaText={ANGULAR_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "Angular Development" }
                ]}
                title="A Leading Angular Development Company in the UK"
                counters={ANGULAR_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            At Hidden Brains UK, we are a team of skilled and experienced Angular developers. We have been rooted in Angular development for 22+ years and have catered to clients from all over the world with high-quality solutions. As an Angular development company in the UK with hands-on experience, Hidden Brains can deliver services to all those who need to hire Angular developer.
                        </p>
                        <p className="mb-[10px]">
                            We rely on the latest technology and trends to deliver long-lasting Angular apps for our clients. Our AngularJS development services include video streaming apps, e-commerce and marketplaces, to social networking app development. Whether you need a learning platform or simply a custom widget or interactive dashboard, our services are what you need.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Angular Development project!"
            />

            {/* Services Section */}
            <ServicesSection
                title="Top Angular Development Services That We Cover"
                description="Hidden Brains UK offers top-of-the-line and cutting-edge Angular app development services that are created to bring you a new level of user experience."
                variant="simple"
                background="bg-gray-50"
                services={ANGULAR_SERVICES.map(service => ({
                    title: service.title,
                    description: service.desc,
                    icon: service.icon
                }))}
            />

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Major Industries We Serve</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            We provide Angular app development services to different industries and verticals. Read on for more information about our experience.
                        </p>
                    </div>
                    <IndustrySlider industries={ANGULAR_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Why Choose Us as Your Angular Development Company?</h2>
                    <p className="max-w-3xl mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-16 leading-relaxed">
                        Hidden Brains is your one-stop shop for your Angular app development needs in the UK. These are the main reasons you should hire us.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {ANGULAR_WHY_CHOOSE.map((item, idx) => (
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
                description="Our guide can help you find the answers to the most common questions in Angular app development."
                items={ANGULAR_GUIDE_ITEMS}
                details={ANGULAR_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            {/* PortfolioSection is usually commented out or disabled as per user's preference in these service pages */}
            <PortfolioSection
                subtitle="Our Work"
                title="Our Web Development Projects"
                description="Your application, your brand, create them any way you want it with our professional web development team. Contact us to start your own chapter on this fun web development journey."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialsSection
                testimonials={ANGULAR_TESTIMONIALS}
            />

            <FAQSection
                faqs={ANGULAR_FAQS}
                title="Angular App Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
