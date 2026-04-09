"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, X, Menu } from "lucide-react";
import { Button } from "@/components/common/Button";
import { MenuItem, MobileMenuProps } from '@/types/components/layout/MobileMenu';





export default function MobileMenu({ data }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

    const toggleSection = (section: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const NavItem = ({ item, level = 0 }: { item: MenuItem; level?: number }) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedSections[item.title];

        return (
            <div className="w-full">
                <div
                    className="flex items-center justify-between py-3 border-b border-gray-100 cursor-pointer"
                    onClick={() => hasChildren && toggleSection(item.title)}
                >
                    <Link
                        href={item.url}
                        className={`text-[15px] font-medium !text-[#14133b] hover:!text-orange-500 flex-grow !opacity-100`}
                        onClick={(e) => {
                            e.stopPropagation();
                            if (hasChildren) {
                                e.preventDefault();
                                toggleSection(item.title);
                            } else {
                                setIsOpen(false);
                            }
                        }}
                    >
                        <span className="!text-[#14133b]">{item.title}</span>
                    </Link>
                    {hasChildren && (
                        <div className="p-2 text-gray-500">
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                    )}
                </div>
                {hasChildren && isExpanded && (
                    <div className="pl-4 bg-slate-50 border-l-2 border-orange-400">
                        {item.children?.map((child, idx) => (
                            <NavItem key={idx} item={child} level={level + 1} />
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="lg:hidden flex items-center">
            {/* Mobile Toggle */}
            <Button
                variant="ghost"
                onClick={() => setIsOpen(true)}
                className="text-gray-800"
                aria-label="Open Menu"
            >
                <Menu size={28} />
            </Button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-right duration-300">
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b">
                            <span className="text-xl font-bold text-orange-500">Menu</span>
                            <Button
                                variant="ghost"
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-800"
                                aria-label="Close Menu"
                            >
                                <X size={28} />
                            </Button>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-grow p-4 space-y-1">
                            {/* Simple Links */}
                            <div className="py-2">
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={() => toggleSection('company')}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 text-[#14133b] font-medium"
                                >
                                    <span>Company</span>
                                    {expandedSections['company'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </Button>
                                {expandedSections['company'] && (
                                    <div className="pl-4 bg-slate-50 border-l-2 border-orange-500">
                                        {[
                                            { name: "Company Profile", href: "/company-profile" },
                                            { name: "Management Team", href: "/management-team" },
                                            { name: "Media Coverage", href: "/media-coverage" },
                                            { name: "Awards & Accolades", href: "/awards-accolades" },
                                            { name: "Our Working Infrastructure", href: "/working-infrastructure" },
                                            { name: "Contact Us", href: "/contact" },
                                        ].map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block py-3 border-b border-gray-100 text-[15px] font-medium !text-[#14133b] hover:!text-orange-500 !opacity-100"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="!text-[#14133b]">{item.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Services Section */}
                            <div className="py-2">
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={() => toggleSection('services')}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 text-[#14133b] font-medium"
                                >
                                    <span>Services</span>
                                    {expandedSections['services'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </Button>
                                {expandedSections['services'] && (
                                    <div className="pl-4 bg-slate-50 border-l-2 border-orange-500">
                                        {data.SERVICES_MENU.map((item, idx) => (
                                            <NavItem key={idx} item={item} />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Solutions Section */}
                            <div className="py-2">
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={() => toggleSection('solutions')}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 text-[#14133b] font-medium"
                                >
                                    <span>Solutions</span>
                                    {expandedSections['solutions'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </Button>
                                {expandedSections['solutions'] && (
                                    <div className="pl-4 bg-slate-50 border-l-2 border-orange-500">
                                        {data.SOLUTIONS_MENU.map((item, idx) => (
                                            <NavItem key={idx} item={item} />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Industries Section */}
                            <div className="py-2">
                                <Button
                                    variant="ghost"
                                    fullWidth
                                    onClick={() => toggleSection('industries')}
                                    className="flex items-center justify-between py-3 border-b border-gray-100 text-[#14133b] font-medium"
                                >
                                    <span>Industries</span>
                                    {expandedSections['industries'] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </Button>
                                {expandedSections['industries'] && (
                                    <div className="pl-4 bg-slate-50 border-l-2 border-orange-500">
                                        {data.INDUSTRIES_MENU.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                href={item.url}
                                                className="block py-3 border-b border-gray-100 text-[15px] font-medium !text-[#14133b] hover:!text-orange-500 !opacity-100"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="!text-[#14133b]">{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Additional Links */}
                            <Link href="/our-clients" className="block py-3 border-b border-gray-100 !text-[#14133b] font-medium !opacity-100" onClick={() => setIsOpen(false)}>
                                <span className="!text-[#14133b]">Our Clients</span>
                            </Link>
                            <Link href="/our-works" className="block py-3 border-b border-gray-100 !text-[#14133b] font-medium !opacity-100" onClick={() => setIsOpen(false)}>
                                <span className="!text-[#14133b]">Our Work</span>
                            </Link>
                            <Link href="/blog" className="block py-3 border-b border-gray-100 !text-[#14133b] font-medium !opacity-100" onClick={() => setIsOpen(false)}>
                                <span className="!text-[#14133b]">Blog</span>
                            </Link>
                        </div>

                        {/* Footer Action */}
                        <div className="p-4 bg-gray-50">
                             <Button
                                href="/contact"
                                variant="primary"
                                fullWidth
                                className="block text-white py-4 rounded-lg text-center font-bold uppercase tracking-wider"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
