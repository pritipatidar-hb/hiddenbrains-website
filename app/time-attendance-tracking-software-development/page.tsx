import React from "react";
import { getData } from "../../lib/data";
import { HeroSection } from "../../components/shared/HeroSection";
import { IntroductionSection } from "../../components/shared/IntroductionSection";
import { CtaSection } from "../../components/shared/CtaSection";
import { TestimonialsSection } from "../../components/home/TestimonialsSection";
import Contact from "../../components/layout/Contact";
import {
    TIME_ATTENDANCE_HERO,
    TIME_ATTENDANCE_INTRODUCTION,
    TIME_ATTENDANCE_FEATURES,
    TIME_ATTENDANCE_FEATURES_INTRO,
    TIME_ATTENDANCE_BENEFITS,
    TIME_ATTENDANCE_BENEFITS_INTRO,
    TIME_ATTENDANCE_PLATFORMS,
    TIME_ATTENDANCE_GUIDE,
    TIME_ATTENDANCE_INDUSTRIES_INTRO,
    TIME_ATTENDANCE_INDUSTRIES,
    TIME_ATTENDANCE_USE_CASES_INTRO,
    TIME_ATTENDANCE_USE_CASES,
    TIME_ATTENDANCE_FAQ,
    TIME_ATTENDANCE_PROCESS
} from "../../lib/time-attendance-data";
import { ProcessDiagram } from "../components/vehicle-tracking/ProcessDiagram";
import { BenefitsSection } from "../components/BenefitsSection";
import { PlatformsSection } from "../../components/shared/PlatformsSection";
import { GuideSection } from "../../components/shared/GuideSection";
import { IndustrySlider } from "../../components/shared/IndustrySlider";
import { UseCasesSection } from "../../components/shared/UseCasesSection";
import { FAQSection } from "../../components/shared/FAQSection";
import TimeAttendanceImage from "../../images/attendance-management-system-platform-images.webp"
import Image from "next/image";
import { LottieAnimation } from "../../components/shared/LottieAnimation";

export const metadata = {
    title: "Time & Attendance Tracking Software Development | Hidden Brains UK",
    description: "Custom time and attendance tracking software development by Hidden Brains UK. Automate workforce management with our intelligent tracking solutions.",
};

export default async function TimeAttendancePage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                banner={TIME_ATTENDANCE_HERO.banner}
                alt="Time and Attendance Tracking Software"
                title={TIME_ATTENDANCE_HERO.title}
                description={TIME_ATTENDANCE_HERO.description}
                ctaText={TIME_ATTENDANCE_HERO.cta}
            />

            <IntroductionSection
                breadcrumbs={[{ label: "Time and Attendance tracking software" }]}
                title={TIME_ATTENDANCE_INTRODUCTION.title}
                content={TIME_ATTENDANCE_INTRODUCTION.content}
                showHomeIcon={true}
            />

            {/* Key Features Section */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        {/* <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Features</h4> */}
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{TIME_ATTENDANCE_FEATURES_INTRO.title}</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            {TIME_ATTENDANCE_FEATURES_INTRO.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {TIME_ATTENDANCE_FEATURES.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-all duration-500
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
                title="Let’s get started on your App Development project!"
            />

            {/* How it Works Section */}
            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">How does Attendance Tracking Systems Work</h2>
                    </div>


                    <div className="mx-auto max-w-6xl">
                        <LottieAnimation
                            animationUrl="/json/Attendance-solution-bus-imp-life-V02.json"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <BenefitsSection
                title={TIME_ATTENDANCE_BENEFITS_INTRO.title}
                description={TIME_ATTENDANCE_BENEFITS_INTRO.description}
                items={TIME_ATTENDANCE_BENEFITS}
            />

            <PlatformsSection
                title="Platforms & Integrations"
                description="Providing consistent experiences and addressing the unique needs of each and every platform."
                image={{
                    src: TimeAttendanceImage.src,
                    width: 875,
                    height: 462,
                    alt: "attendance-management-system"
                }}
                techPlatforms={TIME_ATTENDANCE_PLATFORMS}
            />

            <GuideSection
                items={TIME_ATTENDANCE_GUIDE.items}
                details={TIME_ATTENDANCE_GUIDE.details}
                title={TIME_ATTENDANCE_GUIDE.title}
                description={TIME_ATTENDANCE_GUIDE.description}
            />
            <CtaSection
                title="Ready to start your dream project? We have a TEAM to get you there."
            />

            {/* Industries We Serve Section */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className="  text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{TIME_ATTENDANCE_INDUSTRIES_INTRO.title}</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            {TIME_ATTENDANCE_INDUSTRIES_INTRO.description}
                        </p>
                    </div>

                    <IndustrySlider industries={TIME_ATTENDANCE_INDUSTRIES.map(industry => ({
                        name: industry.name,
                        image: industry.image,
                        desc: "",
                        link: "#"
                    }))} />
                </div>
            </section>

            <UseCasesSection
                title={TIME_ATTENDANCE_USE_CASES_INTRO.title}
                description={TIME_ATTENDANCE_USE_CASES_INTRO.description}
                items={TIME_ATTENDANCE_USE_CASES}
                bgColor="bg-slate-50"
            />

            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            <FAQSection
                title={TIME_ATTENDANCE_FAQ.title}
                description={TIME_ATTENDANCE_FAQ.description}
                faqs={TIME_ATTENDANCE_FAQ.faqs}
            />



            <Contact data={data} />
        </div>
    );
}
