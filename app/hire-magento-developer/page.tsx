import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



// import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { CtaSection } from "@/components/shared/CtaSection";
import banner from "@/images/magento-development-Banner.webp";
import {
    HIRE_MAGENTO_HERO,
    HIRE_MAGENTO_COUNTERS,
    HIRE_MAGENTO_SERVICES,
    HIRE_MAGENTO_PROPS,
    HIRE_MAGENTO_INDUSTRIES,
    HIRE_MAGENTO_FEATURED,
    HIRE_MAGENTO_GUIDE,
    HIRE_MAGENTO_FAQ,
    HIRE_MAGENTO_MODELS
} from "@/lib/hire-magento-data";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata = {
    title: "Hire Magento Developers UK | Dedicated Adobe Commerce Experts",
    description: "Hire Magento developers in the UK to build robust eCommerce websites. Our certified Adobe Commerce experts specialize in custom development, theme, and extensions.",
};

export default async function HireMagentoDeveloperPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Magento Developer"
                title={HIRE_MAGENTO_HERO.title}
                description={HIRE_MAGENTO_HERO.excerpt}
                ctaText={HIRE_MAGENTO_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers", href: "/hire-dedicated-developers" },
                    { label: "Open Source Developer", href: "/hire-open-source-developers" },
                    { label: "Magento Developers" }
                ]}
                title="Hire a Team of Magento Developers in The UK To Meet Your Goals"
                counters={HIRE_MAGENTO_COUNTERS}
                content={
                    <div className="s text-[#6a7c92]">
                        <p className="mb-[12px]">
                            Our team of Magento developers can help with changes, upgrades, and maintenance of your Magento eCommerce website. Our Magento 2 certified developers have worked with businesses across a wide range of industries for years.
                        </p>
                        <p className="mb-[12px]">
                            We pride ourselves on being the go-to Adobe Commerce (Magento) agency in the UK for building the credibility of your brand with a great-looking eCommerce site that converts visitors into customers.
                        </p>
                        <p className="mb-[12px]">
                            Our Magento engineers can efficiently design, build, fix bugs, and keep your online store secure and safe. From innovative start-ups to large eCommerce platforms, Hidden Brains’ Magento developers have done it all!
                        </p>
                    </div>
                }
            />

            <CtaSection
                title="Let's get started on your Open Source Development project!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hire Highly-Experienced Magento Developers for Best-In Class Solutions
                        </h2>
                        <p className="text-[#6a7c92]  mx-auto">
                            Take advantage of our Magento development services to launch your eCommerce website. From UI design to development, version upgrades, and maintenance, we handle it all.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {HIRE_MAGENTO_SERVICES.map((service, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-[#f8faff] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                                <h3 className="text-xl font-bold text-[#14133b] mb-4">{service.title}</h3>
                                <p className="text-[#6a7c92] text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[60px] bg-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industries We Serve Magento Development Services
                        </h2>
                        <p className="text-[#6a7c92] text-lg leading-relaxed">
                            We have more than a decade of experience customizing Magento platforms for clients in a variety of verticals, and our expertise includes delivering unmatched quality solutions for numerous industries:
                        </p>
                    </div>
                    <IndustrySlider industries={HIRE_MAGENTO_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[60px] bg-[#f8faff] relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center  mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hidden Brains: A Leading Platform To Hire Magento Developers in The UK
                        </h2>
                        <p className="text-[#6a7c92] text-lg leading-relaxed">
                            The team at Hidden Brains UK can be your one-stop platform to hire the best Magento developers to create bespoke solutions. Our designers and programmers have been keeping up with the latest web development standards and app requirements and are constantly updating the platform's features. For these reasons, you might want to consider hiring Magento developers in the UK.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_MAGENTO_PROPS.map((prop, index) => (
                            <div key={index} className="bg-white p-8 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                                <div className="flex flex-col h-full">
                                    <div className="w-16 h-16 bg-[#f8faff] rounded-2xl flex items-center justify-center text-[#f29111] mb-6 transition-colors duration-300 group-hover:bg-[#f29111] group-hover:text-white">
                                        {prop.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-[#14133b] mb-4 group-hover:text-[#f29111] transition-colors">{prop.title}</h3>
                                    <p className="text-[#6a7c92] text-sm leading-relaxed">
                                        {prop.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* <FeatureDetailedGrid 
                items={HIRE_MAGENTO_FEATURED}
            /> */}

            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[22px] text-center">A Guide To Hire Magento Developers in The UK</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4 h-fit sticky top-24">
                            <nav className="space-y-2">
                                {HIRE_MAGENTO_GUIDE.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="block p-4 rounded-lg bg-white border border-gray-100 !text-[#14133b] font-semibold hover:border-[#f29111] transition-colors"
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="lg:col-span-8 space-y-12">
                            {HIRE_MAGENTO_GUIDE.map((item) => (
                                <div key={item.id} id={item.id} className="bg-[#f8faff] p-8 rounded-2xl border border-gray-100 scroll-mt-28">
                                    <h3 className="text-2xl font-bold text-[#14133b] mb-4">{item.title}</h3>
                                    <p className="text-[#6a7c92] leading-relaxed">{item.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection
                title="Your idea is most important to us. Share Now!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Opensource Development Projects"
                subtitle="Our Work"
                description="Your application, your brand, create them any way you want it with our professional development team."
            />


            <TestimonialsSection testimonials={TESTIMONIALS} />
            <FAQSection
                faqs={HIRE_MAGENTO_FAQ}
                title="FAQs"
                description="If you have any doubts about hiring a Magento developer, then here are some questions and answers that may help you make the right decision."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
