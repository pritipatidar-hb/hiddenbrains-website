import React from "react";
import Image from "next/image";
import {
    Users,
    Calendar,
    Clock,
    Briefcase,
    UserCheck,
    Zap,
    LayoutDashboard,
    FileText,
    UserCog,
    Cloud,
    ScanFace,
    Palette,
    Database,
    Smartphone,
    Code
} from "lucide-react";

export const TIME_ATTENDANCE_HERO = {
    title: "Time and Attendance Tracking Software In The UK",
    description: "Build modern employee time and attendance tracking software that incorporates Geo-tagging, an intelligent dashboard, and is integrated with QR codes and RFID technology.",
    cta: "Get in Touch",
    banner: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/Time-and-Attendance-Solution-YouTube-Thumbnail_page2.webp"
};

export const TIME_ATTENDANCE_INTRODUCTION = {
    title: "Hidden Brains UK Enables You Build Attendance Tracking Software",
    content: (
        <div className="space-y-6 text-slate-600 leading-relaxed">
            <p className="mb-[10px]">
                Hidden Brains UK offers you a complete time and attendance tracking solution that allow managers to keep a check on workers and their working hours across numerous office locations. This software creates automated timesheets, distributes workload across different shifts, and tracks production patterns to make management responsibilities simpler.
            </p>
            <p className="mb-[10px]">
                Every aspect of time tracking is covered by our time attendance management solution, including clocking in and out, breaks, and activity tracking. Using our expertise, we create a solution integrated with a variety of sophisticated features like browser accessibility and facial recognition, independent of the device’s operating system, in addition to smartphone and tablet access for both iOS and Android.
            </p>
            <p className="mb-[10px]">
                Our time and attendance tracking software automates attendance logging for employees in numerous offices or working from home, as well as guests’ access card entries, with the aim of optimizing time management procedures. Moreover, it offers CSV files for reporting and payroll needs and integration with other systems like HRMS.
            </p>

            <div className="mt-12 relative  mx-auto  overflow-hidden bg-[#1a365d] p-4 sm:p-8">
                <div className="relative border-[6px] border-white  overflow-hidden group cursor-pointer shadow-2xl">
                    <Image
                        src="https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/Time-and-Attendance-Solution-YouTube-Thumbnail_page2.webp"
                        alt="Time and Attendance Solution Video"
                        width={1200}
                        height={675}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600  flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform shadow-lg">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export const TIME_ATTENDANCE_FEATURES_INTRO = {
    title: "Key Features Of Automated Time and Attendance System",
    description: "Our Automated Time and Attendance System is designed to track and manage employee work hours, absences, and other related information by automating the operations."
};

export const TIME_ATTENDANCE_FEATURES = [
    {
        title: "Employee Distribution",
        description: "Our software seamlessly connects different locations across the globe, linking them with employees and eliminating the need for manual report merging. Get a complete overview of all location updates in a single click.",
        icon: <Users size={32} />,
        color: "orange"
    },
    {
        title: "Custom Holidays",
        description: "Set holidays and choose locations that observe them with our web-based time and attendance system. Employees will automatically get the holiday applied based on their reporting location.",
        icon: <Calendar size={32} />,
        color: "purple"
    },
    {
        title: "Shift Management",
        description: "Customize shifts for specific days and even override shifts for particular employees with ease. With our time and attendance tracking software managing employees under different shifts becomes simple and easier.",
        icon: <Clock size={32} />,
        color: "dark"
    },
    {
        title: "Official Trip & Out of Office Work",
        description: "The system automatically records the presence for out-of-office work based on approval, and reports employees going out of the office for official visits.",
        icon: <Briefcase size={32} />,
        color: "green"
    },
    {
        title: "Instant Visitor Access",
        description: "Manage visitor access with smart instant visitor passes. Easily identify who is authorized visitors and who hasn't. Also, enables you to schedule pre-passes or enter visitors on the go with tracking by admin.",
        icon: <UserCheck size={32} />,
        color: "yellow"
    },
    {
        title: "Touchless Entry/Exit",
        description: "Leverage the support of touchless Punch IN/OUT with a universal USB RDIF Reader, as well as SecuGen(c)(R) Fingerprint USB reader for Punch IN/OUT with the Attendance Tablet.",
        icon: <Zap size={32} />,
        color: "purple"
    },
    {
        title: "Smart Dashboard",
        description: "Get all the required information on one page with our smart dashboard, including employee and visitor data, and who is not yet in the office.",
        icon: <LayoutDashboard size={32} />,
        color: "green"
    },
    {
        title: "Automated Timesheets",
        description: "Get real-time reports on employee productivity and working hours without the need for filling out timesheets. The system automatically excludes break details and creates a detailed analytic report.",
        icon: <FileText size={32} />,
        color: "yellow"
    },
    {
        title: "Multiple Admin Support",
        description: "Our attendance tracking platform supports multiple admins with access control over vertical and horizontal hierarchy, making it easier for management to get smart and key reports.",
        icon: <UserCog size={32} />,
        color: "purple"
    }
];

export const TIME_ATTENDANCE_PROCESS = {
    columns: [
        {
            title: "Configuration",
            items: [
                { icon: Users, label: "Employee\nDistribution" },
                { icon: Calendar, label: "Custom\nHolidays" },
                { icon: Clock, label: "Shift\nManagement" }
            ]
        },
        {
            title: "Daily Tracking",
            items: [
                { icon: Zap, label: "Touchless\nEntry/Exit" },
                { icon: Briefcase, label: "Official Trip\nTracking" },
                { icon: UserCheck, label: "Visitor Access\nControl" }
            ]
        },
        {
            title: "Administration",
            items: [
                { icon: UserCog, label: "Multiple Admin\nRoles" },
                { icon: FileText, label: "Leave & Break\nAudit" }
            ]
        }
    ],
    finalSteps: [
        { icon: LayoutDashboard, label: "Smart Real-time\nDashboard" },
        { icon: FileText, label: "Automated\nTimesheets" }
    ]
};

export const TIME_ATTENDANCE_BENEFITS_INTRO = {
    title: "Benefits Of Time and Attendance Solutions",
    description: "Our attendance solutions maximize employee efficiency by providing real-time visibility with powerful features such as Geo-tagging, RFID, and more."
};

export const TIME_ATTENDANCE_BENEFITS = [
    {
        title: "Automated Timesheets",
        description: "Say goodbye to manual timesheets! Our fully automated timesheets provide real-time updates on employee productivity and working hours, excluding lunch and other breaks. No need to hassle employees to fill out timesheets manually.",
        icon: <FileText size={32} />
    },
    {
        title: "Cloud-Based",
        description: "Our application is hosted on the cloud and connected via the internet, so there’s no need for physical infrastructure. It also supports offline mode for remote locations with low internet connectivity.",
        icon: <Cloud size={32} />
    },
    {
        title: "Facial Recognition",
        description: "With Face ID, employees can log in to daily work entries using facial recognition instead of maintaining attendance entries manually. The automating of an employee tracking system reduces the chances of errors or any form of fraud.",
        icon: <ScanFace size={32} />
    },
    {
        title: "Branding",
        description: "Personalize your time attendance tracking system with your company logo and colors to make it look as if it is specifically crafted for your company.",
        icon: <Palette size={32} />
    }
];

export const TIME_ATTENDANCE_PLATFORMS = [
    {
        title: "PHP - CodeIgnitor",
        icon: <Code size={32} />
    },
    {
        title: "Android - Kotlin",
        icon: <Smartphone size={32} />
    },
    {
        title: "iOS - Swift",
        icon: <Smartphone size={32} />
    },
    {
        title: "MySQL",
        icon: <Database size={32} />
    },
    {
        title: "SQLite",
        icon: <Database size={32} />
    },
    {
        title: "Python",
        icon: <Code size={32} />
    }
];

export const TIME_ATTENDANCE_GUIDE = {
    title: "Guide",
    description: "Here are some of the common queries related to Web application development.",
    items: [
        { id: "what-is-time", label: "What is time and attendance tracking software?" },
        { id: "what-are-some-benefits", label: "What are some benefits of using time and attendance management software?" },
        { id: "what-features-should", label: "What features should I look for in time and attendance tracking software?" },
        { id: "how-does-time", label: "How does time and attendance tracking software work?" },
        { id: "is-time-and", label: "Is time and attendance tracking software secure?" },
        { id: "how-can-i", label: "How can I choose the right time and attendance tracking software for my company?" }
    ],
    details: [
        {
            id: "what-is-time",
            title: "What is time and attendance tracking software?",
            content: "Time and attendance tracking software is a tool that helps companies keep track of their employees\u2019 hours worked, as well as other important attendance-related data such as sick days, vacation time, and holidays."
        },
        {
            id: "what-are-some-benefits",
            title: "What are some benefits of using time and attendance management software?",
            content: "Time and attendance tracking software can help companies save time and money by automating the process of tracking employee hours, reducing errors, and increasing efficiency. It can also provide valuable data that can be used for analysis and decision-making, such as identifying trends in employee attendance and predicting future staffing needs."
        },
        {
            id: "what-features-should",
            title: "What features should I look for in time and attendance tracking software?",
            content: "Some key features to look for in time and attendance tracking software include the ability to track employee hours in real-time, automated timekeeping and scheduling, reporting and analytics tools, integration with payroll systems, and support for mobile and remote employees."
        },
        {
            id: "how-does-time",
            title: "How does time and attendance tracking software work?",
            content: "Time and attendance tracking software typically use a variety of methods to record employee hours, including manual entry, barcode scanning, biometric scanning (such as fingerprint or facial recognition), and GPS tracking. The software then compiles this data into reports and analytics that can be used for decision-making."
        },
        {
            id: "is-time-and",
            title: "Is time and attendance tracking software secure?",
            content: "Yes, most time and attendance tracking software is designed with security in mind, with features such as encryption, user authentication, and access controls. However, it\u2019s important to choose a reputable vendor and follow best practices for data security to ensure that your company\u2019s data remains safe."
        },
        {
            id: "how-can-i",
            title: "How can I choose the right time and attendance tracking software for my company?",
            content: "When choosing a time and attendance tracking software, it\u2019s important to consider factors such as your company\u2019s size, industry, and specific needs. You should also evaluate different vendors based on factors such as ease of use, features, and pricing, and consider asking for references or demos before making a final decision."
        }
    ]
};

export const TIME_ATTENDANCE_INDUSTRIES_INTRO = {
    title: "Industries We Serve",
    description: "Our warehouse inventory management software solution help in efficient warehousing, reducing costs and improving productivity across industries."
};

export const TIME_ATTENDANCE_INDUSTRIES = [
    {
        name: "Logistics Transportation",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg"
    },
    {
        name: "Financial Technology",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg"
    },
    {
        name: "Retail Shopping",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg"
    },
    {
        name: "Oil & Gas",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/oilGas-industries-thumb.jpg"
    },
    {
        name: "HealthCare Wellness",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg"
    }
];

export const TIME_ATTENDANCE_USE_CASES_INTRO = {
    title: "Use Cases",
    description: "Hidden Brains UK has tailored the WMS technology solutions to successfully address industry-specific issues and improve the supply chain management process."
};

export const TIME_ATTENDANCE_USE_CASES = [
    {
        title: "Logistics",
        description: "Demand and supply changes can be efficiently managed by our warehouse management systems (WMS). For logistics organizations, an efficient WMS guarantees greater inventory control and product management.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/usecase-box-smart-logisitic-03.jpg"
    },
    {
        title: "Agriculture",
        description: "Large-scale preservation of items occurs in agriculture and food delivery from the point of purchase till the point of usage. Our warehouse and inventory management solutions provide real-time visibility into their stock to agribusinesses.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/usecase-box-img-agriculture-01.jpg"
    },
    {
        title: "Manufacturing",
        description: "Manufacturing organizations can utilize warehouse management solutions to guarantee that raw materials are available for production and to maintain inventory levels that satisfy the demands of their clients.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/usecase-box-smart-manufacturing-02.jpg"
    }
];

export const TIME_ATTENDANCE_FAQ = {
    title: "FAQ’s",
    description: "Curiosity has it’s own reason for existing, by questioning anything we arrive at the greater solutions.",
    faqs: [
        {
            question: "What makes Hidden Brains UK's time and attendance tracking software different from other solutions in the market?",
            answer: "Our time and attendance tracking software is built with advanced features like biometric authentication, real-time reporting, and mobile access. It’s also highly customizable to meet the unique needs of your organization."
        },
        {
            question: "How can Hidden Brains UK's time and attendance tracking software help my organization?",
            answer: "Our software can help you streamline your HR processes, reduce errors in payroll processing, and ensure compliance with labor laws. It also helps you save time and money by automating routine tasks like time tracking and scheduling."
        },
        {
            question: "Is Hidden Brains UK's time and attendance tracking software easy to use?",
            answer: "Yes, our software is designed to be user-friendly and intuitive. It also comes with comprehensive user manuals and support documentation to ensure a smooth onboarding process."
        },
        {
            question: "How secure is Hidden Brains UK's attendance tracking software?",
            answer: "Our software is built with robust security features like data encryption, access controls, and regular security audits. We also follow best practices for data privacy and protection to ensure the safety of your organization’s data."
        },
        {
            question: "Can Hidden Brains UK's time and attendance tracking software integrate with other HR systems?",
            answer: "Yes, our software can be integrated with a wide range of HR systems, including payroll, leave management, and performance management software. We also offer API access for custom integrations."
        }
    ]
};
