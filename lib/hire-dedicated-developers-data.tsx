import React from "react";
import { Users, ShieldCheck, Lightbulb, Workflow, RefreshCw, Zap } from "lucide-react";

export interface TechExpertiseItem {
    title: string;
    desc: string;
    image: string;
    link?: string;
    color: string;
}

export interface ServiceItem {
    title: string;
    desc: string;
}

export interface IndustryItem {
    name: string;
    desc: string;
    image: string;
    link?: string;
}

export interface ReasonItem {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

export interface GuideItem {
    id: string;
    label: string;
}

export interface GuideDetail {
    id: string;
    title: string;
    content: React.ReactNode;
}

export const HERO_CONTENT = {
    title: "Hire Developers in the UK",
    description: "If you are looking to hire dedicated developers in the UK, then Hidden Brains would be a perfect fit for your business. We make it possible for you to hire app developers with expertise in the most recent trends, including AR/VR, AI, IoT, Blockchain & Chatbot, React & Flutter, as well as mobile app technologies (iOS, Android, Xamarin, React Native), and web app technologies (PHP, Java,.Net, Python).",
};

export const INTRO_CONTENT = {
    title: "Hire Dedicated Software Developers in the UK",
    paragraphs: [
        <>With over 22+ years of experience delivering robust and award-winning software solutions – we will make sure that your product has all it needs to succeed. Here at Hidden Brains, we have built a team of highly-skilled, experienced, professional, and seasoned software, web, and <strong><a href="/hire-mobile-apps-developer.html" className="text-orange-500 hover:underline">mobile app developers</a></strong> that can help you accelerate your user business growth.</>,
        <>With the dominant leadership in the IT industry, we have established a strong foothold by delivering highly secure, reliable and scalable, and customized next-gen apps, which leads to faster results and ensures better ROI. As our certified app programmers have worked on a wide variety of solutions in various verticals, we are committed to delivering unmatched quality solutions to our clients.</>,
        <>You can hire app developers at <strong>Hidden Brains</strong> on an hourly, monthly, or yearly basis, depending upon the complexity of your business requirements. Our pool of dedicated developers are offering end-to-end web and mobile app development solutions to start-ups and large-scale companies globally on flexible engagement models.</>
    ],
    stats: [
        { count: "22", symbol: "+", label: "Years of experience" },
        { count: "1000", symbol: "+", label: "Mobile Projects" },
        { count: "30", symbol: "+", label: "Domain served" },
        { count: "125", symbol: "+", label: "Mobile Experts" }
    ]
};

export const TECH_EXPERTISE: TechExpertiseItem[] = [
    {
        title: "Hire Android App Developers",
        desc: "By hiring Android app developers at Hidden Brains UK, you can create feature-rich Android apps using Java and Kotlin languages and make them featured on Google Play.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/android.webp",
        link: "/android-apps-development.html",
        color: "orange"
    },
    {
        title: "Hire iOS App Developers",
        desc: "Our team of full-stack iOS mobile app developers are experts in creating incredible, interactive apps using Swift and objective C that work across all iOS devices!",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/ios.webp",
        link: "/ios-apps-development",
        color: "purple"
    },
    {
        title: "Hire Cross-Platform App Developers",
        desc: "To ensure a top-notch user experience, our talented team of cross-platform app developers uses only the most cutting-edge hybrid mobile app development technologies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/Cross-platform.png",
        link: "/cross-platform-app-development.html",
        color: "dark"
    },
    {
        title: "Hire Web Developers",
        desc: "You can hire full-stack web app developers, programmers, and coders through Hidden Brains UK for website development, support, and testing.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/responsive.webp",
        link: "/hire-web-developers.html",
        color: "green"
    },
    {
        title: "Hire UI/UX Designers",
        desc: "By utilizing a distinctive design strategy, user-friendly interfaces, and seamless user experiences, our talented UI/UX engineers can set your app apart from the competition.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/UI-UXDesigner.webp",
        link: "/software-analysis-design-upgradation-services.html",
        color: "yellow"
    },
    {
        title: "Hire QA Engineers",
        desc: "We have a pool of highly skilled experts that provide quality assurance and software testing services to help you launch a bug-free app and meet all your testing needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/QA-eng.webp",
        link: "/hire-qa-engineers",
        color: "purple"
    },
    {
        title: "Hire React Native Developers",
        desc: "By shaking hands with Hidden Brains, you can easily onboard the best React Native app developers for your project and build a dynamic, feature-rich cross-platform app.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ReactNative.png",
        color: "green"
    },
    {
        title: "Hire Flutter App Developers",
        desc: "From custom development to Flutter App consulting, our dedicated team of Flutter app developers can provide your all-in-one solution at Hidden Brains UK.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Flutter.png",
        color: "yellow"
    },
    {
        title: "Hire AR/VR App Developers",
        desc: "Our experienced AR/VR app developers can help you create features-rich augmented reality and virtual reality apps integrated with enhanced interactive functionalities.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/AR-VR.png",
        color: "purple"
    }
];

export const APP_DEV_TECH: TechExpertiseItem[] = [
    {
        title: "iOS App Development",
        desc: "We build scalable and robust applications for all iOS devices, including iPhone, iPad, Apple TV and watchOS.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/ios.webp",
        link: "/ios-apps-development",
        color: "orange"
    },
    {
        title: "Android App Development",
        desc: "Hidden Brains has delivered several Android apps from OS versions of Android ICS to the latest Android OS .",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/android.webp",
        link: "/android-apps-development",
        color: "purple"
    },
    {
        title: "Swift App Development",
        desc: "Develop an entirely new app using Swift language or add Swift framework to an existing app using our exclusive service.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/swift.webp",
        link: "/swift-app-development.html",
        color: "dark"
    },
    {
        title: "Cross-Platform Development",
        desc: "Our developers specialize in building cross platform mobile apps in accordance to client’s business needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/responsive.webp",
        link: "/cross-platform-app-development.html",
        color: "green"
    },
    {
        title: "Ionic App Development",
        desc: "Launch interactive and high-performance mobile applications with one single code on different platforms with Ionic.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/iOnic.webp",
        link: "/ionic-app-development",
        color: "yellow"
    },
    {
        title: "Xamarin App Development",
        desc: "Our decade of experience and expertise in C# enable us to develop robust Xamarin app development services",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/06/xamarin.webp",
        link: "/xamarin-app-development.html",
        color: "purple"
    }
];

export const SOFTWARE_SERVICES: ServiceItem[] = [
    {
        title: "Custom Mobile App Development",
        desc: "Our highly skilled developers are passionate about building feature-rich native and hybrid mobile apps using cutting-edge technologies to help you stand apart in the competitive market."
    },
    {
        title: "Custom Web App Development",
        desc: "We at Hidden Brains UK help you hire top web app developers to create custom web apps that are secure, scalable, and have advanced features and functionalities."
    },
    {
        title: "API & APP Integration",
        desc: "Hidden Brains UK enables you to hire dedicated app programmers to excel in creating APIs and integrating them with other apps without any hassle and without affecting app performance."
    },
    {
        title: "App Migration and Updation",
        desc: "Hidden Brains enables you to hire offshore developers in the UK who have expertise in migrating apps from any other technology and upgrading them to the latest technologies without showing zero downtime."
    },
    {
        title: "Support & Maintenance",
        desc: "To keep your mobile and web apps running smoothly on all devices, we enable you to opt for app development services that help you with a complete app and website maintenance."
    },
    {
        title: "QA and App Testing",
        desc: "When you hire a QA and testing team at Hidden Brains UK, you will be assured of a bug-free application. Our experts run your app on multiple testing modules to ensure excellent app performance."
    }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
    {
        name: "Healthcare",
        desc: "People have been revolutionizing the way we diagnose patients and maintain hospitals, fitness, and health for years now. Hidden Brains has created a number of apps that are now helping multiple medical and healthcare industries use technology to make themselves more efficient when it comes to dealing with their clients.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail",
        desc: "Looking for support for developing an innovative, new-generation retail and eCommerce digital solution? Take advantage of our consulting services and create a strong presence in the marketplace. To hire our dedicated retail app developers, you can contact us today!",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "Are you looking for a native or cross-platform entertainment app developer? Do you want the peace of mind that comes with knowing your project will be supported by a dedicated team? Look no further than us! We are capable of building software solutions such as OTT apps, media apps, CRM/ERP, etc.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    },
    {
        name: "Real Estate",
        desc: "Our real estate app developers are highly skilled at building portals and databases for our clients. We ensure all of our programmers stay up-to-date on industry developments so they can create imaginative, cutting-edge technology that is always changing.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "/real-estate"
    },
    {
        name: "ECommerce",
        desc: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs. Whether you're looking to improve your customer's experience or increase sales, we can help you achieve your goals. Our team will work with you to create an app that meets your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends and technologies. That's where Hidden Brains comes in. We provide app development services for the online booking industry, so you can focus on what you do best - running your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses in the Social Networking industry, so we know what it takes to create a successful app.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes, from small businesses to Fortune 500 companies. And we can tailor our services to fit your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "At Hidden Brains UK, we offer e-learning and educational app development services all across the globe. Our offshoring team has extensive years of experience in developing applications for start-ups, SMEs, and famous brand names.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business, whether it's a utility company, an oil and gas producer, or a renewable energy provider. Our team works with you to create an app that meets your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    },
    {
        name: "Fintech",
        desc: "In the Banking & Finance industry, we provide app development services that help banks and other financial institutions to develop mobile applications. Our app development services for this industry help them keep track of their customer's finances and manage their own internal processes.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance" /* Also mapped to fin-tech similarly in others, using link from the provided DOM for Banking & Finance */
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers who are familiar with the insurance industry and can provide you with the best possible solution for your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel & Hospitality",
        desc: "We provide top-notch app development services that will help your business stand out from the competition. Whether you're looking for a simple booking app or something more complex, we can help. Contact us today to learn more about our app development services for the travel and hospitality industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Utilize our deep knowledge of industry sectors to build digital solutions that simplify mobile and complicated business problems, and make it easier for you to grow your business. What are you waiting for? Get in touch with us to hire a mobile app developer.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    }
];

export const WHY_CHOOSE_HB: ReasonItem[] = [
    {
        icon: <Users size={32} />,
        title: "500+ App Development Team",
        desc: "We have a pool of talented and highly skilled developers passionate about delivering quality solutions by keeping in mind the unique requirements of their clients."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Complete Transparency",
        desc: "To maintain long-term relationships with our clients, our developers strive to maintain complete project transparency by sharing regular project progress reports."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "No Obligation Quote",
        desc: "Get to know the project estimation by sharing your project requirements with our experts. They will evaluate it and provide free estimates within 24 hours."
    },
    {
        icon: <Workflow size={32} />,
        title: "Smooth Projects Management",
        desc: "To ensure hassle free project development process, you will be appointed a project manager who will be responsible for communicating the requirements with the development team."
    },
    {
        icon: <RefreshCw size={32} />, // Used RefreshCw instead of recycle because Lucide doesn't have recycle. Or could use Shield Check again.
        title: "Project Security with an NDA",
        desc: "We value your privacy and will ensure you keep it secure with us as we begin any project by signing the disclosure agreement and taking all security measures to maintain privacy."
    },
    {
        icon: <Zap size={32} />,
        title: "Flexible Engagement Models",
        desc: "Our iOS developers are available in three kinds of contractual agreements depending on your needs, on a monthly, part-time, or full-time basis."
    }
];

export const GUIDE_ITEMS: GuideItem[] = [
    { id: "how-to-hire", label: "How to Hire the Best App Developers in the UK?" },
    { id: "what-are-the", label: "What are the benefits of hiring an app developer?" }
];

export const GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "how-to-hire",
        title: "How to Hire the Best App Developers in the UK?",
        content: (
            <>
                <p className="mb-4">Hiring a developer is one of the most challenging tasks for startups, but to ensure that you make the right choice, it is worth following these parameters:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Verify companies profile</li>
                    <li>Match your expectations and requirements</li>
                    <li>Check developer’s knowledge and skills in industry-leading technologies</li>
                    <li>Adhering NDA and other security measures</li>
                    <li>Compare the hourly cost and evaluate the project quality</li>
                    <li>Ask for a portfolio</li>
                    <li>Check track record</li>
                </ul>
            </>
        )
    },
    {
        id: "what-are-the",
        title: "What are the benefits of hiring an app developer?",
        content: (
            <>
                <p className="mb-4">If you are planning to create a mobile app at a competitive cost, then hiring an offshore app developer will be a perfect decision. Here are a few listed benefits of hiring app developers:</p>
                <p className="mb-4">Versatile Skills With Cost-Effectiveness<br />
                    Quick to onboard on project<br />
                    Higher productivity and on-time project completion<br />
                    Dedicated app development team<br />
                    Unmatched quality solutions</p>
            </>
        )
    }
];

export const FAQ_ITEMS = [
    {
        question: "Why is Hidden Brains UK the best place to hire app developers?",
        answer: "Hidden Brains is one of the best and most trusted app development companies in the UK, helping businesses to scale their overall development process. They offer some of the benefits, such as: Strictly NDA adherence, No contract lock-ins, No hidden costs, 100% money back guarantee"
    },
    {
        question: "What can Hidden Brains UK's developers do for me?",
        answer: "To help you get a complete app development solution, we provide a complete app development team under one roof. It may include: Project managers, UI/UX designer, Mobile app developer, Maintenance and support experts, QA/testing engineers, Deployment experts"
    },
    {
        question: "What type of mobile apps do you develop?",
        answer: "Our team of talented and experienced mobile app developers have been involved in developing an extensive array of apps for many different purposes such as utilities, entertainment, travel, finance, social networking, productivity, weather, business-related applications or games."
    },
    {
        question: "How much time will it take for the team to complete my project?",
        answer: "Our team of developers will take 2 to 3 months to build your application. However, it is difficult to determine how long this process will take before we know what you need for your company."
    },
    {
        question: "How much does it cost to hire an app developer at Hidden Brains UK?",
        answer: "When you hire app developers from Hidden Brains, they start at just $15 – or as much as $100, depending on what your particular needs are."
    },
    {
        question: "What is the process of hiring an app developer at Hidden Brains UK?",
        answer: "Visit the Hidden Brains UK website and click on the “request a quote” option to hire an experienced mobile app developer for your project."
    }
];
