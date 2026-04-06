import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSectionProps } from '@/types/components/shared/HeroSection';



export function HeroSection({
    banner,
    alt,
    title,
    description,
    breadcrumb,
    ctaText = "Get in Touch",
    ctaHref = "/contact",
    minHeight = "450px",
    className = "",
    darkOverlay = false,
    children,
}: HeroSectionProps) {

    const bgImage = typeof banner === "string" ? banner : banner?.src;
    return (
        <section
            className={`relative flex items-center pt-8 pb-8 overflow-hidden text-white bg-slate-950 ${className}`}
            style={{ minHeight }}
        >
            {/* Background image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 ${darkOverlay ? "bg-black/70" : "bg-black/10"
                        } pointer-events-none`}
                />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-3/5">
                        <h1 className="text-[28px] md:text-[50px] font-semibold md:leading-[60px] mb-[14px] mt-4">
                            {title}
                        </h1>
                        {breadcrumb ? (
                            <nav className="flex items-center text-[14px] md:text-[16px] mb-[25px] font-medium transition-all duration-300">
                                {breadcrumb.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="text-white hover:text-[#f29111] transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <span className="text-white/70">{item.label}</span>
                                        )}
                                        {index < breadcrumb.length - 1 && (
                                            <span className="mx-2 text-white/50">/</span>
                                        )}
                                    </React.Fragment>
                                ))}
                            </nav>
                        ) : (
                            <>
                                {description && (
                                    <p className="text-[16px] md:text-lg text-gray-200 mb-[25px] leading-relaxed font-normal max-w-[590px]">
                                        {description}
                                    </p>
                                )}
                                <div className="flex flex-wrap gap-4">
                                    <Link
                                        href={ctaHref}
                                        className="inline-block px-7 py-3 bg-[#f29111] hover:bg-[#e08b1a] text-white font-medium rounded-sm transition-all text-[15px] uppercase tracking-wider"
                                    >
                                        {ctaText}
                                        {/* <ArrowRight className="w-5 h-5" /> */}
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                    {children && (
                        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 flex lg:justify-end items-center">
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
