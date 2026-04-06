import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";



import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";
import banner from "@/images/web-design-development.webp";
import {
    HIRE_HTML5_HERO,
    HIRE_HTML5_COUNTERS,
    HIRE_HTML5_PROCESS,
    HIRE_HTML5_MODELS,
    HIRE_HTML5_FAQ,
    HIRE_HTML5_FEATURED
} from "@/lib/hire-html5-data";
import { HIRE_MOBILE_INDUSTRIES, HIRE_MOBILE_PROCESS } from "@/lib/hire-mobile-apps-data";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import {
    Code,
    Monitor,
    Smartphone,
    Gamepad,
    Layers,
    Layout,
    Globe,
    CheckCircle2,
    ClipboardList,
    PencilRuler,
    Rocket,
    CloudCog
} from "lucide-react";
import Link from "next/link";
import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";

export const metadata = {
    title: "Hire HTML5 Developers in the UK | Hidden Brains",
    description: "Hire dedicated and expert HTML5 developers in UK to build robust, responsive, and scalable web solutions with Hidden Brains UK.",
};

export default async function HireHtml5DevelopersPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire HTML5 Developers"
                title={HIRE_HTML5_HERO.title}
                description={HIRE_HTML5_HERO.excerpt}
                ctaText={HIRE_HTML5_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Web Developer", href: "/hire-web-developers" },
                    { label: "Hire HTML5 Developers" }
                ]}
                title="Hire Creative HTML5 Programmers To Strengthen Your Business"
                counters={HIRE_HTML5_COUNTERS}
                content={
                    <>
                        <p className="mb-[12px] text-[#6a7c92]">
                            Hidden Brains has been an early adopter of HTML5 technology, delivering innovative and highly interactive mobile applications. We offer clients a comprehensive range of flexible hiring models on an hourly, part-time, and full-time basis. When you hire HTML5 programmers from Hidden Brains, you can rest assured of confidentiality and transparent procedures.
                        </p>
                        <p className="text-[#6a7c92]">
                            Our team of highly skilled and professional HTML5 developers is our greatest asset and key differentiator. We are passionate about delivering results and exceeding expectations. Hire HTML5 developers from Hidden Brains UK to strengthen your business goals through proven methodologies.
                        </p>
                    </>
                }
            />


            <FeatureDetailedGrid items={HIRE_HTML5_FEATURED} />
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Full-Service HTML5 Solutions"
                subtitle="Portfolio"
                description="Extend your team with the industry-best HTML5 developers at competitive pricing."
            />

            <StepperProcessSection
                title="Hire Mobile App Developer In 5 Easy Steps"
                description="Our expert app developers are at your service once you hire them on an hourly, part-time or full-time basis. Get your coding done by experienced remote mobile app developers by following a transparent procedure."
                items={HIRE_MOBILE_PROCESS}
            />

            <HiringModelsSection
                description="Our expert HTML5 website developers are at your service once you hire them on remotely, hourly, part-time or full time basis."
                models={HIRE_HTML5_MODELS}
            />
            <FAQSection
                faqs={HIRE_HTML5_FAQ}
                title="Hire HTML5 Developers FAQs"
                description="Get answers to some of the most common questions about hiring professional HTML5 developers."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
