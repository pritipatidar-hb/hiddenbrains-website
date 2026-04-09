"use client";

import { Button } from "@/components/common/Button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavDropdownProps } from '@/types/components/layout/NavDropdown';



export default function NavDropdown({
    label,
    children,
    trigger = "hover",
}: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handlers =
        trigger === "hover"
            ? {
                onMouseEnter: () => setIsOpen(true),
                onMouseLeave: () => setIsOpen(false),
            }
            : {
                onClick: () => setIsOpen(!isOpen),
            };

    return (
        <div className="relative" {...handlers}>
            <Button 
                variant="ghost"
                className="flex items-center text-[#14133b] hover:text-orange-500 py-4 h-full text-[15px] font-medium px-0"
            >
                {label}
                <ChevronDown size={12} color="#97a4b3" />
            </Button>

            {isOpen && <div className="absolute top-full left-0">{children}</div>}
        </div>
    );
}
