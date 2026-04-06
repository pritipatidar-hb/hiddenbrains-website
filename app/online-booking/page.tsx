import dynamic from 'next/dynamic';
import React from "react";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";


import { CtaSection } from "@/components/shared/CtaSection";

import onlineBookingBanner from "@/images/online-booking.webp";

import {
    ONLINE_BOOKING_HERO,
    ONLINE_BOOKING_INTRODUCTION,
    ONLINE_BOOKING_SERVICES,
    ONLINE_BOOKING_FEATURES,
    ONLINE_BOOKING_WHY_CHOOSE_US,
    ONLINE_BOOKING_FAQ,
    ONLINE_BOOKING_PORTFOLIO
} from "@/lib/online-booking-data";

export const metadata = {
    title: "Online Booking System Development UK | Custom Scheduling Software",
    description: "Expert booking systems development company in the UK. We create bespoke online booking solutions for travel, healthcare, hospitality and various service sectors.",
};

export default async function OnlineBookingPage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            <HeroSection
                banner={onlineBookingBanner}
                alt="Online Booking Solutions"
                title={ONLINE_BOOKING_HERO.title}
                description={ONLINE_BOOKING_HERO.description}
                ctaText={ONLINE_BOOKING_HERO.buttonText}
                ctaHref={ONLINE_BOOKING_HERO.buttonLink}
            />

            <IntroductionSection
                breadcrumbs={[
                    { label: "Industries", href: "/industries" },
                    { label: "Online Booking" }
                ]}
                title={ONLINE_BOOKING_INTRODUCTION.title}
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        {ONLINE_BOOKING_INTRODUCTION.content.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                }
            />

            {/* Specialised Services Section */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {ONLINE_BOOKING_SERVICES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {ONLINE_BOOKING_SERVICES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {ONLINE_BOOKING_SERVICES.items.map((item, index) => (
                            <div key={index} className="p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all border-b-4 hover:border-b-[#f29111] bg-white group flex flex-col items-center text-center">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {item.icon}
                                </div>
                                <h3 className="text-[22px] font-semibold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors tracking-tight leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed font-normal text-[15px]">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Features Section */}
            <section className="py-[60px] bg-[#f8faff]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {ONLINE_BOOKING_FEATURES.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {ONLINE_BOOKING_FEATURES.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {ONLINE_BOOKING_FEATURES.items.map((item, index) => (
                            <div key={index} className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-50 flex flex-col items-center text-center group">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:rotate-12">
                                    {item.icon}
                                </div>
                                <h3 className="text-[20px] font-bold text-[#14133b] mb-4 group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] leading-relaxed text-[15px]">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Why Choose Us */}
            <section className="py-[60px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mx-auto mb-[40px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            {ONLINE_BOOKING_WHY_CHOOSE_US.title}
                        </h2>
                        <p className="text-[#6a7c92] text-[19px] font-normal leading-relaxed text-center mx-auto">
                            {ONLINE_BOOKING_WHY_CHOOSE_US.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {ONLINE_BOOKING_WHY_CHOOSE_US.items.map((reason, index) => (
                            <div key={index} className="flex flex-wrap gap-6 p-[35px] rounded-2xl bg-white border border-transparent hover:border-gray-50 hover:shadow-xl transition-all group">
                                <div className="shrink-0 w-16 h-16 bg-orange-50 text-[#f29111] flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-semibold mb-[11px] text-[#14133b] group-hover:text-orange-500 transition-colors">
                                        {reason.title}
                                    </h4>
                                    <p className="text-[#6a7c92] leading-relaxed text-[15px] font-normal">
                                        {reason.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={ONLINE_BOOKING_FAQ}
                title="Frequently Asked Questions"
                description="Common questions about our online booking software development and management."
            />

            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title={ONLINE_BOOKING_PORTFOLIO.title}
                subtitle="Our Work"
                description={ONLINE_BOOKING_PORTFOLIO.description}
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
