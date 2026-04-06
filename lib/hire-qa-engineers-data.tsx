import React from "react";
import { Search, Code, Globe, RefreshCw, Lightbulb, FileText, Shield, Users, Workflow, Zap } from "lucide-react";

export const HIRE_QA_HERO = {
    title: "Hire QA Engineers",
    description: "Hire Expert QA Engineers for Meticulous Testing to Ensure Seamless Performance of The Website or Product"
};

export const HIRE_QA_INTRO = {
    title: "Hire QA Engineers to Develop a Bug-Free Website or Software",
    paragraphs: [
        "Hidden Brains UK understand how important it is to have QA Testing Engineer by your side when building a fully-function, error-free, and immaculate website or software. Taking into account the increasing demand to hire QA engineers, we allow these resources to clients on an hourly, part-time and even full-time basis.",
        "Every startup needs a quality assurance test engineer that can work in conjunction with software engineer for smooth flow of the project, however, not all of them can afford to hire them permanently. This is when Hidden Brains comes to rescue by making available its talented and highly qualified dedicated QA professionals at affordable prices.",
        "Our experienced, smart and reliable mobile QA testers refine the work of developers and designers by testing against several working environments. Stringent quality tests by these engineers aim towards a flawless performance of your software or website.",
        "Outstanding technical skills of our QA engineers and their dedication towards work are sure to leave you stunned."
    ],
    stats: [
        { label: "Years of experience", value: "22", symbol: "+" },
        { label: "On time delivery", value: "1000", symbol: "%" },
        { label: "Domain served", value: "30", symbol: "+" },
        { label: "QA Experts", value: "125", symbol: "+" }
    ]
};

export const HIRE_QA_SERVICES = [
    "Website Testing",
    "Web Application Testing",
    "Software Testing",
    "Security Testing",
    "Automated Testing",
    "Project Lifecycle Testing",
    "Mobile App Testing",
    "Agile Testing Service",
    "Managed Testing Service"
];

export const HIRE_QA_SOLUTIONS = [
    "eCommerce",
    "Retail",
    "Education",
    "Travel & Hospitality",
    "Real Estate",
    "Mcommerce",
    "News",
    "Media & Entertainment",
    "Banking & Finance"
];

export const HIRE_QA_PROPOSITIONS = [
    "Dedicated Resources",
    "Experienced in Testing Domain",
    "Scalable Team of Engineers",
    "100% Confidentiality of Data",
    "Abide by NDA Terms",
    "Competitive Pricing",
    "Flexible Engagement Model",
    "Complete Control on Resources",
    "Detailed Reporting"
];

export const HIRE_QA_PROCESS = [
    {
        id: "1",
        title: "Inquire",
        content: "Specify your requirement of software testing to hire a QA Tester for your project."
    },
    {
        id: "2",
        title: "Evaluate",
        content: "Our technical team analyzes the scope of project and suggests the most appropriate engineer."
    },
    {
        id: "3",
        title: "Select",
        content: "Select the engineer of your choice from our resources to work dedicatedly on your project."
    },
    {
        id: "4",
        title: "Pay",
        content: "Choose a payment model and make an easy online payment to start working with your engineer."
    },
    {
        id: "5",
        title: "Manage",
        content: "Get complete control over project & manage hired engineers on your own as per your requirements."
    }
];

export const HIRE_QA_MODELS = [
    {
        title: "Part-Time",
        price: "$99",
        features: [
            "4 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ],
        active: true
    },
    {
        title: "Full Time",
        price: "$99",
        features: [
            "8 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ]
    },
    {
        title: "Hourly",
        price: "$99",
        features: [
            "Hire Developer on Ad-hoc basis (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 25 Hours Commitment"
        ]
    }
];

export const HIRE_QA_FAQS = [
    {
        question: "What does a QA engineer do? Why are they required?",
        answer: (
            <div className="space-y-4">
                <p>Any QA engineer is responsible for the quality of an app, a website or a software that is launched. Their work is to make sure that the app or website is completely bug free. They test the product with all kinds of devices and queries that can be raised.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Testing process system and planning</li>
                    <li>Understanding of client’s requirements</li>
                    <li>Finding problems, issues and bugs and adding them into system</li>
                    <li>Developing required testing scripts</li>
                    <li>Keep tracking on time and deadline</li>
                    <li>Keep updating error tracking system and Files</li>
                </ul>
            </div>
        )
    },
    {
        question: "How can I hire QA engineers?",
        answer: "Send your requirements to the company from where you want to hire QA engineers or team. Make complete information that you want them to QA. On the basis of the developer you choose and technology you select, you will receive project estimation with pricing and timeline. After your agreement, we can start on the project."
    },
    {
        question: "Can I hire QA engineers on an hourly basis?",
        answer: "Yes you can hire QA engineers on an hourly basis. We offer part time, full time, hourly basis and project base hiring models."
    },
    {
        question: "What expertise do Hidden Brains’ QA developers have?",
        answer: (
            <div className="space-y-4">
                <p>We have a talent pool of QA engineers with years of experience. You can take a number of interviews and choose your required engineer. All our QA engineers have expertise in QA testing manually and automation testing.</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Creating customized testing scripts</li>
                    <li>Knowledge of latest automation tools</li>
                    <li>Deep knowledge of software applications</li>
                    <li>Optimizing testing process</li>
                    <li>Knowledge of both manual & automated testing</li>
                    <li>Understanding of software development testing life cycle</li>
                </ul>
            </div>
        )
    }
];

export const QA_FEATURE_DETAILS = [
    {
        title: "QA Engineers Services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hire-qa-engineers.webp",
        icon: <Zap className="w-8 h-8" />,
        items: HIRE_QA_SERVICES
    },
    {
        title: "QA Engineers Solutions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image4.webp",
        icon: <Search className="w-8 h-8" />,
        items: HIRE_QA_SOLUTIONS
    },
    {
        title: "Hidden Brains Propositions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img2.webp",
        icon: <Workflow className="w-8 h-8" />,
        items: HIRE_QA_PROPOSITIONS
    }
];
