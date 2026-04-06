import {
    Settings,
    Layout,
    ArrowRightLeft,
    ShoppingCart,
    Code,
    Wrench,
    Zap,
    Users,
    ShieldCheck,
    FileText,
    Lock,
    RefreshCw,
    Search,
    CreditCard,
    Globe,
    Building2,
    Briefcase,
    PenTool,
    Lightbulb,
    Recycle,
    Workflow,
    Shield
} from "lucide-react";
import React, { ReactNode } from "react";

export interface Proposition {
    title: string;
    description: string;
    icon: ReactNode;
}

export const HIRE_WORDPRESS_HERO = {
    title: "Hire WordPress Developers in the UK",
    excerpt: "When an organization needs to hire a WordPress developer, Hidden Brains UK understands how tough it can be to find the right programmer. With our partnership, an organization can take out some of the pain by using a pre-vetted pool of talented WordPress experts who are equipped with the tools and expertise to take on the assignment.",
    cta: "Get in Touch"
};

export const HIRE_WORDPRESS_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const HIRE_WORDPRESS_EXPERTISE = [
    {
        title: "WordPress Website Development",
        description: "Our dedicated and highly skilled team of custom WordPress developers can create lead-generating WordPress websites that represent your company and business values."
    },
    {
        title: "WordPress Template Customization",
        description: "We build custom WordPress themes that are responsive, SEO-friendly, and retina ready. We use Gutenberg, ACF Pro, Elementor, APIs, and more to create a WordPress website that perfectly suits your requirements."
    },
    {
        title: "WordPress Plugin Development",
        description: "Build cost-effective and scalable plugins for WordPress that run seamlessly on all devices by hiring experienced WordPress programmers at Hidden Brains and enhancing the functionality of your website."
    },
    {
        title: "API Integration and Customization",
        description: "Understanding the changing needs of the market, we strive to provide APIs and a large range of data-sync technology to help websites navigate the dynamics of digital media to help them stay competitive."
    },
    {
        title: "WooCommerce Development",
        description: "To attract customers, what better way than to use WooCommerce? And to bring your eCommerce web development requirements to life, hire expert WordPress coders online & use WooCommerce."
    },
    {
        title: "WordPress Migration Services",
        description: "With our WordPress programmers, you can develop, host, and move your WordPress website to another server or host without any hassle."
    }
];

export const HIRE_WORDPRESS_INDUSTRIES = [
    {
        name: "Healthcare",
        desc: "Our WordPress coders have created hundreds of WordPress solutions in the healthcare sector using technologies such as AR, AI, etc. to save time during treatment.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail & Ecommerce industries",
        desc: "Taking advantage of the ideal software solution for your business is easily achieved by working with WordPress programmers who are committed to meeting or exceeding standards in safety and security when designing their solutions.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail.html"
    },
    {
        name: "Media & Entertainment",
        desc: "In the Media & Entertainment industry, it is important to have an app that is not only user-friendly but also engaging. At Hidden Brains, we understand this and provide custom mobile app development services.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment.html"
    },
    {
        name: "Real Estate",
        desc: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes. Whether you need an app for property listings, transactions, or payments.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "//real-estate"
    },
    {
        name: "Banking & Finance",
        desc: "By recruiting WordPress developers from our company, you will be assured of high-end quality FinTech solutions. Our coders have developed thousands of applications to process financial data securely.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "//banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance.html"
    },
    {
        name: "Travel & Hospitality",
        desc: "Hidden Brains UK enables you to hire WordPress programmers that ensure your web application provides a consistent travel experience in real-time.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "//travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Utilize our deep knowledge of industry sectors to build digital solutions that simplify mobile and complicated business problems.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "//logistics"
    },
    {
        name: "ECommerce",
        desc: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce.html"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "//online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business. We've worked with all types of businesses in the Social Networking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking.html"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "//manufacturing"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "//energy"
    }
];

export const HIRE_WORDPRESS_PROPS = [
    {
        title: "500+ App Development Team",
        description: "We have a team of highly-trained WordPress developers, analysts, and project managers that are always just a call away to deliver cutting-edge solutions.",
        icon: <Users className="w-10 h-10" />
    },
    {
        title: "Complete Transparency",
        description: "Keeping our clients fully updated on every stage of development and production is one of Hidden Brains UK's core values.",
        icon: <ShieldCheck className="w-10 h-10" />
    },
    {
        title: "No Obligation Quote",
        description: "If you want to make your existing website more useful or are starting from scratch, our team of professionals can estimate the cost.",
        icon: <Wrench className="w-10 h-10" />
    },
    {
        title: "Smooth Projects Management",
        description: "The web developers at Hidden Brains UK are capable professionals who will handle your project with care and make sure to lead it in the right way.",
        icon: <Lightbulb className="w-10 h-10" />
    },
    {
        title: "Project Security with an NDA",
        description: "The information you provide us will remain confidential because we will sign a non-disclosure agreement with you.",
        icon: <ShieldCheck className="w-10 h-10" />
    },
    {
        title: "Flexible Engagement Models",
        description: "The needs of our clients have changed, therefore we offer them the opportunity to hire a WordPress developer on fixed, hourly or dedicated billing.",
        icon: <Workflow className="w-10 h-10" />
    }
];

export const HIRE_WORDPRESS_PROCESS = [
    {
        id: "01",
        title: "Conceptualization & Requirement Gathering",
        icon: <Lightbulb className="w-10 h-10" />
    },
    {
        id: "02",
        title: "Analysis of Requirement & Design",
        icon: <Search className="w-10 h-10" />
    },
    {
        id: "03",
        title: "WordPress Development & Testing",
        icon: <Code className="w-10 h-10" />
    },
    {
        id: "04",
        title: "WordPress Project Deployment",
        icon: <Globe className="w-10 h-10" />
    },
    {
        id: "05",
        title: "Upgrades & App Support Services",
        icon: <RefreshCw className="w-10 h-10" />
    }
];

export const HIRE_WORDPRESS_FAQ = [
    {
        question: "How Can I Hire WordPress Developers From Hidden Brains UK?",
        answer: "Interested in hiring a WordPress developer? Request a quote from Hidden Brains UK. We will be in touch with you as soon as possible in order to guide you on the next steps."
    },
    {
        question: "What Type of WordPress Projects Can I Get Hidden Brains?",
        answer: "We work with clients from all over the world, and we have worked on projects from a variety of industries, including education, e-commerce, finance, and health care."
    },
    {
        question: "Can I Hire a Dedicated WordPress Development Team At Hidden Brains?",
        answer: "Yes Of course! You can always hire a WordPress expert to work on your project or, if you're really in a bind, hire a WordPress team from Hidden Brains UK."
    },
    {
        question: "What Will Be the Cost Of Hiring WordPress Developers In The UK?",
        answer: "Dedicated WordPress developers start at USD $15 to $25+ per month. Cost can also be based on hourly, weekly, or project-based rates with flexible hiring models."
    }
];

export const HIRE_WORDPRESS_MODELS = [
    {
        title: "Fixed",
        price: "$99",
        features: [
            "Easy hiring of experts",
            "Dedicated Team of experts",
            "Cost-effective options",
            "Low-risk involved",
            "Monthly billing"
        ]
    },
    {
        title: "Hourly",
        price: "$99",
        features: [
            "Complete control of the team",
            "Flexible project deadlines",
            "Fixed project requirements",
            "Weekly billing",
            "Ideal for small projects"
        ],
        active: true
    },
    {
        title: "Dedicated",
        price: "$99",
        features: [
            "Full-cycle solution",
            "Complete control over the project",
            "Hassle-Free Team Onboarding",
            "Complete app development team",
            "Monthly billing"
        ]
    }
];

export const HIRE_WORDPRESS_GUIDE = [
    {
        id: "how-do-i",
        title: "What Is WordPress?",
        content: "WordPress is a free and open-source content management system (CMS) based on PHP and MySQL. WordPress was first released in 2003 by Matt Mullenweg. As of January 2017, WordPress has a market share of about 30% and over 60 million websites worldwide use it as their CMS."
    },
    {
        id: "what-is-the-average",
        title: "What Are The Features of WordPress Development?",
        content: "WordPress development is a popular option for startups because of its easy-to-use interface, built-in SEO tools, and security features. The platform also has a large variety of themes and plugins to choose from, so you can customize your website to fit your brand. Themes are customizable templates that give users an idea of how their site will look when it's finished."
    },
    {
        id: "is-wordpress-worth-for",
        title: "Is WordPress Worth For Developing E-commerce Website?",
        content: "It is not worth it to use WordPress for developing e-commerce website. If you want to develop an e-commerce website, you need a more robust platform. WordPress is primarily a blogging platform. You will have to find plugins and other resources in order to create a functional website that sells products and services."
    }
];
