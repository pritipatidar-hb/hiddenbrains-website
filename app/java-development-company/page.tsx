import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";

import banner from "@/images/Java_Banner.png";

import {
    JAVA_HERO,
    JAVA_COUNTERS,
    JAVA_SERVICES,
    JAVA_INDUSTRIES,
    JAVA_GUIDE_ITEMS,
    JAVA_GUIDE_DETAILS,
    JAVA_FAQS,
    JAVA_TESTIMONIALS,
    JAVA_PROJECTS,
    JAVA_REASONS
} from "@/lib/java-development-data";

export const metadata = {
    title: "Java Development Company in UK | Hidden Brains",
    description: "Do you need top-quality Java software development services in the UK? Hidden Brains UK enables you to build high-quality Java software solutions for both client and server-side projects.",
};

export default async function JavaDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Java Development Company"
                title={JAVA_HERO.title}
                description={JAVA_HERO.excerpt}
                ctaText={JAVA_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Web Development", href: "/web-design-development" },
                    { label: "Java Development" }
                ]}
                title="Trusted Java Development Company in the UK"
                counters={JAVA_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px] ">
                            Java is one of the most popular programming languages in use today and is widely used across different industries. We, as Java software development company UK, offer complete solutions for your business needs and can help you take your company’s ecosystem to the next level using our Java application development services.
                        </p>
                        <p className="mb-[10px]">
                            Whether you are looking to create a new app or need help with a current project, we have a team of experts who will work closely with you to provide an optimal outcome. We also offer agile development models that are flexible and best suited to your business needs.
                        </p>
                        <p className="mb-[10px]">
                            With our experience in building enterprise-grade software products, we guarantee high-quality outputs that will meet all your expectations without breaking your bank balance either!
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Java Development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">End-To-End Java Development Solutions in the UK</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg  leading-relaxed">
                        We at Hidden Brains UK provide end-to-end Java development services tailored to deliver tangible business benefits. With a wide range of experience, we are ready to meet any challenge.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {JAVA_SERVICES.map((service, idx) => (
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
                        <h2 className="text-[26px] md:text-[36px] font-bold mb-[18px] text-[#14133b]">Java Mobile Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            As a top-rated Java development company with years of experience working with clients from different industries, we set the bar for the development of Java solutions for the following industries.
                        </p>
                    </div>
                    <IndustrySlider industries={JAVA_INDUSTRIES} />
                </div>
            </section>

            {/* Why Hidden Brains Section */}
            <BenefitsSection
                title="Why Choose Us for Java Development Services in the UK?"
                description="There are many options when choosing a Java development company. These providers will have a long-lasting impact on your business, so it's important to choose wisely at first. That's why we're your top pick for java development in the UK:"
                items={JAVA_REASONS}
            />

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here is a complete guide about Java mobile development solutions explain the basics of Java development services."
                items={JAVA_GUIDE_ITEMS}
                details={JAVA_GUIDE_DETAILS}
            />

            {/* Process Section */}
            <ProcessSection
                title="Java Development Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable Java development services."
                processItems={[
                    { step: "1", title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "2", title: "Analysis of Requirement & Design", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "3", title: "Software Development & Testing", icon: <Smartphone size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "4", title: "Application Deployment & Making Site Live", icon: <Rocket size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "5", title: "Upgrades & App Support Services", icon: <CloudCog size={60} className="text-[#f29111] opacity-80" /> }
                ]}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                subtitle="BEST PROJECTS"
                title="Our Java Development Projects"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey."
                projects={JAVA_PROJECTS}
            />

            <TestimonialsSection
                testimonials={JAVA_TESTIMONIALS}
            />

            <FAQSection
                faqs={JAVA_FAQS}
                title="Java Development FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
