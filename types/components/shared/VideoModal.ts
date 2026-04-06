import React from 'react';

export interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}
