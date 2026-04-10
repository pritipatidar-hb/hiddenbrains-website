import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Optional ID for the section, useful for navigation/anchors.
     */
    id?: string;
    /**
     * Background class (e.g., 'bg-white', 'bg-gray-50').
     */
    background?: string;
    /**
     * Whether to wrap children in a max-width container.
     * Container uses the project's standard: max-w-screen-xl mx-auto px-4 sm:px-6
     */
    container?: boolean;
    /**
     * Additional classes for the inner container div.
     */
    containerClassName?: string;
    /**
     * Children to be rendered inside the section.
     */
    children: React.ReactNode;
}

/**
 * A reusable Section component that ensures semantic HTML and consistent layouts.
 */
export const Section = ({
    children,
    className,
    id,
    background,
    container = false,
    containerClassName,
    ...props
}: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "relative overflow-hidden", // Base defaults as seen in project
                background,
                className
            )}
            {...props}
        >
            {container ? (
                <div className={cn("relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6", containerClassName)}>
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};
