import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
// import { ExpertiseSection } from "@/components/shared/ExpertiseSection";



import manufacturingBanner from "@/images/Manufacturing-Industries-Banner.webp";

import {
    MANUFACTURING_HERO,
    MANUFACTURING_INTRODUCTION,
    MANUFACTURING_SERVICES,
    MANUFACTURING_TECHNOLOGIES,
    MANUFACTURING_WHY_CHOOSE_US,
    MANUFACTURING_FAQ,
    MANUFACTURING_PORTFOLIO
} from "@/lib/manufacturing-data";

export const metadata = {
    title: "Manufacturing IT Solutions & Services UK | Custom Industrial Software",
    description: "Expert manufacturing IT solutions company in the UK. We offer bespoke ERP, inventory management, IoT, and cloud computing services for the industrial sector.",
};

export default async function ManufacturingPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={manufacturingBanner}
                alt="Manufacturing IT Solutions"
                title={MANUFACTURING_HERO.title}
                description={MANUFACTURING_HERO.description}
                ctaText={MANUFACTURING_HERO.buttonText}
                ctaHref={MANUFACTURING_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Manufacturing" }
                ]}
                title={MANUFACTURING_INTRODUCTION.title}
                content={
                    <div className="space-y-4 text-[#6a7c92]">
                        {MANUFACTURING_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Manufacturing IT Services Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {MANUFACTURING_SERVICES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {MANUFACTURING_SERVICES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {MANUFACTURING_SERVICES.items.map((service, index) => (
                            <div key={index} className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-4 hover:border-b-[#f29111] bg-white group flex flex-col items-center text-center">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors tracking-tight leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed font-normal text-[15px]">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Delivering IT Solutions (Trending Tech) Section */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {MANUFACTURING_TECHNOLOGIES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center  mx-auto">
                            {MANUFACTURING_TECHNOLOGIES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {MANUFACTURING_TECHNOLOGIES.items.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group flex flex-col items-center text-center">
                                <div className="mb-8 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-5 group-hover:text-orange-500 transition-colors tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15.5px]">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {MANUFACTURING_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {MANUFACTURING_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {MANUFACTURING_WHY_CHOOSE_US.items.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-[35px] bg-[#f8faff] rounded-2xl hover:bg-white hover:shadow-2xl transition-all hover:scale-[1.02] border border-transparent hover:border-orange-100 group">
                                <div className="shrink-0 w-16 h-16 bg-white text-[#f29111] flex items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:rotate-6">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-[20px] font-bold mb-[12px] text-[#14133b] group-hover:text-orange-500 transition-colors">
                                        {reason.title}
                                    </h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                        {reason.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={MANUFACTURING_FAQ}
                title="Frequently Asked Questions"
                description="Common queries about our manufacturing IT services and industrial software development."
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(4, 12)}
                title={MANUFACTURING_PORTFOLIO.title}
                subtitle="Our Work"
                description={MANUFACTURING_PORTFOLIO.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
