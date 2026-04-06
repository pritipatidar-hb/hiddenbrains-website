import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import bannerImage from "@/images/bg-titlebar.jpg";
import hireDedicatedDevelopersBanner from "@/images/hire.webp";

import { getData } from "@/lib/data";
import {
    HERO_CONTENT,
    INTRO_CONTENT,
    TECH_EXPERTISE,
    APP_DEV_TECH,
    SOFTWARE_SERVICES,
    INDUSTRIES_SERVED,
    WHY_CHOOSE_HB,
    GUIDE_ITEMS,
    GUIDE_DETAILS,
    FAQ_ITEMS
} from "@/lib/hire-dedicated-developers-data";

import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";


import { GuideSection } from "@/components/shared/GuideSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { IntroductionSection } from "@/components/shared/IntroductionSection";

export const metadata = {
    title: "Hire Dedicated Developers in UK | Hidden Brains",
    description: "Hire dedicated developers from Hidden Brains UK. Our certified full-stack mobile and web app developers craft tailor-made solutions with industry best practices.",
};

export default async function HireDedicatedDevelopersPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={hireDedicatedDevelopersBanner} alt={HERO_CONTENT.title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[650px]">
                        <h1 className="text-4xl md:text-[50px] font-semibold md:leading-[60px] mb-[15px] mt-4">
                            {HERO_CONTENT.title}
                        </h1>
                        <p className=" text-[16px] md:text-lg text-gray-200 mb-[25px] leading-relaxed font-normal pr-10">
                            {HERO_CONTENT.description}
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
                bgColor="bg-white"
                breadcrumbs={[{ label: "Mobile App Development" }]}
                title={INTRO_CONTENT.title}
                counters={INTRO_CONTENT.stats.map(s => ({ value: s.count, symbol: s.symbol, label: s.label }))}
                content={
                    <>
                        {INTRO_CONTENT.paragraphs.map((paragraph, index) => (
                            <p key={index} className="mb-[14px]">{paragraph}</p>
                        ))}
                    </>
                }
            />

            {/* Technology Expertise Section */}
            <section className="pb-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Technology Expertise of Our Developers</h2>
                        <p className="!text-[#6a7c92] text-[16px] md:text-[19px] font-normal mx-auto leading-relaxed font-medium">
                            Hidden Brains is a team of certified and full-stack mobile and web app developers specializing in crafting tailor-made solutions by employing industry best practices.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TECH_EXPERTISE.map((tech, index) => {
                            const iconColors = [
                                "bg-[#fceef2]", // 0: Android (pinkish)
                                "bg-[#fdf3e8]", // 1: iOS (orangish)
                                "bg-[#e1f5fe]", // 2: Cross Platform (blueish)
                                "bg-emerald-50", // 3: Web
                                "bg-[#fdf3e8]", // 4: UI/UX
                                "bg-[#fceef2]", // 5: QA
                                "bg-emerald-50", // 6: React Native
                                "bg-[#e1f5fe]", // 7: Flutter
                                "bg-[#f4f0f6]", // 8: AR/VR
                            ];
                            const iconBgClass = iconColors[index] || "bg-blue-50";

                            const cardBgClass = index === 1 ? "bg-[#f4eff6] border-transparent" : "bg-white border-gray-100 hover:shadow-lg hover:border-transparent hover:-translate-y-1";

                            return (
                                <div key={index} className={`group p-8 md:p-[35px] border rounded-xl transition-all duration-300 ${cardBgClass} flex flex-col`}>
                                    <div className={`w-[70px] h-[70px] rounded-full flex items-center justify-center mb-8 transition-colors duration-300 ${iconBgClass}`}>
                                        <div className="relative w-[50px] h-[50px]">
                                            <img src={tech.image} alt={tech.title} className="w-full h-full object-contain mix-blend-multiply" />
                                        </div>
                                    </div>

                                    <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px]">{tech.title}</h3>

                                    <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-[11px] flex-grow">
                                        {tech.desc}
                                    </p>

                                    <Link
                                        href={tech.link || "#"}
                                        className="inline-flex items-center !text-[#14133b] font-semibold uppercase text-[13px] tracking-wide group/btn"
                                    >
                                        EXPLORE <span className="ml-3 w-8 h-[2px] bg-[#14133b] transition-all group-hover/btn:w-12 group-hover/btn:bg-orange-500"></span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Mobile App Development Technologies Section */}
            {/* <section className="py-20 bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-bold mb-4">Mobile App Development Technologies</h2>
                        <p className="text-[#6a7c92] text-[17px] max-w-4xl mx-auto font-medium leading-relaxed">
                            Stay ahead of the competition with our professional & enterprise-grade mobile applications development services in the UK. We combine our application development expertise with the latest technologies to address the critical needs of clients across the European Union.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {APP_DEV_TECH.map((tech, index) => {
                            const colorMap: Record<string, string> = {
                                orange: "bg-orange-500",
                                purple: "bg-purple-600",
                                dark: "bg-slate-800",
                                green: "bg-emerald-500",
                                yellow: "bg-amber-500"
                            };
                            const overlayClass = colorMap[tech.color] || "bg-blue-500";

                            return (
                                <div key={index} className="group relative overflow-hidden aspect-[4/3] flex flex-col justify-end">
                                    <div className="absolute inset-0 z-0 bg-gray-100">
                                       
                                        {tech.image.includes('data:image') ? null : (
                                            <Image src={tech.image} alt={tech.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                        )}
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

                                    <div className={`absolute inset-0 ${overlayClass} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-20`}></div>

                                    <div className="relative z-30 p-8 transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0 text-left">
                                        <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <p className="text-white/90 mb-6 leading-relaxed line-clamp-3">{tech.desc}</p>
                                            {tech.link && (
                                                <Link
                                                    href={tech.link}
                                                    className="inline-flex items-center text-white font-bold uppercase text-sm tracking-wide group/btn"
                                                >
                                                    Explore <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}

            {/* CTA Section 1 */}
            <CtaSection
                title="Looking to Hire Dedicated Developers? Let’s get started!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Software Development Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Our Software Development Services</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal leading-relaxed">
                            By collaborating with Hidden Brains UK, clients will have a choice of hiring app developers of their own choice who have expertise in various services, including:
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SOFTWARE_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group text-left">
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-[10px] group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[16px] font-normal leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className=" bg-white">
                <div className="container mx-auto px-6 max-w-[1400px] py-[50px]">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Industry Verticals Served By Our App Developers</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal 
                        leading-relaxed">
                            No matter, in which industry you are operating your business, we have transformed countless business app development ideas into reality with great perfection. So you can hire an app developer from us to achieve success and set a benchmark in the industry.
                        </p>
                    </div>

                    <IndustrySlider industries={INDUSTRIES_SERVED} />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains to Hire App Developers in the UK?
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal leading-relaxed">
                            We are one of the industry-leading mobile and web app development companies, pioneering the landscape for more than 19 years in the UK. Here are some of the reasons you should hire expert developers from us:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WHY_CHOOSE_HB.map((reason, index) => (
                            <div key={index} className="bg-[#14133b] p-10 shadow-sm hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center justify-center min-h-[250px] relative mt-[40px] pt-12 overflow-visible">
                                <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-[80px] h-[80px] bg-orange-500 rounded-full flex items-center justify-center text-white border-4 border-white">
                                    {reason.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-white mb-4">
                                    {reason.title}
                                </h3>
                                <p className="text-gray-300 text-[15px] leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="A Guide to Hiring the Best App Developers in the UK"
                description="Here is a complete guide that helps you get an answer to certain questions:"
                items={GUIDE_ITEMS.map(item => ({ id: item.id, label: item.label }))}
                details={GUIDE_DETAILS.map(detail => ({ id: detail.id, title: detail.title, content: detail.content }))}
            />

            {/* CTA Section 2 */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle=""
                title="Our Mobile App Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={PROJECTS}
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection
                title="FAQs on Hiring App Developers in the UK"
                description="Here are the answers to some questions that have been most frequently asked by clients:"
                faqs={FAQ_ITEMS}
            />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
