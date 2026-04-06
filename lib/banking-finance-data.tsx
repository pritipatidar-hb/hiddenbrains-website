import {
    ClipboardList,
    Boxes,
    ShieldCheck,
    Timer,
    Database,
    CreditCard,
    ScanLine,
    TrendingUp,
    Cpu,
    Zap,
    BarChart3,
    Smartphone
} from "lucide-react";
import React from "react";

export const BANKING_HERO = {
    title: "Banking & Finance IT Solutions",
    description: "Fast Track to The Future with IT Solutions for Banking & Finance",
    buttonText: "Get in Touch",
    buttonLink: "/contact"
};

export const BANKING_INTRODUCTION = {
    title: "Secure and Scalable IT Solutions for Banks",
    content: [
        "Hidden Brains provides technology solutions for banking and financial sectors to enhance customer relationships, improve efficiency, and seize new opportunities to stay ahead in the competitive business world. We ensure that our clients are always a step forward with modernised web and mobile applications to create omnichannel products and improve services through a successful digital transformation.",
        "With our web and mobile app development services, financial institutions and banks can deliver a highly personalised experience to end-users. We offer reliable and secure banking software solutions for seamless integration of core banking and financial functions. Our team is committed to providing comprehensive technology solutions to focus on core banking & financial competencies."
    ]
};

export const BANKING_SERVICES = {
    title: "Hidden Brains opt the latest technological development process to streamline the Fintech process and improve customer relationships.",
    subtitle: "WHAT WE DO",
    description: "Our team is experienced in developing innovative and secure banking and finance solutions that allow you to organise your data in an appropriate manner. Along with this, offer seamless banking experience to your customers",
    items: [
        {
            icon: <ClipboardList className="w-10 h-10" />,
            title: "Accounts Management",
            content: "Streamlined processes for handling accounts, transactions, and reporting with high precision and security."
        },
        {
            icon: <Boxes className="w-10 h-10" />,
            title: "Inventory Management",
            content: "Efficient tracking of bank assets, physical resources, and collateral inventory for financial institutions."
        },
        {
            icon: <ShieldCheck className="w-10 h-10" />,
            title: "Asset Management Solutions",
            content: "Advanced tools for managing client portfolios, investment assets, and risk assessment for wealth management."
        },
        {
            icon: <Timer className="w-10 h-10" />,
            title: "Loan Management Solutions",
            content: "End-to-end processing of loans from application to disbursement, including automated risk profiling and credit scoring."
        }
    ]
};

export const BANKING_SOFTWARE_SOLUTIONS = {
    title: "Banking Software Solutions",
    description: "Our team specialises in banking & financial app development, simplifying an often complex and daunting process. Right from strategy to making your financial app a commercially viable proposition, we are your partners from start to finish.",
    lists: [
        [
            "Accounting & Expense Tracking",
            "OCR Scanner for Auto Reading Receipt",
            "Integration with Banks and Existing Subsystems"
        ],
        [
            "Connecting Traders and Investors with Each Other",
            "Digital Wallet and Credits Transfer to Friends"
        ],
        [
            "Financial Planning and Projection Systems",
            "Stock API Integrations"
        ]
    ]
};

export const BANKING_SOLUTIONS = {
    title: "Banking & Financial Solutions",
    items: [
        {
            title: "Customer Payment",
            content: "Technology solutions to provide customers with an easy and hassle-free experience while making payment and management simple.",
            image: "payment",
            icon: <CreditCard className="w-8 h-8" />
        },
        {
            title: "Banking Modernisation",
            content: "Modernise banking operation to meet rapidly changing behaviours of your customers and technology trends of the banking industry.",
            image: "modernisation",
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: "Real-Time Insights",
            content: "Get real-time insights regarding the stock from the respective market by integrating API from different providers for reliable information.",
            image: "insights",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "Optical Character Recognition",
            content: "Digitising the physical bills by reading characters of receipts such as invoices, purchase orders and ledgers to organise for reporting and improve efficiency.",
            image: "ocr",
            icon: <ScanLine className="w-8 h-8" />
        }
    ]
};

export const BANKING_CTA = {
    title: "High-Tech & Secured IT Solutions for Banks",
    subtitle: "Our Work",
    description: "We help businesses take a leap into a completely secured world with our IT solutions for banks."
};

export const BANKING_FAQ = [
    {
        question: "What types of banking software solutions do you provide?",
        answer: "We provide a wide range of solutions including mobile banking apps, core banking integration, loan management systems, digital wallets, and account management software tailored for banks and Fintech companies."
    },
    {
        question: "How do you ensure security in financial applications?",
        answer: "We employ multi-layer security protocols including biometrics, high-level encryption (AES-256), multi-factor authentication (MFA), and secure API gateways to ensure that every financial transaction and user data point is protected."
    },
    {
        question: "Can you integrate with existing banking subsystems?",
        answer: "Yes, our team is expert at legacy modernization and seamless integration. We can connect your new applications with existing ERPs, SAP modules, and core banking systems through robust API frameworks."
    },
    {
        question: "Do you offer OCR solutions for document processing in finance?",
        answer: "Absolutely. We specialize in Optical Character Recognition (OCR) technology that can digitize physical bills, invoices, ledgers, and purchase orders, significantly reducing manual data entry and improving operational efficiency."
    }
];
