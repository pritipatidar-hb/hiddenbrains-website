"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../images/HB.logo.png";
import greatPlace from "../../images/great-place-to-work.webp";
import dynamic from "next/dynamic";
const CascadingMenu = dynamic(() => import("./CascadingMenu"));
const NavDropdown = dynamic(() => import("./NavDropdown"));
const MobileMenu = dynamic(() => import("./MobileMenu"));
import { Button } from "@/components/common/Button";
const SidePanel = dynamic(() => import("./SidePanel"));
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { MenuItem } from '@/types/components/layout/Navbar';

export default function Navbar({ data }: {
  data: {
    SERVICES_MENU: MenuItem[];
    SOLUTIONS_MENU: MenuItem[];
    INDUSTRIES_MENU: MenuItem[];
  }
}) {
  const { SERVICES_MENU, SOLUTIONS_MENU, INDUSTRIES_MENU } = data;
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 w-full z-50">
        <nav className="bg-white border-b border-gray-100 h-16 shadow-xs" aria-label="Main navigation">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full px-4 lg:px-8">
            {/* Left Section - Logo */}
            <div className="flex items-center h-full">
              <Link href="/" className="flex items-center border-r border-gray-100 pr-4 h-16">
                <Image
                  src={logo}
                  alt="Hidden Brains"
                  width={160}
                  height={50}
                  priority
                  className="object-contain"
                />
              </Link>

              {/* UK Flag and GPTW Badge */}
              <div className="hidden sm:flex items-center h-16 px-4 space-x-4">
                <Image
                  src={greatPlace}
                  alt="Great Place To Work"
                  width={70}
                  height={116}
                  className="w-16 md:w-[100%] max-w-[70px] h-[58px] object-contain shadow-lg"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-6 text-[15px] font-semibold text-[#333] h-full">
              {/* Company Dropdown */}
              <li className="h-full flex items-center group relative">
                <NavDropdown label="Company" trigger="hover">
                  <div className="mt-0 w-[260px] bg-white shadow-xl border-t-2 border-orange-500 py-1 rounded-lg">
                    {[
                      { name: "Company Profile", href: "/company-profile" },
                      { name: "Management Team", href: "/management-team" },
                      {
                        name: "Media Coverage",
                        href: "/media-coverage",
                        hasSubmenu: true,
                        children: [{ name: "Testimonial", href: "/testimonials" }]
                      },
                      { name: "Awards & Accolades", href: "/awards-accolades" },
                      { name: "Our Working Infrastructure", href: "/working-infrastructure" },
                      { name: "Contact Us", href: "/contact" },
                    ].map((item) => (
                      <div key={item.name} className="relative group/sub">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between px-5 py-2 text-[13px] font-medium text-[#14133b] hover:text-orange-500 transition-colors"
                        >
                          <span>
                            {item.name}
                          </span>
                          {item.hasSubmenu && (
                            <ChevronRight size={14} className="text-gray-300" />
                          )}
                        </Link>
                        {item.children && (
                          <div className="absolute left-full top-[-10px] pl-2 hidden group-hover/sub:block">
                            <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-4 px-6 rounded-xl whitespace-normal">
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  className="text-[15px] font-medium text-[#14133b] hover:text-orange-500 transition-colors"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </NavDropdown>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li>

              <li className="h-full flex items-center group relative">
                <NavDropdown label="Services">
                  <div className="mt-0">
                    <CascadingMenu items={SERVICES_MENU} />
                  </div>
                </NavDropdown>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li>

              <li className="h-full flex items-center group relative">
                <NavDropdown label="Solutions">
                  <div className="mt-0">
                    <CascadingMenu items={SOLUTIONS_MENU} />
                  </div>
                </NavDropdown>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li>

              <li className="h-full flex items-center group relative">
                <NavDropdown label="Industries">
                  <div className="absolute left-1/2 -translate-x-1/2 
                    w-[370px] 
                    bg-white 
                    rounded-lg 
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)] 
                    border-t-[3px] border-orange-500 
                    p-10">

                    <div className="grid grid-cols-2 gap-y-6 relative">

                      {/* Vertical Divider */}
                      <div className="absolute left-1/2 ml-[-15px] top-0 h-full w-px bg-gray-200"></div>

                      {INDUSTRIES_MENU.map((item, index) => (
                        <Link
                          key={index}
                          href={item.url}
                          className="text-[13px] 
                       font-medium 
                       text-[#1f2b4d] 
                       hover:text-orange-500 
                       transition-colors 
                       duration-300"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavDropdown>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li >

              <li className="h-full flex items-center group relative">
                <Link href="/our-clients" className="py-4 hover:text-orange-500 transition-colors text-[15px] font-medium text-[#14133b]">
                  Our Clients
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li>

              <li className="h-full flex items-center group relative">
                <Link href="/our-works" className="py-4 hover:text-orange-500 transition-colors text-[15px] font-medium text-[#14133b]">
                  Our Work
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li>

              <li className="h-full flex items-center group relative">
                <Link href="/blog" className="py-4 hover:text-orange-500 transition-colors text-[15px] font-medium text-[#14133b]">
                  Blog
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
              </li>
            </ul >

            {/* Right Section */}
            <div className="hidden lg:flex items-center h-full mr-0 md:mr-[-33px]">
              <Button
                variant="ghost"
                onClick={() => setIsSidePanelOpen(true)}
                className="text-gray-800 px-6 h-full flex items-center hover:bg-gray-50 transition-colors"
                aria-label="Open navigation menu"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </Button>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="!text-white h-full flex items-center font-medium transition-colors uppercase"
              >
                Contact Us
              </Button>
            </div >

            <MobileMenu data={data} />
          </div >
        </nav >
      </header>
      <SidePanel isOpen={isSidePanelOpen} onClose={() => setIsSidePanelOpen(false)} />
    </>
  );
}
