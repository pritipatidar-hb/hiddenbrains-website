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
    REACT_JS_HERO,
    REACT_JS_COUNTERS,
    REACT_JS_SERVICES,
    REACT_JS_INDUSTRIES,
    REACT_JS_WHY_CHOOSE,
    REACT_JS_GUIDE_ITEMS,
    REACT_JS_GUIDE_DETAILS,
    REACT_JS_TESTIMONIALS,
    REACT_JS_FAQS
} from "@/lib/react-js-development-data";

export const metadata = {
    title: "React JS Development Company in UK | Hidden Brains",
    description: "Get the most out of your product with our top-notch React.JS development services in the UK. We provide scalable web applications, React version upgrades, and maintenance.",
};

export default async function ReactJSDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="React JS Development Company"
                title={REACT_JS_HERO.title}
                description={REACT_JS_HERO.excerpt}
                ctaText={REACT_JS_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Front End Development", href: "/front-end-development-company" },
                    { label: "React JS Development" }
                ]}
                title="A React.Js Development Company In The UK"
                counters={REACT_JS_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px] ">
                            We at Hidden Brains UK offer the best ReactJS Services to all business types including SMEs, and startups. React JS has gained popularity and influence due to its excellent features and flexibility. Leveraging the unique features and widgets of this framework, our ReactJS developers can build high-end mobile and web apps that work flawlessly on multiple platforms.
                        </p>
                        <p className="mb-[10px]">
                            Our ReactJS team is composed of highly experienced frontend developers customizing the ReactJS Solutions that meet the growing needs of our clients. Since we understand the financial situations of the market, therefore we allow our clients to choose the hiring and pricing model that suits them.
                        </p>
                        <p className="mb-[10px]">
                            With various models and price points, you'll find something that suits your specific needs. Plus, we'll help you implement and execute a reliable business plan with new-generation software and best-in-class infrastructures.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your ReactJS development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Range of ReactJS Development Services We Offer At Hidden Brains UK</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg  Leading-relaxed">
                        With in-depth understanding of the framework and the expertise to provide the most superior ReactJs web development services to our clients, we are recognized as the premier React Js development firm in the UK. As our ReactJs team is composed of expert developers, we are your one-stop experts for developing Vuejs solutions.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {REACT_JS_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full flex flex-col">
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
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">ReactJS Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            After years of working on a wide range of projects involving ReactJS for clients from different industries, we have managed to create a benchmark for offering ReactJS development services in the UK for these industries:
                        </p>
                    </div>
                    <IndustrySlider industries={REACT_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Why Choose Us for ReactJS Development Services in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        We understand the changing needs of the market, therefore enable you to hire the best ReactJs development team that strives to deliver secure, scalable, and robust solutions. Here are a few highlights that make us stand apart in the market:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {REACT_JS_WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-[#f29111] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
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
                description="If you have a query regarding ReactJs App development services, then here is our comprehensive guide section to answer your common doubts."
                items={REACT_JS_GUIDE_ITEMS}
                details={REACT_JS_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <TestimonialsSection
                testimonials={REACT_JS_TESTIMONIALS}
            />

            <FAQSection
                faqs={REACT_JS_FAQS}
                title="React.js FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
