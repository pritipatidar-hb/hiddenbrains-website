import {
    CreditCard,
    ShieldCheck,
    Globe,
    Receipt,
    Music,
    ShoppingCart,
    Timer,
    CheckCircle,
    Zap,
    DollarSign,
    HeartPulse,
    Plane,
    Film,
    Truck,
    GraduationCap,
    Users,
    Store,
    ShieldCheck as InsuranceIcon,
    Globe as BookingIcon,
    Landmark,
    Building2,
    ShoppingCart as EcomIcon
} from "lucide-react";

export const PAYMENT_GATEWAY_HERO = {
    title: "Payment Gateway Integration services",
    description: "Hidden Brains UK offers secure and reliable payment gateway integration services to help businesses accept online payments smoothly and safely. Our experts integrate trusted payment gateways into web and mobile applications, ensuring fast transactions, data security, and a seamless checkout experience. We focus on building payment solutions that enhance customer trust while supporting business growth.",
    ctaText: "Get in Touch",
    ctaHref: "/contact"
};

export const PAYMENT_GATEWAY_LIST_ITEMS = [
    "22+ Years of Experience",
    "Expert Team of Developers",
    "Strategic Consulting",
    "Improved Efficiency",
    "Competitive Pricing",
    "Security and Scalability",
    "Quality-driven Processes",
    "On-time Delivery",
    "High-performance Solutions",
];

export const PAYMENT_GATEWAY_INTRO = {
    title: "Payment Gateway Integration Solution",
    content: [
        "Hidden Brains provides secure and trusted payment gateway integration services for businesses across the globe. We offer a wide range of services that includes from retail shopping site, subscription-based website, B2B eCommerce site, to nonprofit site, our flawless payment gateway integration service ensures a high-quality secure integration, with real-time authorization and transactions.",
    ],
    teamTitle: "Get Expert Developer for Secured Payment Gateway",
    teamContent: [
        "Our highly skilled web developers team offers unparalleled experience in integrating and handling a wide array of payment gateway solutions and ensuring prevention of security threats. We help our clients to decide how best to use technology to ensure that information technology delivers effectively on its promise.",
    ]
};

export const PAYMENT_GATEWAY_SERVICES = [
    {
        title: "Paypal",
        icon: <CreditCard className="w-8 h-8" />,
        color: "blue"
    },
    {
        title: "Authorize.net",
        icon: <ShieldCheck className="w-8 h-8" />,
        color: "pink"
    },
    {
        title: "2Checkout",
        icon: <Globe className="w-8 h-8" />,
        color: "dark"
    },
    {
        title: "iBill",
        icon: <Receipt className="w-8 h-8" />,
        color: "green"
    },
    {
        title: "iTunes",
        icon: <Music className="w-8 h-8" />,
        color: "yellow"
    },
    {
        title: "Amazon",
        icon: <ShoppingCart className="w-8 h-8" />,
        color: "purple"
    }
];

export const PAYMENT_GATEWAY_INDUSTRIES = [
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
        name: "Travel",
        icon: <Plane className="text-white" size={24} strokeWidth={1.5} />,
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
        name: "Retail",
        icon: <Store className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#e91e8c]"
    },
    {
        name: "Insurance",
        icon: <InsuranceIcon className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#00bcd4]"
    },
    {
        name: "Online Booking",
        icon: <BookingIcon className="text-white" size={24} strokeWidth={1.5} />,
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
        icon: <EcomIcon className="text-white" size={24} strokeWidth={1.5} />,
        color: "bg-[#9c27b0]"
    }
];

export const PAYMENT_GATEWAY_FEATURES = [
    {
        title: "Reliable & secure",
        description: "We ensure reliable and secure payment gateway integration to protect customer data and transactions.",
        icon: <ShieldCheck className="w-10 h-10" />
    },
    {
        title: "Enhanced customer experience",
        description: "Seamless checkout process to provide an exceptional user experience on your ecommerce store.",
        icon: <Users className="w-10 h-10" />
    },
    {
        title: "Minimize transaction time",
        description: "Optimized payment flows to ensure fast processing and reduced abandonment rates.",
        icon: <Timer className="w-10 h-10" />
    },
    {
        title: "High reliability",
        description: "Built for high availability and consistent performance across all payment methods.",
        icon: <CheckCircle className="w-10 h-10" />
    },
    {
        title: "Fast & robust",
        description: "Scalable infrastructure to handle high volume transactions without any hiccups.",
        icon: <Zap className="w-10 h-10" />
    },
    {
        title: "Cost-effective",
        description: "Efficient integration strategies that provide value for money and business growth.",
        icon: <DollarSign className="w-10 h-10" />
    }
];


export const PAYMENT_GATEWAY_TESTIMONIALS = [
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
