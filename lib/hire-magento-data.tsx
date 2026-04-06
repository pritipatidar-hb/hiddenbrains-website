import {
    Code,
    ShoppingCart,
    Palette,
    Puzzle,
    ArrowUpCircle,
    ArrowRightLeft,
    Wrench,
    Users,
    ShieldCheck,
    FileText,
    Zap,
    Lock,
    Search,
    RefreshCw,
    Database,
    Globe
} from "lucide-react";
import React, { ReactNode } from "react";
import { IndustryItem } from "./hire-dedicated-developers-data";

export interface Proposition {
    title: string;
    description: string;
    icon: ReactNode;
}

export const HIRE_MAGENTO_HERO = {
    title: "Hire Magento Developers In The UK",
    excerpt: "Need help creating an eCommerce website for your business? We will help you convert your idea into reality by hiring a Magento developer. We utilize the latest Magento updates, giving us robust and scalable applications with phenomenal functionalities and interactive user experiences.",
    cta: "Get in Touch"
};

export const HIRE_MAGENTO_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const HIRE_MAGENTO_SERVICES = [
    {
        title: "Custom Magento Shopping Cart Development",
        description: "Our Magento developers work to help you design the perfect bespoke eCommerce store to suit the needs of your customers and optimize your profits. You can share your project details with our experts to get a cost estimation.",
        icon: <ShoppingCart className="w-12 h-12 text-[#f29111]" />
    },
    {
        title: "Custom Magento Theme Development",
        description: "Our Magento themes are pixel-perfect, intuitive, mobile-friendly, and adaptable to every eCommerce industry to give our customers an exemplary customer experience that adheres to Magento standards.",
        icon: <Palette className="w-12 h-12 text-[#f29111]" />
    },
    {
        title: "Magento Extension Development",
        description: "Get the most out of your eCommerce platform with a Magento extension that is specially built for you. We have a wide range of Magento extensions that can be used to add extra functionality to your online store.",
        icon: <Puzzle className="w-12 h-12 text-[#f29111]" />
    },
    {
        title: "Magento Version Upgrade",
        description: "Are you using an outdated version of Magento? We can upgrade your solution seamlessly to the latest version. Our team will review your system, update it, and make sure that everything is working as expected!",
        icon: <ArrowUpCircle className="w-12 h-12 text-[#f29111]" />
    },
    {
        title: "Migration to Magento",
        description: "Upgrade your existing online store to the advanced Magento framework to increase sales and revenue. With our developers’ expertise, you can build an eCommerce platform that is customizable, scalable, secure, and mobile-friendly.",
        icon: <ArrowRightLeft className="w-12 h-12 text-[#f29111]" />
    },
    {
        title: "Magento Maintenance and Support",
        description: "Resolve all your Magento-related queries and issues by hiring our highly-skilled Magento developers to create your Magento solutions. No matter how complex your issues are, our experts are always ready at your service.",
        icon: <Wrench className="w-12 h-12 text-[#f29111]" />
    }
];

export const HIRE_MAGENTO_FEATURED = [
    {
        title: "Magento Development Services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hire-open-source-developers.webp",
        icon: <Code className="w-8 h-8" />,
        items: [
            "Custom Shopping Cart",
            "Theme Development",
            "Extension Development",
            "Version Upgrade",
            "Migration to Magento",
            "Maintenance & Support"
        ]
    },
    {
        title: "Industries We Serve",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image4.webp",
        icon: <Globe className="w-8 h-8" />,
        items: [
            "Healthcare",
            "Retail & eCommerce",
            "Media & Entertainment",
            "Real Estate",
            "Online Booking",
            "Banking & Finance"
        ]
    },
    {
        title: "Why Hire Our Developers?",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img1.webp",
        icon: <Users className="w-8 h-8" />,
        items: [
            "500+ Expert Team",
            "Complete Transparency",
            "No-obligation Quote",
            "Smooth Management",
            "Project Security (NDA)",
            "Flexible Models"
        ]
    }
];

export const HIRE_MAGENTO_INDUSTRIES: IndustryItem[] = [
    {
        name: "Healthcare",
        desc: "Our talented Magento developers have plenty of experience and a wide range of expertise in developing tailored solutions for healthcare providers. At the moment, we have developed and delivered hundreds of IT-based healthcare solutions that work on multiple devices.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail",
        desc: "With over a decade of experience, Hidden Brains UK is considered the leading Magento development provider for retailers and companies. Our team of developers has extensive knowledge of Magento. Their solutions are designed to meet the needs of the changing retail and eCommerce industries and deliver the best eCommerce platform.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "In the Media & Entertainment industry, it is important to have an app that is not only user-friendly but also engaging. At Hidden Brains, we understand this and provide custom mobile app development services that meet these needs. Whether you need an app for music, video, or gaming, we can help.",
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
        desc: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs. Whether you're looking to improve your customer's experience or increase sales, we can help you achieve your goals.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you need an app that can keep up with the latest trends and technologies. Hidden Brains provides app development services for the online booking industry so you can focus on running your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses in the Social Networking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes and can tailor our services to fit your needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "Utilizing the latest trends and new learning methods, we can design the Magento-based, interactive eLearning experiences you've been dreaming about.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business, whether it's a utility company or provider.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    },
    {
        name: "Banking & Finance",
        desc: "Our award-winning Magento agency in the UK understands the delicacy of financial conditions and helps banks and financial institutions modernize traditional financial models.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs with experienced developers.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel & Hospitality",
        desc: "Hidden Brains is the best Magento development company in the UK when it comes to building hugely interactive Magento platforms for the travel industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Utilize our deep knowledge of industry sectors to build digital solutions that simplify mobile and complicated business problems, and make it easier for you to grow your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    }
];

export const HIRE_MAGENTO_GUIDE = [
    {
        id: "what-is-magento",
        title: "What is Magento?",
        content: "Magento is a popular eCommerce platform that helps businesses create online stores. It offers a lot of features and flexibility, which is why many businesses choose to use it. Magento can handle huge amounts of traffic without slowing down or crashing your site. There are also lots of third-party extensions available for Magento, so you can easily add functionality that would be difficult to do on your own."
    },
    {
        id: "for-which-industries-is",
        title: "For Which Industries Is Magento Development Beneficial?",
        content: "Are you planning to set up an online store? Well, that’s a great idea! Nowadays, more and more businesses are moving online because that’s where the majority of consumers are. And what better platform to build your eCommerce store on than Magento? Magento is a flexible, powerful, and user-friendly eCommerce platform that can be used for businesses of all sizes."
    },
    {
        id: "what-are-the-technical",
        title: "What Are the Technical Skills of Magento Ecommerce Developers?",
        content: "A Magento developer is proficient with all of the necessary web application programming languages like PHP, C++, HTML, etc."
    },
    {
        id: "what-is-the-language",
        title: "What is the Language Of Written Magento?",
        content: "Magento is a PHP web framework that was created based on the Zend Framework and is open source. This framework also makes use of object-oriented programming principles like extension and flexibility and is designed with ease of extensibility in mind."
    }
];

export const HIRE_MAGENTO_FAQ = [
    {
        question: "Why Should You Hire Magento Developers in The UK From Hidden Brains?",
        answer: "Hidden Brains UK has a staff of highly-skilled Magento developers that provide first-rate work. Customer satisfaction is the main priority. We’re mindful of the initial phase, implementing, testing, and beyond."
    },
    {
        question: "What Is the Process of Hiring a Magento Developer at Hidden Brains UK?",
        answer: "If you’d like to see what we offer and what services we can perform for you, send us an email with your contact information."
    },
    {
        question: "What Industries Are Covered by Magento Developers?",
        answer: "The Magento 2 developers at Hidden Brains UK can handle almost every industry, including Real Estate, Education & Learning, Business & Finance, eCommerce, Energy & Utilities, Travel & Hospitality, Medical & Healthcare, Fitness & Wellness, etc."
    },
    {
        question: "How Much Does It Cost to Create a Magento Ecommerce Platform?",
        answer: "In the UK, the average cost of hiring a Magento developer is £20 per hour. However, the total cost will vary depending on the size and complexity. Generally expect £10,000 to £15,000 for basic installation, with costs increased for customizations."
    }
];

export const HIRE_MAGENTO_MODELS = [
    {
        title: "Part-Time",
        features: [
            "4 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ],
        active: false
    },
    {
        title: "Full Time",
        features: [
            "8 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ],
        active: false
    },
    {
        title: "Hourly",
        features: [
            "Hire Developer on Ad-hoc basis (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 25 Hours Commitment"
        ],
        active: true
    }
];

export const HIRE_MAGENTO_PROPS: Proposition[] = [
    {
        title: "500+ App Development Team",
        description: "With Hidden Brains UK, you can hire Magento developers according to their experience and expertise since we have a handpicked team of developers.",
        icon: <Users className="w-10 h-10" />
    },
    {
        title: "Complete Transparency",
        description: "To maintain transparency with our clients, our Magento developers in the UK provide regular updates and are available to chat 24/7 over Skype or email.",
        icon: <ShieldCheck className="w-10 h-10" />
    },
    {
        title: "No-obligation Quote",
        description: "If you need to upgrade an existing app or create a new one, we will give you an accurate estimate of the cost and timeline.",
        icon: <FileText className="w-10 h-10" />
    },
    {
        title: "Smooth Projects Management",
        description: "When you work with Hidden Brains UK to hire a Magento developer, you will be able to trust that you are in the care of experts.",
        icon: <Zap className="w-10 h-10" />
    },
    {
        title: "Project Security with an NDA",
        description: "To maintain the confidentiality of your project with us, we will sign an NDA with our clients and adhere to security measures to protect your privacy.",
        icon: <Lock className="w-10 h-10" />
    },
    {
        title: "Flexible Engagement Models",
        description: "We offer our clients the opportunity to hire Magento developers on three different types of contracts- hourly, part-time, and full-time.",
        icon: <RefreshCw className="w-10 h-10" />
    }
];
