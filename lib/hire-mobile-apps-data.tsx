import React from "react";
import { Users, ShieldCheck, Lightbulb, Workflow, RefreshCw, Network, Search, FileText, UserCheck, CreditCard, Settings } from "lucide-react";

export const HIRE_MOBILE_HERO = {
    title: "Hire Mobile App Developers In the UK",
    excerpt: "Hire dedicated and certified mobile app developers, enabling you to launch user-centric apps across multiple platforms. Our overseas mobile app developers use cutting-edge technologies like React Native, Flutter, iOS, Android, Kotlin, etc., to deliver secure, scalable, and interactive mobile apps that meet your specific business requirements.",
    cta: "Get in Touch"
};

export const HIRE_MOBILE_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const HIRE_MOBILE_PLATFORMS = [
    {
        title: "Android",
        content: "Our remote mobile app developers can build custom feature-rich Android apps for your business needs. Get custom Android apps developed by our experienced app coders.",
        link: "/android-app-development",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3DDC84]" fill="currentColor">
                <path d="M17.523 15.3414c-.5511 0-1-.4489-1-1s.4489-1 1-1 1 .4489 1 1-.4489 1-1 1zm-11.046 0c-.5511 0-1-.4489-1-1s.4489-1 1-1 1 .4489 1 1-.4489 1-1 1zm11.445-5.997l1.916-3.319a.501.501 0 0 0-.181-.684.5.5 0 0 0-.683.181l-1.94 3.361C15.659 7.915 13.91 7.37 12 7.37c-1.911 0-3.66.545-5.079 1.512l-1.942-3.363a.501.501 0 0 0-.685-.181.5.5 0 0 0-.181.683l1.918 3.32C2.793 11.238.835 14.28 0 17.84h24c-.835-3.56-2.793-6.602-5.839-8.496l.807-.0002z" />
            </svg>
        )
    },
    {
        title: "Kotlin",
        content: "With the help of Kotlin, we create custom Android mobile apps in less time and cost compared to Java and make them state-of-the-art with Kotlin's unique features.",
        link: "",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#7F52FF]" fill="currentColor">
                <path d="M24 24H0V0h24L12 12z" />
            </svg>
        )
    },
    {
        title: "React Native",
        content: "Hire React Native app developers from Hidden Brains who deliver stunning cross-platform mobile apps with native-like user experiences in less time and cost",
        link: "",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#61DAFB]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="2" />
                <path d="M12 7c3.97 0 7.22 2.24 7.22 5s-3.25 5-7.22 5-7.22-2.24-7.22-5 3.25-5 7.22-5z" transform="rotate(30 12 12)" />
                <path d="M12 7c3.97 0 7.22 2.24 7.22 5s-3.25 5-7.22 5-7.22-2.24-7.22-5 3.25-5 7.22-5z" transform="rotate(90 12 12)" />
                <path d="M12 7c3.97 0 7.22 2.24 7.22 5s-3.25 5-7.22 5-7.22-2.24-7.22-5 3.25-5 7.22-5z" transform="rotate(150 12 12)" />
            </svg>
        )
    },
    {
        title: "Flutter",
        content: "Hire app developers who build widget-rich, cross-platform mobile apps using Flutter in less time and cost to deliver scalable, interactive mobile apps",
        link: "",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#02569B]" fill="currentColor">
                <path d="M14.314 0L2.3 12L6 15.7L21.686 0H14.314ZM21.686 12L12.014 21.671L8.314 18L18 8.314L21.686 12ZM14.314 24H21.686L12 14.314L8.314 18L14.314 24Z" />
            </svg>
        )
    },
    {
        title: "Augmented Reality",
        content: "Our experienced app developers create feature-rich AR & VR apps that allow users to experience the interactive and enhanced functionalities of current apps.",
        link: "",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#14133b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8z" />
                <path d="M7 10h10" />
                <path d="M12 6v4" />
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
            </svg>
        )
    },
    {
        title: "iOS",
        content: "Our full-stack offshore mobile app developers are experts at building amazing, interactive iOS apps for small and large businesses.",
        link: "",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#555555]" fill="currentColor">
                <path d="M17.057 12.781c.018 2.394 2.043 3.189 2.071 3.199-.018.064-.326 1.114-1.068 2.204-.645.945-1.314 1.887-2.368 1.906-1.04.02-1.371-.621-2.559-.621-1.189 0-1.556.602-2.541.64-.984.037-1.73-.85-2.388-1.794-1.344-1.928-2.372-5.46-1.006-7.839.678-1.181 1.896-1.93 3.216-1.948 1-.02 1.944.671 2.559.671.614 0 1.764-.849 2.964-.721.503.02 1.916.202 2.825 1.536-.073.045-1.688.981-1.67 2.916M14.71 4.542c.545-.66 1.09-1.298 1.002-2.274-.91.037-1.986.604-2.639 1.365-.589.68-1.106 1.344-.98 2.28 1 .078 2.015-.658 2.617-1.371" />
            </svg>
        )
    },
    {
        title: "Ionic",
        content: "Our remote mobile app developers build high-performing, cost-effective cross-platform mobile apps using Ionic",
        link: "/ionic-app-development",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3880FF]" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6s4.298-9.6 9.6-9.6 9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM12 7.2c-2.651 0-4.8 2.149-4.8 4.8 0 2.651 2.149 4.8 4.8 4.8 2.651 0 4.8-2.149 4.8-4.8 0-2.651-2.149-4.8-4.8-4.8zm0 7.2c-1.325 0-2.4-1.075-2.4-2.4s1.075-2.4 2.4-2.4 2.4 1.075 2.4 2.4-1.075 2.4-2.4 2.4z" />
            </svg>
        )
    },
    {
        title: "Internet of Things",
        content: "Our overseas mobile app developers create smart IoT solutions that add value to your business with improved efficiency and accuracy.",
        link: "",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#14133b]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        )
    },
    {
        title: "Xamarin",
        content: "Our certified mobile app developers help you build scalable, secure, and cost-effective mobile apps using their years of experience in Xamarin.",
        link: "/xamarin-app-development",
        icon: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-[#3498DB]" fill="currentColor">
                <path d="M2.4 0L12 15.6L21.6 0H14.4L12 3.6L9.6 0H2.4ZM12 24L2.4 8.4H9.6L12 12L14.4 8.4H21.6L12 24Z" />
            </svg>
        )
    }
];

export const HIRE_MOBILE_SERVICES = [
    {
        title: "Custom Mobile App Development",
        content: "With more than a decade of experience and out-of-the-box custom software development, we’re a leading mobile apps development company."
    },
    {
        title: "App Technology Consulting",
        content: "We’re a team of mobile app consultants that offer technical advice so that you can put the most appropriate technical strategy into action for your app."
    },
    {
        title: "Hybrid App Development",
        content: "With cross-platform app development solutions, you can make a feature-packed hybrid app that will run on both iOS and Android devices. In this way, you’ll save both time and money."
    },
    {
        title: "Native App Development",
        content: "The best mobile app development company in the UK will provide you with the full-cycle development of high-security, scalable, and feature-packed native mobile applications that have an excellent performance."
    },
    {
        title: "Wearable Apps",
        content: "Create wearable apps for your company by accessing iWatch apps, Android wear apps, and Google glass apps that work perfectly on any device. We have designed and built thousands of wearable apps as per specific demands."
    },
    {
        title: "Upgradation & Migration",
        content: "If you need to make changes to your app so that it’s compatible with a newer mobile operating system or gets access to more robust capabilities, we offer app maintenance services to do that."
    }
];

export const HIRE_MOBILE_WHY_CHOOSE = [
    {
        title: "500+ Team",
        content: "Our mobile app developers are 4+ years of average experience and have a deep understanding of mobile app development platforms.",
        icon: <Users className="w-8 h-8" />
    },
    {
        title: "Complete Transparency",
        content: "Your idea is protected by us. We respect your secrecy and any project-related matters will be confidential. We follow strict Non-Disclosure Agreements.",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "Get No-obligation Quote",
        content: "If you want, you can submit your project idea to us, and we will be happy to provide you with a free quote in 24 hours or less.",
        icon: <Lightbulb className="w-8 h-8" />
    },
    {
        title: "Smooth Projects Management",
        content: "Our project management services mean you don't have to worry about management intricacies; you get a seasoned pro on your team.",
        icon: <Workflow className="w-8 h-8" />
    },
    {
        title: "Regular Updates",
        content: "We give you a full summary of your project's status via email, phone, and Skype, so you're kept in the loop.",
        icon: <RefreshCw className="w-8 h-8" />
    },
    {
        title: "Flexible Engagement Models",
        content: "Hire a mobile app specialist from the comfort of your home. Pay on a monthly, part-time, or full-time basis depending on your needs.",
        icon: <Network className="w-8 h-8" />
    }
];

export const HIRE_MOBILE_GUIDE_ITEMS = [
    { id: "what-are-the-skills", label: "What are the skills required for mobile app development?" },
    { id: "which-is-the-best", label: "Which is the best platform for mobile app development: Android or iOS?" },
    { id: "what-are-security", label: "What are the security measures that follow so that my mobile application idea is safe?" },
    { id: "will-my-app", label: "Will my app be secure if I outsource it?" }
];

export const HIRE_MOBILE_GUIDE_DETAILS = [
    {
        id: "what-are-the-skills",
        title: "What are the skills required for mobile app development?",
        content: <p>An application development team must have a good understanding of application development toolkits. Also, if you want hybrid mobile apps, they should know about react-native and Xamarin. If you are thinking of outsourcing app development, then our mobile software development company is here to help.</p>
    },
    {
        id: "which-is-the-best",
        title: "Which is the best platform for mobile app development: Android or iOS?",
        content: <div>
            <p>The choice between Android and iOS for your app development services is highly influenced by the target audience and core vision of your project. Android and iOS together account for more than 99% of the operating system market share.</p>
            <p>In general, you can go for either platform based on your specific requirements and business audience.</p>
        </div>
    },
    {
        id: "what-are-security",
        title: "What are the security measures that follow so that my mobile application idea is safe?",
        content: <p>We will sign a strict confidentiality agreement with you to ensure the security of your mobile app idea. Among all the top mobile app companies available in the market, we are a trusted name. Our business mobile app development services give you the desired results while keeping your idea safe and secure.</p>
    },
    {
        id: "will-my-app",
        title: "Will my app be secure if I outsource it?",
        content: <p>Yes, you can sign an NDA and your mobile app will be secure under the terms of the agreement.</p>
    }
];

export const HIRE_MOBILE_FAQ = [
    {
        question: "What are the benefits of choosing Hidden Brains for mobile app development?",
        answer: "One of the biggest reasons we have high success rates is that we’ve created applications for more than 500 different clients. Customers hire us because of our unique set of skills and background delivering complex IT projects."
    },
    {
        question: "Which are the platforms that you use for mobile app development?",
        answer: "At Hidden Brains UK, we have an experienced team of mobile app developers to hire. Our experts offer platforms like Android, iOS, React Native, Flutter, Xamarin, and Ionic."
    },
    {
        question: "What are the responsibilities of a mobile app developer?",
        answer: "The responsibilities of a mobile app developer include working on client’s project requirements, communication and coordination, QA testing, and making sure about proper coordination of backend and frontend."
    },
    {
        question: "Which Mobile App Development Technologies Hidden Brains UK team experts in?",
        answer: "Hidden Brains UK has a pool of talented and experienced mobile app developers who are highly skilled professionals in Android, Native iOS, Swift, Kotlin, and Cross-platform."
    },
    {
        question: "What will be the cost of mobile app development?",
        answer: "Mobile app development cost depends on various factors such as the mobile app idea, the complexity of it, and the functionalities that you require."
    },
    {
        question: "Which type of mobile applications does your company offer?",
        answer: "Our expert and experienced mobile app developers have successfully launched lots of mobile applications such as travel, logistics, real estate, entertainment, finance, online education and many more."
    }
];

export const HIRE_MOBILE_PROCESS = [
    {
        step: "1",
        title: "Inquire",
        content: "Specify your requirement for hiring mobile app developers for your project.",
        icon: <Search className="w-8 h-8" />
    },
    {
        step: "2",
        title: "Evaluate",
        content: "Our app developers based in the UK analyzes the scope of the project and suggest the appropriate app developers.",
        icon: <FileText className="w-8 h-8" />
    },
    {
        step: "3",
        title: "Select",
        content: "Select the app developers of your choice from our resources to work on your project.",
        icon: <UserCheck className="w-8 h-8" />
    },
    {
        step: "4",
        title: "Pay",
        content: "Choose a payment model and make an easy online payment to start working with your app developers.",
        icon: <CreditCard className="w-8 h-8" />
    },
    {
        step: "5",
        title: "Manage",
        content: "Get complete control over the project & manage hired app developers on your own as per your requirements.",
        icon: <Settings className="w-8 h-8" />
    }
];

export const HIRE_MOBILE_MODELS = [
    {
        title: "Part-Time",
        price: "$99",
        features: [
            "4 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ]
    },
    {
        title: "Full Time",
        price: "$99",
        features: [
            "8 Working Hours Per Day (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 1 Month Commitment"
        ],
        active: true
    },
    {
        title: "Hourly",
        price: "$99",
        features: [
            "Hire Developer on an Ad-hoc basis (5 days a week)",
            "Weekends & Major Public Holidays Off",
            "Monthly Billing Cycle",
            "Minimum 25 Hours Commitment"
        ]
    }
];

export const HIRE_MOBILE_INDUSTRIES = [
    {
        title: "Healthcare",
        content: "We connect developers with organizations that need mobile and other applications to enhance customer retention, compliance and reduce business costs. We have expertise in industry standards such as HIPAA to cater to healthcare norms.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "https://www.hiddenbrains.co.uk//healthcare"
    },
    {
        title: "Travel & Hospitality",
        content: "With years of experience in the app development industry, our team will work with you to create applications to suit your industry's latest technology i.e. AR, VR, etc. With extensive experience in building navigation apps, travel booking applications, and others we will surpass your customer's needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "https://www.hiddenbrains.co.uk//travel-hospitality"
    },
    {
        title: "Banking & Finance",
        content: "You're interested in securing robust and scalable solutions to meet your company's growth and reach peak efficiency? You've come to the right place. Give us a call, and we'll help you make a strong go of things.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "https://www.hiddenbrains.co.uk//banking-finance"
    },
    {
        title: "Logistics & Transport",
        content: "Utilize our deep knowledge of industry sectors to build digital solutions that simplify mobile and complicated business problems, and make it easier for you to grow your business. What are you waiting for? Get in touch with us to hire a mobile app developer.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "https://www.hiddenbrains.co.uk//logistics"
    },
    {
        title: "Retail & Ecommerce",
        content: "We are specialists in delivering techno-driven solutions to the digital retail and e-Commerce industry. We have delivered more than a hundred projects to a diverse set of clients using the latest technologies and frameworks and industry best practices.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "https://www.hiddenbrains.co.uk/retail.html"
    },
    {
        title: "Media & Entertainment",
        content: "We offer app development for the media and entertainment industry and have firsthand knowledge of it. We have completed hundreds of projects for media clients globally and we have delighted them as clients.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "https://www.hiddenbrains.co.uk/media-and-entertainment.html"
    },
    {
        title: "Real Estate",
        content: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes. Whether you need an app to help with property listings, transactions, or payments, we can develop a solution that meets your needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "https://www.hiddenbrains.co.uk//real-estate"
    },
    {
        title: "ECommerce",
        content: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs. Whether you're looking to improve your customer's experience or increase sales, we can help you achieve your goals. Our team will work with you to create an app that meets your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "https://www.hiddenbrains.co.uk/ecommerce.html"
    },
    {
        title: "Online Booking",
        content: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends and technologies. That's where Hidden Brains comes in. We provide app development services for the online booking industry, so you can focus on what you do best - running your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "https://www.hiddenbrains.co.uk//online-booking"
    },
    {
        title: "Social Networking",
        content: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses in the Social Networking industry, so we know what it takes to create a successful app.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "https://www.hiddenbrains.co.uk/social-networking.html"
    }
];
