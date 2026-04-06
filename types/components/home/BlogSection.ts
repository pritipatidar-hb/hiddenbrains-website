import React from 'react';
import { BlogPost } from '../HomeView';

export interface BlogSectionProps {
    subtitle: string;
    title: string;
    posts: BlogPost[];
}
