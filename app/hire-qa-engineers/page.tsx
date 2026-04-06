import dynamic from 'next/dynamic';
import React from "react";
import { Search, Lightbulb, Users, CreditCard, Workflow } from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";



import { getData } from "@/lib/data";
import {
    HIRE_QA_HERO,
    HIRE_QA_INTRO,
    HIRE_QA_PROCESS,
    HIRE_QA_MODELS,
    HIRE_QA_FAQS,
    QA_FEATURE_DETAILS
} from "@/lib/hire-qa-engineers-data";
import banner from "@/images/hire-qa-engineers.webp";

export const metadata = {
    title: "Hire QA Engineers in UK | Hidden Brains",
    description: "Hire expert QA engineers from Hidden Brains UK. Our certified quality assurance testers ensure your website or software meets the highest quality standards.",
};

export default async function HireQAEngineersPage() {
    const data = await getData();
    const { PROJECTS } = data;

    return (
        <main className="min-h-screen">
            <HeroSection
                title={HIRE_QA_HERO.title}
                description={HIRE_QA_HERO.description}
                banner={banner}
                alt={HIRE_QA_HERO.title}
                ctaText="Get in Touch"
                ctaHref="/contact"
            />

            <IntroductionSection
                breadcrumbs={[{ label: "Hire Developers In UK", href: "/hire-dedicated-developers" }, { label: "Hire QA Engineers" }]}
                title={HIRE_QA_INTRO.title}
                content={
                    <div className="">
                        {HIRE_QA_INTRO.paragraphs.map((p, i) => (
                            <p key={i} className="text-[#6a7c92] text-[16px] leading-[1.8] mb-[11px]">
                                {p}
                            </p>
                        ))}
                    </div>
                }
                counters={HIRE_QA_INTRO.stats}
            />

            <FeatureDetailedGrid items={QA_FEATURE_DETAILS} bgClass="bg-[#f8faff]" />

            <PortfolioSection
                projects={PROJECTS.slice(0, 8)}
                title="Experienced Quality Assurance Test Engineer for Hire"
                subtitle="Portfolio"
                description="Our team of certified engineers tests the overall functionality of website or software with respect to quality assurance standards."
            />

            <ProcessSection
                title="Hire QA Engineers Process"
                description="Our quality assurance testers are made available to clients on hourly, part-time or even full time basis, as per your project requirements."
                processItems={HIRE_QA_PROCESS.map(item => ({
                    step: item.id,
                    title: item.title,
                    icon: item.id === "1" ? <Search className="w-10 h-10" /> :
                        item.id === "2" ? <Lightbulb className="w-10 h-10" /> :
                            item.id === "3" ? <Users className="w-10 h-10" /> :
                                item.id === "4" ? <CreditCard className="w-10 h-10" /> :
                                    <Workflow className="w-10 h-10" />
                }))}
            />

            <HiringModelsSection
                title="Hiring Models"
                description="Our expert QA engineers are at your service once you hire them on remotely, hourly, part-time or full time basis. Get your coding done by experienced remote QA engineers by following a transparent procedure."
                models={HIRE_QA_MODELS}
            />

            <FAQSection
                title="Hire QA Engineer FAQs"
                faqs={HIRE_QA_FAQS.map(faq => ({ question: faq.question, answer: faq.answer }))}
            />


            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
