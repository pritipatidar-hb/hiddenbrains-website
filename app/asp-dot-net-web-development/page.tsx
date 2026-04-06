import dynamic from 'next/dynamic';
import React from 'react';

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import banner from "@/images/asp-dot-net-web-development.webp";

import {
    ASP_NET_HERO,
    ASP_NET_SERVICES,
    ASP_NET_INDUSTRIES,
    ASP_NET_FAQS,
    ASP_NET_COUNTERS,
    ASP_NET_WHY_CHOOSE,
    ASP_NET_GUIDE_ITEMS,
    ASP_NET_GUIDE_DETAILS,
    ASP_NET_TESTIMONIALS
} from "@/lib/asp-net-app-data";
import { CtaSection } from '@/components/shared/CtaSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';

export const metadata = {
    title: "ASP.NET Development Company in the UK | Hidden Brains",
    description: "Build high-end performing apps with powerful backends and impressive front-end features using ASP.NET development services in the UK.",
};

export default async function ASPNetDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="ASP.NET Development Company in the UK"
                title={ASP_NET_HERO.title}
                description={ASP_NET_HERO.excerpt}
                ctaText={ASP_NET_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "ASP.Net Development" }
                ]}
                title="Trusted ASP.NET Application Development Services in the UK"
                counters={ASP_NET_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            Whether you want to create a simple or complex web app, ASP.NET is the standalone framework you need. We are a well-established ASP.NET development company in the UK, offering cost-effective and scalable ASP.NET solutions tailored to your specific needs.
                        </p>
                        <p className="mb-[10px] ">
                            For us, our client’s satisfaction is our top priority. Therefore, we strive hard to build result-oriented high-end .NET solutions for our esteemed clients. We, at Hidden Brains UK, prefer to work closely with our clients to ensure on-time project delivery under a committed budget without compromising the project quality.
                        </p>
                        <p className="mb-[10px]">
                            You can also hire ASP.NET developers in the UK from Hidden Brains to leverage robust .NET solutions. Our team of experienced developers is committed to providing the highest-quality ASP.NET development services.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your ASP.NET App Development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Our ASP.NET Application Development Services</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px]">
                        With 20+ years of experience in crafting .NET solutions for clients from different industry verticals, we have got expertise in creating high-end performing apps with powerful backends and impressive front-end features.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-16">
                        {ASP_NET_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full">
                                <div className="mb-6 text-[#f29111]">
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
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Industries We Serve</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            As a renowned ASP.NET application development company in the UK, we adopt a practical approach of developing applications in various industry verticals.
                        </p>
                    </div>
                    <IndustrySlider industries={ASP_NET_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Why Choose Hidden Brains As a ASP.NET Development Company in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        Hidden Brains is one of the certified and globally recognized ASP.NET development companies in the UK that is engaged in creating scalable and reliable applications.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {ASP_NET_WHY_CHOOSE.map((item, idx) => (
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
                title="Our Expert Guide About .NET Development Services"
                description="Here we have a complete guide section to help you get an answer to your basic questions."
                items={ASP_NET_GUIDE_ITEMS}
                details={ASP_NET_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Our ASP.NET App Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialsSection
                testimonials={ASP_NET_TESTIMONIALS}
            />

            <FAQSection
                faqs={ASP_NET_FAQS}
                title="FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
