import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface ProcessItem {
  icon: LucideIcon;
  label: string;
}

export interface ProcessColumn {
  title: string;
  items: ProcessItem[];
}

export interface ProcessData {
  columns: ProcessColumn[];
  finalSteps: ProcessItem[];
}

export interface ProcessDiagramProps {
  data: ProcessData;
  accentColor?: string;
  badgeBgColor?: string;
}
