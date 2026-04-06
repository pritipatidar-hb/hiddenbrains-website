import React from 'react';

export interface MenuItem {
    title: string;
    url: string;
    children?: MenuItem[];
}

export interface MobileMenuProps {
    data: {
        SERVICES_MENU: MenuItem[];
        SOLUTIONS_MENU: MenuItem[];
        INDUSTRIES_MENU: MenuItem[];
    };
}
