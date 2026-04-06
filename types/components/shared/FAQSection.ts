import React from 'react';

export interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

export interface FAQSectionProps {
    title?: string;
    description?: string;
    faqs: FAQItem[];
    className?: string;
}
