import {
    ShoppingBag,
    Code2,
    ShoppingCart,
    Palette,
    Layout,
    GraduationCap,
    HeartPulse,
    Plane,
    Film,
    Truck,
    BookOpen,
    Users,
    Store,
    ShieldCheck,
    Globe,
    Landmark,
    Building2,
    Briefcase
} from "lucide-react";

export const MAGENTO_HERO = {
    title: "Magento Development Services",
    excerpt: "Delivering World Class Customised Robust Based Magento e-Commerce Solutions",
    cta: "Get in Touch"
};

export const MAGENTO_LIST_ITEMS = [
    "Highly Qualified Resources",
    "Fast-Time-To-Market",
    "Constant Quality Check",
    "Competitive Pricing",
    "Client-Centric Engagement Models",
    "Technical Consultation",
    "Fully Transparent Working Process",
    "Result-Driven Approach",
    "Integrated Processes"
];

export const MAGENTO_SERVICES = [
    {
        title: "Magento Ecommerce Design",
        desc: "Creating visually stunning and user-centric designs tailored specifically for the Magento platform to drive engagement.",
        icon: <Palette size={40} />
    },
    {
        title: "Magento Ecommerce Development",
        desc: "Building robust, scalable, and high-performance eCommerce stores using the power of Magento 2 framework.",
        icon: <Code2 size={40} />
    },
    {
        title: "Magento Shopping Cart Development",
        desc: "Developing custom shopping cart solutions that ensure a smooth and secure checkout process for your customers.",
        icon: <ShoppingCart size={40} />
    },
    {
        title: "Magento Theme Designs and Integration",
        desc: "Designing custom themes and integrating them seamlessly to match your brand identity and business needs.",
        icon: <Layout size={40} />
    },
    {
        title: "Magento Theme Development",
        desc: "Crafting fully responsive and optimized themes from scratch to provide a unique shopping experience.",
        icon: <ShoppingBag size={40} />
    },
    {
        title: "Magento Store Management Training",
        desc: "Empowering your team with the knowledge to manage your Magento store efficiently, including inventory and orders.",
        icon: <GraduationCap size={40} />
    }
];

export const MAGENTO_INDUSTRIES = [
    {
        name: "Healthcare",
        icon: <HeartPulse className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#f29111]"
    },
    {
        name: "Travel",
        icon: <Plane className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#e91e8c]"
    },
    {
        name: "Media",
        icon: <Film className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#0bb28a]"
    },
    {
        name: "Logistics",
        icon: <Truck className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#14133b]"
    },
    {
        name: "Education",
        icon: <GraduationCap className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#80519a]"
    },
    {
        name: "Social",
        icon: <Users className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#f2b600]"
    },
    {
        name: "Retail",
        icon: <Store className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#e91e8c]"
    },
    {
        name: "Insurance",
        icon: <ShieldCheck className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#00bcd4]"
    },
    {
        name: "Online Booking",
        icon: <Globe className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#14133b]"
    },
    {
        name: "Banking",
        icon: <Landmark className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#0bb28a]"
    },
    {
        name: "Real Estate",
        icon: <Building2 className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#f2b600]"
    },
    {
        name: "eCommerce",
        icon: <ShoppingCart className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#9c27b0]"
    }
];

export const MAGENTO_WHY_CHOOSE = [
    {
        title: "Certified Developers",
        desc: "Our team consists of certified Magento developers with deep expertise in the platform's architecture.",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "Fast-Time-To-Market",
        desc: "We follow agile methodologies to deliver high-quality Magento solutions within strict timelines.",
        icon: <Plane className="w-8 h-8" />
    },
    {
        title: "Technical Consultation",
        desc: "Providing strategic advice on how to leverage Magento features to achieve your specific business goals.",
        icon: <Users className="w-8 h-8" />
    }
];

export const MAGENTO_GUIDE_ITEMS = [
    { id: "magento-overview", label: "Magento 2 Architecture Overview" },
    { id: "magento-performance", label: "Optimizing Magento Performance" },
    { id: "magento-security", label: "Security Best Practices" }
];

export const MAGENTO_GUIDE_DETAILS = [
    {
        id: "magento-overview",
        title: "Magento 2 Architecture Overview",
        content: "Magento 2 offers a modern architecture that supports high scalability and extensibility. It utilizes technologies like PHP 7/8, Varnish, Redis, and RabbitMQ to handle large volumes of traffic and complex business logic."
    },
    {
        id: "magento-performance",
        title: "Optimizing Magento Performance",
        content: "Performance is key for eCommerce success. We focus on image optimization, full-page caching, database tuning, and code minification to ensure your Magento store loads lightning-fast."
    },
    {
        id: "magento-security",
        title: "Security Best Practices",
        content: "We implement rigorous security measures, including regular patches, secure payment gateway integrations, and data encryption, to protect your store and customer data from vulnerabilities."
    }
];

export const MAGENTO_TESTIMONIALS = [
    {
        quote: "Working with Hidden Brains resulted in an iPhone app that met our expectations, technically as well as, graphically. Communication was smooth and prompt, we never felt left alone in the process of beta testing. And on top of that, the price was very competitive.",
        author: "Mr. Mattias H",
        location: "Hungary",
        title: "The price was very competitive"
    },
    {
        quote: "Hidden Brains have shown first class commitment to developing robust solutions for our complex business needs. Communication has always been prompt, and the turnaround time on issue resolution continues to impress me.",
        author: "Mr. Matt W.",
        location: "United Kingdom",
        title: "First class commitment"
    },
    {
        quote: "I felt Hidden Brains was very professional and understood the issues I needed resolving. They have very up-to-date knowledge of the latest tech and ways of doing things. Lots of understandable quotes which allowed me to hone the development to a very usable product; they were very patient while I decided what I wanted.",
        author: "Mr. Rupert S.",
        location: "United Kingdom",
        title: "Professional and knowledgeable"
    }
];

export const MAGENTO_FAQS = [
    {
        question: "Does Hidden Brains UK have certified Magento developers?",
        answer: "Yes, we have an expert team of certified Magento developers. You will get developers with the latest framework knowledge and expertise in Magento solutions."
    },
    {
        question: "Does your team manage the entire Magento development services process?",
        answer: "Yes, our team consists of experienced professionals with years of expertise in Magento development services, covering the full lifecycle from design to support."
    },
    {
        question: "What is the cost of Magento website development services?",
        answer: "The cost depends on various factors, including project scope, complexity, and third-party integrations. Contact us for a detailed quote tailored to your needs."
    },
    {
        question: "Why should you choose to hire Hidden Brains UK as a Magento development company?",
        answer: "We are a well-established Magento development company in the UK with a pool of expert, certified developers delivering complex projects on time."
    }
];

export const MAGENTO_PORTFOLIO = {
    subtitle: "Our Work",
    title: "Build e-Commerce Websites with Magento 2 Development Services",
    description: "We provide bespoke Magento 2 development services and build highly functional and feature-rich website that fosters business growth.",
    projects: [
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/catwalk-v2.webp",
            title: "Catwalk88",
            category: "ecommerce",
            link: "https://www.hiddenbrains.com/womens-clothing-website-development.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/dublin_convention.webp",
            title: "Dublin Convention Bureau",
            category: "travel-tourism",
            link: "https://www.hiddenbrains.com/dublin-convention-bureau.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/evilescape.webp",
            title: "Evil Escape Game",
            category: "game",
            link: "https://www.hiddenbrains.com/evil-escape-game-app.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/foodexpress.webp",
            title: "Food Express",
            category: "restaurant",
            link: "https://www.hiddenbrains.com/food-express.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/guesstheprice.webp",
            title: "Guess The Price",
            category: "entertainment",
            link: "https://www.hiddenbrains.com/guess-the-price-gaming-app.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/cayguide-v2.webp",
            title: "Cay Guide – Travel App for Cayman Island",
            category: "travel-tourism",
            link: "https://www.hiddenbrains.com/cayguide.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/neoxe.webp",
            title: "Neoxeo App",
            category: "entertainment",
            link: "https://www.hiddenbrains.com/online-internet-radio-app-development.html",
        },
        {
            image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/09/werko.webp",
            title: "Werko",
            category: "manufacturing",
            link: "https://www.hiddenbrains.com/portal-development-for-contractors-craftsman.html",
        },
    ],
};
