import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getData } from "@/lib/data";
import itTech from "@/images/it-technology-consultancy-Banner.webp";

import {
    IT_CONSULTING_SERVICES,
    INDUSTRY_SERVED,
    LIST_ITEMS,
    IT_CONSULTING_TESTIMONIALS
} from "@/lib/it-technology-consultancy-data";


import { TestimonialSlider } from "@/components/shared/TestimonialSlider";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


export const metadata = {
    title: "IT Technology Consultancy Services | Hidden Brains UK",
    description: "Expert IT technology consultancy services from Hidden Brains UK. We help businesses leverage cutting-edge technologies for digital transformation and growth.",
};

export default async function ITTechnologyConsultancyPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={itTech}
                        alt="IT Technology Consultancy Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#0e1726]/60"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[700px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-tight mb-[18px] mt-4">
                            Information Technology Consulting Services
                        </h1>
                        <p className="text-[18px] font-normal text-gray-200 mb-[25px] leading-relaxed pr-10 max-w-[650px]">
                            Technology Consulting Services to Build Unique Solutions Aimed at Overcoming Clients’ Complex Business Challenges
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-7 py-3 bg-[#f29111] hover:bg-[#e08b1a] border border-[#f29111] text-white font-medium rounded-[5px] transition-all text-[15px] uppercase tracking-wider"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-[#f8faff]"
                breadcrumbs={[
                    // { label: "Home", href: "/" },
                    { label: "Business Technology Consulting", href: "/business-technology-services" },
                    { label: "Technology Consulting" }
                ]}
                title="Top IT Technology Consulting Company"
                content={
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-2/3">
                            <div className="space-y-4 text-[#6a7c92] text-[16px] leading-relaxed">
                                <p>
                                    Hidden Brains provides business-centric technology consulting services to a large number of enterprises across the globe. We develop unique solutions aimed at addressing clients’ complex business challenges and create value. Our consultants utilize technical expertise to carry out robust research on your business data and deliver real solutions.
                                </p>
                                <p>
                                    We help companies around the globe to overcome IT efficiency problems and ultimately reduce not only costs but also improve IT capabilities that enable innovation and agility.
                                </p>

                                <h3 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mt-8 mb-4">
                                    Comprehensive Technology Consultancy Services
                                </h3>
                                <p>
                                    We address complex challenges by adopting a well-defined process of using analytics to identify opportunities, validate quick wins and scale solutions to meet the needs of the business. Our team brings deep functional knowledge that enables domain-specific insights and employs advanced, well-tested technologies to address challenging problems for our clients.
                                </p>
                                <p>
                                    We ensure that our technology vision gets translated into action and that clients can sustain rapidly changing technology trends in future. Our role transcends above just being a consulting firm.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/3">
                            <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-lg">
                                <ul className="space-y-4">
                                    {LIST_ITEMS.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="w-2 h-2 rounded-full bg-[#f29111] mt-2 mr-3 flex-shrink-0"></span>
                                            <h4 className="text-[17px] font-semibold text-[#14133b]">{item}</h4>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            />

            {/* IT Consulting Services */}
            <section className="py-[50px] bg-[#f7f8fd]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b]">IT Consulting Services</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {IT_CONSULTING_SERVICES.map((service, index) => {
                            let iconBg = "bg-[#fff8f0]";
                            let iconColor = "text-[#f29111]";

                            switch (service.color) {
                                case "pink":
                                    iconBg = "bg-[#fff0fa]";
                                    iconColor = "text-[#e91e63]";
                                    break;
                                case "dark":
                                    iconBg = "bg-[#f4f7fa]";
                                    iconColor = "text-[#0e1726]";
                                    break;
                                case "green":
                                    iconBg = "bg-[#f0fdf4]";
                                    iconColor = "text-[#22c55e]";
                                    break;
                                case "yellow":
                                    iconBg = "bg-[#fffbeb]";
                                    iconColor = "text-[#f59e0b]";
                                    break;
                                case "purple":
                                    iconBg = "bg-[#faf5ff]";
                                    iconColor = "text-[#a855f7]";
                                    break;
                            }

                            return (
                                <div key={index} className="bg-white rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 flex items-center gap-6 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1">
                                    <div className={`flex-shrink-0 h-[70px] w-[70px] flex justify-center items-center rounded-full ${iconBg} ${iconColor}`}>
                                        <div className="flex items-center justify-center [&>svg]:w-9 [&>svg]:h-9">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h6 className="text-[19px] font-semibold text-[#14133b] leading-[32px]">{service.title}</h6>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industry We Serve (Grid) */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Industry We Serve</h2>
                        <p className="text-[#6a7c92] text-[16px] mx-auto font-normal leading-relaxed max-w-[800px]">
                            As a top IT Technology Consulting services provider company, we have a process-driven approach that helps us to meet our client’s project requirements, timescales and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {INDUSTRY_SERVED.map((item, index) => {
                            let hoverBg = "hover:bg-orange-50";
                            switch (item.color) {
                                case "pink": hoverBg = "hover:bg-pink-50"; break;
                                case "dark": hoverBg = "hover:bg-slate-50"; break;
                                case "yellow": hoverBg = "hover:bg-yellow-50"; break;
                                case "purple": hoverBg = "hover:bg-purple-50"; break;
                                case "green": hoverBg = "hover:bg-green-50"; break;
                            }

                            return (
                                <div key={index} className={`bg-white rounded-md border border-gray-100 shadow-sm p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer min-h-[160px] group ${hoverBg}`}>
                                    <div className="w-[60px] h-[60px] relative mb-4">
                                        <Image src={item.image} alt={item.title} fill className="object-contain" />
                                    </div>
                                    <h3 className="text-[#14133b] font-semibold text-[15px] sm:text-[16px] text-center">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <div className="bg-white">
                <PortfolioSection
                    projects={PROJECTS}
                    subtitle="Our Work"
                    title="Comprehensive Business Technology Consulting Services"
                    description="We study your business structure and suggest the best technology upgrade that matches your business requirements and specifications."
                />
            </div>
            {/* Testimonials Section */}
            <section className="bg-white">
                <div className="w-full">
                    <TestimonialSlider testimonials={IT_CONSULTING_TESTIMONIALS} />
                </div>
            </section>

            {/* Text Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center max-w-[800px] mx-auto">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[25px]">Hidden Brains Offers Strategic IT Consulting</h2>
                        <p className="text-[#6a7c92] text-[16px] mx-auto font-normal leading-relaxed">
                            We understand your objectives, align technology with business goals and collaborate to unlock the full potential for your business. <Link href="/hire-dedicated-developers" className="text-blue-500 font-semibold hover:underline">Our team</Link> is passionate about creating improved profitability and bottom-line results for clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));
