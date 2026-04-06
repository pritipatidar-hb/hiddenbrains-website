import React from "react";
import { MonitorSmartphone, Code2, Presentation, ShieldCheck, Zap, Globe, MessageSquare, Activity, Pointer, Building2, Video, Umbrella, MonitorPlay, Landmark, Plane, ShoppingCart, Store, Ship, Share2, CreditCard, Smartphone, PenTool, Settings, Tablet, Layout } from "lucide-react";

export const XAMARIN_HERO = {
    title: "Xamarin App Development Services",
    excerpt: "With Xamarin development experts, leverage the latest Cross-platform development services. Hidden Brains UK offers the best Xamarin app development services with high-quality results.",
    cta: "Get in Touch"
};

export const XAMARIN_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const XAMARIN_HIGHLIGHTS = [
    "Established in 2003",
    "Satisfied Clients Across the Globe",
    "ISO 9001:2008 Certified Company",
    "Innovation and Agility",
    "Flexible and Scalable Solutions",
    "Budget-friendly Solutions",
    "Complete Mobile Solutions",
    "Dedicated Xamarin Developers",
    "Improved Collaboration"
];

export const XAMARIN_SERVICES = [
    {
        title: "Xamarin Mobile App Development",
        desc: "We help you build feature-rich and fully functioning cross-platform mobile apps for Android, Windows, and iOS.",
        icon: <Smartphone size={32} />
    },
    {
        title: "Xamarin Mobile App Design",
        desc: "Creative and user-centric design approach to deliver intuitive and visually appealing app experiences.",
        icon: <Layout size={32} />
    },
    {
        title: "Xamarin Mobile App Strategy",
        desc: "Strategic planning to align your app development with business goals and market demands.",
        icon: <Presentation size={32} />
    },
    {
        title: "Xamarin App Planning & Consultation",
        desc: "Expert consultation to help you identify the best technology stack and roadmap for your xamarin project.",
        icon: <Settings size={32} />
    },
    {
        title: "Xamarin iOS App Development",
        desc: "Building high-performance native iOS applications using Xamarin framework with seamless integration.",
        icon: <Smartphone size={32} />
    },
    {
        title: "Xamarin Android App Development",
        desc: "Scaling Android application reach with unified codebase and native performance optimization.",
        icon: <Smartphone size={32} />
    }
];

export const XAMARIN_INDUSTRIES_GRID = [
    { name: "Healthcare", color: "bg-[#f29111]", icon: <Activity className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Media", color: "bg-[#0bb28a]", icon: <Video className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "eCommerce", color: "bg-[#80519a]", icon: <ShoppingCart className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Online Booking", color: "bg-[#14133b]", icon: <Pointer className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Social", color: "bg-[#f29111]", icon: <Share2 className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Education", color: "bg-[#80519a]", icon: <MonitorPlay className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Logistics", color: "bg-[#14133b]", icon: <Ship className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Insurance", color: "bg-[#f29111]", icon: <Umbrella className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Travel", color: "bg-[#ed1862]", icon: <Plane className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Real Estate", color: "bg-[#f29111]", icon: <Building2 className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Banking", color: "bg-[#0bb28a]", icon: <Landmark className="text-white" size={24} strokeWidth={1.5} /> },
    { name: "Retail", color: "bg-[#ed1862]", icon: <Store className="text-white" size={24} strokeWidth={1.5} /> }
];

export const XAMARIN_WHY_CHOOSE = [
    { title: "22+ Years of Excellence", desc: "With over 22 years of IT expertise, Hidden Brains UK stands as a trusted Xamarin mobile application development company, delivering scalable and future-ready solutions across industries.", icon: <Zap size={32} /> },
    { title: "End-to-end Services", desc: "From strategy and design to development, testing, and support, we provide complete Xamarin mobile development services tailored to your unique business goals.", icon: <Settings size={32} /> },
    { title: "Cross-platform Expertise", desc: "As a leading Xamarin mobile development company, we build apps that run seamlessly on iOS, Android, and Windows, ensuring a unified experience with faster time-to-market.", icon: <Globe size={32} /> },
    { title: "Agile & Client-centric", desc: "Our agile methodology keeps you involved at every stage, making Xamarin app development transparent, flexible, and aligned with your vision.", icon: <Pointer size={32} /> },
    { title: "Proven Track Record", desc: "We have successfully delivered hundreds of Xamarin mobile solutions worldwide, helping businesses accelerate digital transformation and improve customer engagement.", icon: <Code2 size={40} /> },
    { title: "Cost-effective Development", desc: "Our Xamarin mobile development services help you reduce costs by building cross-platform apps with a single codebase, maximizing ROI without compromising quality.", icon: <CreditCard size={32} /> },
    { title: "Dedicated Xamarin Experts", desc: "Hidden Brains UK houses a skilled team of Xamarin developers with deep technical knowledge and domain expertise, making us the go-to Xamarin mobile development company in the UK.", icon: <Layout size={32} /> },
    { title: "Robust Security Standards", desc: "We follow best practices in app security, ensuring your Xamarin applications are safeguarded with secure code, authentication, and compliance-driven development.", icon: <ShieldCheck size={32} /> },
    { title: "Future-ready Solutions", desc: "By leveraging the latest Xamarin frameworks and integrations, we deliver mobile apps that are scalable, adaptable, and built to meet tomorrow’s demands.", icon: <Presentation size={32} /> },
    { title: "Continuous Support", desc: "Our commitment doesn’t end at launch. We provide ongoing Xamarin app support, updates, and maintenance to ensure your app performs at its best.", icon: <MessageSquare size={32} /> }
];

export const XAMARIN_FAQS = [
    {
        question: "What are the main advantages of Xamarin App Development Services?",
        answer: `
            <div>
                <p class="mb-4">Using cross-platform app development is the best thing to increase your business ROI. There are several benefits of Xamarin app development services, which are listed below.</p>
                <ul class="list-disc pl-5 space-y-2">
                    <li>Native User Experience</li>
                    <li>Single Technology Stack</li>
                    <li>Shared App Logic</li>
                    <li>Cost-effective</li>
                    <li>Integrated Testing</li>
                    <li>Open-source and Microsoft Support</li>
                    <li>Easy Maintenance</li>
                </ul>
            </div>
        `
    },
    {
        question: "Why should I select Xamarin cross-platform development services from Hidden Brains UK?",
        answer: "Xamarin is one of the best technologies for Cross-Platform app development solutions. Its code and plugin libraries are periodically updated by the Microsoft team & expert coders with a strong base of 60K+ super active contributors from the programmers community, which makes it more trustworthy. With Hidden Brains UK, our pool of expert and experienced programmers creates dynamic, robust, and secure Xamarin applications."
    },
    {
        question: "Will Xamarin applications help my business?",
        answer: `
            <div>
                <p class="mb-4">Xamarin itself is a cross-platform app development platform, so it is easy and cost-saving. Using Visual studio tools with the Xamarin platform, the application development process becomes very fast. Xamarin app development offers the following facilities for your app.</p>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li>Offers a native user experience</li>
                    <li>Code-sharing capability</li>
                    <li>Highly customizable</li>
                    <li>High performance</li>
                    <li>Complete API coverage</li>
                </ul>
                <p>As we are using Xamarin, the applications will run on almost all types of platforms such as iOS, macOS X, Windows, Unix, and FreeBSD.</p>
            </div>
        `
    },
    {
        question: "Should I partner with Hidden Brains UK for the Xamarin app development services? Why?",
        answer: "Hidden Brains UK is a leading and award-winning web and app development company in Europe. Our pool of professional programmers has expertise in cross-platform app development services. Our team has proven experience of delivering top ranking Xamarin mobile apps as per our customers’ business requirements."
    },
    {
        question: "How much does it cost for Xamarin application development services from Hidden Brains?",
        answer: "To calculate the exact cost of Xamarin app development services, Our project analysts need to understand the scope of the app, core features, complexity of functions, third party plugin requirements etc. Get a free quote from our experts."
    },
    {
        question: "Will you provide ongoing support after the Xamarin app launch?",
        answer: "Yes, we will definitely provide ongoing support and maintenance services after the launch of the Xamarin application as per our client’s demand."
    },
    {
        question: "How long does it take to build a Xamarin mobile app?",
        answer: "The timeline for Xamarin app development depends on the app’s complexity, features, and third-party integrations. A simple app may take a few weeks, while a feature-rich solution can take several months. At Hidden Brains UK, we follow agile practices to ensure faster delivery without compromising on quality, helping you get your Xamarin application to market quickly."
    }
];

export const XAMARIN_PORTFOLIO = [
    { title: "Catwalk88", category: "Ecommerce", image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/catwalk-v2.webp", url: "https://www.hiddenbrains.com/womens-clothing-website-development.html" },
    { title: "Dublin Convention Bureau", category: "Travel", image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/dublin_convention.webp", url: "https://www.hiddenbrains.com/dublin-convention-bureau.html" },
    { title: "Evil Escape Game", category: "Game", image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/evilescape.webp", url: "https://www.hiddenbrains.com/evil-escape-game-app.html" }
];
