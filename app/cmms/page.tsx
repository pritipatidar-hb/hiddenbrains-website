import React from "react";
import { getData } from "../../lib/data";
import { HeroSection } from "../../components/shared/HeroSection";
import { IntroductionSection } from "../../components/shared/IntroductionSection";
import { CtaSection } from "../../components/shared/CtaSection";
import { TestimonialsSection } from "../../components/home/TestimonialsSection";
import Contact from "../../components/layout/Contact";
import {
    CMMS_HERO,
    CMMS_ACHIEVEMENTS,
    CMMS_FEATURES_INTRO,
    CMMS_FEATURES,
    CMMS_PROCESS,
    CMMS_INTRODUCTION,
    CMMS_BENEFITS_DATA,
    CMMS_PLATFORMS_DATA,
    CMMS_GUIDE_DATA,
    CMMS_INDUSTRIES_DATA,
    CMMS_FAQS
} from "../../lib/cmms-data";
import { ProcessDiagram } from "../components/vehicle-tracking/ProcessDiagram";
import { BenefitsSection } from "../components/BenefitsSection";
import { PlatformsSection } from "../../components/shared/PlatformsSection";
import { GuideSection } from "../../components/shared/GuideSection";
import { IndustrySlider } from "../../components/shared/IndustrySlider";
import { FAQSection } from "../../components/shared/FAQSection";
import Image from "next/image";
import { LottieAnimation } from "@/components/shared/LottieAnimation";
import { CmmsVideo } from "@/components/cmms/CmmsVideo";

export const metadata = {
    title: "CMMS Solution - Smart Maintenance Software | Hidden Brains UK",
    description: "Hidden Brains UK CMMS solution offers a robust, centralized platform to manage technician and asset maintenance tasks with maximum efficiency in real-time.",
};

export default async function CMMSPage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                banner={CMMS_HERO.banner}
                alt="CMMS Solution"
                title={CMMS_HERO.title}
                description={CMMS_HERO.description}
                ctaText={CMMS_HERO.cta}
            />

            <IntroductionSection
                breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: "CMMS" }]}
                title={CMMS_INTRODUCTION.title}
                content={
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">{CMMS_INTRODUCTION.subtitle}</h3>
                            {CMMS_INTRODUCTION.content}
                        </div>

                        <CmmsVideo />
                    </div>
                }
                showHomeIcon={true}
            />

            {/* Significant Achievements */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto text-center max-w-7xl">
                    <div className=" mx-auto mb-[30px]">
                        <h4 className="  text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Significant Achievements</h4>
                        {/* <h2 className="text-4xl font-black text-slate-900 mb-6">Maximize your facility performance</h2> */}
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Maximize your facility performance Reduce the overall cost, and human errors, and automate the information flow by using Hidden Brains UK CMMS Solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CMMS_ACHIEVEMENTS.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 whitespace-pre-line">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features of Smart Maintenance Solution */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-20">
                        <h4 className=" text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">Smart Maintenance Solution</h4>
                        {/* <h2 className="text-4xl font-black text-slate-900 mb-6">{CMMS_FEATURES_INTRO.title}</h2> */}
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            {CMMS_FEATURES_INTRO.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {CMMS_FEATURES.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className={`w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500
                                    ${item.color === 'orange' ? 'bg-orange-100 text-orange-600 border border-orange-200' :
                                        item.color === 'purple' ? 'bg-purple-100 text-purple-600 border border-purple-200' :
                                            item.color === 'dark' ? 'bg-slate-100 text-slate-600 border border-slate-200' :
                                                item.color === 'green' ? 'bg-green-100 text-green-600 border border-green-200' :
                                                    'bg-yellow-100 text-yellow-600 border border-yellow-200'}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Let’s get started on your CMMS project!"
            />

            {/* How it Works */}
            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl ">
                    <div className="mx-auto text-center mb-[30px]">
                        <h4 className="  text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">SMART MAINTENANCE</h4>
                        <h2 className=" text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[15px]">How Does it Work?</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Hidden Brains CMMS offers a robust, centralized platform to manage technician and asset maintenance tasks with maximum efficiency in real-time.
                        </p>
                    </div>

                    {/* <div className="max-w-6xl mx-auto flex justify-center overflow-visible">
                        <ProcessDiagram data={CMMS_PROCESS} />
                    </div> */}
                    <div className="mx-auto max-w-6xl">
                        <LottieAnimation
                            animationUrl="/json/cmm-how-its-work-01.json"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <BenefitsSection
                title={CMMS_BENEFITS_DATA.title}
                description={CMMS_BENEFITS_DATA.description}
                items={CMMS_BENEFITS_DATA.items}
            />

            <PlatformsSection
                title={CMMS_PLATFORMS_DATA.title}
                description={CMMS_PLATFORMS_DATA.description}
                image={CMMS_PLATFORMS_DATA.image}
                techPlatforms={CMMS_PLATFORMS_DATA.techPlatforms}
                integrations={CMMS_PLATFORMS_DATA.integrations}
            />

            <GuideSection
                items={CMMS_GUIDE_DATA.items}
                details={CMMS_GUIDE_DATA.details}
                title={CMMS_GUIDE_DATA.title}
                description={CMMS_GUIDE_DATA.description}
            />

            <CtaSection
                title="Ready to start your dream project? We have a TEAM to get you there."
            />

            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className="mx-auto text-center mb-[30px]">
                        <h4 className=" text-[26px] md:text-[36px] font-bold text-[#14133b] mb-[18px]">SMART MAINTENANCE</h4>
                        {/* <h2 className="text-[36px] font-bold text-[#14133b] mb-[15px]">Industries We Serve</h2> */}
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Industries We Serve Our warehouse inventory management software solution help in efficient warehousing, reducing costs and improving productivity across industries.
                        </p>
                    </div>
                    <IndustrySlider industries={CMMS_INDUSTRIES_DATA} />
                </div>
            </section>

            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            <FAQSection
                title="FAQ's"
                description="Curiosity has it's own reason for existing, by questioning anything we arrive at the greater solutions."
                faqs={CMMS_FAQS}
            />

            <Contact data={data} />
        </div>
    );
}
