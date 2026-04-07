import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getData } from "@/lib/data";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import { GuideSection } from "@/components/shared/GuideSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { ClientLogos } from "@/components/home/ClientLogos";
import smartEstatePlatform from "@/images/smart-estate-platform.webp";
import smartEstateBanner from "@/images/Warehouse-Management.webp";

import {
    SMART_ESTATE_HERO,
    GATED_COMMUNITY_ACCESS_FEATURES,
    COMMUNITY_DIGITALIZATION_FEATURES,
    SMART_ESTATE_BENEFITS,
    HOW_IT_WORKS_STEPS,
    GATED_COMMUNITY_INDUSTRIES,
    SMART_ESTATE_USE_CASES,
    SMART_ESTATE_GUIDE_ITEMS,
    SMART_ESTATE_GUIDE_DETAILS,
    SMART_ESTATE_FAQ,
} from "@/lib/gated-community-data";
import { LottieAnimation } from "@/components/shared/LottieAnimation";
import { UseCasesSection } from '@/components/shared/UseCasesSection';
import { WAREHOUSE_USE_CASES } from '@/lib/warehouse-management-data';
import { GatedCommunityVideo } from "@/components/gated-community/GatedCommunityVideo";

export const metadata = {
    title: "Gated Community Access Control System | Smart Estate | Hidden Brains UK",
    description: "Smart estate management solution with advanced gated community access control software for commercial and residential estates. Digitally transform your security.",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getColorClasses(color: string) {
    switch (color) {
        case "orange":
            return { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" };
        case "purple":
            return { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" };
        case "dark":
            return { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200" };
        case "green":
            return { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" };
        case "yellow":
            return { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" };
        case "cyan":
            return { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" };
        default:
            return { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" };
    }
}

// Tile used in the Functionalities grid — dark icon, grey border, orange hover
function FuncTile({ label, icon }: { label: string; icon: React.ReactNode }) {
    return (
        <div className="flex items-center gap-5 px-6 py-5 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer group">
            <div className="shrink-0 text-[#14133b] group-hover:text-orange-500 transition-colors">
                {icon}
            </div>
            <h3 className="text-[15px] font-semibold text-[#14133b] group-hover:text-orange-500 transition-colors leading-snug">
                {label}
            </h3>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SmartEstatePage() {
    const data = await getData();

    // SVG icons for the Functionalities grid
    const icons = {
        visitors: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="23" y1="11" x2="17" y2="11" /></svg>,
        committee: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        amenities: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
        householdStaff: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
        members: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        onPremisesStaff: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" /><line x1="12" y1="12" x2="12" y2="21" /></svg>,
        vehicles: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
        blockUnits: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
        serviceProviders: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
        delivery: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" /><rect x="9" y="11" width="14" height="10" rx="2" ry="2" /><circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" /></svg>,
        reports: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
        announcements: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
        childSecurity: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        ruleBook: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>,
        meetings: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        complaint: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
        poll: <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    };

    // Inline SVG icons for How It Works steps
    const stepIcons = [
        <svg key="0" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>,
        <svg key="1" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
        <svg key="2" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 17h0" /></svg>,
        <svg key="3" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>,
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection
                banner={smartEstateBanner}
                alt="Smart Estate - Gated Community Access Control System"
                title={SMART_ESTATE_HERO.title}
                description={SMART_ESTATE_HERO.description}
                ctaText={SMART_ESTATE_HERO.cta}
            />

            {/* Introduction Section */}
            <IntroductionSection
                breadcrumbs={[{ label: "Smart Estate" }]}
                title="Smart Solutions For Improved Security & Digitized Access Control"
                content={
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <p className="mb-[14px]">
                                Our Smart Estate management solution is built with advanced technologies to digitally
                                transform the access control of commercial and residential estates. The Hidden Brains
                                gated community access control system offers a great sense of security to everyone
                                inside the building or estate in an effort to create a safe atmosphere. Using our
                                solution, property owners and tenants, are able to file and follow up on complaints. In
                                addition, administrators can arrange meetings and able to prioritize
                                maintenance-related issues.
                            </p>
                            <p>
                                With the implementation of our robust Estate Solution, every individual, package, and
                                vehicle entering the estate has to seek permission from the owner or a resident. By
                                improving visitor and employee management, the gate control system creates a seamless
                                experience by minimizing gate congestion. It will enable you to decide whether or not
                                to let guests enter a community or apartment by simply allowing or denying the permit
                                through a solution.
                            </p>
                        </div>

                        <GatedCommunityVideo />
                    </div>
                }
                showHomeIcon={true}
            />

            {/* Gated Community Access Control Features */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h4 className="bg-[#f0eff1] inline-flex py-[4px] px-[15px] rounded-[50px] text-[#f29111] text-[13px] font-medium font-bold uppercase tracking-widest mb-4">KEY FEATURES OF</h4>
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">
                            Our Gated Community Access Control Software
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-lg font-regular leading-relaxed">
                            Our tailor-made robust gated community access control software solutions ensure the
                            capabilities to address security challenges and keep residents and visitors safe right
                            from the first touchpoint to the end.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {GATED_COMMUNITY_ACCESS_FEATURES.map((item, index) => {
                            const colors = getColorClasses(item.color);
                            return (
                                <div key={index} className="bg-white   p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                    <div className={`mt-1  flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 ${colors.bg} ${colors.text} border ${colors.border}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 mt-4 group-hover:text-orange-500 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Community Digitalization */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h4 className="bg-[#f0eff1] inline-flex py-[4px] px-[15px] rounded-[50px] text-[#f29111] text-[13px] font-medium font-bold uppercase tracking-widest mb-4">KEY FEATURES OF</h4>
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">Community Digitalization</h2>
                        <p className="text-slate-600 text-[16px] md:text-lg font-regular leading-relaxed">
                            Digitalizing the gated community or society access will facilitate faster information
                            sharing, accurate data management, and community cooperation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {COMMUNITY_DIGITALIZATION_FEATURES.map((item, index) => {
                            const colors = getColorClasses(item.color);
                            return (
                                <div key={index} className="bg-white  p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                    <div className={`mt-1 mb-4 flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 ${colors.bg} ${colors.text} border ${colors.border}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CtaSection title="Let's get started on your Smart Estate project!" />

            {/* How It Works Section */}
            <section className="py-[50px] bg-slate-50 overflow-hidden">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">
                            How does Gated Community Access Control Works
                        </h2>
                    </div>
                    {/* lottie animation */}
                    <div className="max-w-5xl mx-auto">
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h4 className="bg-[#f0eff1] inline-flex py-[4px] px-[15px] rounded-[50px] text-[#f29111] text-[13px] font-medium font-bold uppercase tracking-widest mb-4">KEY BENEFITS OF SMART ESTATE</h4>
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">
                            Gated Community Access Control Software
                        </h2>
                        <p className="text-slate-600 text-[16px] md:text-lg font-regular leading-relaxed">
                            Robust Estate Access System helps you handle everyday society management &amp; security issues and eliminates hassles from the society management system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SMART_ESTATE_BENEFITS.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Functionalities of Gated Community Access Control App ── */}
            <section className="py-[50px] bg-[#f7f7f7]">
                <div className="container px-6 mx-auto max-w-7xl">

                    {/* Section Header */}
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">
                            Functionalities of Gated Community Access Control App
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-lg font-regular leading-relaxed">
                            The most cutting-edge application for developing gated community access controls.<br />
                            Receive real-time updates and actionable insights for smart, secure living for your family and neighborhood.
                        </p>
                    </div>

                    {/* Column sub-headers */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                            <h3 className="text-[22px] font-bold text-[#14133b]">Security Matters</h3>
                        </div>
                        <div className="col-span-2 text-center">
                            <h3 className="text-[22px] font-bold text-[#14133b]">Community Digitalization</h3>
                        </div>
                    </div>

                    {/* Grid rows */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                        {/* Row 1 */}
                        <FuncTile label="Visitors" icon={icons.visitors} />
                        <FuncTile label="Committee" icon={icons.committee} />
                        <FuncTile label="Amenities & Booking" icon={icons.amenities} />

                        {/* Row 2 */}
                        <FuncTile label="Household Staff" icon={icons.householdStaff} />
                        <FuncTile label="Members" icon={icons.members} />
                        <FuncTile label="On Premises Staff" icon={icons.onPremisesStaff} />

                        {/* Row 3 */}
                        <FuncTile label="Vehicles In/Out" icon={icons.vehicles} />
                        <FuncTile label="Block & Units" icon={icons.blockUnits} />
                        <FuncTile label="Service Providers" icon={icons.serviceProviders} />

                        {/* Row 4 */}
                        <FuncTile label="Delivery" icon={icons.delivery} />
                        <FuncTile label="Reports" icon={icons.reports} />
                        <FuncTile label="Announcements" icon={icons.announcements} />

                        {/* Row 5 */}
                        <FuncTile label="Child Security" icon={icons.childSecurity} />
                        <FuncTile label="Rule Book" icon={icons.ruleBook} />
                        <FuncTile label="Meetings" icon={icons.meetings} />

                        {/* Row 6 */}
                        <FuncTile label="Service Providers" icon={icons.serviceProviders} />
                        <FuncTile label="Complaint" icon={icons.complaint} />
                        <FuncTile label="Poll / Suggestion" icon={icons.poll} />

                        {/* Row 7 — single centred community tile */}
                        <div className="col-span-1" />
                        <FuncTile label="Household Staff" icon={icons.householdStaff} />
                        <div className="col-span-1" />

                    </div>
                </div>
            </section>

            {/* ── Platforms: Gated Community Access Control ── */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">
                            Platforms: Gated Community Access Control
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            Comprehensive and custom gated community access control development solution on latest technology stack.
                        </p>
                    </div>

                    <div className=" mx-auto rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src={smartEstatePlatform}
                            alt="smart-estate-platform"
                            width={1201}
                            height={661}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here are some of the common queries related to Web application development."
                items={SMART_ESTATE_GUIDE_ITEMS}
                details={SMART_ESTATE_GUIDE_DETAILS}
            />

            {/* Second CTA */}
            <CtaSection title="Ready to start your dream project? We have a TEAM to get you there." />

            {/* Industries We Serve */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className=" mx-auto text-center mb-[40px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-[18px]">
                            Industries We Serve
                        </h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-lg font-regular leading-relaxed">
                            Our warehouse inventory management software solution help in efficient warehousing, reducing costs and improving productivity across industries.
                        </p>
                    </div>

                    <div className="px-8 lg:px-14">
                        <IndustrySlider industries={GATED_COMMUNITY_INDUSTRIES} />
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <UseCasesSection
                title="Use Cases"
                description="Hidden Brains UK has tailored the WMS technology solutions to successfully address industry-specific issues and improve the supply chain management process."
                items={WAREHOUSE_USE_CASES}
                bgColor="bg-slate-50"
                imageStyle="cover"
            />

            {/* Testimonials */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQ Section */}
            <FAQSection faqs={SMART_ESTATE_FAQ} />

            {/* Contact Section */}
            <Contact data={data} />
        </div>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
