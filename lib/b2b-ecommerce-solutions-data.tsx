import {
    Workflow,
    Users,
    Globe,
    Truck,
    Layers,
    Megaphone,
    HeartPulse,
    Plane,
    Film,
    GraduationCap,
    Store,
    ShieldCheck,
    Globe as BookingIcon,
    Landmark,
    Building2,
    ShoppingCart as EcomIcon
} from "lucide-react";

export const B2B_ECOMMERCE_HERO = {
    title: "B2B eCommerce Solutions",
    description: "Turn Your Business Processing Easier and Faster for Manufacturers, Wholesalers and Distributors. We offer technical expertise, global footprints and insights to take your app idea to the next level.",
    ctaText: "Get in Touch",
    ctaHref: "/contact"
};

export const B2B_ECOMMERCE_LIST_ITEMS = [
    "Expert B2B eCommerce Developers",
    "High-performance Solutions",
    "Competitive Pricing",
    "Flexible Client Engagement Models",
    "Quality-driven Processes",
    "Strategic Consulting",
    "On-time Delivery",
    "Improved Efficiency",
];

export const B2B_ECOMMERCE_INTRO = {
    title: "B2B eCommerce Software Solutions",
    content: [
        "Hidden Brains is an eCommerce solutions provider company specializing in B2B implementations with the aim to deliver high-performance B2B eCommerce solutions. Our core focus is on providing end-to-end B2B eCommerce solutions right from consulting, intuitive design, and robust custom web application development capabilities.",
        "We are B2B eCommerce solutions specialists, passionate about delivering the best results to clients. Our team of B2B eCommerce web programmers, UI designers and marketers deliver B2B eCommerce solutions that are uniquely tailored to meet your business needs."
    ],
    secondaryTitle: "Custom B2B eCommerce Software and Application",
    secondaryContent: [
        "We have successfully completed several B2B eCommerce software and application projects globally to help B2B eCommerce development companies overcome operational, strategic and organizational issues. With our comprehensive range of B2B eCommerce software Solutions, we provide world-class user-friendly search and customer experience that convert shoppers into loyal customers.",
        "Whether you are looking for B2B eCommerce application solutions or B2B eCommerce Software Solutions, our B2B eCommerce services are aimed at helping businesses sell more products."
    ]
};

export const B2B_ECOMMERCE_SERVICES = [
    {
        title: "Custom Process Development",
        icon: <Workflow className="w-8 h-8" />,
        color: "blue"
    },
    {
        title: "Enterprise Collaboration Tools",
        icon: <Users className="w-8 h-8" />,
        color: "pink"
    },
    {
        title: "Internet Marketing Support",
        icon: <Globe className="w-8 h-8" />,
        color: "dark"
    },
    {
        title: "Logistics and Shipping Integration",
        icon: <Truck className="w-8 h-8" />,
        color: "green"
    },
    {
        title: "Multi-store Architecture",
        icon: <Layers className="w-8 h-8" />,
        color: "yellow"
    },
    {
        title: "Product Promotion Tools",
        icon: <Megaphone className="w-8 h-8" />,
        color: "purple"
    }
];

export const B2B_ECOMMERCE_INDUSTRIES = [
    {
        name: "Healthcare",
        icon: <HeartPulse className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#f29111]"
    },
    {
        name: "Logistics",
        icon: <Truck className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#14133b]"
    },
    {
        name: "Retail",
        icon: <Store className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#e91e8c]"
    },
    {
        name: "Social",
        icon: <Users className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#f2b600]"
    },
    {
        name: "Education",
        icon: <GraduationCap className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#80519a]"
    },
    {
        name: "Media",
        icon: <Film className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#0bb28a]"
    },
    {
        name: "Online Booking",
        icon: <BookingIcon className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#14133b]"
    },
    {
        name: "Travel",
        icon: <Plane className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#e91e8c]"
    },
    {
        name: "Insurance",
        icon: <ShieldCheck className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#00bcd4]"
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
        icon: <EcomIcon className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#9c27b0]"
    }
];

export const B2B_ECOMMERCE_TESTIMONIALS = [
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
    },
    {
        quote: "I felt Hidden Brains was very professional and understood the issues I needed resolving. They have very up-to-date knowledge of the latest tech and ways of doing things. Lots of understandable quotes which allowed me to hone the development to a very usable product; they were very patient while I decided what I wanted.",
        author: "Mr. Rupert S.",
        location: "United Kingdom",
        title: "Referred to Hidden Brains by one of your customers."
    }
];
