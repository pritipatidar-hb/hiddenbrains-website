import React from 'react';

export interface NavDropdownProps {
    label: string;
    children: React.ReactNode;
    trigger?: "hover" | "click";
}
