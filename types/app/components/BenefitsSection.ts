import React from 'react';

export interface BenefitItem {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

export interface BenefitsSectionProps {
    title: string;
    subtitle?: string;
    description: string;
    items: BenefitItem[];
}
