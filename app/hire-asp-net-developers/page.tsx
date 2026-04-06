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
import banner from "@/images/hire-asp-net-developer.webp";
import { ProcessSection } from "@/components/shared/ProcessSection";
import { ClipboardList, PencilRuler, Smartphone, Rocket, CloudCog } from "lucide-react";
import {
    HIRE_ASP_NET_HERO,
    HIRE_ASP_NET_COUNTERS,
    HIRE_ASP_NET_SERVICES,
    HIRE_ASP_NET_WHY_CHOOSE,
    HIRE_ASP_NET_GUIDE,
    HIRE_ASP_NET_PROCESS,
    HIRE_ASP_NET_MODELS,
    HIRE_ASP_NET_FAQ
} from "@/lib/hire-asp-net-data";
import { HIRE_MOBILE_INDUSTRIES } from "@/lib/hire-mobile-apps-data";
import Link from "next/link";
import { HiringModelsSection } from "@/components/shared/HiringModelsSection";

export const metadata = {
    title: "Hire ASP.NET Developers in the UK | Hidden Brains",
    description: "Hire dedicated ASP.NET developers in UK. Build powerful, scalable, and secure web applications with Hidden Brains UK expert .NET team.",
};

export default async function HireAspNetDevelopersPage() {
    const data = await getData();

    // Mapping Guide data to GuideSection props
    const guideItems = HIRE_ASP_NET_GUIDE.map(item => ({ id: item.id, label: item.question }));
    const guideDetails = HIRE_ASP_NET_GUIDE.map(item => ({
        id: item.id,
        title: item.question,
        content: <p>{item.answer}</p>
    }));

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={banner}
                alt="Hire ASP.NET Developer"
                title={HIRE_ASP_NET_HERO.title}
                description={HIRE_ASP_NET_HERO.excerpt}
                ctaText={HIRE_ASP_NET_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Hire Developers In UK", href: "/hire-dedicated-developers" },
                    { label: "Hire Web Developer", href: "/hire-web-developers" },
                    { label: "Hire ASP.NET Developers" }
                ]}
                title="Hire ASP.NET Developers To Boost Your Business Goals"
                counters={HIRE_ASP_NET_COUNTERS}
                content={
                    <>
                        <p className="mb-[12px] text-[#6a7c92]">
                            Hire ASP.NET developers in the UK for your critical web application development projects, as we have 22+ years of experience in meeting diverse and complex business needs. We have certified and passionate developers who are well-versed with the technology and are experienced in .NET development services. To meet our client’s satisfaction, our developers strive to go above and beyond their expectations.
                        </p>
                        <p className="text-[#6a7c92]">
                            By working with the finest .NET developers from Hidden Brains UK, you can enhance your growth and provide a higher quality customer experience for your business. At Hidden Brains UK, we’re able to design a tailored solution, based on your specifications, with skilled .Net developers. Contact us for an on-demand .Net app.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let's get started on your Web Development project!"
            />

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Service Expertise of Our ASP.NET Developers
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed  mx-auto">
                            Our ASP.NET experts provide end-to-end development services to build scalable and robust solutions for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                        {HIRE_ASP_NET_SERVICES.map((service, index) => (
                            <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group rounded-xl">
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
                    <div className="text-center  mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Hidden Brains: Hire ASP.NET Developers in The UK for Various Industry Solutions
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">
                            Our app development services are available for various industries and verticals. We are excited to share with you a little more about what makes us stand out from other app developers out there.
                        </p>
                    </div>
                    <MobileIndustrySlider industries={HIRE_MOBILE_INDUSTRIES} />
                </div>
            </section>

            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Choose Us to Hire ASP.NET Developers in the UK?
                        </h2>
                        <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed  mx-auto">
                            Hidden Brains UK offers efficient .Net development services at an affordable price point. Hire .Net developers with a passion and a deep understanding of the industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {HIRE_ASP_NET_WHY_CHOOSE.map((reason, index) => (
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
                description="Here we are covering all the common questions and answers that our clients ask us while hiring ASP.NET developers."
            />
            <ProcessSection
                title="Our ASP.NET App Development Process"
                description="Our team follows effective development methodologies to deliver intuitive and scalable ASP.NET web development services."
                processItems={[
                    { step: "1", title: "Conceptualization & Requirement Gathering", icon: <ClipboardList size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "2", title: "Analysis of Requirement & Design", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "3", title: "App Development & Testing", icon: <Smartphone size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "4", title: "Application Deployment & Making Site Live", icon: <Rocket size={60} className="text-[#f29111] opacity-80" /> },
                    { step: "5", title: "Upgrades & App Support Services", icon: <CloudCog size={60} className="text-[#f29111] opacity-80" /> }
                ]}
            />
            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />



            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our Web Development Projects"
                subtitle="Portfolio"
                description="Your application, your brand, create them any way you want it with our professional development team of experts."
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            <HiringModelsSection
                description="Our expert ASP.NET website developers are at your service once you hire them on remotely, hourly, part-time or full time basis."
                models={HIRE_ASP_NET_MODELS}
            />


            <FAQSection
                faqs={HIRE_ASP_NET_FAQ}
                title="ASP.NET Development FAQs"
                description="If you have any doubt about hiring ASP.NET developers in the UK, you can clear it by considering these FAQs."
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
