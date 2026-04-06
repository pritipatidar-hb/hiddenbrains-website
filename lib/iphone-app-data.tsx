import React from "react";
import { Users, ShieldCheck, Zap, Globe, MessageSquare } from "lucide-react";

export interface ServiceItem {
    title: string;
    desc: string;
}

export interface IndustryItem {
    name: string;
    desc: string;
    image: string;
    link: string;
}

export interface ReasonItem {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export interface GuideItem {
    id: string;
    label: string;
}

export interface GuideDetail {
    id: string;
    title: string;
    content: string;
    list?: string[];
}

export const IPHONE_SERVICES: ServiceItem[] = [
    {
        title: "Custom iPhone App Development",
        desc: "Our team of expert iOS developers helps you build custom applications that meet your business needs. We take care of every step of the development cycle, from ideation and conception to deployment."
    },
    {
        title: "iPhone App Upgrade and Migration",
        desc: "Whether you want to update your existing business mobile with the latest APIs or are looking forward to migrating it to the iOS platform, our iPhone app developers are here to upscale your app."
    },
    {
        title: "iPhone Support and Maintenance",
        desc: "To make your app run smoothly on various Apple devices, our highly-skilled iPhone app developers provide you with post-launch app support and maintenance services."
    },
    {
        title: "iPhone App Development Consultation",
        desc: "We have a team of industry-best iPhone app developers that help you conceptualize your app idea and suggest best-suited technologies by understanding your business requirements."
    },
    {
        title: "iPhone Software Testing",
        desc: "We provide iPhone app development services by keeping the app’s performance at the centre. So we make sure your app is bug-free by simply applying the package manually and automating the mode of testing."
    },
    {
        title: "iPhone UI/UX Designing",
        desc: "Our highly experienced iPhone app designers are well known for creating memorable, immersive, and highly captivating app designs that ensure a lasting experience for the users."
    }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
    {
        name: "Banking and Finance",
        desc: "Our Fintech experts at Hidden Brains create cutting-edge ASP.Net applications for banks and traditional financial institutions to automate tedious processes with the latest technologies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "//banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers who are familiar with the insurance industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance.html"
    },
    {
        name: "Travel And Tourism",
        desc: "Hidden Brains UK is renowned for developing highly secure, reliable, and scalable ASP.NET solutions for travel agencies. Our experts create tailored apps for managing everything from a single point.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "//travel-hospitality"
    },
    {
        name: "Logistics and Transportation",
        desc: "Hidden Brains helps organizations automate their supply chains by offering reliable ASP.NET solutions to logistics companies. We empower you with solutions that boost productivity and tracking.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "//logistics"
    },
    {
        name: "Healthcare",
        desc: "We specialized in advancing conventional healthcare working models with cutting-edge technology. Hidden Brains can be your go-to solution for developing modern healthcare app development solutions.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail and E-commerce",
        desc: "Hidden Brains provides end-to-end app development services to retailers. We make a bold statement with an outstanding online store that takes your brand to new heights in today's rapid environment.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail.html"
    },
    {
        name: "Media & Entertainment",
        desc: "In the Media & Entertainment industry, it's important to have an app that is user-friendly and engaging. At Hidden Brains, we understand this and provide custom mobile app development services.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment.html"
    },
    {
        name: "Real Estate",
        desc: "Our experienced developers create custom apps for Real Estate businesses of all sizes. Whether you need an app for property listings, transactions, or payments, we have the solution.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "//real-estate"
    }
];

export const WHY_CHOOSE_HB = [
    { icon: <Users size={32} />, title: "Dedicated Development Teams", desc: "At Hidden Brains UK, we have a dedicated team of iPhone app developers who are engaged in delivering high-performing business solutions." },
    { icon: <ShieldCheck size={32} />, title: "Complete Project Security", desc: "We value your project requirements and privacy concerns, therefore, we sign a Non-disclosure Agreement to make sure that every detail remains confidential." },
    { icon: <Zap size={32} />, title: "Smooth Projects Management", desc: "As an expert iPhone app development company in the UK, we ensure seamless project management services as we have project managers to communicate project needs." },
    { icon: <Globe size={32} />, title: "Regular Updates", desc: "To ensure consistent transparency in the project management, we strive to keep our clients updated with reports via email, Skype, or call." },
    { icon: <MessageSquare size={32} />, title: "Flexible Engagement Models", desc: "We offer our clients the privilege of hiring the industry's best iPhone application developers on an hourly, part-time or full-time basis." },
    { icon: <Zap size={32} />, title: "Free No Obligation Quote", desc: "If you are concerned about how much your iPhone app development will cost, then book a free consultation slot with our experts." }
];

export const IPHONE_GUIDE_ITEMS: GuideItem[] = [
    { id: "What-is-iPhone", label: "What is iPhone App Development?" },
    { id: "What-are-the-Major", label: "What are the Major Technologies for developing iPhone applications?" },
    { id: "What-are-the-benefits", label: "What are the benefits of outsourcing the iPhone Application Development Company?" },
    { id: "What-are-the-factors", label: "What are the factors you need to keep in mind while hiring an iOS app development company?" }
];

export const IPHONE_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "What-is-iPhone",
        title: "What is iPhone App Development?",
        content: "iPhone app development is the process of making mobile applications that specifically run on Apple devices, including the iPhone, iPad, Apple Watch, and iPod."
    },
    {
        id: "What-are-the-Major",
        title: "What are the Major Technologies for developing iPhone applications?",
        content: "The iOS native apps are majorly developed by using Swift or Objective-C programming languages and then deployed to the App Store for users to download."
    },
    {
        id: "What-are-the-benefits",
        title: "What are the benefits of outsourcing the iPhone Application Development Company?",
        content: "If you are planning to develop an iPhone application, then it is worth outsourcing to an iPhone app development company as it ensures various benefits:",
        list: [
            "Lower app development and operational cost",
            "Flexible to work in different time zones",
            "Assure excellent quality app development services",
            "Implementing State-of-the-art technology",
            "Better support and maintenance services after the app launch"
        ]
    },
    {
        id: "What-are-the-factors",
        title: "What are the factors you need to keep in mind while hiring an iOS app development company?",
        content: "Choosing the best iPhone application development company in the market is one of the most challenging tasks. But, when you know what exactly you need to check to appoint the best developers for the project, then you will never make a wrong decision. So when you are looking for the best iPhone application development services in the UK, make sure to check these parameters:",
        list: [
            "A diverse profile of the company;",
            "The expertise in programming languages;",
            "Knowledge of industry-leading technologies and trends;",
            "Signing an NDA for the project’s security;",
            "Track record of project handling;",
            "Ask for a portfolio and check the client’s feedback.",
            "A balance between quality and hourly cost."
        ]
    }
];

export const IPHONE_APPS_FAQ = [
    {
        question: "What Programming Languages Do You Use for iPhone App Development?",
        answer: "Our expert team harnesses the power of various programming languages to develop iPhone apps, such as: Objective C, Swift programming language, React Native, and Flutter."
    },
    {
        question: "Will Your Team Help Me Launching An App To Apple Store?",
        answer: "Yes, it’s part of our job and contracts to launch your iPhone app on the app store successfully. Our expert and talented team will manage everything from idealization to designing and developing to deploying."
    },
    {
        question: "How much does it cost to develop an iPhone App?",
        answer: "The cost of iPhone app development depends on various parameters such as the development platform, app complexity, its features and flexibilities, the geolocation of the app development team, testing, and UI/UX design. Contact us with your requirements to get free app development costs."
    },
    {
        question: "Do I own the ownership and the code of my application?",
        answer: "Yes, being a renowned iPhone app development company, we hand over the source code and ownership of the application to you, once it is successfully uploaded to the app store. At the time of signing an NDA, we keep things transparent with our clients and openly discuss the source code ownership and project handover."
    }
];
