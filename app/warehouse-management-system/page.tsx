import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import {
    WAREHOUSE_HERO,
    WAREHOUSE_ACHIEVEMENTS,
    WAREHOUSE_SOLUTIONS,
    TECHNOLOGY_EXPERTISE,
    WAREHOUSE_STEPS,
    WAREHOUSE_FAQ,
    WAREHOUSE_USE_CASES
} from "@/lib/warehouse-management-data";


import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { GuideSection } from "@/components/shared/GuideSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { getData } from "@/lib/data";

import wareHouseBanner from "@/images/Warehouse-Management.webp"
import { INDUSTRIES_SERVED } from "@/lib/web-app-data";
import { WebIndustrySlider } from "@/components/shared/WebIndustrySlider";
import { LottieAnimation } from "@/components/shared/LottieAnimation";
import { WarehouseManagementVideo } from "@/components/warehouse-management/WarehouseManagementVideo";
import { UseCasesSection } from "@/components/shared/UseCasesSection";
import warehousePlatformImage from "@/images/assist-platforms-Integrations.webp";

export const metadata = {
    title: "Warehouse Management System | Hidden Brains UK",
    description: "Custom warehouse management system development by Hidden Brains UK. Optimize inventory, streamline operations, and reduce warehousing costs.",
};
export default async function WarehouseManagementPage() {
    const data = await getData();

    return (
        <div className="min-h-screen bg-white">
            <HeroSection
                banner={wareHouseBanner}
                alt="Warehouse Management System"
                title={WAREHOUSE_HERO.title}
                description={WAREHOUSE_HERO.description}
                ctaText={WAREHOUSE_HERO.cta}
            />

            {/* Introduction Section */}
            <IntroductionSection
                breadcrumbs={[{ label: "Warehouse" }]}
                title="WMS Solutions to Automate Everything In One System"
                content={
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <p className="mb-[14px]">
                                To seamlessly handle the operations of the distribution center from a single point, Hidden Brains UK, offers you a tailor-made Warehouse & Inventory Management Solution that provides real-time insights into the warehouse. Instead of handling the operations manually, your supply chain team can perform end-to-end warehouse operations and achieve a complete inventory overview.
                            </p>
                            <p className="mb-[14px]">
                                The integration of the WMS aims to automate the flow of information and organize your warehouse like an expert. It comes with the capabilities to cut lead times, optimize inventory, avoid stockouts, and lower storage costs. Advanced Warehouse and Inventory Management solutions leverage the benefit of faster order fulfillment, instant visibility into the stock level and order status, reduced shipping cost, better cash flow, and enhanced customer satisfaction.
                            </p>
                            <p>
                                Get a broad perspective of your company by seamlessly integrating the WMS customized by Hidden Brains UK. Our solution can be flawlessly integrated with any ERP system and can be customized to match any business size.
                            </p>
                        </div>

                        {/* Video Implementation inside Intro */}
                        <WarehouseManagementVideo />
                    </div>
                }
                showHomeIcon={true}
            />

            {/* Significant Achievements */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto text-center max-w-7xl">
                    <div className="max-w-4xl mx-auto mb-[30px]">
                        <h4 className="text-[#000000] text-[26px] md:text-[36px] font-semibold  mb-4">Significant Achievements</h4>
                        {/* <h2 className="text-4xl font-black text-slate-900 mb-6"></h2> */}
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] font-normal leading-relaxed">
                            Maximize Your Warehouse Performance Reduce the overall cost, and human errors, and automate the information flow by using Hidden Brains UK Warehouse & Inventory Management Solution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WAREHOUSE_ACHIEVEMENTS.map((item, index) => (
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

            {/* Core Features Grid */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        {/* <h4 className="text-orange-500 font-bold uppercase tracking-widest mb-4">Best Solution</h4> */}
                        <h2 className=" text-[26px] md:text-[36px] font-semibold font-black text-slate-900 mb-[18px]">Best Warehouse & Inventory Management Solution</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] font-normal leading-relaxed">
                            To effectively manage multi-location warehouses and incorporate inventory management processes, our warehouse & inventory solutions deliver you cutting-edge automation, smart features, and advanced functionality to streamline inventory activities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
                        {WAREHOUSE_SOLUTIONS.map((item, index) => (
                            <div key={index} className="bg-white  p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all group text-left border border-slate-100 flex flex-col items-start h-full">
                                <div className={`mt-1 mb-4 flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500
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
                title="Let’s get started on your Web Development project!"
            />


            {/* Process Section */}

            <section className="py-[50px] bg-white overflow-hidden">
                <div className="container px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-[30px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold font-black text-slate-900 mb-[18px]">How does Warehouse &amp; Inventory Solutions Work</h2>
                    </div>

                    {/* <div className="max-w-6xl mx-auto flex justify-center overflow-visible">
                                    <ProcessDiagram data={TIME_ATTENDANCE_PROCESS} />
                                </div> */}
                    <div className="mx-auto max-w-6xl">
                        <LottieAnimation
                            animationUrl="/json/warehouse-solution-lifecycle-howits-work-v02.json"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>
            {/* Benefits Section */}
            <section className="py-[50px] bg-slate-50">
                <div className="container px-6 mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold font-black text-slate-900 mb-[18px]">Benefits of Warehouse Management System Solution</h2>
                        <p className="text-[#6a7c92] text-[16px] md:text-[19px] font-normal leading-relaxed">
                            By automating inventory flows, Hidden Brains warehouse management systems enhance productivity by easing operations, cutting logistics costs, optimizing manpower, and assuring real-time control.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Tradable &amp; Non-Tradable</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Automate the monitoring and tracking of both tradable and non-tradeable inventory by interconnecting all processes through to completion. Also, stock can be put away fast and effectively by using our WMS systems.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">View of Inventory</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                With the most accurate and reliable inventory systems, businesses can get a big-picture of inventory and achieve a balance between services and cost while also adding value to their operations.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Better Stock Control</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Improve warehouse inventory control to easily track sales and orders for each product or customer, assuring information accessibility to dramatically cut on unnecessary labor hours.
                            </p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Space Utilisation</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Use our warehouse software solutions strategically to maximize utility and mobility in your warehouse by implementing the best practices for shelving and storage.
                            </p>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Real-time Reporting</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                To avoid issues like stock-outs or missing client orders, get real-time tracking &amp; reporting to synchronize your inventory across warehouses through various channels.
                            </p>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Decision Making</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                A warehouse inventory management solution that offers all essential indicators and data for decision-making to obtain corporate benefits, streamline operations and boost productivity.
                            </p>
                        </div>
                        {/* Card 7 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Lower Costs</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Our reliable and secure warehouse management system can minimize waste, maximize labor productivity, make optimum use of available space, and lower the demand for overpriced maintenance and upgrades.
                            </p>
                        </div>
                        {/* Card 8 */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-slate-100 group">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Reduced Wastage</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                Aiming to enhance your warehouse inventory control and follow environmental best practices to reduce waste and scrap, we have created a multi-warehouse inventory management solution.
                            </p>
                        </div>
                        {/* Empty cell to maintain 3-col grid alignment */}
                        <div className="hidden md:block"></div>
                    </div>
                </div>
            </section>

            {/* Core Functionalities Section */}
            <section className="py-[50px] bg-[#f7f7f7]">
                <div className="container px-6 mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className=" mx-auto text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[36px] font-semibold font-black text-slate-900 mb-[18px]">
                            Core functionalities of warehouse &amp; inventory management solutions for increased asset visibility.
                        </h2>
                    </div>

                    {/* Functionalities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        {/* Inbound Operations */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Inbound Operations</h3>
                        </div>

                        {/* Outbound Operations */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Outbound Operations</h3>
                        </div>

                        {/* Smart Notifications / Alerts */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Smart Notifications / Alerts</h3>
                        </div>

                        {/* Inventory Visibility */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Inventory Visibility</h3>
                        </div>

                        {/* Clearance Of Aging Inventory */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Clearance Of Aging Inventory</h3>
                        </div>

                        {/* Fast ReConsolidation */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Fast ReConsolidation</h3>
                        </div>

                        {/* Inventory Report */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Inventory Report</h3>
                        </div>

                        {/* Barcode Scanning */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="3" x2="3" y2="9" /><line x1="3" y1="15" x2="3" y2="21" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="13" y1="3" x2="13" y2="21" /><line x1="17" y1="3" x2="17" y2="9" /><line x1="17" y1="15" x2="17" y2="21" /><line x1="21" y1="3" x2="21" y2="9" /><line x1="21" y1="15" x2="21" y2="21" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Barcode Scanning</h3>
                        </div>

                        {/* Packaging & Batching */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Packaging &amp; Batching</h3>
                        </div>

                        {/* Real-time data Processing */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Real-time data Processing</h3>
                        </div>

                        {/* Seamless Third Party Integration */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Seamless Third Party Integration</h3>
                        </div>

                        {/* Transportation Management */}
                        <div className="flex items-center gap-4 px-6 py-5 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                                </svg>
                            </div>
                            <h3 className="text-[15px] font-bold text-slate-900">Transportation Management</h3>
                        </div>

                    </div>
                </div>
            </section>

            {/* Platforms & Integrations Section */}
            <section className="py-[50px] bg-white">
                <div className="container px-6 mx-auto max-w-7xl">

                    {/* Section Header */}
                    <div className="mx-auto text-center mb-[30px]">
                        <h2 className=" text-[26px] md:text-[36px] font-semibold font-black text-slate-900 mb-[18px]">Platforms &amp; Integrations</h2>
                        <p className="text-slate-600 text-[16px] md:text-lg leading-relaxed">
                            Providing consistent experiences and addressing the unique needs of each and every platform.
                        </p>
                    </div>

                    {/* Integration Image */}
                    <div className="max-w-5xl mx-auto mb-16">
                        <Image
                            src={warehousePlatformImage}
                            alt="Platforms & Integrations - Warehouse & Inventory Management System"
                            width={1244}
                            height={496}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">

                        {/* Technology Platforms */}
                        <div>
                            <div className="mb-6">
                                <h2 className="text-[22px] font-semibold
 font-black text-slate-900 mb-2">Technology Platforms</h2>
                                <p className="text-[#6a7c92] text-[18px] font-normal">Providing consistent experiences and addressing the unique needs of each and every platform.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Web Based */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">Web Based</h3>
                                </div>
                                {/* Mobile Based */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">Mobile Based — iOS / Android</h3>
                                </div>
                            </div>
                        </div>

                        {/* Third Party Integrations */}
                        <div>
                            <div className="mb-6">
                                <h2 className="text-[22px] font-semibold
 text-slate-900 mb-2">Third party integration</h2>
                                <p className="text-[#6a7c92] text-[18px] font-normal">Seamless integration to deliver better value to customers</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {/* ERP */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[15px] font-bold text-slate-900 leading-snug">Enterprise Resource Planning (ERP)</h3>
                                </div>
                                {/* Supply Chain */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[15px] font-bold text-slate-900 leading-snug">Supply Chain</h3>
                                </div>
                                {/* Sales Portal */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[15px] font-bold text-slate-900 leading-snug">Sales Portal</h3>
                                </div>
                                {/* CRM */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[15px] font-bold text-slate-900 leading-snug">Customer Relationship Management (CRM)</h3>
                                </div>
                                {/* Procurement */}
                                <div className="flex items-center gap-5 p-6 border border-slate-200 rounded-xl bg-slate-50 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 shrink-0 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                                        </svg>
                                    </div>
                                    <h3 className="text-[15px] font-bold text-slate-900 leading-snug">Procurement Systems</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="Here are some of the common queries related to Warehouse & Inventory Management."
                items={[
                    { id: "what-is-warehouse-and", label: "What Is Warehouse and Inventory Management Solution And How It Will Help My Business?" },
                    { id: "what-are-the-benefits", label: "What Are The Benefits of Using a Warehouse Management System?" },
                    { id: "what-does-warehouse-inventory", label: "What Does Warehouse Inventory Module Cover?" },
                ]}
                details={[
                    {
                        id: "what-is-warehouse-and",
                        title: "What Is Warehouse and Inventory Management Solution And How It Will Help My Business?",
                        content: (
                            <>
                                <p>WMS is a SaaS-based application that efficiently handles warehouse operations and automates the end-to-end inventory flow. It helps with managing multi-location warehouses, creating inventory management, and making the most of available warehouse space.</p>
                                <p>A WMS helps warehouse managers with daily tasks like planning, organizing, staffing, and monitoring the movement of people and inventory both inside and outside the warehouse.</p>
                            </>
                        ),
                    },
                    {
                        id: "what-are-the-benefits",
                        title: "What Are The Benefits of Using a Warehouse Management System?",
                        content: (
                            <>
                                <p>Using a warehouse management system has a wide range of advantages for your business. The core benefits of implementing the WMS include decreased operational costs, process optimization, and warehouse space management.</p>
                                <p>A well-developed warehouse management system helps with customer demand forecasting, stock planning in advance, maximizing labor resources, and managing the warehouse spacing effectively.</p>
                            </>
                        ),
                    },
                    {
                        id: "what-does-warehouse-inventory",
                        title: "What Does Warehouse Inventory Module Cover?",
                        content: (
                            <p>All procedures in the context of managing the supplies and services of warehouses are covered by the Warehouse Inventory module of Hidden Brains UK. It entails managing goods, services, and assets as well as managing product families, stock adjustments, stock takes, stock transfers, inventory write-offs, pricing lists, and a variety of other things.</p>
                        ),
                    },
                ]}
            />
            <CtaSection
                title="Ready to start your dream project? We have a TEAM to get you there."
            />
            <section className="py-[50px] bg-white text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold
 font-black text-slate-900 mb-4">
                        <span className="relative inline-block">
                            Industries We Serve
                            <span className="absolute -bottom-1 left-0 w-full h-[6px] bg-orange-500 -z-10"></span>
                        </span>
                    </h2>
                    <p className="max-w-3xl mx-auto text-[#6a7c92] text-base mb-10 mt-4">
                        Our warehouse inventory management software solution help in efficient warehousing, reducing costs and improving productivity across industries.
                    </p>
                    <WebIndustrySlider industries={INDUSTRIES_SERVED} />
                </div>
            </section>

            <UseCasesSection 
                title="Use Cases"
                description="Hidden Brains UK has tailored the WMS technology solutions to successfully address industry-specific issues and improve the supply chain management process."
                items={WAREHOUSE_USE_CASES}
                bgColor="bg-slate-50"
                imageStyle="cover"
            />



            {/* Testimonials */}
            <TestimonialsSection testimonials={data.TESTIMONIALS} />

            {/* FAQs */}
            <FAQSection faqs={WAREHOUSE_FAQ} />

            {/* Contact Section */}
            <Contact data={data} />
        </div>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
