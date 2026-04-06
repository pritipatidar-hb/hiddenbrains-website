import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { HeroSection } from "@/components/shared/HeroSection";
import { MEDIA_COVERAGE_ITEMS, MEDIA_COVERAGE_HERO } from "@/lib/media-coverage-data";
import mediaBanner from "@/images/media-coverage-Banner.webp";
import { getData } from "@/lib/data";

const Contact = dynamic(() => import('@/components/layout/Contact'));

export const metadata = {
    title: "Media Coverage | Hidden Brains UK",
    description: "Explore Hidden Brains UK's media presence, featured magazines, and latest company recognitions in the IT industry.",
};

export default async function MediaCoveragePage() {
    const data = await getData();

    return (
        <main className="min-h-screen bg-white">
            {/* Page Header */}
            <HeroSection
                banner={mediaBanner}
                alt="Media Coverage Banner"
                title={MEDIA_COVERAGE_HERO.title}
                breadcrumb={MEDIA_COVERAGE_HERO.breadcrumb}
            />

            {/* Media Items Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {MEDIA_COVERAGE_ITEMS.map((item) => (
                            <div key={item.id} className="flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl group h-full">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-gray-50">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow p-8">
                                    <h3 className="text-xl font-bold text-[#14133b] mb-4 line-clamp-2 min-h-[56px] group-hover:text-orange-500 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#6a7c92] text-base leading-relaxed mb-8 flex-grow line-clamp-4">
                                        {item.description}
                                    </p>

                                    <div className="text-center mt-auto">
                                        <Link
                                            href={item.pdfLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 !text-[#14133b] font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 hover:bg-[#f29111] hover:border-[#f29111] hover:text-white"
                                        >
                                            View PDF
                                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <Contact data={data} />
        </main>
    );
}
