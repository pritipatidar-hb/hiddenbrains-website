import React from 'react';
import Image from 'next/image';
import { PlatformItem, PlatformsSectionProps } from '@/types/components/shared/PlatformsSection';





export const PlatformsSection = ({
    title,
    description,
    image,
    techTitle = "Technology Platforms",
    techDescription = "Compatible with the latest web & mobile platforms",
    techPlatforms,
    integrationsTitle = "Third party integration",
    integrationsDescription = "Seamless integration to deliver better value to customers",
    integrations
}: PlatformsSectionProps) => {
    return (
        <section className="py-[50px] bg-slate-50">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className=" mx-auto text-center mb-[30px]">
                    <h2 className=" text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">{title}</h2>
                    <p className="text-[#6a7c92] text-[16px] md:text-[18px] font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="flex justify-center mb-24">
                    <div className="relative max-w-4xl w-full overflow-hidden shadow-xl border border-slate-200">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="w-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-24">
                    {/* Technology Platforms */}
                    <div>
                        <div className="text-center mb-12">
                            <h2 className="text-[22px] font-semibold text-[#14133b] mb-[18px]">{techTitle}</h2>
                            <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">{techDescription}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {techPlatforms.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex items-center gap-6"
                                >
                                    <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors uppercase">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Third Party Integration - Optional */}
                    {integrations && integrations.length > 0 && (
                        <div>
                            <div className="text-center mb-12">
                                <h2 className="text-[22px] font-semibold text-[#14133b] mb-[18px]">{integrationsTitle}</h2>
                                <p className="text-[#6a7c92] text-[18px] font-normal leading-relaxed">{integrationsDescription}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {integrations.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all group border border-slate-100 flex flex-col items-center text-center gap-6"
                                    >
                                        <div className="w-14 h-14 bg-slate-50 text-orange-600 rounded-xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
