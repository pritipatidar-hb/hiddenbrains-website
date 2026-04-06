import dynamic from 'next/dynamic';
import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { getData } from "@/lib/data";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import banner from "@/images/Kotlin.webp";


import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { GuideSection } from "@/components/shared/GuideSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";

import {
    KOTLIN_HERO,
    KOTLIN_COUNTERS,
    KOTLIN_EXPERTISE,
    KOTLIN_INDUSTRIES,
    KOTLIN_WHY_CHOOSE,
    KOTLIN_GUIDE,
    KOTLIN_PROCESS,
    KOTLIN_FAQS,
    KOTLIN_TESTIMONIALS
} from "@/lib/kotlin-app-data";

export const metadata = {
    title: "Kotlin App Development Company in UK | Hidden Brains",
    description: "Our Kotlin app development services use top-of-the-line tools to make Android development faster and more exciting.",
};

export default async function KotlinAppDevelopmentPage() {
    const data = await getData();

    // Map KOTLIN_INDUSTRIES to MobileIndustryItem type
    const mappedIndustries = KOTLIN_INDUSTRIES.map(ind => ({
        title: ind.name,
        content: ind.desc,
        image: ind.image,
        link: ind.link
    }));

    // Map KOTLIN_GUIDE to GuideSection items/details
    const guideItems = KOTLIN_GUIDE.map((g, idx) => ({
        id: `guide-item-${idx}`,
        label: g.title
    }));

    const guideDetails = KOTLIN_GUIDE.map((g, idx) => ({
        id: `guide-item-${idx}`,
        title: g.title,
        content: <p dangerouslySetInnerHTML={{ __html: g.content }} />
    }));

    return (
        <main className="bg-white">
            <HeroSection
                banner={banner}
                alt="Kotlin App Development Company in the UK"
                title={KOTLIN_HERO.title}
                description={KOTLIN_HERO.excerpt}
                ctaText={KOTLIN_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[{ label: "Kotlin Development" }]}
                title="Globally Trusted Kotlin App Development Company"
                counters={KOTLIN_COUNTERS}
                content={
                    <>
                        <p className="mb-6  text-[#6a7c92]">
                            With the use of the Kotlin programming language, we were able to offer high-quality Kotlin App Development Services more quickly. Each of our Kotlin app developers is seasoned, qualified, and dedicated to working on their respective projects to the best of their abilities. We use an agile methodology to manage our app development projects, and we focus on UI and UX.
                        </p>
                        <p className="mb-6">
                            Because we were familiar with Kotlin, we were able to keep our costs down and be effective from our first meeting. This is how you know when to work with the best Kotlin app development company. It’s not enough for them to be experts in coding languages; you want one that understands your business and your needs, too.
                        </p>
                        <p>
                            You need a custom Kotlin app development company that has experience in the specific area or industry you’re looking for support. As experienced software engineers and developers, we pride ourselves on maintaining long-term relationships with clients through top-of-the-line service at competitive prices.
                        </p>
                    </>
                }
            />

            <CtaSection title="Let’s get started on your Kotlin Development project!" />

            <section className="py-[50px] bg-gray-100 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]">Our Expertise in Kotlin Development Services</h2>
                    <p className="max-w-4xl mx-auto text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed ">
                        Our team’s expertise in Kotlin Development Services can help you get the most out of your investment. We will design, code, and maintain a custom Kotlin application that best fits your needs, which includes:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-16">
                        {KOTLIN_EXPERTISE.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group">
                                <h3 className="text-[22px] font-semibold mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[14px] font-normal leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="text-center max-w-[800px] mx-auto mb-[40px]">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                        Kotlin App Development Services For Various Industries
                    </h2>
                    <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                        Based on years of experience customising Kotlin solutions for clients from different industries, we have set the standard for Kotlin development services in the UK.
                    </p>
                </div>
                <div className="px-6 relative">
                    <MobileIndustrySlider industries={mappedIndustries} />
                </div>
            </section>

            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[18px]">
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]">Why Choose Hidden Brains for Kotlin App Development Services in the UK?</h2>
                        <p className="max-w-4xl mx-auto text-[#6a7c92]  text-[16px] md:text-[18px] font-normal leading-relaxed">
                            When it comes to finding the perfect Kotlin development company, Hidden Brains UK will be your ultimate choice. Choosing the best Kotlin developer will be the first step in building your business. The following are just a few of the reasons we are your best choice in the UK for Kotlin development services:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {KOTLIN_WHY_CHOOSE.map((reason, idx) => (
                            <div key={idx} className="flex flex-col p-6 hover:bg-white bg-transparent rounded-xl transition-colors border border-transparent hover:border-gray-100 hover:shadow-lg text-center items-center">
                                <div className="shrink-0 w-16 h-16 bg-[#14133b] text-white flex items-center justify-center rounded-xl mb-4">
                                    {reason.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-[#14133b]">{reason.title}</h4>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px]">{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                title="Guide"
                description="Here is our comprehensive guide to Kotlin app development services. With this guide, you can resolve your basic queries and get an idea about the services."
                items={guideItems}
                details={guideDetails}
            />

            <section className="py-[50px] bg-gray-100 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px]">Kotlin Development Process</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed ">
                        Our team has effective development methodologies to deliver intuitive and scalable Kotlin app development services.
                    </p>
                    <div className="flex flex-wrap justify-center items-stretch gap-6 mt-16">
                        {KOTLIN_PROCESS.map((process, idx) => (
                            <div key={idx} className="bg-white p-8 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] shadow-sm hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col items-center justify-center border-b-4 border-transparent hover:border-orange-500">
                                <div className="mb-6 relative w-[93px] h-[86px]">
                                    <Image src={process.icon} alt={process.title} fill className="object-contain" />
                                </div>
                                <h3 className="font-bold text-[16px] leading-[1.4] text-center text-[#14133b]">{process.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="Our Work"
                title="Our Kotlin Development Projects"
                description="Your application, your brand, create them any way you want with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={data.PROJECTS.slice(0, 8)}
            />

            <TestimonialsSection testimonials={KOTLIN_TESTIMONIALS} />

            <FAQSection faqs={KOTLIN_FAQS} />
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
