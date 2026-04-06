import React from 'react';
import { Award } from '../HomeView';

export interface AwardsSectionProps {
    subtitle?: string;
    title: string;
    description: string;
    awards: Award[];
}
