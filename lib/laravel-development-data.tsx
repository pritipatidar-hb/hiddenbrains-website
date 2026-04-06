import React from "react";
import { Users, Shield, Lightbulb, Workflow, Lock, Network, Globe, Smartphone, Cloud, MessageSquare, Database, RefreshCw, Layers, ShieldCheck, Settings, ShoppingCart, Code2, Link, Zap } from "lucide-react";
import { GuideItem, GuideDetail } from "@/types/components/shared/GuideSection";
import { FAQItem } from "@/types/components/shared/FAQSection";

export const LARAVEL_HERO = {
    title: "Top Laravel Development Agency in the UK",
    excerpt: "As the most trusted Laravel development company in the UK, we can help you succeed with cutting-edge Laravel solutions. All of our developers are well-trained, professional, motivated, top-rated, and experts in Laravel development. Reach out to us for assistance!",
    cta: "Get in Touch"
};

export const LARAVEL_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const LARAVEL_SERVICES = [
    {
        title: "Custom Laravel Development",
        desc: "You’ll be in great hands with our Laravel developers, who have in-depth knowledge of Laravel and will be able to deliver business-oriented and pocket-friendly web applications that are tailor-made to suit your business needs.",
        icon: <Code2 className="w-8 h-8" />
    },
    {
        title: "Laravel API Development",
        desc: "We provide custom RESTful APIs for your website so that it can be connected to Android and iPhone apps or 3rd party systems. Hands-on experience building APIs that enable faster communication between mobile apps and websites.",
        icon: <Link className="w-8 h-8" />
    },
    {
        title: "Support and Maintenance",
        desc: "We provide excellent Laravel development services as well as post-development support and maintenance, all at a very modest price, to make sure that your website users have a seamless experience at all times.",
        icon: <Settings className="w-8 h-8" />
    },
    {
        title: "Laravel Update and Migration",
        desc: "It doesn’t matter if your website is built on PHP frameworks or not; our developers will be able to transition your data from your current website without missing a bit, thanks to cutting-edge migration technologies.",
        icon: <RefreshCw className="w-8 h-8" />
    },
    {
        title: "3rd Party Integration",
        desc: "If you need payment gateways, social logins, maps, customer support APIs, or any other 3rd party service integrated, our Laravel developers can do it for you in a timely manner and for a competitive price.",
        icon: <Layers className="w-8 h-8" />
    },
    {
        title: "Laravel eCommerce Solutions",
        desc: "Looking to create an easy-to-use eCommerce app? Expert Laravel developers at Hidden Brains UK can create an eye-catching and lightning-fast website that will increase your ROI and drive higher user engagement.",
        icon: <ShoppingCart className="w-8 h-8" />
    }
];

export const LARAVEL_REASONS = [
    {
        title: "500+ App Development Team",
        description: "We are backed by a dedicated team of developers that are highly experienced, solution-oriented, and have the capability to provide industry-leading solutions that will help you stand out from the competition.",
        icon: <Users className="w-8 h-8" />
    },
    {
        title: "Complete Transparency",
        description: "Whether you work with our team, hire a dedicated Laravel development team, or hire a Laravel developer, we consistently maintain project transparency by sharing accurate details with you.",
        icon: <Shield className="w-8 h-8" />
    },
    {
        title: "No Obligation Quote",
        description: "We can help you estimate the development costs for your project. Whether it is a planned upgrade of your existing app or you want to start from scratch, we have experts to assist you.",
        icon: <Lightbulb className="w-8 h-8" />
    },
    {
        title: "Smooth Project Management",
        description: "Hidden Brains UK is one of the best Laravel development companies when it comes to upholding standards of quality, as we oversee your project in every stage of its development and update you as needed.",
        icon: <Workflow className="w-8 h-8" />
    },
    {
        title: "Project Security with an NDA",
        description: "Your project details will remain private with us as we have signed a non-disclosure agreement with our clients and are dedicated to protecting their privacy.",
        icon: <Lock className="w-8 h-8" />
    },
    {
        title: "Flexible Engagement Models",
        description: "Being a leading Laravel app development company in the UK, we offer three contract types to our clients: hourly, part-time, and full-time engagement models.",
        icon: <Network className="w-8 h-8" />
    }
];

export const LARAVEL_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-laravel", label: "What is Laravel and Why Should You Use It?" },
    { id: "what-are-the-benefits", label: "What are the benefits of using Laravel?" },
    { id: "is-laravel-faster", label: "Is Laravel Faster Than Core PHP?" },
    { id: "why-is-laravel", label: "Why Is Laravel So Popular?" },
    { id: "how-do-i-choose", label: "How Do I Choose the Best Laravel Development Company?" }
];

export const LARAVEL_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-laravel",
        title: "What is Laravel and Why Should You Use It?",
        content: "There are endless reasons why you should choose Laravel as your web framework. It was developed by Taylor Otwell specifically for building enterprise-level, scalable, and robust web applications."
    },
    {
        id: "what-are-the-benefits",
        title: "What are the benefits of using Laravel?",
        content: "The Laravel framework includes such advantages as built-in password access, encrypted storage for passwords in the database, best exception-handling mechanisms, and easy data migration. Furthermore, you will get a website that is future-ready, secure, and scalable with Laravel."
    },
    {
        id: "is-laravel-faster",
        title: "Is Laravel Faster Than Core PHP for building a web app development process?",
        content: "Laravel is one of the most robust PHP frameworks and, because of this, it allows web developers to build powerful and scalable web applications easily and quickly. One of the main reasons Laravel is so robust is its MVC architecture, blade templating engine, and powerful community of supporters. It can be considered a faster solution than the pure PHP language."
    },
    {
        id: "why-is-laravel",
        title: "Why Is Laravel So Popular for Web App Development?",
        content: "There are a lot of advantages to using Laravel, including its simplified syntax, ease of coding, object-oriented libraries, MVC structure, multilingual app development, seamless authentication and authorization process, and ease of integration with other technologies. It can develop highly scalable, robust, and future-ready solutions."
    },
    {
        id: "how-do-i-choose",
        title: "How Do I Choose the Best Laravel Development Company?",
        content: (
            <>
                <p>In your search for the best Laravel development company, make sure the company provides the following Laravel services:</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>Developing web applications</li>
                    <li>Solutions for Enterprises</li>
                    <li>The development of packages</li>
                    <li>Programming APIs</li>
                    <li>Services for eCommerce</li>
                    <li>Migrate your data</li>
                    <li>Providing support and maintenance</li>
                </ul>
            </>
        )
    }
];

export const LARAVEL_FAQS: FAQItem[] = [
    {
        question: "Why Should I Choose Hidden Brains UK for Laravel Development Services?",
        answer: (
            <>
                <p>There are many important factors that prove to choose Hidden Brains UK for your Laravel Development Services:</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>Expert and talented developers.</li>
                    <li>High-Quality Standards in Development Process</li>
                    <li>Transparency in offering services</li>
                    <li>Project Support</li>
                    <li>Smooth Communication</li>
                </ul>
            </>
        )
    },
    {
        question: "Do your Laravel developers help me develop an SEO-friendly Laravel web design?",
        answer: "Yes! Laravel developers and designers are skilled at creating search engine-friendly websites that consider the SEO aspects – including server-side rendering, interactive and emerging UI/UX trends, using schema mark-ups for rich snippets, developing crawlable site structures, and using URLs to make your website more SEO-friendly."
    },
    {
        question: "Are your Laravel developers available to work in different time zones?",
        answer: "Yes, you can hire dedicated Laravel programmers from us according to your time zone (EST/PST/CST/MST), deadline, and milestone. Contact us for more information."
    },
    {
        question: "What is the cost of Laravel web development at Hidden Brains UK?",
        answer: "The cost of Laravel app development is often dependent on the number of features and customizations desired. Thus, such factors should be examined by our Laravel developer before finalizing the cost for Laravel app development."
    }
];

export const LARAVEL_INDUSTRIES = [
    {
        name: "Healthcare",
        desc: "Hidden Brains UK provides Laravel-based healthcare software to entities that include hospitals, clinics, doctors, and medical technology companies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail",
        desc: "In the Retail industry, we provide app development services that help businesses increase sales and improve customer loyalty.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "At Hidden Brains UK, we have a dedicated team of Laravel app developers who employ the latest trends to deliver creative and unique software.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    },
    {
        name: "Real Estate",
        desc: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "/real-estate"
    },
    {
        name: "eCommerce",
        desc: "Our Laravel development team is an expert in providing e-commerce development solutions for any business in any industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you know that things are constantly changing. We provide app development services for the online booking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "As a leading Laravel development service provider in the UK, our prime focus is to make the educational process interactive and convenient.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    },
    {
        name: "Banking & Finance",
        desc: "At Hidden Brains UK, we are able to create high-quality banking software that incorporates client-requested features.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel & Hospitality",
        desc: "We provide top-notch app development services that will help your business stand out from the competition.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Custom logistics development services provided by Hidden Brains UK are tailored to the specific needs of our clients.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    }
];

export const LARAVEL_TESTIMONIALS = [
    {
        quote: "We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!",
        author: "Mr. Daniel Vant, UK",
        videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
    }
];

export const LARAVEL_PROJECTS = [
    {
        title: "Catwalk88",
        category: "ecommerce",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/catwalk-v2.webp",
        link: "https://www.hiddenbrains.com/womens-clothing-website-development.html"
    },
    {
        title: "Dublin Convention Bureau",
        category: "travel-tourism",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/dublin_convention.webp",
        link: "https://www.hiddenbrains.com/dublin-convention-bureau.html"
    },
    {
        title: "Evil Escape Game",
        category: "game",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/evilescape.webp",
        link: "https://www.hiddenbrains.com/evil-escape-game-app.html"
    },
    {
        title: "Food Express",
        category: "restaurant",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/foodexpress.webp",
        link: "https://www.hiddenbrains.com/food-express.html"
    },
    {
        title: "Guess The Price",
        category: "entertainment",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/guesstheprice.webp",
        link: "https://www.hiddenbrains.com/guess-the-price-gaming-app.html"
    },
    {
        title: "Cay Guide – Travel App for Cayman Island",
        category: "travel-tourism",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/cayguide-v2.webp",
        link: "https://www.hiddenbrains.com/cayguide.html"
    },
    {
        title: "Neoxeo App",
        category: "entertainment",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/neoxe.webp",
        link: "https://www.hiddenbrains.com/online-internet-radio-app-development.html"
    },
    {
        title: "Werko",
        category: "manufacturing",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/09/werko.webp",
        link: "https://www.hiddenbrains.com/portal-development-for-contractors-craftsman.html"
    }
];

