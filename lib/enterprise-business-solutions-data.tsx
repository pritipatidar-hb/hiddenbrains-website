import {
    LayoutGrid,
    Briefcase,
    ShieldCheck,
    Settings,
    Layers,
    Database,
    Stethoscope,
    GraduationCap,
    Play,
    Share2,
    Landmark,
    Truck,
    ShoppingBag,
    Shield,
    Calendar,
    Plane,
    Building2,
    Globe
} from "lucide-react";

export const ENTERPRISE_HERO = {
    title: "Enterprise Business Solutions",
    description: "Custom Web and Mobile App Development Services for Startups, Mid-Size Businesses & Enterprises",
    ctaText: "Get in Touch",
    ctaHref: "/contact"
};

export const ENTERPRISE_INTRO = {
    title: "Proven Enterprise Business Solutions",
    content: [
        "Hidden Brains is known for providing scalable, reliable, and robust enterprise business solutions in accordance to the needs of clients. Our proven expertise in the field of development and decades of experience make us the most preferred and safe choice of businessmen.",
        "We understand that thoughtfully developed enterprise architecture can support the strategy, analysis and planning phases. Proven enterprise business services of Hidden Brains enable the organizations to lower the maintenance cost, protect IT infrastructure and ensure secured access to the information across the organization."
    ],
    secondaryTitle: "Experienced Enterprise Business Solution Team of Hidden Brains",
    secondaryContent: [
        "Our team of talented professionals is well-versed in coming up with innovative enterprise software solutions such as ERP, SCM, CRM, ECM and TMS. Such integrated and managed systems help clients in increasing productivity, thereby leading to more returns in the future.",
        "Our team welcomes clients that have nothing more to their advantage than an idea. The realization of an idea to build a functional enterprise business solution is solely the responsibility of this team."
    ]
};

export const ENTERPRISE_LIST_ITEMS = [
    "Team of Talented Professionals",
    "Best Price in Market",
    "Focus on Quality of Services",
    "Consistency in Work",
    "Client-Centric Engagement Model",
    "Proven Methodologies & Solutions",
    "Bespoke & Integrated Solutions",
    "100% Client Satisfaction",
    "Transparency in Working"
];

export const ENTERPRISE_SERVICES = [
    {
        title: "Enterprise Resource Planning",
        icon: <LayoutGrid className="w-10 h-10" />,
        color: "blue"
    },
    {
        title: "Enterprise Project Management",
        icon: <Briefcase className="w-10 h-10" />,
        color: "pink"
    },
    {
        title: "Enterprise Security Solutions",
        icon: <ShieldCheck className="w-10 h-10" />,
        color: "dark"
    },
    {
        title: "Enterprise Resource Management",
        icon: <Settings className="w-10 h-10" />,
        color: "green"
    },
    {
        title: "Enterprise Architecture Design",
        icon: <Layers className="w-10 h-10" />,
        color: "yellow"
    },
    {
        title: "Information Management System",
        icon: <Database className="w-10 h-10" />,
        color: "purple"
    }
];

export const ENTERPRISE_INDUSTRIES = [
    { name: "Healthcare", icon: <Stethoscope className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#f29111]" },
    { name: "Education", icon: <GraduationCap className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#80519a]" },
    { name: "Media", icon: <Play className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#0bb28a]" },
    { name: "Social", icon: <Share2 className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#f2b600]" },
    { name: "Banking", icon: <Landmark className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#0bb28a]" },
    { name: "Logistics", icon: <Truck className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#14133b]" },
    { name: "Retail", icon: <ShoppingBag className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#e91e8c]" },
    { name: "Insurance", icon: <Shield className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#f29111]" },
    { name: "Online Booking", icon: <Calendar className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#14133b]" },
    { name: "Travel", icon: <Plane className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#e91e8c]" },
    { name: "Real Estate", icon: <Building2 className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#f2b600]" },
    { name: "eCommerce", icon: <Globe className="text-white" size={28} strokeWidth={1.5} />, color: "bg-[#9c27b0]" }
];

export const ENTERPRISE_TESTIMONIALS = [
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
