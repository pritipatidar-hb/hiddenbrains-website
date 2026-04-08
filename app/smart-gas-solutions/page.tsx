import React from "react";
import { getData } from "../../lib/data";
import { HeroSection } from "../../components/shared/HeroSection";
import { IntroductionSection } from "../../components/shared/IntroductionSection";
import { CtaSection } from "../../components/shared/CtaSection";
import { TestimonialsSection } from "../../components/home/TestimonialsSection";
import Contact from "../../components/layout/Contact";
import {
    SMART_GAS_HERO,
    SMART_GAS_INTRODUCTION,
    SMART_GAS_FEATURES,
    SMART_GAS_BENEFITS,
    SMART_GAS_INFRASTRUCTURE,
    SMART_GAS_PLATFORMS_DATA,
    SMART_GAS_GUIDE_DATA,
    SMART_GAS_INDUSTRIES_DATA,
    SMART_GAS_FAQS
} from "../../lib/smart-gas-data";
import { BenefitsSection } from "../components/BenefitsSection";
import { PlatformsSection } from "../../components/shared/PlatformsSection";
import { GuideSection } from "../../components/shared/GuideSection";
import { IndustrySlider } from "../../components/shared/IndustrySlider";
import { FAQSection } from "../../components/shared/FAQSection";
import { LottieAnimation } from "../../components/shared/LottieAnimation";
import { SmartGasVideo } from "../../components/smart-gas/SmartGasVideo";
import Image from "next/image";
import SmartGasBanner from "../../images/Smartstation.webp";
import SmartStationPlatform from "../../images/Smart-Station-platform-image.webp"
export const metadata = {
    title: "Smart Gas Solutions | Hidden Brains UK",
    description: "Innovative smart gas solutions from Hidden Brains UK. We develop IoT-powered gas monitoring and management systems for improved safety and efficiency.",
};

export default async function SmartGasPage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                banner={SmartGasBanner}
                alt="Smart Gas Station Solution"
                title={SMART_GAS_HERO.title}
                description={SMART_GAS_HERO.description}
                ctaText={SMART_GAS_HERO.cta}
            />

            <IntroductionSection
                breadcrumbs={[{ label: "Solutions", href: "/solutions" }, { label: "Smart Gas Station" }]}
                title={SMART_GAS_INTRODUCTION.title}
                content={
                    <div className="space-y-12">
                        <div className="space-y-6">
                            {/* <h3 className="text-[36px] font-semibold mb-[18px] text-slate-900">{SMART_GAS_INTRODUCTION.subtitle}</h3> */}
                            {SMART_GAS_INTRODUCTION.content}
                        </div>

                        <SmartGasVideo />
                    </div>
                }
                showHomeIcon={true}
            />

            <BenefitsSection
                subtitle={SMART_GAS_FEATURES.title}
                title={SMART_GAS_FEATURES.subtitle}
                description={SMART_GAS_FEATURES.description}
                items={SMART_GAS_FEATURES.items}
            />
            <CtaSection
                title="Let’s get started on your Web Development project!"
            />
            {/* How it Works */}
            <section className="py-[50px] bg-white relative overflow-hidden">
                <div className="container px-6 mx-auto text-center relative z-10 max-w-7xl">
                    <div className=" mx-auto mb-[30px]">
                        <h4 className="flex inline-flex px-[15px] py-[4px] bg-[#fdf4e7] rounded-[40px] text-[13px] text-orange-500 font-medium uppercase tracking-widest mb-4">HOW IT WORKS</h4>
                        <h2 className="  text-[26px] md:text-[36px] font-semibold text-slate-900 mb-6">Smart Gas Station: Overall Business Process</h2>
                        <div className="mx-auto mt-8 max-w-4xl">
                            <LottieAnimation
                                animationUrl="/json/Smart-station-solution-lifecycle-howits-work-V02.json"
                                className="mx-auto w-full max-w-3xl h-[360px] md:h-[440px]"
                            />
                        </div>
                    </div>
                    {/* <SmartGasAnimation /> */}

                </div>
            </section>

            <BenefitsSection
                subtitle={SMART_GAS_BENEFITS.title}
                title={SMART_GAS_BENEFITS.subtitle}
                description=""
                items={SMART_GAS_BENEFITS.items}
            />

            {/* Panoramic View Section */}
            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold  text-slate-900 mb-[18px]">{SMART_GAS_INFRASTRUCTURE.title}</h2>
                        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed">
                            {SMART_GAS_INFRASTRUCTURE.description}
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto  overflow-hidden shadow-2xl border border-slate-100">
                        <Image
                            src={SMART_GAS_INFRASTRUCTURE.image.src}
                            alt={SMART_GAS_INFRASTRUCTURE.image.alt}
                            width={SMART_GAS_INFRASTRUCTURE.image.width}
                            height={SMART_GAS_INFRASTRUCTURE.image.height}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <PlatformsSection
                title={SMART_GAS_PLATFORMS_DATA.title}
                description={SMART_GAS_PLATFORMS_DATA.description}
                image={{
                    src: SmartStationPlatform.src,
                    width: 850,
                    height: 449,
                    alt: "Smart Gas Station Platforms"
                }}
                techPlatforms={SMART_GAS_PLATFORMS_DATA.techPlatforms}
                integrations={SMART_GAS_PLATFORMS_DATA.integrations}
            />

            <GuideSection
                title={SMART_GAS_GUIDE_DATA.title}
                description={SMART_GAS_GUIDE_DATA.description}
                items={SMART_GAS_GUIDE_DATA.items}
                details={SMART_GAS_GUIDE_DATA.details}
            />

            <CtaSection
                title="Ready to transform your gas station with smart solutions?"
            />



            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            <FAQSection
                title="FAQ's"
                description="Curiosity has its own reason for existing, by questioning anything we arrive at the greater solutions."
                faqs={SMART_GAS_FAQS}
            />

            <Contact data={data} />
        </div>
    );
}
