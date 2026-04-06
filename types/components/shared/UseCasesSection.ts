import React from 'react';

export interface UseCaseItem {
    title: string;
    description: string;
    image: string;
}

export interface UseCasesSectionProps {
    title: string;
    description: string;
    items: UseCaseItem[];
    bgColor?: string;
}
