import React from "react";
import { Users, Shield, Lightbulb, Workflow, Lock, Network, Globe, Smartphone, Cloud, MessageSquare, Database, RefreshCw, Layers, ShieldCheck, Settings, ShoppingCart, Code2, Link, Zap, Search, Layout, CheckCircle } from "lucide-react";
import { GuideItem, GuideDetail } from "@/types/components/shared/GuideSection";
import { FAQItem } from "@/types/components/shared/FAQSection";

export const JAVA_HERO = {
    title: "Java Development Services",
    excerpt: "Do you need top-quality Java software development services in the UK? Hidden Brains UK enables you to build high-quality Java software solutions for both client and server-side projects. We strive to keep up with all the latest technologies to provide you with sustainable and high-quality Java software solutions.",
    cta: "Get in Touch"
};

export const JAVA_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const JAVA_SERVICES = [
    {
        title: "Custom Java App Development",
        desc: "Java apps are designed to fit the needs and objectives of your company, as our Java developers work closely with QA engineers, UI/UX designers, and business analysts to deliver custom products.",
        icon: <Code2 className="w-8 h-8" />
    },
    {
        title: "Java Web Development",
        desc: "Our Java development services are not only directed at small businesses but are catered to the needs of any size of enterprise in different industries, like healthcare, real estate, and eCommerce.",
        icon: <Globe className="w-8 h-8" />
    },
    {
        title: "Enterprise Java Development",
        desc: "Our Java application development company provides wide-ranging enterprise portal solutions with the newest technology and best-in-class tools, managed by our dedicated team of portal developers and content managers.",
        icon: <Database className="w-8 h-8" />
    },
    {
        title: "Java App QA & Testing",
        desc: "To build robust and reliable Java-based applications, we perform stringent QA and Testing on all solutions before deploying them in the enterprise to ensure excellent app performance.",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "Java App Migration and Upgrade",
        desc: "Our specialization is migrating an existing business application platform to Java. Our services include Java integration as well. We undertake the unpleasant tasks of importing, exporting, and migrating data, ensuring quality at all times.",
        icon: <RefreshCw className="w-8 h-8" />
    },
    {
        title: "App Maintenance and Support",
        desc: "You can put your Java app up and running seamlessly with Hidden Brains UK’s Java engineers. We offer tailor-made support and maintenance services to ensure performance, agility, and compatibility.",
        icon: <Settings className="w-8 h-8" />
    }
];

export const JAVA_REASONS = [
    {
        title: "500+ App Development Team",
        description: "Our dedicated team of developers is highly experienced, solution-oriented, and capable of providing industry-leading solutions to help your business stand out.",
        icon: <Users className="w-8 h-8" />
    },
    {
        title: "Complete Transparency",
        description: "We provide accurate project details whether you work with our team, hire a Java development team, or hire a Java developer.",
        icon: <Shield className="w-8 h-8" />
    },
    {
        title: "No Obligation Quote",
        description: "Our team of developers can help you to estimate the costs of your project - whether it be upgrading your existing app or designing a completely new one, our experts can help.",
        icon: <Lightbulb className="w-8 h-8" />
    },
    {
        title: "Smooth Projects Management",
        description: "Our company is one of the best Java development companies in the UK when it comes to upholding quality standards, as we oversee your project at every stage and keep you informed.",
        icon: <Workflow className="w-8 h-8" />
    },
    {
        title: "Project Security with an NDA",
        description: "Your project details will be held in confidence with us as we sign an agreement with our clients not to disclose their confidential information.",
        icon: <Lock className="w-8 h-8" />
    },
    {
        title: "Flexible Engagement Models",
        description: "Being a leading company in the Java application development industry in the UK, we offer flexible engagement models based on hourly, part-time, and full-time billing.",
        icon: <Network className="w-8 h-8" />
    }
];

export const JAVA_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-java", label: "What is Java Development?" },
    { id: "why-use-java", label: "Why Do We Use Java Programming?" },
    { id: "platform-components", label: "What are Java Platform Components?" },
    { id: "java-web-dev", label: "How is Java Used in Web Development?" },
    { id: "choice-for-web", label: "Is Java Still a Good Choice For Web Development?" }
];

export const JAVA_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-java",
        title: "What is Java Development?",
        content: "Java is a programming language designed to build cross-platform applications. It is a general-purpose, concurrent, class-based object-oriented programming language that is specifically geared towards embedded systems and mobile applications. Java was originally developed by Sun Microsystems and was later bought out by Oracle Corporation. Java Development is primarily used to develop enterprise-level software applications, but it can be used for other purposes as well, such as games or even mobile applications."
    },
    {
        id: "why-use-java",
        title: "Why Do We Use Java Programming?",
        content: "The Java programming language is designed to be used in a distributed environment, such as the Internet. Java is widely used for developing Android mobile apps as well as enterprise software and web applications."
    },
    {
        id: "platform-components",
        title: "What are Java Platform Components?",
        content: (
            <>
                <p>Java Platform Components are Java APIs (application programming interfaces) that allow developers to include various libraries and frameworks in their applications. These components are part of an API package called Java Platform, Standard Edition (Java SE). This includes:</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>Java Class Library</li>
                    <li>Java Virtual Machine</li>
                    <li>JVM-based languages, such as Java and Scala</li>
                    <li>JDBC (Java Database Connectivity) library</li>
                </ul>
            </>
        )
    },
    {
        id: "java-web-dev",
        title: "How is Java Used in Web Development?",
        content: "Java is a development language that is often used in web development because of its versatility. It can be used to create desktop applications, mobile apps, games, and more. Java has also been a popular choice among developers who are looking to use open-source languages. Since Java is an object-oriented programming language, it can easily be translated into other languages such as C++ and Python."
    },
    {
        id: "choice-for-web",
        title: "Is Java Still a Good Choice For Web Development?",
        content: "Java is still a good choice for web development. It’s been around since 1995 and is fairly mature, which means it has a lot of tools available and documentation to help you get started. Plus, Java is an object-oriented language, which means that data and the code you use to manipulate it are encapsulated in objects with public or private interfaces."
    }
];

export const JAVA_FAQS: FAQItem[] = [
    {
        question: "Why should I choose you for Java web development services?",
        answer: "We are based in the UK and we have a wealth of experience with Java Web Development. Our team is highly skilled and has done many Java Web Development projects. We know that each project is different, and that’s why we take pride in offering affordable rates, with guaranteed high-quality work. We have both offshore and onshore teams to serve all of your needs."
    },
    {
        question: "What kind of applications can you develop using Java?",
        answer: (
            <>
                <p>Java is a powerful programming language that can be used to develop many types of applications. Being a reputed Java development company we can offer, including:</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>Web Application Development</li>
                    <li>Java Enterprise Edition (Java EE) Applications</li>
                    <li>Mobile Applications and Game Development</li>
                    <li>Desktop Applications</li>
                    <li>Database-Centric Projects</li>
                </ul>
            </>
        )
    },
    {
        question: "Which Java technologies are your developers proficient in?",
        answer: "Java is a popular programming language used to create apps and games. Therefore, our Java developers are experts in Java 8, Java 9, and Java 10, and are likely to develop an app using the Streams API or Lambda expressions, Android development, and their experience with Kotlin, the Spring MVC framework, or Spring Boot; the J2EE or J2SE platforms."
    },
    {
        question: "Can I Hire a Java Developers For My On-Going Project at Hidden Brains UK?",
        answer: "Yes, definitely! Hidden Brains is a leading UK company that specializes in Java development. We provide a range of services such as software development and consultancy. If you’re looking to hire a Java developer, we have a great team of experts that can help your project succeed."
    },
    {
        question: "How much does Java application development cost?",
        answer: (
            <>
                <p>The average cost of a Java application development project is $10,000 to $15,000+. The price will vary depending on such factors as:</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li>The size and complexity of the project.</li>
                    <li>How experienced the developer is.</li>
                    <li>How many resources are needed to complete the project, and how long does it take to develop?</li>
                    <li>What tools or technologies does the Java software development company want to use?</li>
                    <li>The level of security desired.</li>
                    <li>Whether you want multiple developers working together or just one person on the project.</li>
                </ul>
            </>
        )
    },
    {
        question: "Can I hire a Java developer on a full-time basis?",
        answer: "Java developers are a highly sought-after resource, and a Java developer on a full-time basis can be hard to find. This is because Java developers are often hired on a contract or a freelance basis. If you are looking for full-time Java developers, we have a range of resources that can help you find them."
    }
];

export const JAVA_INDUSTRIES = [
    {
        name: "Banking & Finance",
        desc: "Our Java software development company in the UK provides top-quality banking software that's responsive to your needs and pleasing to the eye, as well as being protected from cyber breaches.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers who are familiar with the insurance industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel & Hospitality",
        desc: "With over 22+ years of experience developing customer-centric, secure, and reliable solutions, we've become renowned for providing world-class services to travel agencies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Hidden Brains UK offers customized logistics development services tailored to the specific needs of our clients, including business-oriented, time-saving solutions.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    },
    {
        name: "Healthcare",
        desc: "Hospitals, clinics, doctors, and medical technology companies are among the entities Hidden Brains UK provides Java-based healthcare software solutions for.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retailers and eCommerce",
        desc: "The Java development team at our company specializes in offering eCommerce development solutions to businesses of any size, regardless of their industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "A dedicated team of Java app developers at Hidden Brains UK creates creative and unique software that enhances the performance of our media operations.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    },
    {
        name: "Real Estate",
        desc: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "/real-estate"
    },
    {
        name: "eCommerce",
        desc: "We have a team of experienced developers who can create custom eCommerce applications tailored to your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "We provide app development services for the online booking industry, so you can focus on what you do best - running your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "As a Java development company in the UK, our mission is to make the learning process interactive, convenient, and cost-effective with digital solutions.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    }
];

export const JAVA_PROJECTS = [
    {
        title: "Catwalk88",
        category: "ecommerce",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/catwalk-v2.webp",
        link: "https://www.hiddenbrains.com/womens-clothing-website-development.html"
    },
    {
        title: "Dublin Convention Bureau",
        category: "travel-tourism",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/dublin_convention.webp",
        link: "https://www.hiddenbrains.com/dublin-convention-bureau.html"
    },
    {
        title: "Evil Escape Game",
        category: "game",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/evilescape.webp",
        link: "https://www.hiddenbrains.com/evil-escape-game-app.html"
    },
    {
        title: "Food Express",
        category: "restaurant",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/foodexpress.webp",
        link: "https://www.hiddenbrains.com/food-express.html"
    },
    {
        title: "Guess The Price",
        category: "entertainment",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/guesstheprice.webp",
        link: "https://www.hiddenbrains.com/guess-the-price-gaming-app.html"
    },
    {
        title: "Cay Guide – Travel App for Cayman Island",
        category: "travel-tourism",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/cayguide-v2.webp",
        link: "https://www.hiddenbrains.com/cayguide.html"
    },
    {
        title: "Neoxeo App",
        category: "entertainment",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/neoxe.webp",
        link: "https://www.hiddenbrains.com/online-internet-radio-app-development.html"
    },
    {
        title: "Werko",
        category: "manufacturing",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/09/werko.webp",
        link: "https://www.hiddenbrains.com/portal-development-for-contractors-craftsman.html"
    }
];

export const JAVA_PROCESS_STEPS = [
    {
        title: "Conceptualization & Requirement Gathering",
        icon: <Search className="w-8 h-8" />,
    },
    {
        title: "Analysis of Requirement & Design",
        icon: <Layout className="w-8 h-8" />,
    },
    {
        title: "Software Development & Testing",
        icon: <Code2 className="w-8 h-8" />,
    },
    {
        title: "Application Deployment & Making Site Live",
        icon: <Globe className="w-8 h-8" />,
    },
    {
        title: "Upgrades & App Support Services",
        icon: <CheckCircle className="w-8 h-8" />,
    }
];

export const JAVA_TESTIMONIALS = [
    {
        quote: "We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!",
        author: "Mr. Daniel Vant, UK",
        videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
    }
];
