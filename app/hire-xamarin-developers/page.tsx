import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { MobileIndustrySlider } from "@/components/shared/MobileIndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";



import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";
import banner from "@/images/iphone-apps-development.webp";
import {
    HIRE_XAMARIN_HERO,
    HIRE_XAMARIN_COUNTERS,
    HIRE_XAMARIN_SERVICES,
    HIRE_XAMARIN_WHY_CHOOSE,
    HIRE_XAMARIN_GUIDE,
    HIRE_XAMARIN_FAQ,
    HIRE_XAMARIN_MODELS,
    HIRE_XAMARIN_PROCESS
} from "@/lib/hire-xamarin-data";
import { HIRE_MOBILE_INDUSTRIES } from "@/lib/hire-mobile-apps-data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ProcessSection } from "@/components/shared/ProcessSection";

export const metadata = {
    title: "Hire Top Xamarin Developers in the UK | Hidden Brains",
    description: "Hire dedicated and certified Xamarin app developers in UK. Get robust, secure and scalable Xamarin apps for your business.",
};

export default async function HireXamarinDevelopersPage() {
    const data = await getData();

    // Map guide data to GuideSection props
    const guideItems = HIRE_XAMARIN_GUIDE.map(item => ({ id: item.id, label: item.question }));
    const guideDetails = HIRE_XAMARIN_GUIDE.map(item => ({
        id: item.id,
        title: item.question,
        content: <p>{item.answer}</p>
    }));

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire Xamarin Developers"
                title={HIRE_XAMARIN_HERO.title}
                description={HIRE_XAMARIN_HERO.excerpt}
                ctaText={HIRE_XAMARIN_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Mobile Developers", href: "/hire-mobile-apps-developer" },
                    { label: "Hire Xamarin Developers" }
                ]}
                title="Hire Dedicated Xamarin Developers In The UK"
                counters={HIRE_XAMARIN_COUNTERS}
                content={
                    <>
                        <p className="mb-[12px] text-[#6a7c92]">
                            If you are looking for a company that can provide you with mobile app development services, then Hidden Brains is the place for you. We offer a wide range of Xamarin app development services for industry verticals, which means that we have what it takes to meet your needs. With years of experience in developing Native-like apps, we have seen and done it all, so there is no project too big or small for us.
                        </p>
                        <p className="mb-[12px] text-[#6a7c92]">
                            At Hidden Brains UK, we always provide affordable solutions to enterprise customers by sharing code through the Xamarin platform. This state-of-the-art approach allows us to offer the perfect solution to your business’s IT problems efficiently. Obviously, there are other cross-platform application development options available, like PhoneGap applications, but Xamarin boasts an edge because it offers the best user interface. This platform does not offer a watered-down common denominator.
                        </p>
                        <p className="text-[#6a7c92]">
                            In addition, our developers are very friendly and are able to leverage these features of the Xamarin platform to offer the best solutions to companies around the world. Xamarin developers will provide you with professional knowledge throughout the entire process so that you can benefit from its full potential.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let's get started on your Xamarin Development project!"
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hire Xamarin Developers For The Range Of Services
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed  mx-auto">
                            We have a team of Xamarin developers who implements advanced Xamarin technology knowledge to develop the best Xamarin apps for Android, iOS, and Windows devices. Our areas of Xamarin expertise include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {HIRE_XAMARIN_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group rounded-xl text-center">
                                <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-[#f29111]/10 text-[#f29111] w-fit mx-auto transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4">{service.title}</h3>
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
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            We Cater To Xamarin Development Services To Various Industries
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            As a leading provider of unmatched quality solutions for various industries, we include:
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Choose Xamarin Developers At Hidden Brains UK?
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            The Hidden Brains UK has been a pioneer in providing native mobile app development services with a wealth of experience designing and developing cross-platform applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_XAMARIN_WHY_CHOOSE.map((reason, index) => (
                            <div key={index} className="flex  flex-wrap gap-6 p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all">
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
                description="Here is our guide section about Xamarin development services and help you understand what exactly this technology is used for."
            />

            <ProcessSection
                title="Hire Xamarin Developers Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable mobile application development services."
                processItems={HIRE_XAMARIN_PROCESS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Hire Xamarin Development Projects"
                subtitle="Our Work"
                description="Your application, your brand, create them any way you want it with our professional development team of mobile devices."
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            <section className="py-[80px] bg-white" id="engagement-models">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[32px]">
                        Our Flexible Engagement Models To Hire Dedicated Xamarin Developers
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {HIRE_XAMARIN_MODELS.map((model, index) => (
                            <div key={index} className={`p-8 rounded-2xl border flex flex-col transition-all ${model.active ? 'border-[#f29111] bg-white shadow-2xl relative lg:scale-105 z-10' : 'border-gray-100 bg-[#f8faff] hover:shadow-lg'}`}>
                                <h3 className="text-2xl font-bold text-[#14133b] mb-4">{model.title}</h3>
                                <div className="text-4xl font-black text-[#f29111] mb-6">
                                    {model.price}
                                </div>
                                <div className="text-[#6a7c92] text-[15px] leading-relaxed mb-8 min-h-[100px] flex items-center justify-center italic">
                                    <p>"{model.description}"</p>
                                </div>
                                <ul className="text-left space-y-4 mb-10 flex-grow">
                                    {model.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-[15px] text-[#6a7c92]">
                                            <div className="w-5 h-5 rounded-full bg-orange-100 text-[#f29111] flex items-center justify-center shrink-0 mt-0.5">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    href="/contact"
                                    variant={model.active ? "primary" : "outline"}
                                    fullWidth
                                    className={`py-4 rounded-xl font-bold transition-all text-center gap-2 ${!model.active ? 'border-2 border-[#f29111] !text-[#f29111] hover:bg-[#f29111] hover:text-white' : 'hover:bg-orange-600 shadow-lg shadow-orange-200'}`}
                                >
                                    Hire Now <ChevronRight size={18} />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={HIRE_XAMARIN_FAQ}
                title="FAQs To Hire Xamarin Developers At Hidden Brains UK"
                description="Are you unsure about Xamarin app development services and their services in the UK? If yes, then consider these frequently asked questions and answers to clear your doubts."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
