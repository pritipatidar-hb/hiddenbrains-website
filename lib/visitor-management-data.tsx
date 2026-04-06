import {
    Calendar,
    Users,
    ShieldCheck,
    QrCode,
    Printer,
    PenTool,
    Bell,
    Link as LinkIcon,
    History,
    BarChart3,
    RefreshCw,
    Eye,
    Clock,
    FileText,
    Cog
} from "lucide-react";

export const VISITOR_MANAGEMENT_HERO = {
    title: "Visitor Management System",
    description: "Streamline Your Visitor Experience with Our Visitor Management System – Secure, Simple, and Efficient!",
    cta: "Get in Touch"
};

export const VISITOR_MANAGEMENT_FEATURES = [
    {
        title: "Planned Visitors",
        description: "Our visitor management solution makes it easier to schedule and handle guests at your business. Get correct visitor schedule information and be fully aware of your visitors' locations.",
        icon: <Calendar size={32} />,
        color: "orange"
    },
    {
        title: "Ad-Hoc Visitors",
        description: "You can welcome ad hoc visitors with the help of our smooth visitor management solution without interfering with business activities or risking security.",
        icon: <Users size={32} />,
        color: "purple"
    },
    {
        title: "Visitor Screening",
        description: "Use guest management and pre-screening tools to automate entry. Leverage the functionality of pre-screening or touchless guest check-in avoids lines at the door and shortens wait times.",
        icon: <ShieldCheck size={32} />,
        color: "dark"
    },
    {
        title: "QR Code Scanning",
        description: "To quickly check in, guests can simply scan a QR code, or they can design their own quick-to-complete visitor form. Our visitor management solution is user-friendly and simple to access.",
        icon: <QrCode size={32} />,
        color: "green"
    },
    {
        title: "Badge Printing",
        description: "For identifying purposes, a visitor badge management system incorporates a photo of each visitor. To ensure that guests remain safe at the property, our visitor sign-in systems set an expiration date on the visitor’s badge, so that guards can identify individuals from a distance.",
        icon: <Printer size={32} />,
        color: "yellow"
    },
    {
        title: "Digital Document Signing",
        description: "While signing NDAs, waivers, or legal agreements, you can maintain data privacy. The simplest strategy to prevent information from spilling out is to digitally sign documents.",
        icon: <PenTool size={32} />,
        color: "purple"
    },
    {
        title: "Instant Notifications",
        description: "When a visitor inputs their arrival information into the visitor management software, automated email or SMS notifications may be set up, ensuring that you and your visitors are always in touch.",
        icon: <Bell size={32} />,
        color: "green"
    },
    {
        title: "3rd Party Integration",
        description: "Get complete control over the accessibility of the visitors. Our robust visitor management solution is integrated with features that enter all details and enable you to focus on your business.",
        icon: <LinkIcon size={32} />,
        color: "yellow"
    },
    {
        title: "Visitor History",
        description: "Our visitor management software solutions compile data into a user-friendly dashboard that constantly refreshes with information from the network. It provides real-time information on what's happening, how visitors are progressing, and who is expected to arrive next.",
        icon: <History size={32} />,
        color: "purple"
    },
    {
        title: "Quick Statistics",
        description: "Using visitor management software, you can easily track and manage the visitors like the amount of time spend in the office, often visits to the office, why they come, and more.",
        icon: <BarChart3 size={32} />,
        color: "green"
    },
    {
        title: "Online/Offline Data Sync",
        description: "Get all of your visitor data in one location for simpler management by automatically syncing it in both offline and online modes from anywhere in the world.",
        icon: <RefreshCw size={32} />,
        color: "yellow"
    }
];

export const VISITOR_MANAGEMENT_BENEFITS_INTRO = {
    title: "Benefits Of Visitor Management Platform Advantages",
    description: "Our Visitor management software offers one dashboard for managing entire visits right from the one central location to deliver a flawless visitor managing experience in your business."
};

export const VISITOR_MANAGEMENT_BENEFITS = [
    {
        title: "Organization Transparency",
        description: "With total visibility of multiple locations/multiple companies’ occupancy, unrestricted visitor management, visitor history, and dashboard statistics, you no longer have to worry about losing track of all your guests.",
        icon: <Eye className="w-8 h-8" />
    },
    {
        title: "Real-Time Data Visibility",
        description: "Keep track of your visitors across different offices in multiple geographic locations and never worry about managing visitor data again with our comprehensive reports. Track all aspects of visitor data such as time spent, time of entry/exit & frequency of visits.",
        icon: <Clock className="w-8 h-8" />
    },
    {
        title: "Data Accuracy",
        description: "Maintain track of your visitors across many offices and different geographic regions, and with our in-depth reports, you’ll not have to worry about handling visitor data with manual procedures. Using detailed analytics of our app, keep track of all visitor information, including frequency of visits, time spent, and entry/exit times.",
        icon: <FileText className="w-8 h-8" />
    },
    {
        title: "Intelligent Reporting",
        description: "Keeping a track of visitors coming to your facility, where they went, how much time they spent there, and who they talked to becomes easier with out visitor management platform. You can use visitor data that is collected in real-time and gain valuable insights to increase conversion rates.",
        icon: <BarChart3 className="w-8 h-8" />
    },
    {
        title: "Easy Installation",
        description: "With its simple installation feature, the visitor management system can be quickly and easily set up in various business setups and operate across a variety of contexts, including mobile, tablet, and desktop.",
        icon: <Cog className="w-8 h-8" />
    },
    {
        title: "Compliance & Safety",
        description: "The compliance feature in our visitor management application offers a simple approach to guarantee that your business complies with numerous health and safety regulations, as well as with other regulatory obligations.",
        icon: <ShieldCheck className="w-8 h-8" />
    }
];

export const VISITOR_MANAGEMENT_PLATFORMS_INTRO = {
    title: "Platforms & Integrations",
    description: "Visitor management software solutions built with cutting-edge technology stack to ensure seamless communication and collaboration.",
    image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/visitormanagment-platform-image-new.webp"
};

export const VISITOR_MANAGEMENT_PLATFORMS = [
    {
        title: "Web Based",
        icon: <div className="text-2xl font-bold">W</div>, // Placeholder or simple icon
        color: "orange"
    },
    {
        title: "Mobile Based iOS / Android",
        icon: <div className="text-2xl font-bold">M</div>, // Placeholder or simple icon
        color: "orange"
    }
];

export const VISITOR_MANAGEMENT_TECH_PLATFORMS_INTRO = {
    title: "Technology Platforms",
    description: "Compatible with latest web & mobile platforms"
};

export const VISITOR_MANAGEMENT_GUIDE_ITEMS = [
    { id: "what-is-a-visitor", label: "What is a visitor management system?" },
    { id: "why-do-businesses-need", label: "Why do businesses need a visitor management system?" },
    { id: "what-are-the-key", label: "What are the key features of a visitor management system?" },
    { id: "how-does-a-visitor", label: "How does a visitor management system work?" },
];

export const VISITOR_MANAGEMENT_GUIDE_DETAILS = [
    {
        id: "what-is-a-visitor",
        title: "What is a visitor management system?",
        content: (
            <p>
                A visitor management system is a piece of software that helps companies and organizations keep track of, authorize, and check in visitors, contractors, and guests at their locations. Typical functions of the system include visitor registration, ID confirmation, badge printing, and real-time monitoring of visitor activity on the property. A visitor management system’s primary objectives are to increase security, simplify the check-in procedure for visitors, and improve the overall tourist experience.
            </p>
        )
    },
    {
        id: "why-do-businesses-need",
        title: "Why do businesses need a visitor management system?",
        content: (
            <div className="space-y-4">
                <p>Here are some key points explaining why businesses need a visitor management system:</p>
                <ul className="list-none space-y-3">
                    <li><strong>Enhanced Security:</strong> A visitor management system provides better control and monitoring of who enters the building or facility, reducing the risk of unauthorized access.</li>
                    <li><strong>Improved Efficiency:</strong> A visitor management system streamlines the check-in process, reducing wait times and improving the overall visitor experience.</li>
                    <li><strong>Compliance with Regulations:</strong> Some industries, such as healthcare or government, have regulations requiring visitor tracking and documentation.</li>
                    <li><strong>Record-Keeping:</strong> Visitor management systems keep track of visitor data, such as entry and exit times, and can provide reports for audit or analysis purposes.</li>
                    <li><strong>Emergency Preparedness:</strong> In case of an emergency, a visitor management system can quickly identify who is in the building and where they are located.</li>
                    <li><strong>Professional Image:</strong> A visitor management system presents a modern and professional image to visitors, which can positively impact the overall perception of the business.</li>
                </ul>
            </div>
        )
    },
    {
        id: "what-are-the-key",
        title: "What are the key features of a visitor management system?",
        content: (
            <div className="space-y-4">
                <p>Some of the important features of a visitor management system are including:</p>
                <ul className="list-none space-y-2">
                    <li>– Online pre-registration for visitors to save time and reduce waiting times</li>
                    <li>– Visitor check-in and check-out process with real-time tracking</li>
                    <li>– ID verification and badge printing for secure identification of visitors</li>
                    <li>– Customizable visitor policies and rules for different types of visitors</li>
                    <li>– Automated notifications to hosts when their visitors arrive</li>
                    <li>– Data capture and analytics to monitor visitor traffic and improve visitor experiences</li>
                    <li>– Compliance with data privacy regulations to protect visitor information</li>
                    <li>– Integration with other software and hardware for streamlined workflows</li>
                    <li>– Emergency evacuation management to quickly account for all visitors in the event of an emergency.</li>
                </ul>
            </div>
        )
    },
    {
        id: "how-does-a-visitor",
        title: "How does a visitor management system work?",
        content: (
            <div className="space-y-4">
                <p>
                    A visitor management system typically works by allowing visitors to sign in and sign-out electronically, often using a tablet or computer kiosk. The system collects basic visitor information such as name, contact details, and purpose of visit, and can also capture a photo or scan an ID card.
                </p>
                <p>
                    The system then verifies the visitor’s details and checks for any security risks before issuing a visitor badge or pass. The system can also alert the host of the guest’s arrival and maintain track of visitor data for reporting and compliance purposes.
                </p>
            </div>
        )
    }
];

export const VISITOR_MANAGEMENT_INDUSTRIES_INTRO = {
    title: "Industries We Serve",
    description: "Hidden Brains UK provides you with a visitor management system that can be flawlessly used across various industry sectors to improve security, visitor visibility, and visitor experience. With its enhanced visitor management features, appointment scheduling and monitoring, guest privilege management, reports on previous visits, and more becomes very easy."
};

export const VISITOR_MANAGEMENT_INDUSTRIES = [
    {
        name: "Healthcare & Wellness",
        desc: "", // Not provided in the HTML snippet but part of the structure
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
    },
    {
        name: "Education & E-learning",
        desc: "",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/education-industries-thumb.webp",
    },
    {
        name: "Logistics & Transportation",
        desc: "",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
    },
    {
        name: "Oil & Gas",
        desc: "",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/oilGas-industries-thumb.jpg",
    },
    {
        name: "Financial Technology",
        desc: "",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
    },
    {
        name: "Media & Entertainment",
        desc: "",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
    },
    {
        name: "Real Estate & Construction",
        desc: "",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/realestate-industries-thumb.webp",
    },
];

export const VISITOR_MANAGEMENT_USE_CASES_INTRO = {
    title: "Use Cases",
    description: "Use a visitor management system to streamline front desk operations and provide your visitors with the best experience possible."
};

export const VISITOR_MANAGEMENT_USE_CASES = [
    {
        title: "Government Institutions",
        desc: "The number of visits to a department is tracked by a visitor management system for government organizations. It gives details on everything, including who visits and when, and makes compliance auditing simple.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/vmsl-government-offices.webp"
    },
    {
        title: "Hospitals",
        desc: "Hospitals can now authenticate visitors and track their movements and activities while on hospital grounds using visitor management systems.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/vmsl-medical.webp"
    },
    {
        title: "Enterprise Office",
        desc: "Using the Visitor management solution, you can simplify the process of checking guests in by pre-registering guests before they arrive, using ID scanning for quick identification, and reducing line wait times at the front desk.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/03/vmsl-corporate-office.webp"
    }
];

export const VISITOR_MANAGEMENT_FAQ = [
    {
        question: "Why Should I Consider Hidden Brains UK To Build a Visitor Management Platform?",
        answer: "Hidden Brains UK is one of the leading software development companies that help you build a Visitor Management Platform. We at Hidden Brains UK, offer a comprehensive solution that is tailored to your specific needs, ensuring enhanced security and an excellent visitor experience. We help you create a cloud-based platform that is secure, customizable, and easy to use, with features such as self-check-in, visitor photo capture, badge printing, and real-time reporting."
    },
    {
        question: "Can a Visitor Management System help me comply with data protection and privacy regulations?",
        answer: "Hidden Brains UK’s Visitor Management System is designed with data protection and privacy in mind, allowing you to focus on your core business while remaining compliant with regulations. With features such as secure data storage, access controls, and the ability to anonymize or delete visitor data as required, a Visitor Management System can ensure that your business meets its legal obligations and protects visitor privacy."
    },
    {
        question: "Is it possible to integrate Visitor Management System with my existing access control and security systems?",
        answer: "Yes, Hidden Brains UK helps you create a Visitor Management System that can seamlessly integrate with your existing access control and security systems, allowing you to enhance your facility’s overall security measures."
    },
    {
        question: "What type of support and training can I expect to receive with a Visitor Management System from Hidden Brains UK?",
        answer: "With a Visitor Management System from Hidden Brains UK, you can expect to receive comprehensive support and training to ensure a smooth implementation and ongoing use of the system. Our team provides on-site training, online training, and user manuals to ensure your team is comfortable using the system. We also offer ongoing technical support to address any questions or issues that may arise."
    },
    {
        question: "Can Hidden Brains UK help me customize the Visitor Management System to fit my specific business needs?",
        answer: "Yes, Hidden Brains UK offers customization services for their Visitor Management System to fit your specific business needs. They understand that every organization is unique and may require tailored solutions, and their expert team can work with you to customize the system accordingly."
    },
    {
        question: "How much does it cost to implement a Visitor Management System, and what are the pricing models offered by Hidden Brains UK?",
        answer: "Hidden Brains UK offers flexible pricing models for implementing a Visitor Management System tailored to meet specific business requirements. The cost of implementation depends on factors such as the size of the facility, the number of visitors, and the features required. Contact us today for a customized quote and to learn more about our pricing options."
    }
];

