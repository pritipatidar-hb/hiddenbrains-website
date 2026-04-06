import React from 'react';

export interface Stat {
    icon: string;
    count: string;
    symbol: string;
    label: string;
}

export interface StatsSectionProps {
    subtitle?: string;
    title: string;
    description: string;
    stats: Stat[];
    isLight?: boolean;
}
