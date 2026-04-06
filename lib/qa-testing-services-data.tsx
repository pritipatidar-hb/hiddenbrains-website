import React from "react";
import { CheckCircle, Shield, Briefcase, Star, Layers, Zap, Clock, Lock } from "lucide-react";

export interface QaProcessItem {
    step: string;
    title: string;
    icon: string;
}

export interface QaOfferingItem {
    title: string;
    items: string[];
    image: string;
    icon: React.ReactNode;
    color: string;
}

export const QA_HERO = {
    title: "Quality Testing Services",
    excerpt: "QA Testing Services to Enhance The Value & Accelerate Performance of Your Web & Mobile Applications",
    cta: "Get In Touch"
};

export const QA_WHY_HB = [
    "With the aim of providing a seamless experience, our teams of expert quality analysts enhance the delivery standard and improve the efficiency for a better end-user experience.",
    "We have profound domain knowledge and strong technical expertise to rigorously test the most complex and mission-critical applications.",
    "Our extensive domain knowledge and technical expertise allow us to develop the right strategy for comprehensive quality assurance.",
    "We support clients from diverse industries to ensure our technology solutions comply with industry best practices and global standards."
];

export const QA_PROCESS: QaProcessItem[] = [
    {
        step: "1",
        title: "Run the written Code for Testing",
        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/qa-testing-icon1.png"
    },
    {
        step: "2",
        title: "Business Requirement Analysis",
        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/qa-testing-icon2.png"
    },
    {
        step: "3",
        title: "Identify the Root Cause and create Test Cases",
        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/qa-testing-icon3.png"
    },
    {
        step: "4",
        title: "Fix the Identified Errors Carefully",
        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/qa-testing-icon4.png"
    },
    {
        step: "5",
        title: "Integrate all Project Elements & Retest",
        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/qa-testing-icon5.png"
    }
];

export const QA_OFFERINGS: QaOfferingItem[] = [
    {
        title: "Solutions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image2.webp",
        color: "#14133b",
        icon: (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                <g>
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M1,59L22,51L42,59L63,51L63,5L42,13L22,5L1,13Z"></path>
                    <g><path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M22,5L22,51"></path></g>
                    <g><path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M42,13L42,59"></path></g>
                </g>
            </svg>
        ),
        items: [
            "Banking & Financial Services",
            "Energy and Renewables",
            "High Tech",
            "Healthcare",
            "Insurance",
            "Manufacturing",
            "Retail",
            "Telecom",
            "Travel & Hospitality"
        ]
    },
    {
        title: "Testing and QA Services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/quality-assurance.webp",
        color: "#22c55e",
        icon: (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M1 7 L63 7 L63 57 L1 57 Z"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M1,15L63,15"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M10,11L6,11"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M18,11L14,11"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M26,11L22,11"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M6,25L33,25"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M6,33L33,33"></path>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M6,41L33,41"></path>
                <rect x="38" y="25" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" width="19" height="16"></rect>
            </svg>
        ),
        items: [
            "Application Testing",
            "Managed Testing Services",
            "Mobile Testing",
            "Test Automation Solution",
            "Agile Managed Testing Service",
            "Lifecycle Testing",
            "Security Testing",
            "Manual Testing",
            "Automated Testing"
        ]
    },
    {
        title: "Hidden Brains Proposition",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img2.webp",
        color: "#3b82f6",
        icon: (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                <g>
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M46,10L18,10"></path>
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M12,10L1,10L1,58L63,58L63,10L52,10"></path>
                    <rect x="12" y="6" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" width="6" height="8"></rect>
                    <rect x="46" y="6" fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" width="6" height="8"></rect>
                </g>
                <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M1,18L63,18"></path>
                <g>
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M23,43L22,48L27,47L42,32L38,28Z"></path>
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" d="M39,35L35,31"></path>
                </g>
            </svg>
        ),
        items: [
            "Industry-specific Solutions",
            "Flexible Client Engagement Models",
            "Competitive Pricing",
            "Expert iOS Developers",
            "High Quality Apps",
            "Robust Solutions",
            "Seamless Communication",
            "Confidentiality & Security",
            "24/7 Support"
        ]
    }
];

export const COUNTERS = [
    { number: "22+", text: "Years of experience" },
    { number: "1000%", text: "On time delivery" },
    { number: "30+", text: "Domain served" },
    { number: "125+", text: "QA Experts" }
];
