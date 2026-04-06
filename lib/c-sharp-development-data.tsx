import React from "react";
import { Users, Shield, Lightbulb, Workflow, Lock, Network, Globe, Smartphone, Cloud, MessageSquare, Database, RefreshCw } from "lucide-react";
import { GuideItem, GuideDetail } from "@/types/components/shared/GuideSection";
import { FAQItem } from "@/types/components/shared/FAQSection";

export const C_SHARP_HERO = {
    title: "C# Development Company in The UK",
    excerpt: "Utilise our award-winning C# Development services in the UK by our C sharp programmers, who have expertise in developing enterprise-level applications. Our experts cover everything from custom software solutions to mobile hybrid applications.",
    cta: "Get in Touch"
};

export const C_SHARP_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const C_SHARP_SERVICES = [
    {
        title: "C# Web Development",
        desc: "The capabilities of our C# developers in designing feature-rich, functional, and native-like apps for leading brands across the globe are well-recognised in the industry. Our developers utilise C# like frameworks to develop web apps.",
        icon: <Globe className="w-8 h-8" />
    },
    {
        title: "C# Mobile Development",
        desc: "Mobile application development in C# is a great choice if you're trying to go cross-platform. C# cross-platform development is good if you're tight on budget and want an app that works across all devices.",
        icon: <Smartphone className="w-8 h-8" />
    },
    {
        title: "C# Cloud Development",
        desc: "Using Azure as your cloud development platform, our highly experienced C# app developers help you build modern interactive applications using C# code and IaaS, PaaS, and SaaS services.",
        icon: <Cloud className="w-8 h-8" />
    },
    {
        title: "C# Development Consultancy",
        desc: "Using decade-long experience, our business analysts and developers develop innovative solutions customized to client needs and aim to deliver solutions that boost your business growth and ROI.",
        icon: <MessageSquare className="w-8 h-8" />
    },
    {
        title: "C# Integration Services",
        desc: "The modern applications require lots of integration with third-party services. Our C# professionals have hands-on experience in integrating databases using various APIs to enhance their functionality.",
        icon: <Database className="w-8 h-8" />
    },
    {
        title: "C# Migration Services",
        desc: "Our team is composed of Microsoft Certified Professionals, able to efficiently migrate your existing app to C# and offer first-rate maintenance and support to make it run smoothly on the latest platforms.",
        icon: <RefreshCw className="w-8 h-8" />
    }
];

export const C_SHARP_REASONS = [
    {
        title: "500+ App Development Team",
        description: "At our company, we have the best coding talent and implement the most appropriate skills to deliver solutions that are powerful, robust, secure, and scalable.",
        icon: <Users className="w-8 h-8" />
    },
    {
        title: "Complete Transparency",
        description: "We maintain project transparency regardless of whether you work with us, hire a dedicated development team, or hire an hourly C# developer.",
        icon: <Shield className="w-8 h-8" />
    },
    {
        title: "No Obligation Quote",
        description: "We'll help you figure out the price range for the process of developing your app - whether it's an existing app, you're considering changes or starting a new one.",
        icon: <Lightbulb className="w-8 h-8" />
    },
    {
        title: "Smooth Projects Management",
        description: "Throughout the entire development process, our company maintains strict quality standards and keeps our clients informed through weekly project progress reports.",
        icon: <Workflow className="w-8 h-8" />
    },
    {
        title: "Project Security with an NDA",
        description: "Due to our commitment to privacy, your project details will be kept confidential with us. We have signed an agreement with our clients not to disclose confidential information.",
        icon: <Lock className="w-8 h-8" />
    },
    {
        title: "Flexible Engagement Models",
        description: "As we are aware of market fluctuations, we are willing to adjust our agreements and instead offer an hourly, a fixed, or a monthly basis.",
        icon: <Network className="w-8 h-8" />
    }
];

export const C_SHARP_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-csharp", label: "What is the C# Programming Language?" },
    { id: "what-is-used-for", label: "What is C# Used For Programming?" },
    { id: "unique-features", label: "What Are The Unique Features Of C#?" },
    { id: "is-demanding", label: "Is C# Still A Demanding Framework?" },
    { id: "future-of-csharp", label: "What is the Future of C#?" }
];

export const C_SHARP_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-csharp",
        title: "What is the C# Programming Language?",
        content: "C# is a modern programming language that Microsoft created and first released in the 1990s. C# is a general-purpose, object-oriented language that can be used to create any type of application, including business software and games. It's not just for programmers but also for people who want to learn how to code."
    },
    {
        id: "what-is-used-for",
        title: "What is C# Used For Programming?",
        content: "In recent years, C# has come to be one of the most popular programming languages. It can be used for a wide variety of applications, such as web services and server-side applications. It is also an excellent language for writing Windows or console applications. C# is a great choice for beginners because it features syntactic sugar, which that actually simplifies some of the more complex parts of the language."
    },
    {
        id: "unique-features",
        title: "What Are The Unique Features Of C#?",
        content: (
            <>
                <p>C# is a modern programming language that was created by Microsoft and first appeared in the 1990s. C# is a general-purpose, object-oriented language which can be used to create any type of application including business software and games. It's not just for programmers but also for people who want to learn how to code.</p>
                <p className="mt-4">It has one of the best features out there, IntelliSense, which makes it easy to write code because it provides hints as you type.</p>
            </>
        )
    },
    {
        id: "is-demanding",
        title: "Is C# Still A Demanding Framework?",
        content: "There's no denying that the demand for C sharp development companies in the UK has declined in recent years. However, this doesn't mean that the framework is less demanding. In fact, it may be more challenging than ever before as a result of its rapid growth and popularity as one of the most commonly used programming languages."
    },
    {
        id: "future-of-csharp",
        title: "What is the Future of C#?",
        content: "Is C# a top programming language for the future? This question has been asked for some time, but it never seems to go away. Maybe that's because the answer is always changing. However, with its integration in modern game engines like Unity and its solid back-end capabilities, C# continues to evolve and remain relevant."
    }
];

export const C_SHARP_FAQS: FAQItem[] = [
    {
        question: "What Are Your End-to-End C# Development Services?",
        answer: (
            <div className="space-y-4">
                <p>To streamline your business's processes, we provide a custom web application or website built on the framework. We offer the following services:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>Develop applications for your business.</li>
                    <li>Developing websites with the language</li>
                    <li>Windows application development</li>
                    <li>Mobile app development</li>
                    <li>Server-side development</li>
                    <li>Programming consultations</li>
                    <li>Migration of legacy systems</li>
                    <li>System integration</li>
                    <li>Cloud-based solutions</li>
                </ul>
            </div>
        )
    },
    {
        question: "What Are The Benefits of Hiring a C# Developer At Hidden Brains UK?",
        answer: "With Hidden Brains UK, you can get custom C# development services tailored to your business requirements. With our dedicated professionals, you can learn more about C#, acquire a set of business solutions, or convert your existing app or website to C#. Using our C-sharp developers with Microsoft certifications, we can create even the most challenging business solutions."
    },
    {
        question: "How Much Does It Cost to Build C# Development Software?",
        answer: "A lot of people think that it costs a lot of money to build C# development software. Actually, you can do it for very little and the cost is determined by what you want to do. If your goal is to create something that will generate revenue, then the cost will be higher than if your goal is just to provide a service."
    },
    {
        question: "How Can We Get Project Updates?",
        answer: "To keep our project on right track, we keep you in loop right from the start and share the project progress report every week over mail or call."
    },
    {
        question: "Are You Flexible Working On Different Time Zones?",
        answer: "Yes, we have dedicated team expertise on C# that ensures their availability as per the client's convenience and thrive to meet the project deadline without compromising the quality of the project."
    }
];

export const C_SHARP_INDUSTRIES = [
    {
        name: "Healthcare",
        desc: "Hidden Brains UK offers C# based healthcare software for hospitals, clinics, doctors, and medical technology companies. We provide consulting, maintenance, and support services.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retailers and eCommerce",
        desc: "C# app developers at our company deliver customized e-commerce solutions to businesses of all sizes and in a variety of industries, including enterprises, trading networks, marketplaces, and companies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Logistics & Transport",
        desc: "Our logistics development services are specially made to our clients' needs, delivering personalized solutions that are easy to follow, productive, and make sense in a business setting.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    },
    {
        name: "Banking & Finance",
        desc: "We, at Hidden Brains UK, engineer high-quality banking software that has desired features, is easy to use, and has the assurance of being safe and secure.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance"
    },
    {
        name: "E-learning and Education",
        desc: "As one of the top C# development providers in the UK, our main priority is to create an interactive experience by providing convenient and affordable solutions that focus heavily on educational value.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Media & Entertainment",
        desc: "Hidden Brains is a UK-based C# app development company that delivers creative and original software with substantial impact on our organization through creativity and finesse.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    }
];

export const C_SHARP_TESTIMONIALS = [
    {
        quote: "We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!",
        author: "Mr. Daniel Vant, UK",
        videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
    }
];
