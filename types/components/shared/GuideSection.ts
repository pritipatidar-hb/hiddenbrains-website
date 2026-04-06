import React from 'react';

export interface GuideItem {
    id: string;
    label: string;
}

export interface GuideDetail {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface GuideSectionProps {
    items: GuideItem[];
    details: GuideDetail[];
    title?: string;
    description?: React.ReactNode;
}
