import {
    Cpu,
    Smartphone,
    Settings,
    Layers,
    Headphones,
    Heart,
    BookOpen,
    Tv,
    Share2,
    Building2,
    Truck,
    ShoppingCart,
    ShieldCheck,
    CalendarCheck,
    Plane,
    Home,
    Search
} from "lucide-react";

export const IOT_HERO = {
    title: "Internet of Things Solutions",
    description: "Introduce Next Level Digital Business Ecosystem that Allows You to Manage and Track Real Time Status of Different Devices",
    ctaText: "Get in Touch",
    ctaHref: "/contact"
};

export const IOT_INTRO = {
    title: "High-Performance Internet of Things (IoT) Solutions",
    content: [
        "Hidden Brains UK, is one of the leading Internet of Things companies that allows businesses to take the next leap to scale new heights in the connected world. Our comprehensive portfolio of IoT services/ solutions helps clients stay connected and manage uncontrolled devices in an effective manner.",
        "Whether it is health monitoring, connected home or wearables, we allow you to deploy IoT applications across different verticals. Our multidisciplinary team, domain knowledge, and technical expertise enable us to drive and accelerate IoT solutions from concept to completion.",
        "Hidden Brains UK ensures to meet with the increasing demands and envision a new class of futuristic IoT applications to increase productivity without sacrificing security. Our IoT solutions can help improve bottom-line results, add business value, inculcate growth and innovation and are just limited to costs or risk management."
    ],
    listItems: [
        "End-to-end IoT system",
        "Flexible Architecture to Support Connectivity",
        "Secure and Scalable IoT Solutions",
        "Cost-effective IoT Development",
        "Latest Technologies"
    ]
};

export const IOT_SERVICES = [
    {
        title: "IoT Consulting",
        icon: <Cpu className="w-12 h-12" />
    },
    {
        title: "IoT Application Development",
        icon: <Smartphone className="w-12 h-12" />
    },
    {
        title: "IoT Strategy",
        icon: <Settings className="w-12 h-12" />
    },
    {
        title: "IoT Implementation",
        icon: <Layers className="w-12 h-12" />
    },
    {
        title: "IoT Operational Support",
        icon: <Headphones className="w-12 h-12" />
    }
];

export const IOT_INDUSTRIES = [
    { name: "Healthcare", icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-blue-500" },
    { name: "Retail", icon: <ShoppingCart className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-pink-500" },
    { name: "Insurance", icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-indigo-500" },
    { name: "Travel", icon: <Plane className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-cyan-500" },
    { name: "Social", icon: <Share2 className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-orange-500" },
    { name: "Banking", icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-green-500" },
    { name: "Logistics", icon: <Truck className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-blue-600" },
    { name: "Real Estate", icon: <Home className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-yellow-500" },
    { name: "Media", icon: <Tv className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-purple-500" },
    { name: "Education", icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-red-500" },
    { name: "Online Booking", icon: <CalendarCheck className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-teal-500" },
    { name: "eCommerce", icon: <ShoppingCart className="w-8 h-8 md:w-10 md:h-10" />, color: "bg-purple-600" }
];

export const IOT_TESTIMONIALS = [
    {
        quote: "I felt Hidden Brains was very professional and understood the issues I needed resolving. They have very up-to-date knowledge of the latest tech and ways of doing things. Lots of understandable quotes which allowed me to hone the development to a very usable product; they were very patient while I decided what I wanted.",
        author: "Mr. Rupert S.",
        location: "United Kingdom",
        title: "Referred to Hidden Brains by one of your customers."
    },
    {
        quote: "Working with Hidden Brains resulted in an iPhone app that met our expectations, technically as well as, graphically. Communication was smooth and prompt, we never felt left alone in the process of beta testing. And on top of that, the price was very competitive.",
        author: "Mr. Mattias H",
        location: "Hungary",
        title: "The price was very competitive."
    },
    {
        quote: "Hidden Brains have shown first class commitment to developing robust solutions for our complex business needs. Communication has always been prompt, and the turnaround time on issue resolution continues to impress me.",
        author: "Mr. Matt W.",
        location: "United Kingdom",
        title: "First class commitment"
    }
];
