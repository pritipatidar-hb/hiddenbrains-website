import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users, ShieldCheck, Zap, Globe, MessageSquare } from "lucide-react";

import { getData } from "@/lib/data";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import iphoneBanner from "@/images/iphone-apps-development.webp";


import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import {
    IPHONE_SERVICES,
    INDUSTRIES_SERVED,
    WHY_CHOOSE_HB,
    IPHONE_GUIDE_ITEMS,
    IPHONE_GUIDE_DETAILS,
    IPHONE_APPS_FAQ
} from "@/lib/iphone-app-data";
import { IndustrySlider } from '@/components/shared/IndustrySlider';
import { REACT_JS_INDUSTRIES } from '@/lib/react-js-development-data';

export const metadata = {
    title: "iPhone App Development Company In The UK | Hidden Brains",
    description: "Empower your business with custom made highly functional and exclusive iPhone app development solutions and generate better ROI.",
};

export default async function IPhoneAppDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 overflow-hidden bg-slate-900 text-white">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src={iphoneBanner}
                        alt="iPhone App Development Company In The UK"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-[50px] font-bold leading-tight mb-6">
                            iPhone App Development Company In The UK
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Empower your business with custom made highly functional and exclusive iPhone app development solutions and generate better ROI. In the UK, Hidden Brains is the ideal platform to build and launch your next-gen iPhone application with industry-best technologies.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-[#f29111] hover:bg-orange-600 text-white font-semibold rounded-md transition-all group"
                        >
                            Get in Touch
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Section - Intro */}
            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[{ label: "iPhone App Development" }]}
                title="A Trusted iPhone App Development Company in the UK"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Mobile Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "Mobile Experts" }
                ]}
                content={
                    <>
                        <p className="mb-6">
                            Hidden Brains is a leading custom iPhone app development company in the UK with extensive experience in developing scalable, robust, and secure iPhone applications. Our in-depth knowledge and expertise in iPhone app development empower us to use industry-proven methodologies and the latest technologies in development projects.
                        </p>
                        <p>
                            We offer a range of iPhone application development services to startups, SMEs, and leading enterprises. No matter how complex your app development requirements are, our experts can help you create the best-in-class iPhone app for your business. If you have a plan to develop an app, our hire iPhone app developers services will help you transform your business ideas into a feature-rich iPhone app.
                        </p>
                    </>
                }
            />

            {/* CTA Section - Midway */}
            <CtaSection title="Let’s get started on your iPhone App Development project!" />

            {/* Services Grid */}
            <section className="py-24 bg-gray-100 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our iPhone Application Development Services</h2>
                    <p className="max-w-3xl mx-auto text-[#6a7c92] text-lg mb-16">
                        With our 21+ years of industry experience, we strive to deliver bespoke custom iPhone app development solutions to startups, SMEs, and leading enterprises. Empower your business with our trusted iPhone app development services...
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {IPHONE_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industries We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            Being rooted for 20+ years in the app development industry, we have gained immense experience in understanding the client needs of different industries. Therefore, we offer app development solutions to:
                        </p>
                    </div>

                    {/* <MobileIndustrySlider
                        industries={INDUSTRIES_SERVED.map(i => ({
                            title: i.name,
                            content: i.desc,
                            image: i.image,
                            link: i.link
                        }))}
                    /> */}
                    <IndustrySlider industries={REACT_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Hidden Brains */}
            <section className="py-24 bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Is Hidden Brains Best For iPhone App Development Services in the UK??</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92] text-lg">
                            With more than a decade of experience handling complex project needs, our iPhone app developers are globally recognized for developing high-end quality solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {WHY_CHOOSE_HB.map((reason, idx) => (
                            <div key={idx} className="flex gap-6 p-6 hover:bg-gray-50 rounded-xl transition-colors">
                                <div className="shrink-0 w-16 h-16 bg-orange-100 text-orange-500 flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{reason.title}</h4>
                                    <p className="text-gray-500 leading-relaxed">{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Our Guide to iPhone App Development Services in the UK"
                description="Based on our extensive knowledge and experience as a leading iPhone application development agency in the UK, we have covered the most important questions and answers that our partners ask. Still, if you have any doubts about our iPhone app development services then feel free to get in touch with us!"
                items={IPHONE_GUIDE_ITEMS.map(i => ({ id: i.id, label: i.label }))}
                details={IPHONE_GUIDE_DETAILS.map(d => ({
                    id: d.id,
                    title: d.title,
                    content: (
                        <>
                            <p className="mb-6">{d.content}</p>
                            {d.list && (
                                <ul className="space-y-4 text-[#6a7c92] text-lg">
                                    {d.list.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    )
                }))}
            />

            {/* CTA Section - Your idea is important */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                className="text-white"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="Portfolio"
                title="Our iPhone App Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS}
            />
            <TestimonialsSection testimonials={data.TESTIMONIALS} />
            <FAQSection faqs={IPHONE_APPS_FAQ} />
            <Contact data={data} />
        </main >
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
