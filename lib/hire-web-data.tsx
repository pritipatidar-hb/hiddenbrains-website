import React from "react";
import {
    Monitor, Layout, ShoppingCart, RefreshCw, Settings, Search,
    Users, Shield, FileText, Layers, Lock, Rocket, MessageSquare, ClipboardList, PencilRuler, Code2, CloudCog
} from "lucide-react";

export const HIRE_WEB_HERO = {
    title: "Hire Web Developer in the UK",
    excerpt: "Hidden Brains UK enables you to hire web developer in the UK on full-time and part-time basis to build bespoke, innovative web solutions at affordable prices. We have a team of web app developers that understand your unique requirements and provide a perfect business-centric solution to add a competitive edge to your brand.",
    cta: "Get in Touch"
};

export const HIRE_WEB_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const HIRE_WEB_SERVICES = [
    {
        title: "Custom Website Development",
        content: "Are you a small or mid-sized business looking for a customized web app? We are a leading website development company in the UK, connecting aspiring entrepreneurs with expert web developers to customize a web app that portrays your company’s core values in the best way.",
        icon: <Layout className="w-8 h-8" />
    },
    {
        title: "Progressive Web Apps",
        content: "Developing Progressive Web Apps is the next best thing to native apps. It responds more quickly than a native app. When poor internet connectivity is prevalent, your business can offer users cached app content by choosing to hire our web developers.",
        icon: <Monitor className="w-8 h-8" />
    },
    {
        title: "Ecommerce Web Development",
        content: "Our web developers are adept at building various online portals for B2B and B2C clients. We make sure that we build online portals for e-stores that are highly user-friendly, offer high security, and empower them with a strong backend.",
        icon: <ShoppingCart className="w-8 h-8" />
    },
    {
        title: "Website Migration",
        content: "Do you intend to migrate your website to new technology? Our expert web developers can help you shift your website seamlessly to any platform with zero downtime, including WordPress, Shopify, Magento, Drupal, and more.",
        icon: <RefreshCw className="w-8 h-8" />
    },
    {
        title: "Web Support and Maintenance",
        content: "Our custom web development services also include support and maintenance services under which we review all the webpages, conduct health checks, and performance optimization for an opportunity to increase your website traffic.",
        icon: <Settings className="w-8 h-8" />
    },
    {
        title: "Consulting and Business Analysis",
        content: "With our thorough business analysis, we can track the growth of your organization. We identify the challenges and opportunities faced by your organization, as well as the various benefits that could help it grow.",
        icon: <Search className="w-8 h-8" />
    }
];

export const HIRE_WEB_WHY_CHOOSE = [
    {
        title: "500+ Web Development Team",
        content: "At Hidden Brains UK, we have skilled and expert web developers with almost 5+ yrs of experience. So you have the freedom to select the most suitable web developers based on competency.",
        icon: <Users className="w-6 h-6" />
    },
    {
        title: "Complete Transparency",
        content: "In order to keep our clients well informed, our web developers in the UK will provide weekly project updates and will be available to talk anytime over Skype or email.",
        icon: <Shield className="w-6 h-6" />
    },
    {
        title: "No-obligation Quote",
        content: "Whether you want to extend the functionalities of existing web or create it from scratch, our expert developers can help you understand how much it costs to build a website.",
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: "Smooth Project Management",
        content: "Whenever you hire web developers at Hidden Brains UK, you can rest assured that your project is in the hands of professionals. Our project managers will handle all your project needs.",
        icon: <Layers className="w-6 h-6" />
    },
    {
        title: "Project Security with an NDA",
        content: "To maintain the confidentiality of your project with us, we will sign a Non-disclosure agreement with you, and we adhere to all the necessary security measures to protect your privacy.",
        icon: <Lock className="w-6 h-6" />
    },
    {
        title: "Flexible Engagement Models",
        content: "Because the needs of our clients have changed, we offer them the opportunity to hire a web developer based on three kinds of contractual agreements- hourly, part-time, and full-time.",
        icon: <Rocket className="w-6 h-6" />
    }
];

export const HIRE_WEB_GUIDE = [
    {
        id: "why-should-i-hire",
        question: "Why Should I Hire Hidden Brains UK To Hire Web Developers?",
        answer: "Hidden Brains has more than two decades of web development experience and works for a variety of clients, even startups. Our web developers have delivered more than 1000 projects with great success and competence. Being flexible to work at different time zones and available to communicate with clients via different channels, makes us to deliver project on time without compromising the quality of work."
    },
    {
        id: "can-i-have-access",
        question: "Can I Have An Access To Track the Project Progress My Website Development?",
        answer: "Yes, Your website is developed on the development server, where you will be given a username and password. This allows you to monitor the progress of your website. Once we have completed the custom website development , you can still monitor its performance from the back-end no matter if it’s in live mode. This is part of our commitment to transparency and flexibility."
    },
    {
        id: "do-you-provide-web",
        question: "Do You Provide Web Design and Hosting Services?",
        answer: "As one of the leading website development companies, we are well versed in providing you with an end-to-end custom software solution. We help you with a range of tasks like registering a domain name, building your website, and keeping it running."
    },
    {
        id: "what-makes-you-best",
        question: "What Makes You Best From Other Website Development Companies in the UK?",
        answer: "Having been in the IT industry for over a decade, we develop custom websites, provide lifetime support, and offer maintenance. With our expertise in custom web development solutions, we also strive to build long term relationships. We want to help your business build a powerful online presence and achieve success. Unlike other IT service providers, we care about your business goals and are committed to achieving them."
    }
];

export const HIRE_WEB_PROCESS = [
    { step: "1", title: "Inquire", icon: <Search size={60} className="text-[#f29111] opacity-80" /> },
    { step: "2", title: "Evaluate", icon: <PencilRuler size={60} className="text-[#f29111] opacity-80" /> },
    { step: "3", title: "Select", icon: <UserCheck size={60} className="text-[#f29111] opacity-80" /> },
    { step: "4", title: "Pay", icon: <CreditCard size={60} className="text-[#f29111] opacity-80" /> },
    { step: "5", title: "Manage", icon: <Settings size={60} className="text-[#f29111] opacity-80" /> }
];

export const HIRE_WEB_MODELS = [
    {
        title: "Fixed",
        price: "$99",
        features: [
            "Defined project scope and budget",
            "Milestone-based payments",
            "Best for clearly defined requirements",
            "Minimal supervision required"
        ]
    },
    {
        title: "Hourly",
        price: "$99",
        features: [
            "Pay only for hours worked",
            "Flexible project scope",
            "Daily/Weekly progress reports",
            "Ideal for evolving requirements"
        ],
        active: true
    },
    {
        title: "Dedicated",
        price: "$99",
        features: [
            "8 Working Hours Per Day (5 days a week)",
            "Direct control over the team",
            "Monthly billing cycle",
            "Best for long-term development"
        ]
    }
];

export const HIRE_WEB_FAQ = [
    {
        question: "What is Web Developer and What Do They Do?",
        answer: "A web developer is a professional programmer who will take your idea and convert it into software or an application through their skillful application by using web programming languages, frameworks, and techniques. Web developers have knowledge of the latest trends, technology, and frameworks to design an ideal product, exactly as you would have envisioned."
    },
    {
        question: "What Are The Best Web Technologies to Create Web Applications?",
        answer: "Some of the most common web technologies used by the experts at Hidden Brains UK are outlined below. We can provide you with the best-suited web technology for your business requirements which may include: HTML, CSS, AJAX, JavaScript, MooTools, and jQuery."
    },
    {
        question: "Which Is The Best Technology for Website Development?",
        answer: "There are many platforms for web development and the choice largely depends on the type of app that you want to create and what you want to use it for. Our web developers will recommend the best for your situation and make sure that you’re always using the latest and greatest technology. Here are the most common platforms: PHP, WordPress, Magento, JSP, ASP.NET, Joomla, Open Cart, Macaw, and Weebly."
    },
    {
        question: "Which is the Best Choice of Technology for Web Application Development?",
        answer: "Our web developers use the following technologies to develop web applications: AngularJS, Vue.js, Ruby on Rails, Spring, ReactJS, Laravel, Yii, Django, and Zend."
    },
    {
        question: "What Should You Look for in a Website Developer?",
        answer: "Before choosing the best web developer for your company’s solution development, consider things like experience, expertise, and professionalism. You can look at a web developer’s past work to get an idea of the kinds of solutions they create and if it would work for your company’s needs."
    },
    {
        question: "What Is the Difference Between Back-end and Front-end Web Development?",
        answer: "As a front-end developer, you are responsible for developing everything the user sees, that is, the user interface. Backend developers create the logic in the design for the user interface. Among the responsibilities of backend developers are server development, logic, programming, and database development."
    },
    {
        question: "What Steps You Need To Follow To Hire Web Developers?",
        answer: "With few simple steps, you can hire our web developers. Fill out a form telling us what kind of resource you need and what experience the person should have. You can then review our qualified candidates, pick the one that would best suit your team, and sign a contract to start the work."
    }
];

import { UserCheck, CreditCard } from "lucide-react";
