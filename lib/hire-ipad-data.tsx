import React from "react";
import {
    Cpu, Layers, Palette, Shield, Zap, CheckCircle,
    Smartphone, Globe, RefreshCw, ArrowLeftRight, Monitor, Wrench, Tablet, Code2,
    Check, Star, Users, Briefcase, Headphones, MessageSquare, ShieldCheck, Lock,
    Search, FileText, UserCheck, CreditCard, Settings,
    Layout, CalendarCheck, Notebook
} from "lucide-react";

export const HIRE_IPAD_HERO = {
    title: "Hire iPad Application Developer",
    excerpt: "Hire Our Full Stack and Certified iPad Developers, Who Have In Depth Knowledge and Expertise in Delivering Robust Applications",
    cta: "Get in Touch"
};

export const HIRE_IPAD_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const HIRE_IPAD_SERVICES = [
    {
        title: "Native iPad Apps",
        content: "Developing high-performance, feature-rich native iPad applications tailored to your business needs.",
        icon: <Tablet className="w-8 h-8" />
    },
    {
        title: "iPad App Upgrade",
        content: "Upgrading your existing iPad applications to the latest iOS versions and modern design standards.",
        icon: <RefreshCw className="w-8 h-8" />
    },
    {
        title: "iPhone Apps to iPad Migration",
        content: "Seamlessly migrating and optimizing your iPhone apps to leverage the larger display and features of the iPad.",
        icon: <Layers className="w-8 h-8" />
    },
    {
        title: "Port iPhone Apps to iPad",
        content: "Expertly porting your existing iPhone applications to work perfectly on various iPad screen sizes.",
        icon: <ArrowLeftRight className="w-8 h-8" />
    },
    {
        title: "Port Android/Windows to iPad",
        content: "Consolidate your mobile presence by porting your Android or Windows apps to the iPad platform.",
        icon: <Globe className="w-8 h-8" />
    },
    {
        title: "Support & Maintenance",
        content: "24/7 technical support and regular maintenance to ensure your iPad apps run smoothly and securely.",
        icon: <Wrench className="w-8 h-8" />
    },
    {
        title: "iPad Mini App Development",
        content: "Specialized development for iPad Mini devices, ensuring perfect UI/UX for the specific form factor.",
        icon: <Tablet className="w-8 h-8" />
    },
    {
        title: "iPad Mini Technology",
        content: "Leveraging specific iPad Mini technologies to build compact yet powerful business applications.",
        icon: <Code2 className="w-8 h-8" />
    }
];

export const HIRE_IPAD_PROPOSITIONS = [
    {
        title: "Best-in-class Practices",
        content: "We follow industry-leading development standards and best practices to deliver superior iPad applications.",
        icon: <Star className="w-8 h-8" />
    },
    {
        title: "Quality-centric Processes",
        content: "Our rigorous QA and testing processes ensure that your app is bug-free and provides a seamless user experience.",
        icon: <Check className="w-8 h-8" />
    },
    {
        title: "Cost-effective Models",
        content: "Flexible and transparent hiring models designed to fit your budget while delivering maximum value.",
        icon: <Briefcase className="w-8 h-8" />
    },
    {
        title: "24*7 Support",
        content: "Round-the-clock technical support to address any issues and ensure your application remains operational.",
        icon: <Headphones className="w-8 h-8" />
    },
    {
        title: "Seamless Communication",
        content: "We maintain 100% transparency with regular updates via Skype, email, and project management tools.",
        icon: <MessageSquare className="w-8 h-8" />
    },
    {
        title: "Skilled iPad Developers",
        content: "Our developers are experts in C, Objective-C, and Swift, ensuring top-tier coding and architecture.",
        icon: <Users className="w-8 h-8" />
    },
    {
        title: "Transparent Procedures",
        content: "From inquiry to deployment, all our processes are transparent and well-documented for your clarity.",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "Complete Confidentiality",
        content: "We sign NDAs and follow strict security protocols to protect your intellectual property and project data.",
        icon: <Lock className="w-8 h-8" />
    }
];

export const HIRE_IPAD_CARDS = [
    {
        title: "iPad App Developer Services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hire-ipad-developer.webp",
        icon: <Tablet className="w-6 h-6" />,
        bullets: [
            "Native iPad Apps",
            "iPad App Upgrade",
            "iPhone Apps to iPad Migration",
            "Port iPhone Apps to iPad",
            "Port Android, Windows Apps to iPad",
            "iPad App Support & Maintenance",
            "iPad Mini App Development",
            "iPad Mini Application Technology"
        ]
    },
    {
        title: "iPad Developer Solutions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image2.webp",
        icon: <Notebook className="w-6 h-6" />,
        bullets: [
            "Banking & Finance",
            "Media & Entertainment",
            "Education",
            "Retail",
            "Energy & Utilities",
            "Healthcare",
            "Insurance",
            "Logistics"
        ]
    },
    {
        title: "Hidden Brains Propositions",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img2.webp",
        icon: <CalendarCheck className="w-6 h-6" />,
        bullets: [
            "Best-in-class Development Practices",
            "Quality-centric Processes",
            "Cost-effective Hiring Models",
            "24*7 Support",
            "Seamless Communication",
            "Highly Skilled iPad Developers",
            "Transparent Procedures",
            "Complete Confidentiality"
        ]
    }
];

export const HIRE_IPAD_MODELS = [
    {
        title: "Part-Time",

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

        features: [
            "8 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ]
    },
    {
        title: "Hourly",

        features: [
            "Hire Developer on Ad-hoc basis (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 25 Hours Commitment"
        ],
        active: false
    }
];

export const HIRE_IPAD_PROCESS = [
    {
        step: "1",
        title: "Inquire",
        content: "Specify your requirement for the hire iPad app developers for your project.",
        icon: <Search size={60} className="text-[#f29111] opacity-80" />
    },
    {
        step: "2",
        title: "Evaluate",
        content: "Our team of business analysts performs feasibility check and recommends iPad developer.",
        icon: <FileText size={60} className="text-[#f29111] opacity-80" />
    },
    {
        step: "3",
        title: "Select",
        content: "You select and hire skilled and professional iPad developer from our team of resources.",
        icon: <UserCheck size={60} className="text-[#f29111] opacity-80" />
    },
    {
        step: "4",
        title: "Pay",
        content: "Choose a payment model and make an easy online payment to start working with your iPad app developers.",
        icon: <CreditCard size={60} className="text-[#f29111] opacity-80" />
    },
    {
        step: "5",
        title: "Manage",
        content: "Get complete control over project & manage hired iPad app developers on your own as per your requirements.",
        icon: <Settings size={60} className="text-[#f29111] opacity-80" />
    }
];

export const HIRE_IPAD_FAQ = [
    {
        question: "Why should I choose iPad app development services?",
        answer: "To capture the audience of iPad users, increase ROI of your business, safety of enterprise level data, and high quality standards."
    },
    {
        question: "What is the cost to Hire iPad Application Developer?",
        answer: "The cost to hire iPad application developers varies with each company. Factors include developer experience, app type, scope, features, complexity, and third-party integrations."
    },
    {
        question: "What are the advantages of hiring an iPad app developer from Hidden Brains UK?",
        answer: "We have a talent pool of iPad app developers who offer successful apps in diversified industries like real-estate, logistics, entertainment, and retail. You can interview and select your choice of developer."
    },
    {
        question: "What will be the communication ways with my developers?",
        answer: "We maintain clear and smooth communication via Skype, emails, Basecamp, etc., to ensure your project goes live on time."
    },
    {
        question: "Will your company provide all the necessary documents? Will I own my app code?",
        answer: "Yes, we provide full documentation as per the agreement, and you will own the entire app code after the launch."
    }
];
