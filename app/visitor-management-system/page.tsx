import React from "react";
import { getData } from "../../lib/data";
import { HeroSection } from "../../components/shared/HeroSection";
import { IntroductionSection } from "../../components/shared/IntroductionSection";
import { CtaSection } from "../../components/shared/CtaSection";
import { TestimonialsSection } from "../../components/home/TestimonialsSection";
import { FAQSection } from "../../components/shared/FAQSection";
import Contact from "../../components/layout/Contact";
import {
    VISITOR_MANAGEMENT_HERO,
    VISITOR_MANAGEMENT_FEATURES,
    VISITOR_MANAGEMENT_BENEFITS,
    VISITOR_MANAGEMENT_BENEFITS_INTRO,
    VISITOR_MANAGEMENT_GUIDE_ITEMS,
    VISITOR_MANAGEMENT_GUIDE_DETAILS,
    VISITOR_MANAGEMENT_INDUSTRIES_INTRO,
    VISITOR_MANAGEMENT_INDUSTRIES,
    VISITOR_MANAGEMENT_USE_CASES_INTRO,
    VISITOR_MANAGEMENT_USE_CASES,
    VISITOR_MANAGEMENT_FAQ,
    VISITOR_MANAGEMENT_PLATFORMS_INTRO,
    VISITOR_MANAGEMENT_PLATFORMS,
    VISITOR_MANAGEMENT_TECH_PLATFORMS_INTRO
} from "../../lib/visitor-management-data";
import { ProcessDiagram } from "../components/vehicle-tracking/ProcessDiagram";
import Image from "next/image";
import { VEHICLE_TRACKING_PROCESS } from "@/lib/vehicle-tracking-data";
import { BenefitsSection } from "../components/BenefitsSection";
import { PlatformsSection } from "../../components/shared/PlatformsSection";
import { GuideSection } from "../../components/shared/GuideSection";
import { IndustrySlider } from "../../components/shared/IndustrySlider";
import { UseCasesSection } from "../../components/shared/UseCasesSection";
import { LottieAnimation } from "@/components/shared/LottieAnimation";

export const metadata = {
    title: "Visitor Management System | Hidden Brains UK",
    description: "Smart visitor management system by Hidden Brains UK. Streamline visitor check-in, enhance security, and improve the visitor experience.",
};

export default async function VisitorManagementPage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                banner="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2023/03/Visitormanagment-YouTube-Thumbnail.webp"
                alt="Visitor Management System"
                title={VISITOR_MANAGEMENT_HERO.title}
                description={VISITOR_MANAGEMENT_HERO.description}
                ctaText={VISITOR_MANAGEMENT_HERO.cta}
            />

            <IntroductionSection
                breadcrumbs={[{ label: "Visitor Management" }]}
                title="VISITOR MANAGEMENT PLATFORM IN THE UK"
                content={
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <p className="mb-[14px]">
                                Hidden Brains UK provides Visitor Management Systems that represent all the policies and procedures a company requires to sets up to get complete control over visitor management right from scratch. Also, it makes sure that other related elements remain connected with the systems to ensure a secure, safe, and satisfying visiting experience.
                            </p>
                            <p className="mb-[14px]">
                                With visitor management solutions, you can reserve the right to provide an access to restricted areas of your building depending on the person’s requirements, whether they are family and friends dropping by for a visit, colleagues who require guest access for crucial meetings, or visitors who need high-level clearance for delicate situations.
                            </p>
                            <p className="mb-[14px]">
                                With the help of our visitor management software solutions, you can establish your own rules for who can enter the premises as a guest, who must report for duty, and who is allowed access to specific areas of the property without compromising security or safety.
                            </p>
                            <p className="mb-[14px]">
                                The Visitor Management platform developed by Hidden Brains UK can be used by a variety of industries, including corporate offices, government agencies, schools, hospitals, and other facilities that require enhanced security and efficient management of visitors. The goal of a Visitor Management solution is to provide a safe and secure environment for visitors while ensuring that company owners can easily manage and track visitor activity.
                            </p>
                        </div>

                        <div className="relative  overflow-hidden shadow-2xl group cursor-pointer mx-auto">
                            <Image
                                src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-748de10/www.hiddenbrains.co.uk/wp-content/uploads/2023/03/Visitormanagment-YouTube-Thumbnail.webp"
                                alt="Visitor Management Solutions Video"
                                width={1200}
                                height={675}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <div className="w-20 h-20 bg-orange-500  flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform shadow-lg">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                showHomeIcon={true}
            />

            {/* Key Features Of Visitor Management System */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto max-w-7xl ">
                    <div className="mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Key Features Of Visitor Management System</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            For all your workplace visitor requirements, including handling unexpected visits and scheduled guests for a great visitor experience and little employee disruption, our visitor management platform is the best-suited solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VISITOR_MANAGEMENT_FEATURES.map((item, index) => (
                            <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-all duration-500
                                    ${item.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                                        item.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                                            item.color === 'dark' ? 'bg-slate-100 text-slate-600' :
                                                item.color === 'green' ? 'bg-green-100 text-green-600' :
                                                    'bg-yellow-100 text-yellow-600'}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Let’s get started on your App Development project!"
            />

            {/* How Does Visitor Management Solutions Work */}
            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">How Does Visitor Management Solutions Work</h2>
                    </div>

                    {/* <div className="max-w-6xl mx-auto flex justify-center overflow-visible">
                        <ProcessDiagram
                            data={VEHICLE_TRACKING_PROCESS}
                        />
                    </div> */}
                    <div className="mx-auto max-w-6xl">
                        <LottieAnimation
                            animationUrl="/json/visitormngnt-howitswork-06.json"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>
            <BenefitsSection
                title={VISITOR_MANAGEMENT_BENEFITS_INTRO.title}
                description={VISITOR_MANAGEMENT_BENEFITS_INTRO.description}
                items={VISITOR_MANAGEMENT_BENEFITS}
            />
            <PlatformsSection
                title={VISITOR_MANAGEMENT_PLATFORMS_INTRO.title}
                description={VISITOR_MANAGEMENT_PLATFORMS_INTRO.description}
                image={{
                    src: VISITOR_MANAGEMENT_PLATFORMS_INTRO.image,
                    width: 875,
                    height: 462,
                    alt: "Visitor Management Platforms"
                }}
                techTitle={VISITOR_MANAGEMENT_TECH_PLATFORMS_INTRO.title}
                techDescription={VISITOR_MANAGEMENT_TECH_PLATFORMS_INTRO.description}
                techPlatforms={VISITOR_MANAGEMENT_PLATFORMS}
            />
            <GuideSection
                items={VISITOR_MANAGEMENT_GUIDE_ITEMS}
                details={VISITOR_MANAGEMENT_GUIDE_DETAILS}
                title="Guide"
                description="Here are some of the common queries related to Web application development."
            />
            <CtaSection
                title="Ready to start your dream project? We have a TEAM to get you there."
            />

            {/* Industries We Serve Section */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{VISITOR_MANAGEMENT_INDUSTRIES_INTRO.title}</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            {VISITOR_MANAGEMENT_INDUSTRIES_INTRO.description}
                        </p>
                    </div>

                    <IndustrySlider industries={VISITOR_MANAGEMENT_INDUSTRIES.map(industry => ({
                        name: industry.name,
                        desc: industry.desc,
                        image: industry.image,
                        link: "#"
                    }))} />
                </div>
            </section>

            <UseCasesSection
                title={VISITOR_MANAGEMENT_USE_CASES_INTRO.title}
                description={VISITOR_MANAGEMENT_USE_CASES_INTRO.description}
                items={VISITOR_MANAGEMENT_USE_CASES.map(item => ({
                    title: item.title,
                    description: item.desc,
                    image: item.image
                }))}
            />
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            <FAQSection faqs={VISITOR_MANAGEMENT_FAQ} />

            <Contact data={data} />
        </div>
    );
}
