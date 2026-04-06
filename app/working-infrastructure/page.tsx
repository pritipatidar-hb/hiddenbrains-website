import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Server,
    Network,
    Monitor,
    Database,
    Cpu,
    Shield,
    Smartphone,
    Headphones,
    CheckCircle2
} from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import {
    INFRA_HERO,
    INFRA_INTRO,
    INFRA_HIGHLIGHTS,
    INFRA_CATEGORIES,
    IT_INFRA_DETAILS
} from "@/lib/infrastructure-data";
import { getData } from "@/lib/data";


import bannerImg from "../../images/infrastructure-Banner.webp";

export const metadata = {
    title: "Our Working Infrastructure | Hidden Brains",
    description: "Explore Hidden Brains' state-of-the-art infrastructure, secure working environment, and latest workstation setups.",
};

export default async function InfrastructurePage() {
    const data = await getData();

    // Mapping for Lucide icons
    const getIcon = (title: string, size = 28) => {
        switch (title.toLowerCase()) {
            case "servers": return <Server size={size} />;
            case "network": return <Network size={size} />;
            case "server os environment": return <Cpu size={size} />;
            case "databases": return <Database size={size} />;
            case "hardware for desktops": return <Shield size={size} color="#f29111" />;
            case "desktops": return <Monitor size={size} color="#20ad96" />;
            case "devices": return <Smartphone size={size} color="#e91e63" />;
            case "communication tools": return <Headphones size={size} color="#14133b" />;
            default: return <CheckCircle2 size={size} />;
        }
    };

    return (
        <main className=" bg-white">
            <HeroSection
                banner={bannerImg}
                alt="Our Working Infrastructure Banner"
                title={INFRA_HERO.title}
                description={INFRA_HERO.description}
                breadcrumb={INFRA_HERO.breadcrumb}
                ctaText={INFRA_HERO.cta}
            />

            {/* Intro Content */}

            <section className="py-[70px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Heading + Text */}
                    <div className="max-w-5xl">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b] md:leading-[52px] mb-[18px]">
                            {INFRA_INTRO.title}
                        </h2>

                        <div className="space-y-[22px] text-[#6a7c92] text-[17px] leading-[30px]">
                            {INFRA_INTRO.content.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="mt-[50px] w-full">
                        <div className="relative w-full h-[420px]">
                            <Image
                                src={INFRA_INTRO.image}
                                alt="Infrastructure"
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Highlights Section */}
            <section className="bg-[#f3f4f6] py-[50px]">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Heading */}
                    <div className="text-center mb-[50px]">
                        <h2 className="text-[26px] md:text-[36px] font-bold text-[#14133b]">
                            Highlights of our Infrastructure
                        </h2>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[60px]">

                        {INFRA_HIGHLIGHTS.map((highlight, index) => (
                            <div key={index} className="flex items-start gap-4">

                                {/* Circular Check Icon */}
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-orange-500" />
                                </div>

                                {/* Text */}
                                <p className="text-[18px] font-semibold text-[#14133b] leading-[28px]">
                                    {highlight.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Detailed Categories Grid */}
            <section className="py-[50px] bg-[#f3f4f6]">
                <div className="container mx-auto px-6 max-w-7xl">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">

                        {INFRA_CATEGORIES.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 p-[40px] text-center"
                            >
                                {/* Blue Circular Icon */}
                                <div className="w-[85px] h-[85px] mx-auto mb-[25px] rounded-full bg-[#1f7dbb] flex items-center justify-center text-white">
                                    {getIcon(cat.title)}
                                </div>

                                {/* Title */}
                                <h3 className="text-[22px] font-semi text-[#14133b] mb-[20px]">
                                    {cat.title}
                                </h3>

                                {/* Bullet List */}
                                <ul className="text-left space-y-[12px] text-[15px] text-[#6a7c92] leading-[24px] list-disc list-inside">
                                    {cat.items?.map((item, i) => (
                                        <li key={i}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* IT Infrastructure Hardware/Software */}

            <section className="pb-[70px] bg-[#f3f4f6]">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Heading */}
                    <div className="text-center mb-[60px]">
                        <h2 className=" text-[26px] md:text-[36px] font-bold text-[#14133b]">
                            IT Infrastructure
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">

                        {IT_INFRA_DETAILS.map((detail, index) => (
                            <div key={index} className="bg-[#f5f6f8]">

                                {/* Image */}
                                <div className="relative">
                                    <div className="relative w-full h-[260px]">
                                        <Image
                                            src={detail.image || ""}
                                            alt={detail.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Floating Icon */}
                                    <div className="absolute left-[292px] md:left-[218px] -translate-x-1/2 -bottom-8 
                            w-[70px] h-[70px] bg-white rounded-full 
                            shadow-md flex items-center justify-center">
                                        {getIcon(detail.title, 28)}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-[#f5f6f8] pt-[50px] px-[30px] pb-[35px] text-left">
                                    <h3 className="text-[20px] font-bold text-[#14133b] mb-[15px]">
                                        {detail.title}
                                    </h3>

                                    {detail.content ? (
                                        <p className="text-[#6a7c92] text-[15px] leading-[24px]">
                                            {detail.content}
                                        </p>
                                    ) : (
                                        <ul className="space-y-[8px] text-[#6a7c92] text-[15px] leading-[24px] list-disc list-inside">
                                            {detail.items?.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-20 bg-[#14133b] text-white overflow-hidden relative">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Are you looking to digitally transform your business?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12">
                            We offer technical expertise, global footprints and insights to take your app idea to the next level. Let’s discuss.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block py-4 px-10 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 uppercase tracking-wider"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </section> */}
            <Contact data={data} />
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
