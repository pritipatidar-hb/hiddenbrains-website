import dynamic from 'next/dynamic';
import React from 'react';

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";
import banner from "@/images/ReactNative.webp";

import {
    REACT_NATIVE_HERO,
    REACT_NATIVE_SERVICES,
    REACT_NATIVE_INDUSTRIES,
    REACT_NATIVE_FAQS,
    REACT_NATIVE_COUNTERS,
    REACT_NATIVE_WHY_CHOOSE,
    REACT_NATIVE_GUIDE_ITEMS,
    REACT_NATIVE_GUIDE_DETAILS,
    REACT_NATIVE_TESTIMONIALS
} from "@/lib/react-native-app-data";
import { CtaSection } from '@/components/shared/CtaSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { ProcessSection } from '@/components/shared/ProcessSection';

export const metadata = {
    title: "React Native App Development Company in UK | Hidden Brains",
    description: "Hire React Native app developers at Hidden Brains to build high-quality, fast, and accurate cross-platform applications.",
};

export default async function ReactNativeAppDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="React Native App Development Company"
                title={REACT_NATIVE_HERO.title}
                description={REACT_NATIVE_HERO.excerpt}
                ctaText={REACT_NATIVE_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Mobile App Development", href: "/mobile-application-development" },
                    { label: "Cross Platform App Development", href: "/cross-platform-app-development" },
                    { label: "React Native App Development" }
                ]}
                title="React Native Development Company In the UK"
                counters={REACT_NATIVE_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            Using native functionality and features, we build high-quality, fast, and accurate cross-platform apps. Being backed by a team of highly skilled React Native app developers with ample experience, we help our clients to get ahead of the curve and experience scalable, performant React Native development services.
                        </p>
                        <p className="mb-[10px]">
                            We specialize in both developing applications from scratch and adding our existing development capabilities to a product running on other platforms. We at Hidden Brains UK work with the simple aim to produce products at an expedited speed and at an economical cost that, in return, ensures a better return and success for your business.
                        </p>
                        <p className="mb-[10px]">
                            By combining a unique blend of code, design, and creativity, we are unleashing a new digital frontier: a mobile transformation program for hundreds of businesses worldwide. So allow us to be your trusted tech partner for Customized React Native app development services.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your React Native project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Our Exclusive Range of React Native Development Services in the UK</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg ">
                        Our dedicated team of React Native developers and designers have years of experience building apps for leading brands, and we’re passionate about the products we create and the success of our clients. Whatever your project needs, we can help you develop an app that works brilliantly on all platforms.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {REACT_NATIVE_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full">
                                <div className="mb-6 text-[#f29111]">
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
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">React Native App Development Services For Various Industries</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            With years of experience in customizing React Native solutions for clients from different industries, we have set the benchmark in offering React development services in the UK for the below industries.
                        </p>
                    </div>
                    <IndustrySlider industries={REACT_NATIVE_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Why Choose Hidden Brains UK For React Native Development Services?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg  leading-relaxed mb-[40px]">
                        Hidden Brains UK is a leading React Native developer company that provides high-quality services in the UK. We are a one-stop destination for all your requirements for React Native Development Services. Here are the reasons why we are the best choice for React Native app development solutions.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {REACT_NATIVE_WHY_CHOOSE.map((item, idx) => (
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
                description="Here is a comprehensive guide section to clear all your doubts about React Native App development services. Let's get into the most basic queries that usually people asked:"
                items={REACT_NATIVE_GUIDE_ITEMS}
                details={REACT_NATIVE_GUIDE_DETAILS}
            />

            {/* Process Section */}
            <ProcessSection
                title="React Native App Development Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable React Native app development services."
                processItems={[
                    { step: "1", title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "2", title: "Analysis of Requirement & Design", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "3", title: "App Development & Testing", icon: <Smartphone size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "4", title: "Application Deployment & Making Site Live", icon: <Rocket size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "5", title: "Upgrades & App Support Services", icon: <CloudCog size={60} className="text-[#f29111] opacity-80" /> }
                ]}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Our React Native App Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialsSection
                testimonials={REACT_NATIVE_TESTIMONIALS}
            />

            <FAQSection
                faqs={REACT_NATIVE_FAQS}
                title="React Native App Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
