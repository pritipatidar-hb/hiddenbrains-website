import React from 'react';
import { Project } from '../HomeView';

export interface PortfolioSectionProps {
    subtitle: string;
    title: string;
    description: string;
    projects: Project[];
}
