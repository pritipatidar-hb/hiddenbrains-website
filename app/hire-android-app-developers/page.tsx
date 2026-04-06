import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";



import banner from "@/images/hire-android-developer.webp";
import {
    HIRE_ANDROID_HERO,
    HIRE_ANDROID_COUNTERS,
    HIRE_ANDROID_SERVICES,
    HIRE_ANDROID_WHY_CHOOSE,
    HIRE_ANDROID_GUIDE,
    HIRE_ANDROID_FAQ
} from "@/lib/hire-android-data";
import { HIRE_MOBILE_PROCESS, HIRE_MOBILE_MODELS, HIRE_MOBILE_INDUSTRIES } from "@/lib/hire-mobile-apps-data";
import Link from "next/link";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";

export const metadata = {
    title: "Hire Android App Developers in the UK | Hidden Brains",
    description: "Hire dedicated and certified Android app developers in UK. Get robust, secure and scalable Android apps for your business.",
};

export default async function HireAndroidDevelopersPage() {
    const data = await getData();

    // Map guide data to GuideSection props
    const guideItems = HIRE_ANDROID_GUIDE.map(item => ({ id: item.id, label: item.question }));
    const guideDetails = HIRE_ANDROID_GUIDE.map(item => ({
        id: item.id,
        title: item.question,
        content: <p>{item.answer}</p>
    }));

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Android App Developers"
                title={HIRE_ANDROID_HERO.title}
                description={HIRE_ANDROID_HERO.excerpt}
                ctaText={HIRE_ANDROID_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Mobile Developers", href: "/hire-mobile-apps-developer" },
                    { label: "Hire Android App Developers" }
                ]}
                title="Skilled Android App Developer for Hire in the UK"
                counters={HIRE_ANDROID_COUNTERS}
                content={
                    <>
                        <p className="mb-[12px] text-[#6a7c92]">
                            Hidden Brains UK is a reputed company for hiring Android app developers. We have a blend of a dedicated pool of resources and extensive clientele. 'Hire Android app developer' is an exclusive service of Hidden Brains that facilitates clients to hire its Android app developer as per their project requirements.
                        </p>
                        <p className="text-[#6a7c92]">
                            Hidden Brains UK Android app developers are in demand owing to the fact that they are trained to work on the new Android version. These certified and talented professionals use their expert knowledge to develop an Android app that suits the client's needs. Our clients prefer to hire Android app developers from Hidden Brains because we have the capability to utilize programming languages and tools including Android Studio, Kotlin, Java, and Google Material.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Mobile App Development project!"

            />
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Android App Developer Services
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed  mx-auto">
                            Hidden Brains has a vast pool of skilled and innovative minds having in-depth domain expertise in all aspects of app development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_ANDROID_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group rounded-xl">
                                <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-[#f29111]/10 text-[#f29111] w-fit transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#14133b] mb-4">{service.title}</h3>
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
                    <div className="text-center max-w-[800px] mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industry We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            As a top company for hiring Android app developers in the UK, we have a process-driven approach for every industry.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains for Android App Development Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            Hidden Brains UK is a trusted software company with the expertise to provide specialized android app designers and developers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_ANDROID_WHY_CHOOSE.map((reason, index) => (
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
                description="Here is a guide to help you with the common questions related to Android app development."
            />
            <CtaSection
                title="Your idea is most important to us. Share Now!"

            />


            {/* <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/3">
                            <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Hiring Models</h2>
                            <p className="text-[#6a7c92] text-[16px] leading-relaxed">
                                Our expert Android app developers are at your service once you hire them on an hourly, part-time, or full-time basis.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {HIRE_MOBILE_MODELS.map((model, index) => (
                                <div key={index} className={`p-8 border rounded-lg flex flex-col items-center text-center ${model.active ? 'border-[#f29111] shadow-xl relative scale-105 z-10 bg-white' : 'border-gray-100 bg-gray-50'}`}>
                                    <h3 className="text-xl font-bold text-[#14133b] mb-4">{model.title}</h3>
                                    <div className="text-3xl font-bold text-[#f29111] mb-6">{model.price}</div>
                                    <ul className="space-y-4 mb-8 text-[14px] text-[#6a7c92] text-left w-full">
                                        {model.features.map((feature, fIndex) => (
                                            <li key={fIndex} className="flex gap-2">
                                                <span className="text-[#f29111] font-bold">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className={`w-full py-3 rounded-md font-semibold transition-colors ${model.active ? 'bg-[#f29111] text-white hover:bg-[#d9810f]' : 'border border-[#f29111] text-[#f29111] hover:bg-orange-50'}`}>
                                        Hire Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Mobile App Development Projects"
                subtitle="Our Portfolio"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices. Contact us to start your own chapter on this fun application development journey.
catwalk
Catwalk88
ecommerce

dublin convention
Dublin Convention Bureau
travel-tourism

"
            />
            <TestimonialsSection testimonials={TESTIMONIALS} />
            <FAQSection
                faqs={HIRE_ANDROID_FAQ}
                title="Hire Android App Developer FAQs"
                description="Is there anything about Android app development you want to know?"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
