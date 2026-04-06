import React from 'react';

export interface Breadcrumb {
    label: string;
    href?: string;
}

export interface Counter {
    value: string;
    symbol: string;
    label: string;
}

export interface IntroductionSectionProps {
    breadcrumbs: Breadcrumb[];
    title: string;
    counters?: Counter[];
    listItems?: string[];
    content: React.ReactNode;
    bgColor?: string;
    showHomeIcon?: boolean;
}
