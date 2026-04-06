import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/shared/HeroSection";
import { AWARDS_HERO, FEATURED_AWARD, AWARDS_DATA } from "@/lib/awards-data";
import { getData } from "@/lib/data";
import { Footer } from "@/components/layout/Footer";


import bannerImg from "../../images/awards-accolades-Banner.jpg";

export const metadata = {
    title: "Awards & Accolades | Hidden Brains",
    description: "Discover the awards and recognitions earned by Hidden Brains over 22+ years of excellence in the IT industry.",
};

export default async function AwardsAccoladesPage() {
    const data = await getData();

    return (
        <main className=" bg-white">
            <HeroSection
                banner={bannerImg}
                alt="Awards & Accolades Banner"
                title={AWARDS_HERO.title}
                breadcrumb={AWARDS_HERO.breadcrumb}
                description={AWARDS_HERO.excerpt}
                ctaText={AWARDS_HERO.cta}
            />

            {/* Intro Content */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="">
                        <p className="text-[#6a7c92] text-[16px] font-normal  mb-8">
                            Incepted in 2003, Hidden Brains is a successful business icon in the Information Technology industry. Credibility and recognition of Hidden Brains can be gauged from several awards and accolades it has earned in its tenure of <strong>22+</strong> years in the industry. Our proven competency in delivering innovative business solutions and consistent quality standards has not gone unnoticed. Hidden Brains has bagged several prestigious awards for excellent performance in the IT domain and these recognitions strongly motivate us to challenge our own limits.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Award Section */}
            <section className="py-[50px] bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8">
                            <div className="relative aspect-[16/6] rounded-xl overflow-hidden shadow-2xl">
                                <Image
                                    src={FEATURED_AWARD.image}
                                    alt={FEATURED_AWARD.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <h6 className="text-lg font-semibold text-[#14133b] mb-4 leading-tight">
                                {FEATURED_AWARD.title}
                            </h6>
                            <p className="text-[#6a7c92] text-base font-normal leading-relaxed">
                                {FEATURED_AWARD.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {AWARDS_DATA.map((award, index) => (
                            <div key={index} className="group bg-white">

                                {/* Image Area */}
                                <div className="relative bg-[#f3f6f9] ">
                                    <div className="relative w-full h-[300px]">
                                        <Image
                                            src={award.image}
                                            alt={award.title}
                                            fill
                                            className="object-cover w-full h-full  group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Floating Trophy Icon */}
                                    <div className="absolute  
                            w-[70px] h-[70px] bg-white rounded-full 
                            shadow-lg flex items-center justify-center left-[250px] md:left-[314px] bottom-[-38px]">
                                        <svg
                                            viewBox="0 0 64 64"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="w-[35px] h-[35px] text-purple-600"
                                        >
                                            <path d="M16,27c0,4.418,6.059,8,16,8s16-3.582,16-8V1H16V27z" />
                                            <path d="M20,63L44,63" />
                                            <path d="M32,35L32,63" />
                                            <path d="M16,7H7c0,0,0,9,9,9" />
                                            <path d="M48,7h9c0,0,0,9-9,9" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="bg-[#f3f4f6] text-left px-8 pt-12 pb-8">
                                    <h3 className="text-[16px] font-semibold text-[#14133b] mb-[18px] leading-snug">
                                        {award.title}
                                    </h3>

                                    <p className="text-[#6a7c92] text-[15px] leading-[26px]">
                                        {award.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Contact data={data} />
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
