"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types/components/HomeView";
import TitleBanner from '@/images/bg-titlebar.jpg';

interface PortfolioViewProps {
    title: string;
    description: string;
    projects: Project[];
}

const FILTERS = [
    { label: "All", filter: "*" },
    { label: "AI & ML", filter: "ai-ml" },
    { label: "Automobile", filter: "automobile" },
    { label: "Container Shipping", filter: "container-shipping" },
    { label: "Corporate", filter: "corporate" },
    { label: "eCommerce", filter: "ecommerce" },
    { label: "EdTech", filter: "edtech" },
    { label: "Education", filter: "education" },
    { label: "eLearning", filter: "elearning" },
    { label: "Entertainment", filter: "entertainment" },
    { label: "Event Management", filter: "event-management" },
    { label: "FinTech", filter: "fintech" },
    { label: "Game", filter: "game" },
    { label: "Lifestyle", filter: "lifestyle" },
    { label: "Manufacturing", filter: "manufacturing" },
    { label: "Real Estate", filter: "real-estate" },
    { label: "Restaurant", filter: "restaurant" },
    { label: "SaaS", filter: "saas" },
    { label: "Travel & Tourism", filter: "travel-tourism" },
];

export default function PortfolioView({ title, description, projects }: PortfolioViewProps) {
    const [activeFilter, setActiveFilter] = useState("*");

    const normalizeCategory = (cat: string) => {
        return cat.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');
    };

    const filteredProjects =
        activeFilter === "*"
            ? projects
            : projects.filter((p) => normalizeCategory(p.category) === activeFilter || p.category === activeFilter);

    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}

            <div className="page-header pagetitle-v2">
                <div
                    className="hero parallax wrapper mo-title-bar-wrap py-24 text-white bg-cover bg-center bg-no-repeat relative overflow-hidden"
                    style={{ backgroundImage: `url(${TitleBanner.src})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="cd-intro mo-title-bar max-w-7xl mx-auto md:ml-[100px]">
                            <h1 className="text-[40px] md:text-[48px] font-bold text-white mb-2 ml-[0px]">Our Work</h1>
                            <div className="mo-path text-[14px] font-medium text-white/90">
                                <div className="mo-path-inner flex items-center">
                                    <Link href="/" className="hover:text-orange-500 transition-colors font-bold">Home</Link>
                                    <span className="mx-2">/</span>
                                    <span className="current opacity-80"> Our Work</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Filter Section */}
            <div className="container mx-auto px-6 py-10 max-w-7xl">
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.filter}
                            onClick={() => setActiveFilter(filter.filter)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeFilter === filter.filter
                                ? "bg-[#14133b] text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Description Section */}
                {description && (
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>
                )}

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={`${project.title}-${idx}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative overflow-hidden rounded-xl bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#14133b]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="text-[#f29111] text-xs font-bold uppercase tracking-widest mb-1">
                                                {project.category}
                                            </p>
                                            <h5 className="text-white text-xl font-bold mb-4">
                                                {project.title}
                                            </h5>
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="inline-flex items-center text-white text-sm font-semibold border-b border-white/50 hover:border-[#f29111] hover:text-[#f29111] transition-all pb-1"
                                            >
                                                View Case Study
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
