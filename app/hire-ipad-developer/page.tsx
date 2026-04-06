import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";



import banner from "@/images/hire-ipad-apps-development-Banner.webp";
import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";

import {
    HIRE_IPAD_HERO,
    HIRE_IPAD_COUNTERS,
    HIRE_IPAD_CARDS,
    HIRE_IPAD_MODELS,
    HIRE_IPAD_PROCESS,
    HIRE_IPAD_FAQ
} from "@/lib/hire-ipad-data";
import { StepperProcessSection } from "@/components/shared/StepperProcessSection";
import { HIRE_MOBILE_PROCESS } from "@/lib/hire-mobile-apps-data";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";

export const metadata = {
    title: "Hire iPad App Developers in the UK | Hidden Brains",
    description: "Hire dedicated and certified iPad application developers in UK. Get robust, secure and scalable iPad apps for your business.",
};

export default async function HireIPadDevelopersPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire iPad App Developers"
                title={HIRE_IPAD_HERO.title}
                description={HIRE_IPAD_HERO.excerpt}
                ctaText={HIRE_IPAD_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers", href: "/hire-dedicated-developers" },
                    { label: "Hire Mobile Developers", href: "/hire-mobile-apps-developer" },
                    { label: "Hire iPad Apps Developer" }
                ]}
                title="Proficient iPad Application Developers for Hire"
                counters={HIRE_IPAD_COUNTERS}
                content={
                    <div className=" text-[#6a7c92]">
                        <p className="mb-[12px]">
                            Hidden Brains offers client-centric engagement models to hire skilled iPad developers with experience in developing top-ranking iPad apps in C, Objective-C and Swift backed by transparent procedures and proven methodologies.
                        </p>
                        <p>
                            Whether you are a startup or a large enterprise, we provide flexible options to hire iPad developers at affordable costs on an hourly, part-time, and full-time basis. Our team of dedicated iPad developers are experts at building highly intuitive apps on iOS that are specifically customized to fill the iPad, iPad Mini, iPad Air & iPad Pro screens.
                        </p>
                    </div>
                }
            />

            <FeatureDetailedGrid
                items={HIRE_IPAD_CARDS.map(card => ({
                    title: card.title,
                    image: card.image,
                    icon: card.icon,
                    items: card.bullets
                }))}
            />
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Skilled iPad Apps Developers"
                subtitle="Our Work"
                description="Our team of certified iPad app developers delivers secure and scalable iPad apps."
            />
            <StepperProcessSection
                title="Hire Mobile App Developer In 5 Easy Steps"
                description="Our expert app developers are at your service once you hire them on an hourly, part-time or full-time basis. Get your coding done by experienced remote mobile app developers by following a transparent procedure."
                items={HIRE_MOBILE_PROCESS}
            />

            <HiringModelsSection
                description="Our expert iPad app developers are at your service once you hire them on remotely, hourly, part-time or full time basis. Get your coding done by experienced remote iPad developers by following a transparent procedure."
                models={HIRE_IPAD_MODELS}
                bgClass="bg-white"
            />

            <FAQSection
                faqs={HIRE_IPAD_FAQ}
                title="Hire iPad App Developer FAQs"
                description="Common questions about hiring dedicated iPad developers."
            />





            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
