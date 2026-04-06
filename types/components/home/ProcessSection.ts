import React from 'react';

export interface Step {
    image: string;
    title: string;
    description: string;
}

export interface ProcessSectionProps {
    title: string;
    subtitle: string;
    description: string;
    steps: Step[];
}
