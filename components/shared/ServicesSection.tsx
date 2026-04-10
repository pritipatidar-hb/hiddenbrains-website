import React from "react";
import { Section } from "./Section";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service, ServicesSectionProps } from "@/types/components/shared/ServicesSection";
import { cn } from "@/lib/utils";

// Helper to map icons if needed
const IconMap: any = LucideIcons;

export const ServiceCard = ({ 
    icon, 
    image,
    title, 
    description, 
    desc,
    iconBgColor, 
    iconColor, 
    accentColor, 
    hoverBg,
    link,
    variant = 'home'
}: Service & { variant?: 'home' | 'colorful' | 'simple' }) => {
    const LucideIcon = typeof icon === 'string' ? (IconMap as any)[icon] : null;
    const CustomIcon = typeof icon !== 'string' ? icon : null;
    const finalDescription = description || desc;

    if (variant === 'simple') {
        return (
            <div className="p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all border-b-4 hover:border-b-[#f29111] bg-white h-full group">
                {(icon || image) && (
                    <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                        {image ? (
                             <div className="relative w-12 h-12">
                                <Image src={image} alt={title} fill className="object-contain" />
                             </div>
                        ) : (
                            CustomIcon ? CustomIcon : (LucideIcon && <div className="text-4xl"><LucideIcon /></div>)
                        )}
                    </div>
                )}
                <h3 className="text-[22px] font-bold text-[#14133b] mb-4 group-hover:text-[#f29111] transition-colors">{title}</h3>
                <p className="text-[#6a7c92] leading-relaxed text-[15px]">
                    {finalDescription}
                </p>
            </div>
        );
    }

    if (variant === 'colorful') {
        const hoverClass = hoverBg || "hover:bg-gray-50";
        return (
            <div className={cn(
                "bg-[#f8faff] border border-gray-100 p-[35px] transition-colors duration-300 group flex flex-col rounded-sm shadow-sm hover:shadow-md",
                hoverClass
            )}>
                <div className="mb-[15px] w-[57px] h-[57px] relative overflow-hidden flex items-center justify-center">
                    {image ? (
                        <Image 
                            src={typeof image === 'string' ? image : image.src} 
                            alt={title} 
                            fill 
                            className="object-contain transition-transform duration-700 group-hover:scale-105" 
                            unoptimized={typeof image === 'string'}
                        />
                    ) : (
                        CustomIcon ? CustomIcon : (LucideIcon && <div className={cn("text-3xl", iconColor)}><LucideIcon /></div>)
                    )}
                </div>
                <h3 className="text-[22px] font-semibold text-[#14133b] mb-[11px] group-hover:text-[#f29111] transition-colors">
                    {title}
                </h3>
                <p className="text-[#6a7c92] text-[15px] font-normal leading-relaxed mb-8 grow">
                    {finalDescription}
                </p>
                <Link
                    href={link || "#"}
                    className="inline-flex items-center text-[#14133b] font-semibold text-[13px] tracking-widest mt-auto group/btn transition-all duration-300 uppercase"
                >
                    Explore <span className="ml-[14px] w-[35px] h-[2px] bg-[#14133b] group-hover/btn:w-[45px] transition-all duration-300"></span>
                </Link>
            </div>
        );
    }

    // Default 'home' variant
    return (
        <Link
            href={link || "#"}
            className="bg-white p-6 md:pt-[25px] md:px-[25px] md:pb-[25px] min-h-[220px] my-3 md:mt-[15px] md:mb-[15px] rounded-[4px] border border-white shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col items-start text-left relative overflow-hidden hover:-translate-y-2"
        >
            {/* Icon Container - Fades out and height shrinks on hover */}
            <div className={cn(
                "flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0 mb-4 md:mb-[15px] w-14 h-14 md:w-[65px] md:h-[65px] rounded-full",
                iconBgColor || "bg-gray-100"
            )}>
                <div className={cn(
                    "w-7 h-7 md:w-[32px] md:h-[32px] flex items-center justify-center",
                    iconColor
                )}>
                    {image ? (
                        <div className="relative w-full h-full">
                            <Image src={image} alt={title} fill className="object-contain" />
                        </div>
                    ) : (
                        CustomIcon ? CustomIcon : (LucideIcon ? <LucideIcon /> : null)
                    )}
                </div>
            </div>

            <h3 className="text-lg md:text-xl font-semibold text-[#14133b] mb-2 md:mb-[8px] transition-colors duration-300">
                {title}
            </h3>
            <p className="text-[#6a7c92] leading-relaxed mb-4 md:mb-[15px] text-sm md:text-[14px] font-normal font-sans line-clamp-3">
                {finalDescription}
            </p>

            {/* Explore Button - Fades in and slides up on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center gap-2 h-0 group-hover:h-6 overflow-hidden">
                <span className="text-[11px] md:text-[12px] font-bold tracking-wider text-[#14133b]">EXPLORE</span>
                <div className={cn("w-8 h-[2px]", accentColor)} />
            </div>

            {/* Bottom accent bar */}
            <div className={cn(
                "absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500",
                accentColor
            )} />
        </Link>
    );
};

export const ServicesSection = ({ 
    title, 
    description,
    subtitle,
    services, 
    variant = 'home',
    background = "bg-white",
    className,
    container = true,
    columns = 3,
    headerAlign = 'center'
}: ServicesSectionProps) => {
    const gridColsClass = {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    }[columns];

    const Header = () => (
        <div className={cn(
            "mb-10 md:mb-16",
            headerAlign === 'center' ? "text-center" : "text-left",
            headerAlign === 'split' ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center text-left" : ""
        )}>
            <div className={headerAlign === 'split' ? "" : "max-w-4xl mx-auto"}>
                {subtitle && (
                    <h5 className="text-[#f29111] font-bold text-[14px] uppercase tracking-widest mb-4">
                        {subtitle}
                    </h5>
                )}
                <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] leading-tight">
                    {title}
                </h2>
            </div>
            {description && (
                 <div className={cn(
                    "text-[#6a7c92] text-[16px] md:text-[19px] font-normal leading-relaxed",
                    headerAlign === 'center' ? "mx-auto" : ""
                 )}>
                    {description}
                </div>
            )}
        </div>
    );

    return (
        <Section background={background} className={cn("py-[50px] text-[#14133b]", className)} container={container}>
            <Header />
            <div className={cn("grid gap-8", gridColsClass)}>
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} variant={variant} />
                ))}
            </div>
        </Section>
    );
};
