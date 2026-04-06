"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQItem, FAQSectionProps } from '@/types/components/shared/FAQSection';





export const FAQSection = ({
    title = "FAQs",
    description,
    faqs,
    className = ""
}: FAQSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`py-[50px] bg-white ${className}`}>
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-[18px]">
                    <h2 className="text-[26px] md:text-[36px] font-semibold
 text-[#14133b]">{title}</h2>
                    {description && <p className="text-[#6a7c92] text-[16px] font-normal mt-[18px]  mx-auto">{description}</p>}
                </div>

                <dl className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md"
                        >
                            <dt>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                                >
                                    <span className={`text-base font-semibold transition-colors ${openIndex === index ? "text-[#000000]" : "text-[#14133b] group-hover:text-orange-500"}`}>
                                        {faq.question}
                                    </span>
                                    <div className={` shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-orange-500" : "text-gray-400 group-hover:text-orange-500"}`}>
                                        <ChevronDown size={24} />
                                    </div>
                                </button>
                            </dt>

                            <dd
                                id={`faq-answer-${index}`}
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="text-[14px] font-normal px-8 pb-8 pt-0 text-[#6a7c92] text-lg leading-relaxed border-t border-gray-50 bg-gray-50/50">
                                    {faq.answer}
                                </div>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};
