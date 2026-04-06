import {
    Code,
    Monitor,
    Smartphone,
    Gamepad,
    Layers,
    Layout,
    Globe,
    Users,
    Clock,
    ShieldCheck,
    FileText,
    Settings,
    Headphones,
    TrendingUp,
    Palette,
    PenTool,
    Box
} from "lucide-react";
import React from "react";

export const HIRE_WEB_DESIGNERS_HERO = {
    title: "Hire Web Designers UK",
    excerpt: "Hire Dedicated Web Designers UK, Who Add a Value and Touch of Uniqueness to Your Solutions",
    cta: "Get in Touch"
};

export const HIRE_WEB_DESIGNERS_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "%", label: "On time delivery" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Web Experts" }
];

export const HIRE_WEB_DESIGNERS_FEATURED = [
    {
        title: "Web Designer Services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hire-web-designer.webp",
        icon: <Palette className="w-8 h-8" />,
        items: [
            "UI/UX Design",
            "Website Design & Applications",
            "Responsive Web Design",
            "Illustration",
            "Graphic Design",
            "Online Branding Solutions",
            "Web Portal Design",
            "Template Design",
            "Corporate Web Design"
        ]
    },
    {
        title: "Web Designer Solutions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image4.webp",
        icon: <Box className="w-8 h-8" />,
        items: [
            "Banking",
            "Education",
            "Retail",
            "Energy & Utilities",
            "Healthcare",
            "Insurance",
            "Entertainment & Media",
            "Technology",
            "Logistics"
        ]
    },
    {
        title: "Hidden Brains Propositions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img4.webp",
        icon: <PenTool className="w-8 h-8" />,
        items: [
            "Best-in-class Development Practices",
            "Quality-centric Processes",
            "Cost-effective Hiring Models",
            "24*7 Support",
            "Seamless Communication",
            "Highly Skilled Web Designers",
            "Expert Consulting",
            "Confidentiality Guaranteed",
            "Quick Time-to-market"
        ]
    }
];

export const HIRE_WEB_DESIGNERS_PROCESS = [
    {
        step: "1",
        title: "Inquire",
        content: "Talk to us about your project requirements and we will suggest you the best web designers."
    },
    {
        step: "2",
        title: "Evaluate",
        content: "Our web designer in the UK analyzes web designing project details, checks feasibility & recommends expert website designers."
    },
    {
        step: "3",
        title: "Select",
        content: "Choose and hire UI Designer for RWD website from our team of dedicated and talented resources."
    },
    {
        step: "4",
        title: "Pay",
        content: "Select from our different flexible engagement models and make quick online payment to get started with project."
    },
    {
        step: "5",
        title: "Manage",
        content: "Monitor your web designer/team and get regular project updates through comprehensive reports."
    }
];

export const HIRE_WEB_DESIGNERS_MODELS = [
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

export const HIRE_WEB_DESIGNERS_FAQ = [
    {
        question: "Which web design services Hidden Brains UK provides?",
        answer: "At Hidden Brains UK, we have years of experienced and creative designers. Our talent pool of designers provide following services: Custom Website Design, Responsive web designs, Unique and Creative Logo Designs, iOS & Android App Designs, Email Template Designs, UI/UX Designs and many more..."
    },
    {
        question: "Which technology will be proper for my web design project?",
        answer: "Once our agreement is done for your web design project, we will take all responsibilities and focus on your project. Our expert team will analyze all the aspects of your project and will provide options for proper technology for your web design project."
    },
    {
        question: "What will be the cost to hire a website designer?",
        answer: "Exact cost to hire a website designer varies depending on different firms and project requirements: Complexity of project, Number of screens requirement, UI/UX Needed, Third party purchasing needs."
    },
    {
        question: "Which hiring models does Hidden Brains UK provide?",
        answer: "We offer you the following hiring models for your project requirements: On an Hourly Basis, Part Time Basis, Full Time Basis."
    },
    {
        question: "Why should I hire a website designer from Hidden Brains UK?",
        answer: "Hidden Brains UK has been a leading and well established IT company since 2003. We have a pool of talented and creative website designers for hire. You will get professionals for your project and will get transparency of project status."
    }
];
