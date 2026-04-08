import React from "react";
import { Button } from "@/components/common/Button";
import { CtaSectionProps } from '@/types/components/shared/CtaSection';



export const CtaSection: React.FC<CtaSectionProps> = ({
    title,
    buttonText = "Get a Quote",
    buttonLink = "/contact",
    className = "",
}) => {
    return (
        <aside className={`py-16 bg-[#14133b] relative overflow-hidden ${className}`}>
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="md:w-2/3">
                    <h3 className="text-[26px] md:text-[29px]  leading-[42px] font-bold !text-[#fff] text-center md:text-left">
                        {title}
                    </h3>
                </div>
                <div className="md:w-1/3 text-center md:text-right">
                    <Button
                        href={buttonLink}
                        variant="primary"
                        className="inline-block py-[10px] px-[30px] !text-white font-medium text-[17px] rounded-[5px] capitalize tracking-widest shadow-lg shadow-orange-500/20"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </aside>
    );
};
