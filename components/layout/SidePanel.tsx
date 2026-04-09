"use client";

import React from "react";
import { X, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/common/Button";

interface SidePanelProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SidePanel({ isOpen, onClose }: SidePanelProps) {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={onClose}
            ></div>

            {/* Panel */}
            <div
                className={`fixed right-0 top-0 h-full w-[400px] max-w-full bg-white z-[101] shadow-2xl transition-transform duration-500 transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } p-10 overflow-y-auto`}
            >
                <Button
                    variant="ghost"
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-900"
                    aria-label="Close"
                >
                    <X size={24} />
                </Button>

                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#14133b] mb-4 uppercase tracking-tight">
                        Let's make something together
                    </h2>
                    <p className="text-gray-500 mb-10 leading-relaxed">
                        Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days.
                    </p>

                    <div className="space-y-8">
                        <div>
                            <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">Find us</p>
                            <p className="text-[#14133b] font-medium">
                                Unit P Hunting Gate, East Portway, Andover, Hampshire, SP10 3ER, United Kingdom (UK)
                            </p>
                        </div>

                        <div>
                            <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">Email us</p>
                            <a href="mailto:biz@hiddenbrains.com" className="text-[#14133b] font-medium hover:text-orange-500 transition-colors">
                                biz@hiddenbrains.com
                            </a>
                        </div>

                        <div>
                            <p className="text-orange-500 font-bold uppercase text-xs tracking-widest mb-2">Phone support</p>
                            <a href="tel:+44 207 993 2188" className="text-[#14133b] font-medium hover:text-orange-500 transition-colors">
                                +44 207 993 2188
                            </a>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-12">
                        {[
                            { icon: Facebook, href: "https://www.facebook.com/HiddenBrains" },
                            { icon: Twitter, href: "https://twitter.com/HiddenBrains" },
                            { icon: Linkedin, href: "https://www.linkedin.com/company/hiddenbrains-infotech-pvt-ltd/" },
                            { icon: Youtube, href: "https://www.youtube.com/user/HiddenBrains" },
                        ].map((social, i) => (
                            <Link
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

// Helper to avoid Link error if not imported from next/link
function Link({ href, children, ...props }: any) {
    return <a href={href} {...props}>{children}</a>;
}
