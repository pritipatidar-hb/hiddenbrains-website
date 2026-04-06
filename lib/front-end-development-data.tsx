import React from "react";
import { Users, ShieldCheck, Lightbulb, Workflow, Lock, Zap } from "lucide-react";
import type { TechExpertiseItem, WebServiceItem, IndustryItem, ReasonItem, GuideItem, GuideDetail, ProcessStep } from "./web-app-data";

export const FRONT_END_SERVICES: TechExpertiseItem[] = [
    {
        title: "Full Stack Web Development",
        desc: "With extensive knowledge of systems architecture, website architecture, and communication protocols, our frontend development agency is able to assemble interactive fronts with a solid foundation of the back end.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/php-dev.webp",
        link: "/php-web-development",
        color: "orange"
    },
    {
        title: "Cross-Platform Development",
        desc: "Being a reputed Front-end development company in the UK, we make sure that from cross-platform frameworks and PWA standards, we create applications that provide native experiences across multiple systems.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/asnet-dev.webp",
        link: "/asp-dot-net-web-development",
        color: "purple"
    },
    {
        title: "Custom Web Development",
        desc: "Enhance the interactivity and expressions of your web portals with a custom approach. For this, you can hire our skilled frontend developers in the UK as they use only clean code and ensure great usability.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/angular-dev.webp",
        link: "/angularjs-development",
        color: "dark"
    },
    {
        title: "HTML5/CSS Development",
        desc: "At Hidden Brains UK, our experts strive to go beyond to deliver an excellent user experience. Whether it is a creative or technology domain, we ensure that interactive elements are coded using W3C standards and cross-browser compatibility.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/nodejs-dev.webp",
        link: "/node-js-development",
        color: "green"
    },
    {
        title: "CMS Design and Development",
        desc: "We at Hidden Brains UK understand the modern needs of our clients therefore, we provide secure, fast, and robust theming services for popular CMS platforms such as WordPress, Drupal, and Joomla.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/laravel-dev.webp",
        link: "/laravel-development",
        color: "yellow"
    },
    {
        title: "Data Migration and Support",
        desc: "If you need help migrating crucial data, resolving post-deployment queries, or performing regular maintenance, our Front-end engineers are here to assist you and help you migrate data with no downtime.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/codeIgniter-dev.webp",
        link: "/codeigniter-development-services",
        color: "purple"
    }
];

export const FRONT_END_TECH: TechExpertiseItem[] = [
    {
        title: "PHP Development",
        desc: "To create excellent, eye-catching, and dynamic web applications, our dedicated web app developers uses PHP server-side scripting language.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/php-dev.webp",
        link: "/php-web-development",
        color: "orange"
    },
    {
        title: "ASP.NET Development",
        desc: "Our programmers create flawless and company-specific web development solutions using ASP.NET technology to ensure excellent performance.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/asnet-dev.webp",
        link: "/asp-dot-net-web-development",
        color: "purple"
    },
    {
        title: "Angular Development",
        desc: "Hidden Brains UK assists clients in extending the reach of their businesses by providing scalable and dependable web apps built with Angular technology.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/angular-dev.webp",
        link: "/angularjs-development",
        color: "dark"
    },
    {
        title: "Node.JS Development",
        desc: "To create client- and server-side web applications, our web development specialists use the power of Node.JS and ensure unmatched performance.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/nodejs-dev.webp",
        link: "/node-js-development",
        color: "green"
    },
    {
        title: "Laravel Development",
        desc: "To create scalable, reliable, and visually appealing web applications that grow client businesses, we use the Laravel framework.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/laravel-dev.webp",
        link: "/laravel-development",
        color: "yellow"
    },
    {
        title: "CodeIgniter Development",
        desc: "By choosing to partner with Hidden Brains, you can develop full-featured and high-performance web applications using CodeIgniter.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/codeIgniter-dev.webp",
        link: "/codeigniter-development-services",
        color: "purple"
    }
];

export const FRONT_END_OTHER_SERVICES: WebServiceItem[] = [
    {
        title: "Custom Web App Development",
        desc: "No matter what industry you are in, take into account using our secure, scalable, high-performing, and feature-rich web application development services that have been tailored to meet all of your business needs."
    },
    {
        title: "Website Prototyping & UX Design",
        desc: "Hidden Brains is a website development company in the UK that specializes in creating a wide range of website development services, from creating prototyping and user-friendly UX design to coding and launching your site."
    },
    {
        title: "Progressive Web App Development",
        desc: "We at Hidden Brains UK have a pool of app developers that enables you to develop websites that offer progressive web apps and are distinguished by their high performance, reliability, and visual appeal."
    },
    {
        title: "Consulting & Business Analysis",
        desc: "Contact us for help choosing the right technology for your next web app project, because our technology consultants are available to help you."
    },
    {
        title: "Full Stack Development",
        desc: "At Hidden Brains UK, we provide full stack development services. We have a team of expert developers who can help you with all aspects of website development, from conception to execution."
    },
    {
        title: "Third-Party Integration",
        desc: "At Hidden Brains UK, we provide website application development services in the UK and have a team of experienced developers who can help you create a custom website or integrate your existing website with third-party applications."
    }
];

export const FRONT_END_INDUSTRIES_SERVED: IndustryItem[] = [
    {
        name: "Banking & Finance",
        desc: "We offer front-end development services to financial and banking institutions as we have a skilled team of front-end programmers who can easily handle the complexity of the project and are able to create high-quality web solutions to meet your business needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "//banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers who are familiar with the insurance industry and can provide you with the best possible solution for your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel & Hospitality",
        desc: "With decades of experience working with customer-focused solutions, we have become renowned for developing world-class security, reliability, and digitalization technology. Our state-of-the-art systems allow travel agencies to get a comprehensive view of an entire business without hassle.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Our Front end development services for Transport and Logistics industry are carefully crafted by keeping in mind the specific needs of the transport industry, therefore we develop responsive websites and apps that are user-friendly and easy to use.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    },
    {
        name: "Healthcare",
        desc: "We are experts in frontend development services for the healthcare industry. We ensure that our clients receive a modern, responsive website with a clean and unique design. At Hidden Brains UK we offer a complete range of frontend services to suit your needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retailers and eCommerce",
        desc: "Shifting their focus away from just websites to having an online store has helped many companies with backend development services to focus on frontend design. And at Hidden Brains UK we can help you create a perfect UI/UX for your eCommerce store.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "We at Hidden Brains UK have an experienced Front-end app development team dedicated to employing cutting-edge front-end development trends to produce software that you can easily integrate into your company and allow you to manage the task.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    },
    {
        name: "Real Estate",
        desc: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes. Whether you need an app to help with property listings, transactions, or payments, we can develop a solution that meets your needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "/real-estate"
    },
    {
        name: "ECommerce",
        desc: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs. Whether you're looking to improve your customer's experience or increase sales, we can help you achieve your goals. Our team will work with you to create an app that meets your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends and technologies. That's where Hidden Brains comes in. We provide app development services for the online booking industry, so you can focus on what you do best - running your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses in the Social Networking industry, so we know what it takes to create a successful app.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes, from small businesses to Fortune 500 companies. And we can tailor our services to fit your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "As one of the leading Front-end development firms in the UK, our prime aim is to make the learning process interactive, convenient, and cost-effective with our tailor-made digital solutions. We create a user interface that is hassle-free and easy to access.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business, whether it's a utility company, an oil and gas producer, or a renewable energy provider. Our team works with you to create an app that meets your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    }
];

export const FRONT_END_WHY_CHOOSE_HB: ReasonItem[] = [
    {
        icon: <Users size={32} />,
        title: "500+ App Development Team",
        desc: "Our dedicated team of Frontend coders are highly experienced, solution-oriented, and capable of providing industry-leading solutions to help your business stand out."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Complete Transparency",
        desc: "We consistently maintain project transparency by sharing accurate details with you whether you hire our team, a dedicated frontend development team, or a dedicated frontend developer."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "No Obligation Quote",
        desc: "We can help you to estimate the cost of the development process of your app, whether it's an existing one or you want to start from scratch. We have experts available."
    },
    {
        icon: <Workflow size={32} />,
        title: "Smooth Projects Management",
        desc: "As one of the best front-end development agencies in the UK, Hidden Brains upholds the highest standards of quality by monitoring your project throughout its development and keeping you informed."
    },
    {
        icon: <Lock size={32} />,
        title: "Project Security with an NDA",
        desc: "Your project details will be held in confidence with us as we signed an agreement with our clients to respect your project privacy and not to disclose your confidential information."
    },
    {
        icon: <Zap size={32} />,
        title: "Flexible Engagement Models",
        desc: "As a renowned Frontend app development company in the UK, we offer our clients three types of engagement models based on hourly, part-time, and full-time billing."
    }
];

export const FRONT_END_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-custom", label: "What are Front-End Development Services?" },
    { id: "what-programming-languages", label: "Why is Interactive Frontend Design Important For Your Business?" },
    { id: "why-should-businesses", label: "What Are The Best Front-End Development Technologies?" }
];

export const FRONT_END_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-custom",
        title: "What are Front-End Development Services?",
        content: "If you want to create a website that is attractive and easy for users to interact with, you need to hire a company that specializes in front-end development services. Front end developers are responsible for building the user interface that is seen by site visitors and for developing the site’s design. They work closely with other specialists in order to develop an appealing and intuitive website that will increase conversion rates and customer satisfaction."
    },
    {
        id: "what-programming-languages",
        title: "Why is Interactive Frontend Design Important For Your Business?",
        content: "Interactive Frontend Design is important for your business because it allows you to provide a better experience to your customers. Interactive Frontend Design offers a much more intuitive way to browse and purchase products, which will ultimately lead to an increase in sales. If you want to offer your customers the best experience possible, make sure that you invest in interactive front-end design."
    },
    {
        id: "why-should-businesses",
        title: "What Are The Best Front-End Development Technologies?",
        content: "The best front-end development technologies are always changing. At the time of this writing, ReactJS is one of the most popular front-end development languages. It’s a JavaScript framework that uses Reactive Programming to create interactive components in your web app. React has been used on sites like Facebook, Instagram, and many more. But what if you’re not into JavaScript? What if you want a language that has all of the benefits but doesn’t require knowledge of JS?."
    }
];

export const FRONT_END_PROCESS_STEPS: ProcessStep[] = [
    { title: "Ideation / Preparing Design Layout", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon1.png" },
    { title: "Business Requirement Analysis", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon2.png" },
    { title: "Designing of Prototype & Reviewing", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon3.png" },
    { title: "Programming / Coding for Web App", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon4.png" },
    { title: "Testing & Launch of Web App", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon5.png" }
];

export const FRONT_END_FAQ = [
    {
        question: "Why Choose Hidden Brains UK For Front-end Development Services?",
        answer: "Our team of experienced frontend developers can help you to deliver successful customer satisfaction, build the right conversion, and support the retention process for your organization. Our team builds modern UI/UX-driven mobile and web applications that ensure our customers’ businesses will achieve faster ROI through engaging and intuitive interfaces."
    },
    {
        question: "How Much Do Front-end Development Services Cost?",
        answer: "Hidden Brains’ Pricing is straightforward, with fixed prices that are based on your requirements. There are no surprises and no hidden extras. All you need to do is decide how many hours you want a developer to work for you. Usually, the hourly cost of front-end developers is ranging between $15 to $25+."
    }
];
