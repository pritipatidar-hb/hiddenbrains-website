import {
    Calendar,
    Stethoscope,
    Plane,
    Home,
    Clock,
    CheckCircle,
    Shield,
    Zap,
    Workflow,
    RotateCw,
    TrendingUp,
    Layout,
    Cloud,
    Bell,
    CreditCard,
    Settings,
    Users
} from "lucide-react";
import React from "react";

export const ONLINE_BOOKING_HERO = {
    title: "Online Booking Solutions in the UK",
    description: "Our booking systems development team in the UK at Hidden Brains specializes in crafting online booking systems to suit any business, large or small. Whether you’re a travel agency, hospital, or banking institution, we can help you streamline your booking system.",
    buttonText: "Get in Touch",
    buttonLink: "/contact"
};

export const ONLINE_BOOKING_INTRODUCTION = {
    title: "Discover The Finest Ways To Schedule Appointments With Our Online Booking Solutions",
    content: [
        "When you are in the service industry and want to sell online, it can be difficult to know what platform to use. In fact, if you’re not an expert in booking systems, then it can seem like an impossible task. That’s why so many businesses turn to an online booking systems development company in the UK.",
        "An online booking system services company can make everything easy for those who are running a hospital, clinic, hotel, spa, travel agency, or any other business that takes bookings over the phone or via email in the UK and needs an automated service to do it all for them.",
        "With an online booking system, you have at your fingertips an application that allows your customers to book appointments and purchase products and services even when you are not available at these locations or during traditional office hours."
    ]
};

export const ONLINE_BOOKING_SERVICES = {
    title: "Our Specialised Online Booking Services for Every Business Type",
    description: "We offer excellent and reliable online booking services for all types of businesses. From restaurants to retailers, salons and beauty to health and wellness, we have a system that is perfect for your business!",
    items: [
        {
            icon: <Calendar className="w-12 h-12" />,
            title: "Custom Online Booking Services",
            content: "We provide custom online booking solutions that minimize the communication gap between you and your customers. This allows your customers to see the real-time availability of services and book them at their convenience."
        },
        {
            icon: <Stethoscope className="w-12 h-12" />,
            title: "Online Doctor Booking Solutions",
            content: "Our online Doctor Booking Solution helps healthcare providers find additional income streams and are more accessible to their customers with easy appointment scheduling and payment features in the app."
        },
        {
            icon: <Plane className="w-12 h-12" />,
            title: "Online Travel Booking Solutions",
            content: "We offer a full suite of online booking systems UK to travel agencies. All of our booking systems are custom-made and developed with modern technologies and allow users to book hotels, flights, car rentals, and travel packages."
        },
        {
            icon: <Home className="w-12 h-12" />,
            title: "Online Property Booking Systems",
            content: "Hidden Brains UK provides its customers with an easy-to-use, complete online property booking solution that helps guests check their availability and book their accommodation while on the go."
        },
        {
            icon: <Clock className="w-12 h-12" />,
            title: "Online Appointment Booking Systems",
            content: "Online appointment booking is an efficient way to boost your sales, streamline communication, and organize your day. We offer solutions that will help you take control of your business."
        },
        {
            icon: <HeartPulse className="w-12 h-12" />, // Reusing Stethoscope for Doctor Booking again if needed, or something else
            title: "Online Medical Consultation Systems",
            content: "Our online portal helps hospitals book online doctor's appointments, make medical consultations, and check medical records. The software is developed in a way that it can integrate with all hospital systems."
        }
    ]
};

// Fixed HeartPulse import below
import { HeartPulse } from "lucide-react";

export const ONLINE_BOOKING_FEATURES = {
    title: "Latest Features Integrated in Our Online Booking System Solutions",
    description: "We help our clients save time and effort by combining all major business operations into one streamlined system.",
    items: [
        {
            icon: <RotateCw className="w-10 h-10" />,
            title: "Automate Everything",
            content: "Use automation software to automate all reservation tasks. The software shows you up-to-date availability and handles cancellations, modifications, and sets up automatic confirmations."
        },
        {
            icon: <Cloud className="w-10 h-10" />,
            title: "Cloud-Based Systems",
            content: "Security is an important part of our services. We encrypt everything with 128-bit SSL encryption and keep backup copies in encrypted storage devices."
        },
        {
            icon: <Calendar className="w-10 h-10" />,
            title: "Calendar Scheduler",
            content: "Keep in sync with your personal and professional calendars like Google Calendar, iCloud, Outlook, and more. Identify time gaps to accommodate walk-ins."
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: "Flexible Pricing Rules",
            content: "Create pricing models for different items. Prices can be flexible, meaning they change according to the time of year or the type of product."
        },
        {
            icon: <CreditCard className="w-10 h-10" />,
            title: "Payment Integrations",
            content: "Get rid of manual bookkeeping with accounting software integration. Accept payments in various forms from our partnered payment gateways."
        },
        {
            icon: <Bell className="w-10 h-10" />,
            title: "SMS and Email Alerts",
            content: "Save time by having Hidden Brains UK send personalized emails and SMS messages to your customers and staff. Use custom fields for push notifications."
        }
    ]
};

export const ONLINE_BOOKING_WHY_CHOOSE_US = {
    title: "Why Is Hidden Brains UK Best For Online Booking System Development Services?",
    description: "Choosing Online Booking Systems Development services from us will give you peace of mind knowing that our experienced team is working with you to develop a new and improved system.",
    items: [
        {
            icon: <Shield className="w-10 h-10" />,
            title: "Compliant to All Standards",
            content: "Collaboration with our experts can be a part of your success as we have the tools to guarantee your online system will be compliant with all standards."
        },
        {
            icon: <Layout className="w-10 h-10" />,
            title: "Complete Transparency",
            content: "We maintain the privacy and confidentiality of your project details. We begin the project discussion by signing an NDA form."
        },
        {
            icon: <Zap className="w-10 h-10" />,
            title: "Free No Obligation Quote",
            content: "Let us know about your project idea and we will provide you with a cost estimate, as well as determine what scope your project should have."
        },
        {
            icon: <Workflow className="w-10 h-10" />,
            title: "No Cost Project Management",
            content: "Let our project manager handle any project management duties you may have, so you don't have to worry about the project execution and its delivery."
        },
        {
            icon: <RotateCw className="w-10 h-10" />,
            title: "Regular Updates",
            content: "To maintain consistent transparency in the project, we always keep our clients in the loop and share regular project updates via Skype, email, and phone calls."
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: "Flexible Engagement Models",
            content: "Hire our skilled yet experienced app developers for online booking systems on an online monthly, part-time, or full-time basis."
        }
    ]
};

export const ONLINE_BOOKING_FAQ = [
    {
        question: "What is Online Booking System?",
        answer: "You can book an appointment or make a booking online. Hidden Brains offers an advance online booking system that lets you customize the entire look of the online portal with an automated reminder system."
    },
    {
        question: "How can I manage all the bookings that are made in the online booking software?",
        answer: "You have total control over all of the bookings in the system. You can set flexible business hours, set a limit on the number of bookings a client can make, and set advanced availability."
    },
    {
        question: "Is This Online Booking Software Comes With Login Access?",
        answer: "Yes, our software platform for employers will allow staff members to maintain their bookings and schedules with their own staff logins with access to separate employee profiles."
    },
    {
        question: "How Much Does It Cost to Build an Online Booking System for Your Business?",
        answer: "The price of software development can greatly vary depending on the complexity of the app, its features, functionalities, and design. Contact our experts for a cost estimation."
    }
];

export const ONLINE_BOOKING_PORTFOLIO = {
    title: "Delivering Online Booking Systems",
    description: "We have delivered a wide range of innovative online booking solutions to our clients – Have a look at our work."
};
