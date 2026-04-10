import React from 'react';
import { StaticImageData } from 'next/image';

export interface Service {
    id?: string;
    icon?: string | React.ReactNode;
    image?: string | StaticImageData;
    title: string;
    description?: string;
    desc?: string; // Supporting both description and desc naming
    iconBgColor?: string;
    iconColor?: string;
    accentColor?: string;
    hoverBg?: string; // For 'colorful' variant
    link?: string;
    color?: string; // For mapping in pages
}

export interface ServicesSectionProps {
    title: string;
    description?: string | React.ReactNode;
    subtitle?: string; // Extra header text if needed
    services: Service[];
    variant?: 'home' | 'colorful' | 'simple';
    background?: string;
    className?: string;
    container?: boolean;
    columns?: 1 | 2 | 3 | 4; // Support different grid layouts
    headerAlign?: 'center' | 'left' | 'split'; // Support two-column headers
}
