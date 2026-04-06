import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";



import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";
import banner from "@/images/fa.laravel-development.webp";
import {
    HIRE_WEB_HERO,
    HIRE_WEB_COUNTERS,
    HIRE_WEB_SERVICES,
    HIRE_WEB_WHY_CHOOSE,
    HIRE_WEB_GUIDE,
    HIRE_WEB_PROCESS,
    HIRE_WEB_MODELS,
    HIRE_WEB_FAQ
} from "@/lib/hire-web-data";
import { HIRE_MOBILE_INDUSTRIES } from "@/lib/hire-mobile-apps-data";
import Link from "next/link";
import { ProcessSection } from "@/components/shared/ProcessSection";

export const metadata = {
    title: "Hire Top-Rated Web Developers in the UK | Hidden Brains",
    description: "Hire dedicated and expert web developers in UK. Build bespoke, innovative web solutions at affordable prices with Hidden Brains UK.",
};

export default async function HireWebDevelopersPage() {
    const data = await getData();

    // Map guide data to GuideSection props
    const guideItems = HIRE_WEB_GUIDE.map(item => ({ id: item.id, label: item.question }));
    const guideDetails = HIRE_WEB_GUIDE.map(item => ({
        id: item.id,
        title: item.question,
        content: <p>{item.answer}</p>
    }));

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Web Developer"
                title={HIRE_WEB_HERO.title}
                description={HIRE_WEB_HERO.excerpt}
                ctaText={HIRE_WEB_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Web Developer" }
                ]}
                title="Hire Top-Rated Web Developers in The UK"
                counters={HIRE_WEB_COUNTERS}
                content={
                    <>
                        <p className="mb-[12px] text-[#6a7c92]">
                            Want to build an interactive website or web app that transforms your brand image? Hidden Brains UK is here with a huge pool of experienced and talented web developers. Hire web developer in the UK who ensure secure communication and collaboration throughout the product development process. Our dedicated Web developers are adept at building custom web solutions that meet your requirements and speak to your audience across any device.
                        </p>
                        <p className="text-[#6a7c92]">
                            At Hidden Brains UK, we offer you the opportunity to hire web developers that specialize in developing web solutions that are scalable, feature-rich, and adhere to international quality standards. They handle complex business needs to develop highly flexible solutions that are ROI-driven. With our different hiring models, you can concentrate on your core business.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let's get started on your Web Development project!"
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Service Expertise Of Our Web Developers At Hidden Brains UK
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed mx-auto">
                            By combining our expertise in web development with the agile development process, we have been able to offer a wide range of web development services to companies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_WEB_SERVICES.map((service, index) => (
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
                            Hidden Brains: Web Development Services for Different Industries
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            Having provided customized web development solutions for clients in a variety of verticals for over a decade, we have specialized in creating unmatched quality solutions for various industries.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hidden Brains: Top Choice to Hire Web Developer In The UK
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            Hidden Brains UK is your trusted source for professional website design and programming with 22+ years of experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_WEB_WHY_CHOOSE.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="shrink-0 w-12 h-12 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-[11px] text-[#14133b]">{reason.title}</h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">{reason.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GuideSection
                items={guideItems}
                details={guideDetails}
                description="If you still have any questions or queries regarding hiring web developers at Hidden Brains UK, then you can consider this guide section."
            />

            {/* <ProcessSection
                title="Web Development Process"
                description="Our team follows effective development methodologies to deliver intuitive and scalable web applications."
                processItems={HIRE_WEB_PROCESS}
            /> */}

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Web Development Projects"
                subtitle="Portfolio"
                description="Your application, your brand, create them any way you want it with our professional development team."
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />



            <FAQSection
                faqs={HIRE_WEB_FAQ}
                title="FAQs Related to Hiring Web Developers"
                description="If you have any doubt about hiring web developers in the UK, you can clear it by considering these FAQs."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
