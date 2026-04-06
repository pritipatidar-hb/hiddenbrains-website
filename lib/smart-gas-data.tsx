import React from "react";
import { 
    Fuel, 
    CheckCircle2, 
    BarChart3, 
    LayoutDashboard, 
    Bell, 
    Users, 
    Cloud, 
    CloudOff,
    Wrench,
    CalendarClock,
    ClipboardList,
    CheckSquare,
    Activity,
    Globe,
    Smartphone,
    MapPin,
    FileText,
    Eye,
    TrendingUp,
    MessageSquare,
    ShieldCheck,
    Layers,
    Search,
    Zap
} from "lucide-react";

export const SMART_GAS_HERO = {
    title: "Smart Gas Station Solution In The UK",
    description: "Smart Gas Station Solutions in the UK To Meet Future Needs of Fueling Stations.",
    cta: "Get in Touch",
    banner: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/smart-station-youtube-thumbnail-HB.webp"
};

export const SMART_GAS_INTRODUCTION = {
    title: "Gas Station Solutions in The UK",
    subtitle: "Gas Station Solutions in The UK",
    content: (
        <div className="space-y-4">
            <p>Hidden Brains introduces a smarter way to manage your convenience store and the operations of fueling stations. Our innovative gas station solutions are creatively designed to replace traditional paper-based processes with advanced digital platforms to streamline your workflow and make data-driven decisions based on historical trends.</p>
            <p>With the ability to connect multiple locations, Hidden Brains UK Smart Gas Station solution provides a comprehensive view of all station activities, from fuel dispenser management to monitoring fuel tank parameters and shift operations for efficient staff management.</p>
            <p>Our intelligent dashboard enables remote monitoring of each gas station activity and easy inventory tracking, providing peace of mind whether you’re out of town or occupied elsewhere.</p>
            <p>Hidden Brains’ smart system is the perfect solution to enhance the quality and efficacy of your gas station business, as it offers powerful features that are easy to use and simple to integrate. To meet the future needs of fueling stations, it’s time to upgrade the existing business model to Hidden Brains’ Smart Gas Station Solution today and experience the difference!</p>
        </div>
    )
};

export const SMART_GAS_FEATURES = {
    title: "KEY FEATURES OF",
    subtitle: "Smart Gas Solutions",
    description: "Hidden Brains' smart gas solutions provide real-time overviews of fuel station operations, including inventories, equipment status, and vehicle location.",
    items: [
        {
            title: "Auto Dispensing",
            description: "Our smart gas station solution offers the option for customers to pump their own gas and eliminates the need for an attendant to do so.",
            icon: <Fuel className="w-8 h-8" />,
            color: "orange"
        },
        {
            title: "Reconciliation",
            description: "With easily accessible information on a single panel, our gasoline station software offers a quick, automatic, and accurate approach to reconciling at the end of each day.",
            icon: <CheckCircle2 className="w-8 h-8" />,
            color: "purple"
        },
        {
            title: "Smart Reporting",
            description: "Avail immediate and comprehensive reporting on your workflows, including data on sales, employee productivity, operational expenses (opex), and inventory availability.",
            icon: <BarChart3 className="w-8 h-8" />,
            color: "dark"
        },
        {
            title: "Centralized System",
            description: "Our reliable centralized system allows for the monitoring of all gasoline station activities and the management of shift operations for the tightest possible control over personnel.",
            icon: <LayoutDashboard className="w-8 h-8" />,
            color: "green"
        },
        {
            title: "Smart Alerts",
            description: "Get real-time updates on employees, downtime, sales data, low stock levels, and inventory levels with our smart gas station solution in the UK.",
            icon: <Bell className="w-8 h-8" />,
            color: "yellow"
        },
        {
            title: "Employee Management",
            description: "Station managers can use our system to examine the staff members currently on duty, manage shifts and hours, check attendance, and track performance to allocate pumps to particular attendants.",
            icon: <Users className="w-8 h-8" />,
            color: "purple"
        },
        {
            title: "Auto Sync Cloud Architecture",
            description: "Our solution provides the possibility to store data in the cloud, giving owners and other stakeholders access to data through a web-based interface at any time and from any location.",
            icon: <Cloud className="w-8 h-8" />,
            color: "green"
        },
        {
            title: "Offline Support",
            description: "Changes made while in offline mode are synced with the data repository using our Offline Sync feature available in the smart gas solution.",
            icon: <CloudOff className="w-8 h-8" />,
            color: "yellow"
        }
    ]
};

export const SMART_GAS_PROCESS = {
    columns: [
        {
            title: "Asset Monitoring",
            items: [
                { icon: Fuel, label: "Fuel Tank\nMonitoring" },
                { icon: Search, label: "ATG\nIntegration" }
            ]
        },
        {
            title: "Operations",
            items: [
                { icon: ClipboardList, label: "Shift\nManagement" },
                { icon: CheckSquare, label: "Daily\nReconciliation" }
            ]
        },
        {
            title: "Automation",
            items: [
                { icon: Zap, label: "Auto\nDispensing" },
                { icon: Cloud, label: "Cloud\nSync" }
            ]
        }
    ],
    finalSteps: [
        { icon: LayoutDashboard, label: "Remote\nManagement" },
        { icon: BarChart3, label: "Business\nInsights" }
    ]
};

export const SMART_GAS_PLATFORMS_DATA = {
    title: "Platforms & Integrations",
    description: "Our Smart Gas Station Solution is designed to work across multiple platforms, ensuring you have access to your data whenever and wherever you need it.",
    image: {
        src: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/CMMS_Platform-image.webp",
        width: 1200,
        height: 634,
        alt: "Smart Gas Platforms"
    },
    techPlatforms: [
        {
            title: "Web-based Control Center",
            icon: <Globe className="w-8 h-8" />
        },
        {
            title: "Mobile Management App",
            icon: <Smartphone className="w-8 h-8" />
        }
    ],
    integrations: [
        {
            title: "ATG Sensors",
            icon: <Activity className="w-8 h-8" />
        },
        {
            title: "POS Systems",
            icon: <LayoutDashboard className="w-8 h-8" />
        }
    ]
};

export const SMART_GAS_GUIDE_DATA = {
    title: "Guide",
    description: "Here are some of the common queries related to modernizing gas station operations.",
    items: [
        { id: "what-is-smart-gas", label: "What is a Smart Gas Station Solution?" },
        { id: "what-are-the-benefits", label: "What are the benefits of a Smart Gas Station Solution?" },
        { id: "how-does-a-smart", label: "How does a Smart Gas Station Solution work?" },
        { id: "can-a-smart-gas-custom", label: "Can a Smart Gas Station Solution be customized to meet specific needs?" },
        { id: "how-does-smart-gas-security", label: "How does a Smart Gas Station Solution improve security?" },
        { id: "is-it-expensive-to", label: "Is it expensive to implement a Smart Gas Station Solution?" },
        { id: "can-a-smart-gas-integrate", label: "Can a Smart Gas Station Solution integrate with other systems?" },
        { id: "how-can-a-gas-start", label: "How can a gas station owner get started with a Smart Gas Station Solution?" }
    ],
    details: [
        {
            id: "what-is-smart-gas",
            title: "What is a Smart Gas Station Solution?",
            content: (
                <p>A Smart Gas Station Solution is a system that utilizes technology to automate and streamline the operation of a gas station. It includes features such as real-time monitoring of fuel levels, automatic payment processing, and remote management of equipment.</p>
            )
        },
        {
            id: "what-are-the-benefits",
            title: "What are the benefits of a Smart Gas Station Solution?",
            content: (
                <p>The benefits of a Smart Gas Station Solution include increased efficiency, reduced costs, improved customer experience, and enhanced security. By automating processes, gas stations can save time and money while providing a more seamless experience for customers.</p>
            )
        },
        {
            id: "how-does-a-smart",
            title: "How does a Smart Gas Station Solution work?",
            content: (
                <p>A Smart Gas Station Solution typically consists of hardware and software components. The hardware includes sensors to monitor fuel levels and equipment, while the software includes a management platform to control and analyze data. The system can be connected to payment processing services to enable automatic payments.</p>
            )
        },
        {
            id: "can-a-smart-gas-custom",
            title: "Can a Smart Gas Station Solution be customized to meet specific needs?",
            content: (
                <p>Yes, Smart Gas Station Solutions can be customized to meet the specific needs of individual gas stations. For example, a station owner may want to add features such as loyalty programs or marketing promotions to attract and retain customers.</p>
            )
        },
        {
            id: "how-does-smart-gas-security",
            title: "How does a Smart Gas Station Solution improve security?",
            content: (
                <p>A Smart Gas Station Solution can improve security by using sensors to detect any unusual activity, such as attempts to tamper with equipment or steal fuel. The system can also integrate with security cameras and alarms to provide real-time monitoring and alerts.</p>
            )
        },
        {
            id: "is-it-expensive-to",
            title: "Is it expensive to implement a Smart Gas Station Solution?",
            content: (
                <p>The cost of implementing a Smart Gas Station Solution can vary depending on the size of the station and the features included in the system. However, the benefits of increased efficiency and reduced costs can often outweigh the initial investment.</p>
            )
        },
        {
            id: "can-a-smart-gas-integrate",
            title: "Can a Smart Gas Station Solution integrate with other systems?",
            content: (
                <p>Yes, a Smart Gas Station Solution can integrate with other systems, such as inventory management or accounting software. This can help streamline operations and provide a more comprehensive view of the business.</p>
            )
        },
        {
            id: "how-can-a-gas-start",
            title: "How can a gas station owner get started with a Smart Gas Station Solution?",
            content: (
                <p>A gas station owner can get started with a Smart Gas Station Solution by contacting a vendor that specializes in this technology. The vendor can provide a consultation to determine the specific needs of the station and develop a customized solution.</p>
            )
        }
    ]
};

export const SMART_GAS_INDUSTRIES_DATA = [
    {
        name: "Fuel Retail",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/oilGas-industries-thumb.jpg",
        desc: "Comprehensive management for independent and chain gas stations."
    },
    {
        name: "Convenience Stores",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        desc: "Integrating fuel sales with retail inventory for a unified business view."
    },
    {
        name: "Logistics",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        desc: "Fleet fueling and private fuel depot management solutions."
    }
];

export const SMART_GAS_BENEFITS = {
    title: "KEY BENEFITS OF",
    subtitle: "Smart Gas Solutions In The UK",
    items: [
        {
            title: "Streamlined Operations",
            description: "Users, pump locations, and management practices are all managed overall with the goal of streamlining gasoline station operations to boost operational effectiveness."
        },
        {
            title: "Optimized Resources",
            description: "With the aid of our cutting-edge gas station management system, you may better and more effectively manage your resources, which will benefit your company."
        },
        {
            title: "Reduce OPEX",
            description: "The optimized processes offered by Hidden Brains’ smart gas solutions boost savings, improve efficacy, and lower total operational expenses."
        },
        {
            title: "Paperless Concept",
            description: "It offers a set of features that boost accuracy by getting rid of paper and manual operations. Using our system, you can automate approval processes and traditional working procedures."
        },
        {
            title: "Realtime Data",
            description: "Inventory, poor stock, and gasoline station downtime will all be easily tracked by advanced data analytics. This will increase your productivity while also saving you time and money."
        },
        {
            title: "Liquid and Goods Inventory",
            description: "Get insight into liquid and goods inventories with simple views that provide dashboards for a clearer picture of overall stock levels."
        },
        {
            title: "ATG Integration",
            description: "The gasoline station system from Hidden Brains UK combines with automatic tank gauging sensors to provide precise information about temperature, fuel, water levels, and inventory as a whole."
        },
        {
            title: "POS Management",
            description: "Efficient point-of-sale administration allows for seamless maintenance and adjustment of the various products, including both fuel and non-fuel items, that are found at filling stations."
        }
    ]
};

export const SMART_GAS_INFRASTRUCTURE = {
    title: "Panoramic View of Connected Infrastructure",
    description: "With the help of Hidden Brains Smart Station, different corporate infrastructures may be connected and enabled to build a secure ecosystem.",
    image: {
        src: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/howhardwarwork.webp",
        width: 1080,
        height: 554,
        alt: "Panoramic View of Connected Infrastructure"
    }
};

export const SMART_GAS_FAQS = [
    {
        question: "Does the system support remote monitoring?",
        answer: "Yes, our web-based and mobile platforms allow you to monitor fuel levels, sales data, and staff activities from any location in real-time."
    },
    {
        question: "Can it integrate with existing ATG sensors?",
        answer: "Our solution is designed to integrate with major Automatic Tank Gauging (ATG) systems to provide accurate data on tank parameters."
    }
];
