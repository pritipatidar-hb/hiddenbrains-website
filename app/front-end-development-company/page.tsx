import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import { ChevronRight } from "lucide-react";
import bannerImage from "@/images/web-design-development.webp";

import { getData } from "@/lib/data";
import {
    FRONT_END_TECH,
    FRONT_END_SERVICES,
    FRONT_END_INDUSTRIES_SERVED,
    FRONT_END_WHY_CHOOSE_HB,
    FRONT_END_GUIDE_ITEMS,
    FRONT_END_GUIDE_DETAILS,
    FRONT_END_FAQ,
    FRONT_END_PROCESS_STEPS
} from "@/lib/front-end-development-data";

import { CtaSection } from "@/components/shared/CtaSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";


import { GuideSection } from "@/components/shared/GuideSection";
import { WebIndustrySlider } from "@/components/shared/WebIndustrySlider";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { IndustrySlider } from '@/components/shared/IndustrySlider';
import { REACT_JS_INDUSTRIES } from '@/lib/react-js-development-data';

export const metadata = {
    title: "Front End Development Company in the UK | Hidden Brains",
    description: "Leading front-end development agency in the UK offering customized, scalable front-end development services using React, Angular, Vue JS, and more.",
};

export default async function FrontEndDevelopmentPage() {
    const data = await getData();
    const { PROJECTS, TESTIMONIALS } = data;

    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <section className="relative min-h-[500px] flex items-center pt-20 pb-20 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <Image src={bannerImage} alt="Front End Development Company In the UK" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-[650px]">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-[60px] mb-[15px] mt-4">
                            Front End Development Company In the UK
                        </h1>
                        <p className=" text-[16px] md:text-[18px] text-gray-200 mb-[25px] md:leading-[30px] max-w-[610px] font-normal pr-10">
                            Our Front-End Developers are extensively evaluated to ensure they are able to bring the skills necessary to meet the needs of your project. Our Front-End Developers have technical know-how in complex projects in the realm of multiple disciplines, technologies, and technology platforms.
                        </p>
                        <Button
                            href="/contact"
                            variant="primary"
                            className="px-7 py-3 rounded-sm uppercase tracking-wider"
                        >
                            Get In Touch
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <IntroductionSection
                bgColor="bg-white"
                breadcrumbs={[{ label: "Front End Development" }]}
                title="Front-End Development Services In The UK"
                counters={[
                    { value: "22", symbol: "+", label: "Years of experience" },
                    { value: "1000", symbol: "+", label: "Mobile Projects" },
                    { value: "30", symbol: "+", label: "Domain served" },
                    { value: "125", symbol: "+", label: "Mobile Experts" }
                ]}
                content={
                    <>
                        <p className="mb-[14px]">
                            As a leading front-end development agency in the UK, we offer customized, scalable, and safe front-end development services to businesses of all sizes. Our designers and developers use cutting-edge tools and frameworks such as React, Angular, Vue JS, Svelte, and Ember JS to create a robust, user-friendly app interface that ensures a seamless user experience.
                        </p>
                        <p className="mb-[14px]">
                            We adhere to the agile front-end development method and integrate the user experience and interface design from the very first steps in the process of creating your app, in order to provide end-users with the ultimate experience. We have top experts in coding and are well-experienced in making your feature-rich application a reality.
                        </p>
                        <p>
                            Our experts ensure you receive high-quality and bug-free code with every project that we complete, on time and within budget. Our experienced team will be glad to assist you in defining your unique requirements and will guide you throughout each step of your project, from initial planning to maintenance mode.
                        </p>
                    </>
                }
            />

            {/* Front End Services Section (Our Wide Range) */}
            <section className="pb-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Our Wide Range of Front End Web Development Services</h2>
                        <p className="text-[#6a7c92]  text-[16px] md:text-[19px]  mx-auto leading-relaxed font-normal">
                            If you're looking for a company that provides professional front-end web development services, look no further than Hidden Brains UK. We have over a decade of experience in creating websites and offer a wide range of services that can help you create an intuitive app frontend.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FRONT_END_SERVICES.map((tech, index) => {
                            const bgHoverMap: Record<string, string> = {
                                orange: "hover:bg-[#fff9f0]",
                                purple: "hover:bg-[#f8f0f8]",
                                dark: "hover:bg-[#f0f4f8]",
                                green: "hover:bg-[#f0fdf4]",
                                yellow: "hover:bg-[#fffbeb]"
                            };
                            const hoverBg = bgHoverMap[tech.color] || "hover:bg-gray-50";

                            return (
                                <div key={index} className={`bg-white border border-gray-100 p-[35px] transition-colors duration-300 ${hoverBg} group flex flex-col rounded-sm`}>
                                    <div className="mb-8">
                                        <Image src={tech.image} alt={tech.title} width={57} height={57} className="object-contain" />
                                    </div>
                                    <h3 className="text-[22px] font-semibold text-[#14133b] mb-4 group-hover:text-black transition-colors mb-[11px]">{tech.title}</h3>
                                    <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-8 flex-grow">
                                        {tech.desc}
                                    </p>
                                    <Button
                                        href={tech.link || "#"}
                                        variant="ghost"
                                        className="inline-flex items-center !text-[#14133b] font-semibold uppercase text-[13px] tracking-widest mt-auto group/btn px-0"
                                    >
                                        EXPLORE <span className="ml-4 w-8 h-[2px] bg-[#14133b] group-hover/btn:w-12 transition-all duration-300"></span>
                                    </Button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Technology Expertise Section */}
            {/* <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-bold text-[#14133b] mb-4">Our Technology Expertise</h2>
                        <p className="text-[#6a7c92] text-[17px] max-w-3xl mx-auto leading-relaxed font-medium">
                            We are known as the one-stop solution for all your website development services. Our proficient team has delivered innovative and secure web solutions for B2B and B2C Clients.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                        {FRONT_END_TECH.map((tech, index) => {
                            const colorMap: Record<string, string> = {
                                orange: "bg-orange-500",
                                purple: "bg-purple-600",
                                dark: "bg-slate-800",
                                green: "bg-emerald-500",
                                yellow: "bg-amber-500"
                            };
                            const overlayClass = colorMap[tech.color] || "bg-blue-500";

                            return (
                                <div key={index} className="group relative overflow-hidden aspect-[4/3] flex flex-col justify-end">
                                    <div className="absolute inset-0 z-0">
                                        <Image src={tech.image} alt={tech.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                                    <div className={`absolute inset-0 ${overlayClass} opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-20`}></div>
                                    <div className="relative z-30 p-8 transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                                        <h3 className="text-2xl font-bold text-white mb-4">{tech.title}</h3>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            <p className="text-white/90 mb-6 leading-relaxed line-clamp-3">{tech.desc}</p>
                                            <Link
                                                href={tech.link || "#"}
                                                className="inline-flex items-center text-white font-bold uppercase text-sm tracking-wide group/btn"
                                            >
                                                Explore <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}

            <CtaSection
                title=" Let's get started on your Front End Development project!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Front End Development Services */}
            <section className="py-[50px] bg-[#f8faff] text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Our Front End Development Services</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal leading-relaxed">
                            As one of the UK's leading Front End development service providers, we offer a complete Front End solution to global clients. Have a look at the variety of Front End development services we offer.
                        </p>
                    </div>
                    {/* Reusing Web Services from web dev layout since the items match the HTML provided exactly */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* We created a generic component pattern for this */}
                        {FRONT_END_TECH.map((_, index) => {
                            // Fetch generic service descriptions from data 
                            const services = [
                                { title: "Custom Web App Development", desc: "No matter what industry you are in, take into account using our secure, scalable, high-performing, and feature-rich web application development services that have been tailored to meet all of your business needs." },
                                { title: "Website Prototyping & UX Design", desc: "Hidden Brains is a website development company in the UK that specializes in creating a wide range of website development services, from creating prototyping and user-friendly UX design to coding and launching your site." },
                                { title: "Progressive Web App Development", desc: "We at Hidden Brains UK have a pool of app developers that enables you to develop websites that offer progressive web apps and are distinguished by their high performance, reliability, and visual appeal." },
                                { title: "Consulting & Business Analysis", desc: "Contact us for help choosing the right technology for your next web app project, because our technology consultants are available to help you." },
                                { title: "Full Stack Development", desc: "At Hidden Brains UK, we provide full stack development services. We have a team of expert developers who can help you with all aspects of website development, from conception to execution." },
                                { title: "Third-Party Integration", desc: "At Hidden Brains UK, we provide website application development services in the UK and have a team of experienced developers who can help you create a custom website or integrate your existing website with third-party applications." },
                            ];
                            const service = services[index];
                            if (!service) return null;

                            return (
                                <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
                                    <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">{service.title}</h3>
                                    <p className="text-[#6a7c92] text-[15px] leading-relaxed">{service.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="text-center mb-[14px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">Front-End Development Services For Various Industries</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal max-w-[1238px] leading-relaxed">
                            For clients from a variety of industries, we've excelled at providing leading Frontend Development Solutions in the UK, more specifically for the below industries.
                        </p>
                    </div>

                    {/* <WebIndustrySlider industries={FRONT_END_INDUSTRIES_SERVED} /> */}
                    <IndustrySlider industries={REACT_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-[50px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Why Hidden Brains UK Is Best For Frontend Development Services?
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px]  mx-auto font-normal
 leading-relaxed">
                            Hidden Brains UK can be your perfect choice when looking for the perfect front-end development company to develop your online business. Here are the few key highlights that make us a trusted platform to hire frontend development programmers in the UK:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FRONT_END_WHY_CHOOSE_HB.map((reason, index) => (
                            <div key={index} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
                                <div className="text-[#f29111] mb-6 flex justify-start">
                                    <div className="w-16 h-16 bg-[#f8faff] rounded-full flex items-center justify-center group-hover:bg-[#f29111] group-hover:text-white transition-colors duration-300">
                                        {reason.icon}
                                    </div>
                                </div>
                                <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-[#f29111] transition-colors duration-300">
                                    {reason.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[15px] leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                description="If you have any doubts about front-end development services, then our guide section will help you find the answers you need. Else you can contact our experts for further concerns."
                items={FRONT_END_GUIDE_ITEMS.map(item => ({ id: item.id, label: item.label }))}
                details={FRONT_END_GUIDE_DETAILS.map(detail => ({ id: detail.id, title: detail.title, content: detail.content }))}
            />

            {/* Process Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[36px] font-bold text-[#14133b] mb-4">
                            Front End Development Process
                        </h2>
                        <p className="text-[#6a7c92] text-[17px] max-w-4xl mx-auto font-medium leading-relaxed">
                            We build your web application with proper understanding and with effective strategies to avoid future delays.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {FRONT_END_PROCESS_STEPS.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="mb-6 overflow-hidden rounded-full flex items-center justify-center p-4 bg-transparent transition-transform duration-300 group-hover:-translate-y-2">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-[16px] font-bold text-[#14133b] leading-tight flex-1">
                                    {step.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaSection
                title="Your idea is most important to us. Share Now!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            {/* Portfolio Section */}
            <PortfolioSection
                subtitle="OUR WORK"
                title="Our Front End Development Projects"
                description="We have delivered a wide range of web applications across the world. Have a glance at our work process."
                projects={PROJECTS.slice(0, 8)} /* Reuse top projects for this page */
            />

            {/* Testimonials Section */}
            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection faqs={FRONT_END_FAQ} />

            {/* Contact Form Section */}
            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
