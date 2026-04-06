import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";


import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import banner from "@/images/php-web-development.webp";

import {
    ASP_NET_CORE_HERO,
    ASP_NET_CORE_COUNTERS,
    ASP_NET_CORE_SERVICES,
    ASP_NET_CORE_INDUSTRIES,
    ASP_NET_CORE_WHY_CHOOSE,
    ASP_NET_CORE_GUIDE_ITEMS,
    ASP_NET_CORE_GUIDE_DETAILS,
    ASP_NET_CORE_FAQS,
    ASP_NET_CORE_TESTIMONIALS
} from "@/lib/asp-net-core-data";

export const metadata = {
    title: ".NET Core Development Company In The UK | Hidden Brains",
    description: "Leading .NET Core development company in the UK offering reliable, secure, and scalable web solutions using open-source .NET framework.",
};

export default async function AspNetCoreDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="ASP.NET Core Development Company"
                title={ASP_NET_CORE_HERO.title}
                description={ASP_NET_CORE_HERO.excerpt}
                ctaText={ASP_NET_CORE_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: ".NET Core Development" }
                ]}
                title="Leading ASP.NET Core Development Company in the UK"
                counters={ASP_NET_CORE_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px]">
                            With a dedicated team of .NET programmers, our development team is capable of providing enterprise-grade solutions using ASP.NET Core tools across industries.To ensure it perfectly meets their needs, we enable organizations to choose from multi-tier, microservices, and cloud-based architecture types.
                        </p>
                        <p className="mb-[10px]">
                             Hidden Brains creates applications for almost any type of business—a startup, small-scale business, or large enterprise. To keep our clients at the forefront of the market competition, we design and implement the latest advances, such as chatbots and BI, to meet our customers' needs.
                        </p>
                        <p className="mb-[10px]">
                            With industry-recognized platforms and frameworks, we have an expert application developer on the team to create a cutting-edge system to help your business meet its goals. We also offer various API integrations that can be used to seamlessly connect existing systems into new ones. If you're not sure how we can help with your project, don't hesitate to get in touch with us today.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your ASP.NET Core Development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">ASP.NET Core Development Services Provided By Us In The UK</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-16Leading-relaxed">
                        We regularly offer training for our ASP.NET Core developers to keep them knowledgeable about the newest technologies and trends, helping us to maintain our reputation in the market for providing high-end digital solutions. Hidden Brains UK can be your one-stop platform for ASP.Net Core web development needs.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {ASP_NET_CORE_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-bold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[16px] leading-relaxed flex-grow">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16 px-4">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">ASP.NET Core Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            We have an industry-specific, process-driven approach that enables us to meet the project requirements, timelines, and budgets of our clients as a leading ASP.Net Core development company in the UK.
                        </p>
                    </div>
                    <IndustrySlider industries={ASP_NET_CORE_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Why Choose Us For ASP.NET Core Development Services in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-16 leading-relaxed">
                        As a business owner, identifying the perfect ASP.NET Core development company is imperative. ASP.NET service providers are essential when building your online business. Here are a few reasons you should choose us:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {ASP_NET_CORE_WHY_CHOOSE.map((item, idx) => (
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
                description="Here is a guide to help you with the common questions related to ASP.Net Core development."
                items={ASP_NET_CORE_GUIDE_ITEMS}
                details={ASP_NET_CORE_GUIDE_DETAILS}
            />

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
                testimonials={ASP_NET_CORE_TESTIMONIALS}
            />

            <FAQSection
                faqs={ASP_NET_CORE_FAQS}
                title=".NET Core Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
