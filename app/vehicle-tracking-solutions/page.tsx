import React from "react";
import { getData } from "../../lib/data";
import { HeroSection } from "../../components/shared/HeroSection";
import { IntroductionSection } from "../../components/shared/IntroductionSection";
import { CtaSection } from "../../components/shared/CtaSection";
import { TestimonialsSection } from "../../components/home/TestimonialsSection";
import Contact from "../../components/layout/Contact";
import {
    VEHICLE_TRACKING_HERO,
    VEHICLE_TRACKING_ACHIEVEMENTS,
    VEHICLE_TRACKING_SOLUTIONS,
    VEHICLE_TRACKING_GUIDE,
    VEHICLE_TRACKING_INDUSTRIES,
    VEHICLE_TRACKING_FAQS,
    VEHICLE_TRACKING_PROCESS,
    VEHICLE_TRACKING_BENEFITS,
    VEHICLE_TRACKING_BENEFITS_INTRO,
    VEHICLE_TRACKING_PLATFORMS,
    VEHICLE_TRACKING_INTEGRATIONS
} from "../../lib/vehicle-tracking-data";
import { ProcessDiagram } from "@/components/vehicle-tracking/ProcessDiagram";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { AlertsSection } from "@/components/vehicle-tracking/AlertsSection";
import { VehicleTrackingVideo } from "../../components/vehicle-tracking/VehicleTrackingVideo";
import { PlatformsSection } from "../../components/shared/PlatformsSection";
import { GuideSection } from "../../components/shared/GuideSection";
import { IndustrySlider } from "../../components/shared/IndustrySlider";
import { FAQSection } from "../../components/shared/FAQSection";
import VEHICLE_TRACKING_BANNER from "../../images/vehicaltracking.webp";
import VEHICLE_TRACKING_PLATFORM_IMAGE from "../../images/Vehical-tracking-platform-image.webp";
import Image from "next/image";

export const metadata = {
    title: "Vehicle Tracking Solutions | Hidden Brains UK",
    description: "Advanced vehicle tracking solutions by Hidden Brains UK. Real-time GPS tracking, fleet management, and route optimization for businesses.",
};

export default async function VehicleTrackingPage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                banner={VEHICLE_TRACKING_BANNER}
                alt="Vehicle Tracking Solutions"
                title={VEHICLE_TRACKING_HERO.title}
                description={VEHICLE_TRACKING_HERO.description}
                ctaText={VEHICLE_TRACKING_HERO.cta}
            />

            <IntroductionSection
                breadcrumbs={[{ label: "Vehicle Tracking Solutions" }]}
                title="Smart Tracking Solutions in the UK"
                content={
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <p className="mb-[14px]">
                                Innovative and contemporary smart car tracking systems are provided by Hidden Brains UK. As we understand the growing needs of logistics and ecommerce businesses, therefore, we build vehicle tracking solutions that perfectly meet the complex requirements. We provide far more than a usual high street tracker use to offer by using our real-time GPS/GPRS/Satellite capabilities and affordable solutions – without compromising speed or accuracy!
                            </p>
                            <p className="mb-[14px]">
                                Using our fleet management solution, you can keep track of the movement of your vehicles, containers, or other moving vehicles right from the home or office. Hidden Brains’ fleet management systems employ vehicle and location data to deliver actionable insights on how to increase fleet efficiency and enhance the driving and customer experience. With the fleet management solution from Hidden Brains UK, you can use data to precisely evaluate vehicle health, comprehend driver behavior, and identify trends in fuel usage.
                            </p>
                        </div>

                        <VehicleTrackingVideo />
                    </div>
                }
                showHomeIcon={true}
            />

            {/* Significant Achievements */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto text-center max-w-7xl">
                    <div className=" mx-auto mb-[30px]">
                        <h4 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">Significant Achievements</h4>
                        {/* <h2 className="text-4xl font-black text-slate-900 mb-6">Maximize your warehouse performance</h2> */}
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Maximize your warehouse performance  Reduce the overall cost, and human errors, and automate the information flow by using Hidden Brains UK Warehouse & Inventory Management Solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {VEHICLE_TRACKING_ACHIEVEMENTS.map((item, index) => (
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

            {/* Features of Smart Tracking Solution */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h4 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-4">Smart Tracking Solution</h4>
                        {/* <h2 className="text-4xl font-black text-slate-900 mb-6">Features of Smart Tracking Solution</h2> */}
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Features of Smart Tracking Solution Get a 360-degree perspective of your fleet's daily activities with real-time updates which will help drive down expenses, boost output, and make the most of every working day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {VEHICLE_TRACKING_SOLUTIONS.map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col h-full">
                                <div className={`w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500
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

            {/* How does Vehicle Tracking Solutions Work (Lottie) */}
            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">How does Vehicle Tracking Solutions Work</h2>
                    </div>

                    <div className="max-w-6xl mx-auto flex justify-center overflow-visible">
                        <ProcessDiagram data={VEHICLE_TRACKING_PROCESS} />
                    </div>
                </div>
            </section>

            <BenefitsSection
                title={VEHICLE_TRACKING_BENEFITS_INTRO.title}
                description={VEHICLE_TRACKING_BENEFITS_INTRO.description}
                items={VEHICLE_TRACKING_BENEFITS}
            />

            <AlertsSection />

            <PlatformsSection
                title="Platforms & Integrations"
                description="Providing consistent experiences and addressing the unique needs of each and every platform."
                image={{
                    src: VEHICLE_TRACKING_PLATFORM_IMAGE.src,
                    width: VEHICLE_TRACKING_PLATFORM_IMAGE.width,
                    height: VEHICLE_TRACKING_PLATFORM_IMAGE.height,
                    alt: "Vehicle Tracking Platforms"
                }}
                techPlatforms={VEHICLE_TRACKING_PLATFORMS}
                integrations={VEHICLE_TRACKING_INTEGRATIONS}
            />

            <GuideSection
                items={VEHICLE_TRACKING_GUIDE.items}
                details={VEHICLE_TRACKING_GUIDE.details}
                title={VEHICLE_TRACKING_GUIDE.title}
                description={VEHICLE_TRACKING_GUIDE.description}
            />
            <CtaSection
                title="Ready to start your dream project? We have a TEAM to get you there."
            />

            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Industries We Serve</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                            Our warehouse inventory management software solution help in efficient warehousing, reducing costs and improving productivity across industries.
                        </p>
                    </div>
                    <IndustrySlider industries={VEHICLE_TRACKING_INDUSTRIES} />
                </div>
            </section>

            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            <FAQSection
                title="FAQ's"
                description="Curiosity has it's own reason for existing, by questioning anything we arrive at the greater solutions."
                faqs={VEHICLE_TRACKING_FAQS}
            />

            <Contact data={data} />
        </div>
    );
}
