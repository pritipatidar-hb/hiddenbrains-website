import React from "react";
import Image from "next/image";
import { getData } from "../../lib/data";
import { HeroSection } from "../../components/shared/HeroSection";
import { IntroductionSection } from "../../components/shared/IntroductionSection";
import { CtaSection } from "../../components/shared/CtaSection";
import { TestimonialsSection } from "../../components/home/TestimonialsSection";
import { FAQSection } from "../../components/shared/FAQSection";
import { GuideSection } from "../../components/shared/GuideSection";
import { LottieAnimation } from "../../components/shared/LottieAnimation";
import { SosSolutionVideo } from "../../components/sos-solution/SosSolutionVideo";
import { UseCasesSection } from "../../components/shared/UseCasesSection";
import sosImage from "../../images/sos-platform-image.webp";
import Contact from "../../components/layout/Contact";
// @ts-ignore
import sosBanner from "../../images/sos.webp";

import {
    SOS_HERO,
    SOS_FEATURES,
    SOS_BENEFITS,
    SOS_USE_CASES,
    SOS_GUIDE_ITEMS,
    SOS_GUIDE_DETAILS,
    SOS_FAQ,
} from "../../lib/sos-solution-data";

export const metadata = {
    title: "SOS Solution - Emergency Alert System | Hidden Brains UK",
    description: "Advanced SOS solution and emergency alert system by Hidden Brains UK. Ensure safety with our real-time emergency notification and tracking solutions.",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getColorClasses(color: string) {
    switch (color) {
        case "orange":
            return { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" };
        case "purple":
            return { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" };
        case "dark":
            return { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" };
        case "green":
            return { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" };
        case "yellow":
            return { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" };
        default:
            return { bg: "bg-red-100", text: "text-red-600", border: "border-red-200" };
    }
}

// SOS Icon for feature grid
function SOSFeatureIcon({ color }: { color: string }) {
    const cls = getColorClasses(color);
    return (
        <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${cls.bg} ${cls.text} border ${cls.border}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SOSSolutionPage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                banner={sosBanner}
                alt="SOS App Development – Smart Alerting Solution"
                title={SOS_HERO.title}
                description={SOS_HERO.description}
                ctaText={SOS_HERO.cta}
            />

            {/* Introduction Section */}
            <IntroductionSection
                breadcrumbs={[{ label: "Smart Alerting Solution" }]}
                title="DEVELOP SOS MOBILE APP FOR ANDROID / IOS"
                content={
                    <div className="space-y-4">
                        <p>
                            SOS alert, emergency, and safety solutions from Hidden Brains UK can be extremely helpful
                            in notifying loved ones and first responders during emergencies. When a problematic situation
                            arises, the SOS smart app solution immediately sends an emergency notification and the
                            user&apos;s geolocation to the first three contacts on the list.
                        </p>
                        <p>
                            By pressing a single button on the SOS emergency solution, users can send text messages to
                            their close ones and, ensure that help is on the way to dealing with an emergency situation.
                            Our SOS alert app solution upholds the highest standards of independence, security, privacy,
                            and accessibility whether you need assistance with alerting &amp; mobilizing, lone worker
                            safety, health emergencies, personal safety, or anything else.
                        </p>
                        <p>
                            By using SOS Emergency Solutions, get immediate safety and well-being help in urgent
                            situations, anywhere and anytime. For us, your privacy and security matter the most, so we
                            ensure that Our SOS solutions always protect your privacy and share your location in the
                            case of a serious occurrence.
                        </p>

                        {/* Video Thumbnail */}
                        <SosSolutionVideo />
                    </div>
                }
                showHomeIcon={true}
            />

            {/* Key Features */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[30px]">
                        <h4 className="bg-[#fdf4e7] inline-flex py-[4px] px-[15px] rounded-[50px] text-[13px] text-orange-500 font-medium uppercase tracking-widest mb-4">KEY FEATURES OF</h4>
                        <h2 className=" text-[26px] md:text-[36px] font-semibold  text-slate-900 mb-[18px]">
                            Emergency SOS App Development
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[19px] font-normal leading-relaxed">
                            With a full suite of cutting-edge safety features, our SOS emergency solutions make people
                            feel safe and secure in times of emergency or disaster.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SOS_FEATURES.map((item: any, index: number) => (
                            <div key={index} className="bg-white  p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <SOSFeatureIcon color={item.color} />
                                <div>
                                    <h3 className="text-lg mt-[10px] font-bold text-slate-900 mb-2 group-hover:text-red-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* First CTA */}
            <CtaSection title="Let's get started on your SOS Development project!" />

            {/* How It Works */}
            <section className="py-[50px] bg-slate-50 overflow-hidden ">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className="  mx-auto text-center mb-[18px]">
                        <h2 className="text-[26px] md:text-[36px]  font-semibold text-slate-900 uppercase tracking-tight">
                            How does SOS Solutions Work
                        </h2>
                    </div>

                    <div className="mx-auto max-w-6xl">
                        <LottieAnimation
                            animationUrl="/json/SOS-bus-lifecycle-howits-work.json"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-[50px] bg-white ">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-16">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-slate-900 mb-5">
                            Benefits of SOS Emergency Solutions
                        </h2>
                        <p className="text-slate-600 text-[19px] font-normal leading-relaxed">
                            Our SOS emergency solutions make people feel safe and secure in times of emergency or disaster.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SOS_BENEFITS.map((item: any, idx: number) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-slate-900 mb-5">
                            Platforms
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-[19px] font-normal leading-relaxed">
                            Our SOS assistance app facilitates collaboration and seamless communication during an emergency circumstance.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-4xl h-64 md:h-96 rounded-2xl overflow-hidden mb-16">
                            <Image
                                src={sosImage}
                                alt="SOS - Smart Alerting Solution for Emergencies"
                                fill
                                className="object-cover md:object-contain object-center"
                                sizes="(max-width: 1024px) 100vw, 1024px"
                            />
                        </div>

                        <div className="text-center w-full max-w-3xl">
                            <h2 className="text-2xl md:text-[22px] font-semibold text-slate-900 mb-4">
                                Technology Platforms
                            </h2>
                            <p className="text-slate-600 text-[19px] font-normal leading-relaxed">
                                Compatible with latest web &amp; mobile platforms
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex-1 hover:shadow-lg transition-all items-center justify-center flex group">
                                    <h3 className="text-xl font-bold text-slate-800 text-center uppercase tracking-wide group-hover:text-red-500 transition-colors">
                                        Web <br /> Based
                                    </h3>
                                </div>
                                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm flex-1 hover:shadow-lg transition-all items-center justify-center flex group">
                                    <h3 className="text-xl font-bold text-slate-800 text-center uppercase tracking-wide group-hover:text-red-500 transition-colors">
                                        Mobile Based <br /> iOS / Android
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here are some of the common queries related to SOS App development."
                items={SOS_GUIDE_ITEMS}
                details={SOS_GUIDE_DETAILS}
            />

            {/* Second CTA */}
            <CtaSection title="Ready to start your dream project? We have a TEAM to get you there." />



            {/* Use Cases */}
            <UseCasesSection
                title="Use Cases of SOS Emergency App Solution"
                description="With a variety of applications in various facets, you may avoid, be ready for, react to, and recover from anything with SOS app development."
                items={SOS_USE_CASES.map(item => ({
                    title: item.title,
                    description: item.desc,
                    image: item.image
                }))}
                bgColor="bg-[#f7f7f7]"
                imageStyle="contain"
            />

            {/* Testimonials */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection faqs={SOS_FAQ} />

            {/* Contact Section */}
            <Contact data={data} />
        </div>
    );
}
