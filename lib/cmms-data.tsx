import React from "react";
import { 
    ShieldCheck, 
    Zap, 
    LayoutDashboard, 
    Smile, 
    BarChart3,
    ClipboardList,
    CalendarClock,
    CheckSquare,
    Wrench,
    Users,
    Activity,
    FileEdit,
    FileText,
    TrendingUp,
    MessageSquare,
    Layers,
    Eye,
    Cog,
    Globe,
    Smartphone,
    MapPin
} from "lucide-react";

export const CMMS_HERO = {
    title: "Best CMMS Software In The UK",
    description: "A consolidated platform that is centrally managed for planning preventative maintenance, managing maintenance operations, and reducing equipment downtime.",
    cta: "Get in Touch",
    banner: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/CMMS-HB-YouTube-Thumbnail_page.webp"
};

export const CMMS_INTRODUCTION = {
    title: "SMART MAINTENANCE",
    subtitle: "Streamline the Asset Management Process and Reducing Equipment Downtime With Smart Maintenance Module!",
    content: (
        <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
                Hidden Brains UK offers an advanced Computerized Maintenance Management System (CMMS) that simplifies asset maintenance processes and reduces equipment downtime. Our Smart Maintenance solution enables organizations to organize their assets and maintenance schedules efficiently. With features like work order organization and preventive maintenance, downtime is minimized, and productivity is improved.
            </p>
            <p>
                Our intelligent smart maintenance solution is equipped with advanced capabilities, such as scheduling predictive maintenance to identify potential issues and minimize costs.
            </p>
            <p>
                With streamlined reports and comprehensive data analysis, Hidden Brains UK CMMS Solution helps in strategic decision-making and optimized asset management. It streamlines all asset maintenance processes, cutting costs, and improving efficiency.
            </p>
        </div>
    ),
    videoBanner: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/CMMS-HB-YouTube-Thumbnail_page.webp"
};

export const CMMS_ACHIEVEMENTS = [
    {
        title: "30% Lower Equipment Downtime",
        description: "Increase asset availability and reduce unexpected breakdowns with our predictive maintenance scheduling.",
        icon: <ShieldCheck className="w-10 h-10" />
    },
    {
        title: "25% Reduction in Maintenance Costs",
        description: "Optimize resource allocation and prevent expensive emergency repairs through regular preventive maintenance.",
        icon: <Zap className="w-10 h-10" />
    },
    {
        title: "20% Improved Work Order Efficiency",
        description: "Streamline the entire lifecycle of work orders from creation to completion with automated workflows.",
        icon: <LayoutDashboard className="w-10 h-10" />
    },
    {
        title: "35% Asset Lifecycle Extension",
        description: "Maximize the ROI by ensuring all critical assets are maintained according to industry standards.",
        icon: <Smile className="w-10 h-10" />
    },
    {
        title: "28% Compliance & Safety",
        description: "Maintain a complete audit trail of all maintenance activities and ensure compliance with regulations.",
        icon: <BarChart3 className="w-10 h-10" />
    }
];

export const CMMS_FEATURES_INTRO = {
    title: "Smart Maintenance Solution In The UK",
    description: "Our smart management system provides a range of robust features designed to facilitate swift and effective administration of your asset performance. These include planning, preventive maintenance, inventory tracking, and much more."
};

export const CMMS_FEATURES = [
    {
        title: "Work Order",
        description: "Our robust workflow engine streamlines workload management by tracking tasks that need completion to fulfill requests, assigning appropriate technicians, and offering automated notifications upon task completion or when deadlines approach.",
        icon: <ClipboardList size={32} />,
        color: "orange"
    },
    {
        title: "Scheduling & Dispatching",
        description: "Preventive maintenance tasks can be easily organised with the help of our intuitive scheduling and dispatching capabilities. Through a single interface, you can issue maintenance tickets, watch and monitor all service technicians in real time, and keep track of preventive maintenance chores.",
        icon: <CalendarClock size={32} />,
        color: "purple"
    },
    {
        title: "Checklist Management",
        description: "Customizable forms with text boxes, radio buttons, and checkboxes facilitate technicians during their work orders. This feature enhances efficiency by utilizing clearly defined procedures.",
        icon: <CheckSquare size={32} />,
        color: "dark"
    },
    {
        title: "Preventive Maintenance",
        description: "Our preventative maintenance features offer a thorough history of previous repairs for all assets, facilitating the best possible decision-making. Frequent check-ups and thorough inspections keep equipment operating at its peak, preventing future issues.",
        icon: <Wrench size={32} />,
        color: "green"
    },
    {
        title: "Dashboard",
        description: "Our powerful dashboard allows for effective monitoring and maintenance progress. Get useful dashboards and intuitive reports to make business decisions and keep an eye on activities. Filter the dashboard and monitor activities as per requirements, with the option to export reports.",
        icon: <LayoutDashboard size={32} />,
        color: "yellow"
    },
    {
        title: "Technician Management",
        description: "Our Technician Management feature allows facility maintenance professionals to effectively manage technicians with a wide range of capabilities for assigning tasks, scheduling shifts, tracking performance, and providing feedback.",
        icon: <Users size={32} />,
        color: "purple"
    },
    {
        title: "Skill Management",
        description: "Our skill management feature quickly locates professional technicians with specific areas of expertise in emergency situations, resulting in faster completion of jobs or tasks.",
        icon: <Activity size={32} />,
        color: "green"
    },
    {
        title: "Request Tracking",
        description: "Depending on the type of request, our CMMS software enables the easy assignment of service requests to various personnel. It enables users to submit, review, and approve requests with ease and automatically notifies them anytime a request is filed.",
        icon: <FileEdit size={32} />,
        color: "yellow"
    }
];

export const CMMS_PROCESS = {
    columns: [
        {
            title: "Maintenance Strategy",
            items: [
                { icon: Wrench, label: "Preventive\nMaintenance" },
                { icon: CalendarClock, label: "Asset\nTracking" }
            ]
        },
        {
            title: "Work Integration",
            items: [
                { icon: ClipboardList, label: "Work Order\nManagement" },
                { icon: CheckSquare, label: "Custom\nChecklists" }
            ]
        },
        {
            title: "Execution",
            items: [
                { icon: Users, label: "Technician\nScheduling" },
                { icon: Activity, label: "Skill-based\nRouting" }
            ]
        }
    ],
    finalSteps: [
        { icon: LayoutDashboard, label: "Intelligent\nDashboard" },
        { icon: BarChart3, label: "Optimized\nPerformance" }
    ]
};

export const CMMS_BENEFITS_DATA = {
    title: "BENEFITS OF Computerized Maintenance Management System (CMMS)",
    description: "Gain valuable insights into your daily work assignments, asset visibility, and all maintenance activities performed by users with Hidden Brains CMMS software.",
    items: [
        {
            title: "Customized Workflow",
            description: "Our Custom Workflow solution is designed to enhance workflow processes with a range of features that helps in progress monitoring, resource allocation, and task prioritization based on significance.",
            icon: <Cog className="w-8 h-8" />
        },
        {
            title: "Reduced Paperwork",
            description: "With the most accurate and reliable inventory systems, businesses can get a big-picture of inventory and achieve a balance between services and cost while also adding value to their operations.",
            icon: <FileText className="w-8 h-8" />
        },
        {
            title: "Asset Visibility",
            description: "Hidden Brains CMMS provides consolidated information related to assets, including purchase details, last service date, malfunction/defect occurrence, and parts used, enabling maintenance teams and asset maintenance managers to swiftly locate key data.",
            icon: <Eye className="w-8 h-8" />
        },
        {
            title: "Workflow Visibility",
            description: "With interactive dashboards and visuals, technicians, maintenance engineers, and project managers can effectively monitor the progress of maintenance tasks in real-time and are able to easily gauge and pinpoint assets for maintenance.",
            icon: <BarChart3 className="w-8 h-8" />
        },
        {
            title: "Increased Productivity",
            description: "Hidden Brains CMMS app solutions allow technicians to record data while on the job site which significantly results in improved effectiveness and output. With smart maintenance, businesses can access up-to-date data related to work orders from a single source, eliminating manual and time-consuming processes.",
            icon: <TrendingUp className="w-8 h-8" />
        },
        {
            title: "Improved Team Communication",
            description: "Proper asset tracking, task status monitoring, and communication between teams are made possible by thorough maintenance records. Supervisors and managers can follow repair orders with the help of smart maintenance solutions and get timely updates.",
            icon: <MessageSquare className="w-8 h-8" />
        },
        {
            title: "Reduced Downtime",
            description: "Teams may arrange equipment predictive maintenance with the assistance of Hidden Brains smart maintenance solutions, assuring prompt servicing and avoiding significant expenses. For quicker repairs and less downtime, technicians may manage extra parts.",
            icon: <ShieldCheck className="w-8 h-8" />
        },
        {
            title: "Streamlined Processes",
            description: "The Hidden Brains CMMS makes tracking and monitoring work orders simple. With device-specific information, operations team members can provide field workers with timely updates, and stakeholders may allocate the appropriate resources based on priority and overall maintenance objectives.",
            icon: <Layers className="w-8 h-8" />
        }
    ]
};

export const CMMS_PLATFORMS_DATA = {
    title: "Platforms & Integrations",
    description: "Providing consistent experiences and addressing the unique needs of each and every platform.",
    image: {
        src: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/CMMS_Platform-image.webp",
        width: 1200,
        height: 634,
        alt: "CMMS Platforms"
    },
    techPlatforms: [
        {
            title: "Website Based",
            icon: <Globe className="w-8 h-8" />
        },
        {
            title: "Android Based Mobile App",
            icon: <Smartphone className="w-8 h-8" />
        }
    ],
    integrations: [
        {
            title: "Google Maps",
            icon: <MapPin className="w-8 h-8" />
        }
    ]
};

export const CMMS_GUIDE_DATA = {
    title: "Guide",
    description: "Here are some of the common queries related to CMMS solution.",
    items: [
        { id: "what-is-cmms-solution", label: "What is a CMMS solution?" },
        { id: "what-are-the-benefits", label: "What are the benefits of using a CMMS solution?" },
        { id: "how-can-a-cmms", label: "How can a CMMS solution help with preventive maintenance?" },
        { id: "can-a-cmms-solution", label: "Can a CMMS solution integrate with other software systems?" },
        { id: "what-type-of-data", label: "What types of data can be tracked and analyzed using a CMMS solution?" },
        { id: "what-should-organizations-consider", label: "What should organizations consider when selecting a CMMS solution?" }
    ],
    details: [
        {
            id: "what-is-cmms-solution",
            title: "What is a CMMS solution?",
            content: (
                <p>A CMMS solution is software designed to help organizations manage their maintenance operations, including work orders, asset management, inventory control, preventive maintenance, and more.</p>
            )
        },
        {
            id: "what-are-the-benefits",
            title: "What are the benefits of using a CMMS solution?",
            content: (
                <p>Some benefits of using a CMMS solution include increased equipment uptime, reduced maintenance costs, improved asset tracking and management, better compliance and regulatory reporting, and enhanced decision-making through data analysis.</p>
            )
        },
        {
            id: "how-can-a-cmms",
            title: "How can a CMMS solution help with preventive maintenance?",
            content: (
                <p>A CMMS solution can help organizations implement a preventive maintenance program by scheduling regular maintenance tasks, tracking equipment history and usage, and generating reports and alerts to remind maintenance staff when tasks are due.</p>
            )
        },
        {
            id: "can-a-cmms-solution",
            title: "Can a CMMS solution integrate with other software systems?",
            content: (
                <p>Yes, many CMMS solutions offer integrations with other software systems, such as ERP (Enterprise Resource Planning) or accounting software, to streamline data entry and reporting.</p>
            )
        },
        {
            id: "what-type-of-data",
            title: "What types of data can be tracked and analyzed using a CMMS solution?",
            content: (
                <p>A CMMS solution can track and analyze a wide range of data related to maintenance operations, such as equipment uptime, maintenance costs, inventory levels, work order completion rates, and more.</p>
            )
        },
        {
            id: "what-should-organizations-consider",
            title: "What should organizations consider when selecting a CMMS solution?",
            content: (
                <p>Organizations should consider factors such as ease of use, scalability, integration capabilities, reporting and analytics features, and customer support when selecting a CMMS solution. It’s also important to evaluate the solution’s pricing structure and total cost of ownership.</p>
            )
        }
    ]
};

export const CMMS_INDUSTRIES_DATA = [
    {
        name: "Logistics Transportation",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        desc: "Efficient warehousing and fleet management for logistics companies."
    },
    {
        name: "Financial Technology",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        desc: "Innovative fintech solutions for modern financial institutions."
    },
    {
        name: "Retail Shopping",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        desc: "Optimizing retail operations and customer experiences."
    },
    {
        name: "Oil & Gas",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/oilGas-industries-thumb.jpg",
        desc: "Enhancing productivity and safety in oil and gas operations."
    },
    {
        name: "HealthCare Wellness",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        desc: "Ensuring timely medical deliveries and reliable service."
    }
];

export const CMMS_FAQS = [
    {
        question: "How can Hidden Brains UK's CMMS solutions help my business?",
        answer: "Hidden Brains UK offers customized CMMS solutions that are designed to meet the specific needs of your business. Our solutions are user-friendly and scalable, allowing you to manage your maintenance operations efficiently and effectively. Our CMMS solutions can also integrate with other software systems, such as ERP and accounting software, to streamline data entry and reporting."
    },
    {
        question: "How easy is it to implement Hidden Brains UK's CMMS solutions?",
        answer: "Hidden Brains UK’s CMMS solutions are designed to be easy to implement and use. Our team will work with you to customize the solution to meet your specific needs and provide training and support to ensure a smooth transition."
    },
    {
        question: "What kind of support does Hidden Brains UK offer for its CMMS solutions?",
        answer: "Hidden Brains UK offers comprehensive support for its CMMS solutions, including training, implementation, customization, and ongoing technical support. Our team is available to answer any questions and resolve any issues you may have."
    },
    {
        question: "How Much Does Hidden Brains UK Cost To Develop CMMS Solution?",
        answer: "The cost of developing a CMMS solution can vary depending on a number of factors, including the features and functionality required, the complexity of the project, the technology stack used, the size of the development team, and the location of the development team. The average cost to build a CMMS solution is ranging from $15,000 to $20,000+ depending upon your needs."
    }
];
