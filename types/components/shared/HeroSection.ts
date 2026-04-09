import React from 'react';
import { StaticImageData } from 'next/image';

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface HeroSectionProps {
    /** The imported banner image (StaticImageData) or a URL string */
    banner: StaticImageData | string;
    alt: string;
    title: React.ReactNode;
    description?: string;
    breadcrumb?: BreadcrumbItem[];
    ctaText?: string;
    ctaHref?: string;
    /** Minimum height of the hero section. Defaults to "300px" */
    minHeight?: string;
    /** Extra classes for the outer <section> */
    className?: string;
    /** If true, uses a darker gradient overlay (useful for very light images). Defaults to false. */
    darkOverlay?: boolean;
    children?: React.ReactNode;
}
