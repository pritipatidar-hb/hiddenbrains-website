import React from 'react';
import { StaticImageData } from 'next/image';

export interface HeroSlide {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
    link: string;
}

export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    iconBgColor: string;
    iconColor: string;
    accentColor: string;
    link: string;
}

export interface Project {
    image: string | StaticImageData;
    title: string;
    category: string;
    link: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    videoUrl?: string;
}

export interface Award {
    image: string | StaticImageData;
    title: string;
    subtitle: string;
}

export interface BlogPost {
    image: string | StaticImageData;
    title: string;
    link: string;
    excerpt: string;
}

export interface SiteConfig {
    name: string;
    phone: string;
    address: string;
    email: string;
}

export interface HomeContent {
    SERVICES_SECTION: {
        title: string;
    };
    PORTFOLIO_SECTION: {
        subtitle: string;
        title: string;
        description: string;
    };
    AWARDS_SECTION: {
        title: string;
        description: string;
        subtitle?: string;
    };
    BLOG_SECTION: {
        subtitle: string;
        title: string;
    };
    CONTACT_SECTION: {
        subtitle: string;
        title: string;
        description: string;
    };
    WHO_WE_ARE: {
        title: string;
        description: string[];
    };
    WHY_CHOOSE_US: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
    INNOVATIVE_THINKERS: {
        subtitle: string;
        title: string;
        description: string;
        stats: Array<{
            count: string;
            symbol: string;
            label: string;
            icon: string;
        }>;
    };
    HOW_WE_WORK: {
        title: string;
        subtitle: string;
        description: string;
        steps: Array<{
            title: string;
            description: string;
            image: string;
            color: string;
        }>;
    };
}
