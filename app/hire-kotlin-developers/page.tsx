import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";



import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";
import banner from "@/images/iphone-apps-development.webp"; // Using Android banner as placeholder or shared
import {
    HIRE_KOTLIN_HERO,
    HIRE_KOTLIN_COUNTERS,
    HIRE_KOTLIN_SERVICES,
    HIRE_KOTLIN_WHY_CHOOSE,
    HIRE_KOTLIN_GUIDE,
    HIRE_KOTLIN_FAQ,
    HIRE_KOTLIN_MODELS
} from "@/lib/hire-kotlin-data";
import { HIRE_MOBILE_PROCESS, HIRE_MOBILE_INDUSTRIES } from "@/lib/hire-mobile-apps-data";
import Link from "next/link";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { ClipboardList, CloudCog, PencilRuler, Rocket, Smartphone } from "lucide-react";

export const metadata = {
    title: "Hire Kotlin Developers in the UK | Hidden Brains",
    description: "Hire dedicated and certified Kotlin app developers in UK. Get robust, secure and scalable Kotlin apps for your business.",
};

export default async function HireKotlinDevelopersPage() {
    const data = await getData();

    // Map guide data to GuideSection props
    const guideItems = HIRE_KOTLIN_GUIDE.map(item => ({ id: item.id, label: item.question }));
    const guideDetails = HIRE_KOTLIN_GUIDE.map(item => ({
        id: item.id,
        title: item.question,
        content: <p>{item.answer}</p>
    }));

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Kotlin Developers"
                title={HIRE_KOTLIN_HERO.title}
                description={HIRE_KOTLIN_HERO.excerpt}
                ctaText={HIRE_KOTLIN_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Mobile Developers", href: "/hire-mobile-apps-developer" },
                    { label: "Hire Kotlin Developers" }
                ]}
                title="Hire a Dedicated Team of Kotlin Developers in the UK"
                counters={HIRE_KOTLIN_COUNTERS}
                content={
                    <>
                        <p className="mb-4 text-[#6a7c92]">
                            With our Kotlin development team, we've been established as one of the most knowledgeable and professional android developers in various industry niches. Our developers are specialized in the design of complicated Kotlin apps.
                        </p>
                        <p className="text-[#6a7c92]">
                            Hidden Brains UK offers affordable, trusted, innovative, and always improving android development services. All our global customers can expect valued added services from a passionate Kotlin development team striving to satisfy their needs to the utmost.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let's get started on your Kotlin Development project!"
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[40px] font-bold text-[#14133b] mb-[18px]">
                            Our Kotlin Development Services In the UK
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed  mx-auto">
                            Whatever size of the project you have or what kind of mobile solutions you need, we have a team that can make it happen.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_KOTLIN_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group rounded-xl text-center">
                                <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-[#f29111]/10 text-[#f29111] w-fit mx-auto transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#14133b] mb-4">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px]">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hire Our Kotlin App Developers To Create Industry Specific Applications
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            With years of creating Kotlin solutions for global clients, we have got specialisation and expertise in developing bespoke Kotlin applications for various industries:
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains Is Best To Hire Kotlin Developers?
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            We are focused on providing high-quality, fast and modern responses to customers' needs with Kotlin expertise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_KOTLIN_WHY_CHOOSE.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="shrink-0 w-12 h-12 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-[#14133b]">{reason.title}</h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px]">{reason.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                items={guideItems}
                details={guideDetails}
                description="If you have any doubt about Kotlin development services then refer to our guide section."
            />
            <ProcessSection
                title="Kotlin App Development Process"
                description="Our team follows effective development methodologies to deliver intuitive and scalable Kotlin app development services."
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
                projects={data.PROJECTS.slice(0, 8)}
                title="Kotlin App Development Projects"
                subtitle="Our Work"
                description="Your application, your brand, create them any way you want it with our professional development team."
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            <section className="py-[80px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[32px]">Our Flexible Engagement Models To Hire Kotlin Developers At Hidden Brains UK</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {HIRE_KOTLIN_MODELS.map((model, index) => (
                            <div key={index} className={`p-8 rounded-2xl border flex flex-col transition-all ${model.active ? 'border-[#f29111] bg-white shadow-2xl relative lg:scale-105 z-10' : 'border-gray-100 bg-[#f8faff] hover:shadow-lg'}`}>
                                <h3 className="text-[20px] font-semibold text-[#14133b] mb-4">{model.title}</h3>
                                <div className="text-4xl font-black text-[#f29111] mb-6">
                                    {model.price}
                                </div>
                                <div className="text-[#6a7c92] text-[15px] leading-relaxed mb-8 min-h-[100px] flex items-center justify-center italic">
                                    <p>"{model.description}"</p>
                                </div>
                                <ul className="text-left space-y-4 mb-10 flex-grow">
                                    {model.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-[15px] text-[#6a7c92]">
                                            <div className="w-5 h-5 rounded-full bg-orange-100 text-[#f29111] flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`inline-block w-full py-4 rounded-xl font-bold transition-all text-center ${model.active ? 'bg-[#f29111] text-white hover:bg-orange-600 shadow-lg shadow-orange-200' : 'border-2 border-[#f29111] !text-[#f29111] hover:bg-[#f29111] hover:text-white'}`}
                                >
                                    Hire Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={HIRE_KOTLIN_FAQ}
                title="FAQs To Hire Kotlin App Developers In The UK"
                description="If you have any doubts to hire Kotlin app developers at Hidden Brains then our FAQ section is here to clear it."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
