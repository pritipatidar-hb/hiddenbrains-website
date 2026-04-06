import {
    ShoppingBag,
    Settings,
    ArrowRightLeft,
    ShoppingCart,
    Code,
    Wrench,
    Zap,
    Users,
    ShieldCheck,
    FileText,
    Lock,
    RefreshCw,
    Search,
    CreditCard,
    Layout,
    Globe,
    Building2,
    Briefcase
} from "lucide-react";
import React, { ReactNode } from "react";

export interface Proposition {
    title: string;
    description: string;
    icon: ReactNode;
}

export const HIRE_SHOPIFY_HERO = {
    title: "Hire Shopify Developer",
    excerpt: "Hire Certified Shopify Developers to Meet All Your Online Business Market Requirements",
    cta: "Get in Touch"
};

export const HIRE_SHOPIFY_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Web Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Experts Developers" }
];

export const HIRE_SHOPIFY_FEATURED = [
    {
        title: "Shopify Developer Services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hire-shopify-developer.webp",
        icon: <ShoppingBag className="w-10 h-10" />,
        items: [
            "Shopify Plus Development",
            "Ecommerce Platform Migration",
            "Shopify Setup and Development",
            "Shopify eCommerce Cart",
            "Shopify API Integration",
            "Shopify Inventory Modules",
            "Custom Shopify Template",
            "Shopify Website Maintenance & Support",
            "Custom Template Design Services"
        ]
    },
    {
        title: "Shopify Developer Solutions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image2.webp",
        icon: <Globe className="w-10 h-10" />,
        items: [
            "Banking & Financial Services",
            "Oil & Gas",
            "Healthcare",
            "Insurance",
            "Manufacturing",
            "Media",
            "Retail",
            "Telecom",
            "Logistics"
        ]
    },
    {
        title: "Hidden Brains Propositions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img2.webp",
        icon: <Users className="w-10 h-10" />,
        items: [
            "Expert Shopify Web Designer",
            "Flexible Hiring Models",
            "Comprehensive Reports",
            "Security and IP Protection",
            "Strict NDA Terms",
            "Source Code Authorization",
            "24*7 Technical Support",
            "Transparent Procedures",
            "Ready-to-use Infrastructure"
        ]
    }
];

export const HIRE_SHOPIFY_PROCESS = [
    {
        id: 1,
        title: "Inquire",
        description: "Specify your requirement for the hire Shopify app developers for your project."
    },
    {
        id: 2,
        title: "Evaluate",
        description: "Our team evaluates all aspects of projects, conducts feasibility analysis and suggests expert Shopify developer."
    },
    {
        id: 3,
        title: "Select",
        description: "You select and hire best Shopify developer from our team of seasoned Shopify experts for your project."
    },
    {
        id: 4,
        title: "Pay",
        description: "Choose a payment model and make an easy online payment to start working with your app developers."
    },
    {
        id: 5,
        title: "Manage",
        description: "Take complete control of your project, manage your Shopify app developer and get reports about your project."
    }
];

export const HIRE_SHOPIFY_FAQ = [
    {
        question: "Why should I hire dedicated Shopify developers from Hidden Brains UK?",
        answer: "At Hidden Brains UK, we have a talent pool of experienced Shopify developers for hire. The dedicated Shopify developer will work on your project for 8 hours 5 days a week. Our expert developers will provide you the best Shopify solutions for your project. Our experts will make sure about the security of your confidential data."
    },
    {
        question: "What are the other support services do your Shopify developers provide?",
        answer: "Yes, our developers will provide support and technical assistance for your project during and post project delivery. Client’s information and confidential data security is our top priority."
    },
    {
        question: "Will I get control over my Shopify developers’ team?",
        answer: "Yes. You will be able to manage your Shopify developers team. You can assign tasks, ask to solve issues, minor changes and also arrange meetings during work hours. Though our developers provide periodic updates and reports, you can ask for any report directly."
    },
    {
        question: "What payment options do you offer?",
        answer: "We provide various Payment options such as Credit Card, PayPal, Wire Transfer."
    }
];

export const HIRE_SHOPIFY_MODELS = [
    {
        title: "Part-Time",
        features: [
            "4 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ],
        active: false
    },
    {
        title: "Full Time",
        features: [
            "8 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ],
        active: false
    },
    {
        title: "Hourly",
        features: [
            "Hire Developer on Ad-hoc basis (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 25 Hours Commitment"
        ],
        active: true
    }
];
