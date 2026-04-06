import {
    Cpu,
    Smartphone,
    Database,
    ShieldCheck,
    Layers,
    Zap,
    Activity,
    Workflow,
    Boxes,
    BarChart3,
    Microscope,
    Users
} from "lucide-react";
import React from "react";

export const ENERGY_HERO = {
    title: "Energy Industry Solutions",
    description: "Creating Future Value Through Robust Technologies for The Oil & Gas Industry",
    buttonText: "Get in Touch",
    buttonLink: "/contact"
};

export const ENERGY_INTRODUCTION = {
    title: "Oil & Gas Technology Solutions",
    content: [
        "Hidden Brains provides high-performance technology solutions to oil and gas companies, distributors, and retailers. Our technology solutions for oil and gas provide real-time visibility into inventory, logistics, surveillance, tracking, reducing costs of exploration, as well as reducing administrative overhead costs. In addition, we leverage web and mobile technologies to help oil and gas companies deliver information to their workforces, irrespective of the location.",
        "Whether you are looking to support upstream, midstream, or downstream operations, we can help you improve every aspect of your business. Be it health and safety, environment or enterprise asset management, we at Hidden Brains use the latest web and mobile technology to create value."
    ]
};

export const ENERGY_SERVICES = {
    title: "Hidden Brains provide smart energy monitoring solutions",
    subtitle: "WHAT WE DO",
    description: "Hidden Brains provide energy solutions empowered with technology to boost the performance and support upstream, midstream, as well as downstream operations.",
    items: [
        {
            icon: <Smartphone className="w-10 h-10" />,
            title: "Mobile and Web Applications",
            content: "We develop customized mobile and web applications to streamline operations and enhance workforce productivity in the energy sector."
        },
        {
            icon: <Cpu className="w-10 h-10" />,
            title: "On Site Applications",
            content: "Specialized on-site applications designed to handle field data and operational management in harsh industrial environments."
        },
        {
            icon: <Boxes className="w-10 h-10" />,
            title: "Inventory Management",
            content: "Real-time visibility into inventory tracking and asset management for efficient supply chain operations."
        },
        {
            icon: <Activity className="w-10 h-10" />,
            title: "Security and Monitoring Systems",
            content: "Advanced surveillance and monitoring systems to ensure safety and security of energy infrastructure."
        }
    ]
};

export const ENERGY_FEATURES = {
    title: "Comprehensive Oil & Gas Technology Solutions",
    description: "We at Hidden Brains act as the catalyst who capitalizes web and mobile technologies to transform future growth and profitability.",
    lists: [
        [
            "Asset & Custody Management",
            "Materials Management, Usage, Maintenance and Tracking",
            "Field Data Management with Offline Capabilities",
            "Inspections & Auditing"
        ],
        [
            "Scheduling Systems",
            "Integrations with Industry Standard Systems (SAP, ERP and more)",
            "Communication with Hardware Installations",
            "Finance & Accounting"
        ],
        [
            "Logistics and Movement Tracking",
            "Workforce Competency and Productivity Tracking",
            "Reporting Dashboard & Analytics",
            "Integrating Surveillance Systems"
        ]
    ]
};

export const ENERGY_SOLUTIONS = {
    title: "Secure & Robust Energy Industry Solutions",
    items: [
        {
            title: "Upstream",
            content: "Maintain offshore and onshore assets, such as work order management, maintenance management, assets and inventory management with technology solutions.",
            image: "upstream"
        },
        {
            title: "Midstream",
            content: "Manage entire data from field, adjust inventory demands, logistics and improve compliance. Effectively manage inventory & enhance procurement process with mobility.",
            image: "midstream"
        },
        {
            title: "Downstream",
            content: "High-Performance applications to ensure data accuracy and workers safety and help companies collect data to enable decision making and response time to emergencies.",
            image: "downstream"
        },
        {
            title: "Online Collaboration Tools",
            content: "Our domain expertise allows us to develop tools for collaboration between agents and customers such as option to upload documents, client’s signature and more.",
            image: "collaboration"
        }
    ]
};

export const ENERGY_CTA = {
    title: "Reduce Administrative Costs with our Energy Management Software",
    subtitle: "Our Work",
    description: "We build custom energy efficiency software that provides real-time access and visibility of operations through easily accessible dashboard."
};

export const ENERGY_FAQ = [
    {
        question: "How can technology improve oil and gas operations?",
        answer: "Technology improves oil and gas operations by providing real-time visibility into inventory, logistics, and field data. Advanced monitoring systems enhance safety, while custom software solutions reduce administrative overhead and operational costs."
    },
    {
        question: "Does Hidden Brains provide solutions for upstream operations?",
        answer: "Yes, we provide comprehensive solutions for upstream operations including work order management, asset maintenance, and inventory management for both offshore and onshore assets."
    },
    {
        question: "Can your solutions work in areas with poor connectivity?",
        answer: "Yes, we develop field data management solutions with offline capabilities, ensuring that your workforce can capture and process information even in remote locations without internet access."
    },
    {
        question: "How do you handle security in energy solutions?",
        answer: "We integrate advanced surveillance and monitoring systems into our energy solutions, along with robust data protection protocols and compliance with industry standards like SAP and ERP systems."
    }
];
