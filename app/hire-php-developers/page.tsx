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
import banner from "@/images/hire-php-developer.webp";
import {
    HIRE_PHP_HERO,
    HIRE_PHP_COUNTERS,
    HIRE_PHP_SERVICES,
    HIRE_PHP_WHY_CHOOSE,
    HIRE_PHP_GUIDE,
    HIRE_PHP_PROCESS,
    HIRE_PHP_MODELS,
    HIRE_PHP_FAQ
} from "@/lib/hire-php-data";
import { HIRE_MOBILE_INDUSTRIES } from "@/lib/hire-mobile-apps-data";
import Link from "next/link";
import { ProcessSection } from "@/components/shared/ProcessSection";

export const metadata = {
    title: "Hire Top-Rated PHP Developers in the UK | Hidden Brains",
    description: "Hire dedicated and expert PHP developers in UK. Build bespoke, innovative web solutions at affordable prices with Hidden Brains UK.",
};

export default async function HirePhpDevelopersPage() {
    const data = await getData();

    // Map guide data to GuideSection props
    const guideItems = HIRE_PHP_GUIDE.map(item => ({ id: item.id, label: item.question }));
    const guideDetails = HIRE_PHP_GUIDE.map(item => ({
        id: item.id,
        title: item.question,
        content: <p>{item.answer}</p>
    }));

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire PHP Developer"
                title={HIRE_PHP_HERO.title}
                description={HIRE_PHP_HERO.excerpt}
                ctaText={HIRE_PHP_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Web Developer", href: "/hire-web-developers" },
                    { label: "Hire PHP Developers" }
                ]}
                title="Hire Dedicated Team of PHP Developers In The UK"
                counters={HIRE_PHP_COUNTERS}
                content={
                    <>
                        <p className="mb-4 text-[#6a7c92]">
                            Hidden Brains UK, with its combined experience of two decades, has dealt with a plethora of PHP web development projects ranging from an array of industries. This phenomenal experience makes the company a leading provider of end-to-end PHP web development services. Hidden Brains UK offers the industry’s best-customized PHP development solutions to its clients as they are backed by a team of experienced PHP programmers & developers who have in-depth knowledge and expertise in the latest Web Technologies.
                        </p>
                        <p className="text-[#6a7c92]">
                            Hidden Brains UK has nurtured a team of highly skilled PHP Programmers. Clinging to our core expertise in web development, we have been offering custom PHP development services that are delegated using the latest tools and technologies. Our web development services that are integrative, qualified, and experimental are purposely designed to help our clients achieve the maximum ROI.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let's get started on your PHP Development project!"
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hire PHP Developers at Hidden Brains UK for The Range of PHP Services
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed  mx-auto">
                            Our specialized skills across the front-end and back-end of a website, combined with Agile Development, have given us the ability to offer an array of solutions in the PHP space.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_PHP_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group rounded-xl text-center">
                                <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-[#f29111]/10 text-[#f29111] w-fit mx-auto transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4">{service.title}</h3>
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
                    <div className="text-center  mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industries We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            We have specialized in creating unmatched quality solutions for various industries for over a decade, including Healthcare, Retail, Media & Entertainment, Real Estate, and more.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hire Top Choice of PHP Developers at Hidden Brains In The UK
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            With PHP expertise in site and application development, Hidden Brains is at the forefront of new business technologies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_PHP_WHY_CHOOSE.map((reason, index) => (
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
                description="If you still have any questions or queries regarding hiring PHP developers at Hidden Brains UK, then you can consider this guide section."
            />



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
                faqs={HIRE_PHP_FAQ}
                title="FAQs Related to Hiring PHP Developers"
                description="If you have any doubt about hiring PHP developers in the UK, you can clear it by considering these FAQs."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
