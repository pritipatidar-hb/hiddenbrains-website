import React from "react";
import {
    Smartphone,
    Code2,
    Settings,
    Globe,
    ShieldCheck,
    Database,
    Layout,
    Users,
    Clock,
    Zap,
    Activity,
    Video,
    ShoppingCart,
    Pointer,
    Share2,
    MonitorPlay,
    Ship,
    Umbrella,
    Plane,
    Building2,
    Landmark,
    Store,
    LayoutDashboard,
    CreditCard,
    Cpu,
    CheckCircle
} from "lucide-react";

export const IONIC_HERO = {
    title: "Ionic App Development Services",
    excerpt: "Looking for best Ionic app development services? End your search at Hidden Brains UK, a Leading IT company that offers robust and secure Ionic app development services.",
    cta: "Get in Touch"
};

export const IONIC_HIGHLIGHTS = [
    "Interactive Cross Platform Apps",
    "Transparency of Deliverables",
    "Broad Technical Expertise",
    "Domain Expertise",
    "Fully Transparent Working Process",
    "Result-Driven Approach",
    "Innovation and Agility",
    "Complete Mobile Solutions",
    "Budget-Friendly Solutions"
];

export const IONIC_SERVICES = [
    {
        title: "Custom Ionic Framework Development",
        desc: "Tailored Ionic solutions designed to meet specific business requirements with high scalability and performance.",
        icon: <Code2 size={32} />
    },
    {
        title: "Ionic Mobile App Development",
        desc: "Building high-quality, feature-rich hybrid mobile applications that provide a native-like experience.",
        icon: <Smartphone size={32} />
    },
    {
        title: "Ionic Support & Maintenance",
        desc: "Comprehensive support and maintenance services to ensure your Ionic applications stay updated and bug-free.",
        icon: <Settings size={32} />
    },
    {
        title: "Ionic Web App Development",
        desc: "Building progressive web applications (PWAs) using Ionic that work seamlessly across all browsers.",
        icon: <Globe size={32} />
    },
    {
        title: "Ionic QA and Testing",
        desc: "Rigorous quality assurance and testing to deliver robust, high-performance, and secure applications.",
        icon: <CheckCircle size={32} />
    },
    {
        title: "Ionic Enterprise App Development",
        desc: "Scalable enterprise-grade Ionic applications designed for complex business processes and data security.",
        icon: <LayoutDashboard size={32} />
    }
];

export const IONIC_INDUSTRIES_GRID = [
    { name: "Healthcare", color: "bg-[#f29111]", icon: <Activity className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Education", color: "bg-[#80519a]", icon: <MonitorPlay className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Social", color: "bg-[#f29111]", icon: <Share2 className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Media", color: "bg-[#0bb28a]", icon: <Video className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Logistics", color: "bg-[#14133b]", icon: <Ship className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Retail", color: "bg-[#ed1862]", icon: <Store className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Insurance", color: "bg-[#f29111]", icon: <Umbrella className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Banking", color: "bg-[#0bb28a]", icon: <Landmark className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Online Booking", color: "bg-[#14133b]", icon: <Pointer className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Travel", color: "bg-[#ed1862]", icon: <Plane className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Real Estate", color: "bg-[#f29111]", icon: <Building2 className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "eCommerce", color: "bg-[#80519a]", icon: <ShoppingCart className="text-white" size={24} strokeWidth={1.5} /> }
];

export const IONIC_FAQS = [
    {
        question: "Which types of Ionic app will you provide?",
        answer: `
            <div>
                <p class="mb-4">Hidden Brains UK is a leading provider of Ionic app development services. Some of our standard services are like below:</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Enterprise App</li>
                    <li>Social Media App</li>
                    <li>mCommerce App</li>
                    <li>Multi-Language Supported App</li>
                    <li>Real-time or streaming apps</li>
                </ul>
            </div>
        `
    },
    {
        question: "What is the Ionic framework?",
        answer: "Ionic framework is an open-source SDK (Software Development Kit) for development of hybrid mobile applications."
    },
    {
        question: "What technologies does Ionic app development services use?",
        answer: "Ionic framework uses HTML, CSS, Javascript and AngularJS technologies."
    },
    {
        question: "Are the functionalities of Ionic framework limited to Android and iOS?",
        answer: "No, Ionic framework also caters to Windows, BlackBerry and many other mobile platforms."
    },
    {
        question: "What is the cost to build an Ionic app?",
        answer: "The cost to build an Ionic app actually depends on various factors such as type of app, app idea, and scope of app development services you select."
    }
];
