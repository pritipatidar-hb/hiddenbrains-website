import {
    Users,
    ShieldCheck,
    Lightbulb,
    Layout,
    RefreshCcw,
    Zap,
    Smartphone,
    Cpu,
    Globe,
    Monitor,
    Watch,
    Cloud,
    FileCode,
    Box
} from "lucide-react";
import React from 'react';

export const MOBILE_HERO = {
    title: "Mobile App Development Company in The UK",
    excerpt: "Are you looking for the best mobile app development company in the UK? We are one of the leading app development companies in Europe building smart, secure & scalable apps for the Mobile-First world.",
    cta: "Get in Touch"
};

export const MOBILE_COUNTERS = [
    { count: "22", symbol: "+", label: "Years of experience" },
    { count: "1000", symbol: "+", label: "Mobile Projects" },
    { count: "30", symbol: "+", label: "Domain served" },
    { count: "125", symbol: "+", label: "Mobile Experts" }
];

export const MOBILE_PLATFORMS = [
    {
        title: "iOS App Development",
        content: "Our mobile apps development company in the UK offers robust mobile apps for all iOS devices like iPhone, iPad, Apple TV, and watchOS. Our experts integrate these iOS apps with the latest technologies like AR/VR, AI, Blockchain, etc.",
        link: "/ios-apps-development",
        icon: <Smartphone className="w-6 h-6" />,
        circleBg: "bg-[#fff5ee]",
        iconColor: "text-[#f29111]",
        isHighlighted: false
    },
    {
        title: "Android App Development",
        content: "Our apps development agency in the UK has delivered thousands of Android applications that are acknowledged for advanced features. We also deploy your Android app in the Google play store to ensure complete peace of mind.",
        link: "/android-app-development",
        icon: <Cpu className="w-6 h-6" />,
        circleBg: "bg-[#fdf2f8]",
        iconColor: "text-[#db2777]",
        isHighlighted: true
    },
    {
        title: "Swift App Development",
        content: "Our application development agency in the UK helps you develop a custom app using Swift programing language. We also add advanced features using AR/VR, AI, etc. and third party integrations to your mobile app to ensure competitive advantage.",
        link: "/swift-app-development",
        icon: <Zap className="w-6 h-6" />,
        circleBg: "bg-[#f0f9ff]",
        iconColor: "text-[#0ea5e9]",
        isHighlighted: false
    },
    {
        title: "Kotlin App Development",
        content: "With the help of Kotlin (cross-platform, statically typed, general-purpose programming language), we create custom mobile apps in less time and cost and make them state-of-the-art by adding unique features and functionalities.",
        link: "/kotlin-app-development-company",
        icon: <FileCode className="w-6 h-6" />,
        circleBg: "bg-[#f0fdf4]",
        iconColor: "text-[#22c55e]",
        isHighlighted: false
    },
    {
        title: "Ionic App Development",
        content: "Being a leading mobile app development firm, we create interactive and high-performance Ionic-based applications with a single line of code used for iOS & Android. Our ionic apps are high performing and robust.",
        link: "/ionic-app-development",
        icon: <Layout className="w-6 h-6" />,
        circleBg: "bg-[#fffbeb]",
        iconColor: "text-[#f59e0b]",
        isHighlighted: false
    },
    {
        title: "Xamarin App Development",
        content: "Our custom mobile application development team has years of experience in Xamarin technology, enabling them to create robust cross-platform mobile applications with enhanced performance using Xamarin.",
        link: "/xamarin-app-development",
        icon: <Box className="w-6 h-6" />,
        circleBg: "bg-[#faf5ff]",
        iconColor: "text-[#9333ea]",
        isHighlighted: false
    },
    {
        title: "React Native App Development",
        content: "The react native app development team of Hidden Brains delivers stunning cross-platform mobile apps with native-like user experiences. Our team is abreast with the latest version of react native.",
        link: "/react-native-app-development-company",
        icon: <Layout className="w-6 h-6" />,
        circleBg: "bg-[#f0fdf4]",
        iconColor: "text-[#22c55e]",
        isHighlighted: false
    },
    {
        title: "Flutter App Development",
        content: "As a leading mobile app development firm in the UK, we create interactive, secure and scalable flutter-based applications. Our Flutter mobile app development team is capable of creating high performing and robust mobile apps.",
        link: "/flutter-app-development-company",
        icon: <Smartphone className="w-6 h-6" />,
        circleBg: "bg-[#fffbeb]",
        iconColor: "text-[#f59e0b]",
        isHighlighted: false
    },
    {
        title: "AR/VR Integrations",
        content: "Our mobile app development company in the UK has immense capability of integrating your mobile app with augmented reality and virtual reality features. These features enhance interactivity and engagement.",
        link: "/augmented-reality-development",
        icon: <Globe className="w-6 h-6" />,
        circleBg: "bg-[#faf5ff]",
        iconColor: "text-[#9333ea]",
        isHighlighted: false
    }
];

export const MOBILE_SERVICES = [
    {
        title: "Custom Mobile App Development",
        content: "We’re a leading mobile apps development company in the UK and engaged in creating custom mobile applications for all sizes of business whether small or big. Our experts are capable to create even complex custom app solutions for enterprises."
    },
    {
        title: "App Technology Consulting",
        content: "We are backed a team of mobile application consultants that offer technical advice in the initial stage of the project so that you can put the most appropriate technical strategy into action for your app."
    },
    {
        title: "Hybrid Mobile App Development",
        content: "With our cross-platform mobile app development solutions, you can make a feature-packed hybrid app that will run on both iOS and Android devices. Our hybrid mobile app development services can help you save your time and cost."
    },
    {
        title: "Native Mobile App Development",
        content: "Being one of the best mobile app development companies in the UK, we provide you with the full-cycle application development for the native mobile applications. We cover both the platforms (iOS and Android)."
    },
    {
        title: "Wearable Apps Development",
        content: "Create wearable apps for your company by accessing iWatch apps, Android wear apps, and Google glass apps that work perfectly on any device. We have a team having experience in different wearable technologies."
    },
    {
        title: "Upgradation & Migration Services",
        content: "We also help you if you need to make changes to your app so that it’s compatible with a newer mobile operating system or gets access to more robust capabilities. Also, we help you in migration of your mobile applications."
    }
];

export const MOBILE_INDUSTRIES = [
    {
        title: "Healthcare",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        content: "At Hidden Brains, we provide app development services that can help healthcare providers keep up with the latest changes. Whether it's developing a new app or updating an existing one.",
        link: "/healthcare"
    },
    {
        title: "Retail",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        content: "In the Retail industry, we provide app development services that help businesses increase sales and improve customer loyalty. Our retail mobile apps are designed to streamline the shopping experience.",
        link: "/retail",
    },
    {
        title: "Media & Entertainment",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        content: "It is important to have an app that is not only user-friendly but also engaging. At Hidden Brains, we understand this and provide custom mobile app development services that meet these needs.",
        link: "/media-and-entertainment",
    },
    {
        title: "Real Estate",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        content: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes. Whether you need an app for property listings, transactions, or payments.",
        link: "/real-estate"
    },
    {
        title: "ECommerce",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        content: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs. improve your customer's experience or increase sales.",
        link: "/ecommerce",
    },
    {
        title: "Online Booking",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        content: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends and technologies.",
        link: "/online-booking"
    },
    {
        title: "Social Networking",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        content: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses.",
        link: "/social-networking",
    },
    {
        title: "Manufacturing",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        content: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes.",
        link: "/manufacturing"
    }
];

export const MOBILE_WHY_CHOOSE_HB = [
    {
        icon: <Users className="w-8 h-8" />,
        title: "500+ Team",
        content: "Our mobile app developers are 4+ years of average experience and have a deep understanding of mobile app development platforms. This helps us provide you quality projects in less time."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Complete IPR Protection",
        content: "Your mobile app development idea is completely safe with us. We respect your secrecy and any project-related matters will be confidential. We follow strict NDAs."
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Get No-obligation Quote",
        content: "We will be happy to provide you with a free quote in 24 hours or less you any of your query. Our consultants help you in saving time and cost by providing the perfect strategy."
    },
    {
        icon: <Layout className="w-8 h-8" />,
        title: "Smooth Projects Management",
        content: "Our project management services mean you don't have to worry about management intricacies; you get a seasoned pro on your team. We use advanced project management tools."
    },
    {
        icon: <RefreshCcw className="w-8 h-8" />,
        title: "Regular Updates",
        content: "We give you a full summary of your project's status via email, phone, and Skype, so you're kept in the loop. This helps you updated with the progress on real time basis."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Flexible Engagement Models",
        content: "Hire a mobile app specialist with complete flexibility as per your specific business needs and requirement. Pay on a monthly, part-time, or full-time basis."
    }
];

export const MOBILE_GUIDE_ITEMS = [
    { id: "what-are-the-skills", label: "What are the skills required for mobile app development?" },
    { id: "which-is-the-best", label: "Which is the best platform for mobile app development: Android or iOS?" },
    { id: "what-are-security", label: "What are the security measures that follow so that my mobile application idea is safe?" },
    { id: "will-my-app", label: "Will my app be secure if I outsource it?" }
];

export const MOBILE_GUIDE_DETAILS = [
    {
        id: "what-are-the-skills",
        title: "What are the skills required for mobile app development?",
        content: (
            <div className="space-y-4 text-gray-600">
                <p>An application development team must have a good understanding of application development toolkits. Also, if you want hybrid mobile apps, they should know about react-native and Xamarin.</p>
                <p>If you are thinking of outsourcing app development, then our mobile software development company is here to help.</p>
            </div>
        )
    },
    {
        id: "which-is-the-best",
        title: "Which is the best platform for mobile app development: Android or iOS?",
        content: (
            <div className="space-y-4 text-gray-600">
                <p>The choice between Android and iOS for your app development services is highly influenced by the target audience and core vision of your project.</p>
                <p>Android and iOS together account for more than 99% of the operating system market share. While Android accounted for 74.6% as of July 2020, the iOS market share is 24.82% as of July 2020.</p>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="font-semibold mb-2">Opt for Android when:</p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>You want to be accessible to a larger audience group.</li>
                        <li>You want to lessen the risk of rejection for market-new app ideas.</li>
                        <li>Your target audience is in Germany, Brazil, Singapore, India, or Canada.</li>
                    </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold mb-2">Opt for iOS when:</p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Users are very concerned about high levels of security.</li>
                        <li>Users have higher spending capacity (premium market).</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        id: "what-are-security",
        title: "What are the security measures that follow so that my mobile application idea is safe?",
        content: (
            <div className="space-y-4 text-gray-600">
                <p>We will sign a strict confidentiality agreement (NDA) with you to ensure the security of your mobile app idea. Among all the top mobile app companies available in the market, we are a trusted name. Our business mobile app development services give you the desired results while keeping your idea safe and secure.</p>
            </div>
        )
    },
    {
        id: "will-my-app",
        title: "Will my app be secure if I outsource it?",
        content: (
            <div className="space-y-4 text-gray-600">
                <p>Yes, you can sign an NDA and your mobile app will be secure under the terms of the agreement. We follow industry best practices for code security and data protection.</p>
            </div>
        )
    }
];

export const MOBILE_APP_FAQ = [
    {
        question: "What is the cost of mobile app development services?",
        answer: "Various factors like developer rates, company rates, project complexity, and development time impact the cost. Nowadays, mobile app development isn't as expensive as most think. Discuss with our expert team to find out the exact cost for your app!"
    },
    {
        question: "Why choose mobile app development services from Hidden Brains UK?",
        answer: "13+ years in the industry have allowed us to standardize a process that ensures high ROI. We keep updated on emerging technologies to serve robust solutions and support your application after launch."
    },
    {
        question: "How can I manage product development & mobile app services?",
        answer: "It depends on the contract model. For a Dedicated Team model, management is on your side. For a Fixed Price model, we provide a Project Manager to coordinate the process and support you till delivery."
    },
    {
        question: "How to choose a platform for best mobile app development services?",
        answer: "Ensure your app provides services smoothly, offers real efficiency increases, avoids blackboxed coding, and doesn't compromise on UX, function, or performance."
    },
    {
        question: "What is the difference between hybrid and cross-platform app development?",
        answer: "While often confused, they use different approaches. Native apps are platform-specific, while cross-platform apps use a single codebase (React Native/Flutter) and hybrid apps use web views inside native containers."
    },
    {
        question: "What expertise and talents are needed for mobile app development?",
        answer: "High level of technical experience, knowledge of different platforms/frameworks, UI/UX skills, excellent communication, and on-time delivery are crucial factors for success."
    }
];
