import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import {
    ANDROID_HERO,
    ANDROID_COUNTERS,
    ANDROID_SERVICES,
    ANDROID_INDUSTRIES,
    ANDROID_WHY_CHOOSE,
    ANDROID_GUIDE_ITEMS,
    ANDROID_GUIDE_DETAILS,
    ANDROID_FAQ
} from "@/lib/android-app-data";



import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { getData } from "@/lib/data";

import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import androidBanner from "@/images/android-apps-development.webp";

export const metadata = {
    title: "Android App Development Company in UK | Hidden Brains",
    description: "Hidden Brains is a leading Android app development company in the UK, providing custom Android app development services with 22+ years of experience and 1200+ mobile apps.",
};

export default async function AndroidAppDevelopmentPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={androidBanner}
                alt="Android App Development"
                title={ANDROID_HERO.title}
                description={ANDROID_HERO.excerpt}
                ctaText={ANDROID_HERO.cta}
            />

            {/* Introduction & Counters Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Mobile App Development", href: "/mobile-application-development" },
                    // { label: "Android App Development" }
                ]}
                title="Custom Android App Development Services"
                counters={ANDROID_COUNTERS}
                content={
                    <>
                        <p className="mb-[15px]">
                            Hidden Brains is a leading Android app development company in the UK, adding value to your business by providing advanced digital solutions. Our prime aim is to craft a solution that enables you to capture the attention of the masses with a user-friendly interface.
                        </p>
                        <p className="mb-[15px]">
                            We not only provide top-tier Android app development services, but we can also create solutions that will enhance your business growth. Our solutions cover a wide range of industries – from emerging companies to seasoned enterprises. We create Android applications that work seamlessly on any Android device.
                        </p>
                        <p className="mb-[15px]">
                            Our team of expert Android app developers tested them in a development environment and struck a perfect balance of innovation, technology, and business requirements. share your idea with us, and our experienced team of experts will combine it with their skill set and knowledge.
                        </p>
                    </>
                }
            />

            {/* Middle CTA */}
            <CtaSection title="Let’s get started on your Mobile App Development project!" />

            {/* Services Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Our Custom Android Application Development Services Include
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            With 22+ years of experience in customizing Android app development solutions, Hidden Brains is recognized as one of the dominating Android app development companies in the UK.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ANDROID_SERVICES.map((service, index) => (
                            <div key={index} className="p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all border-b-4 hover:border-b-[#f29111] bg-white">
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-4">{service.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px]">
                                    {service.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Slider Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Industries We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            As a top Android app development company in the UK, we have a process-driven approach for every industry that helps us to meet our client’s project requirements, timescales, and budgets.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={ANDROID_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose HB Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center  mx-auto mb-[30px]">
                        <h2 className="text-3xl md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains As an Android App Development Company in The UK?
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            Hidden Brains is one of the most innovative, award-winning, and trusted software companies in the UK that supplies professional and innovative software.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ANDROID_WHY_CHOOSE.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="shrink-0 w-16 h-16 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl">
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

            {/* Guide Section */}
            <GuideSection
                items={ANDROID_GUIDE_ITEMS}
                details={ANDROID_GUIDE_DETAILS}
                description="A complete guide to help you understand the basis of Android app development before you get started with Hidden Brains UK."
            />

            {/* Side CTA */}
            <CtaSection
                title="Your idea is most important to us. Share Now!"
                className="bg-[#14133b]"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Mobile App Development Projects"
                subtitle="Portfolio"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices."
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection
                faqs={ANDROID_FAQ}
                title="Android App Development FAQs"
                description="When you decide to opt for Android app development services, here are a few FAQs you must have in mind before."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
