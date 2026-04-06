import React from 'react';

export interface PlatformItem {
    title: string;
    icon: React.ReactNode;
}

export interface PlatformsSectionProps {
    title: string;
    description: string;
    image: {
        src: string;
        width: number;
        height: number;
        alt: string;
    };
    techTitle?: string;
    techDescription?: string;
    techPlatforms: PlatformItem[];
    integrationsTitle?: string;
    integrationsDescription?: string;
    integrations?: PlatformItem[];
}
