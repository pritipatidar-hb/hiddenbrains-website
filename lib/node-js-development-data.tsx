import {
    Database,
    Link2,
    Zap,
    Building2,
    Users,
    ShieldCheck,
    Lightbulb,
    Workflow,
    Lock,
    Activity,
    Settings,
    HelpCircle,
    ChevronRight,
    Search,
    Code2,
    Globe,
    ShoppingBag,
    HeartPulse,
    Plane,
    Truck,
    Music,
    UserPlus,
    GraduationCap
} from "lucide-react";
import React from "react";

export const NODEJS_HERO = {
    title: "Node.JS Development Company in The UK",
    excerpt: "Being a leading Node.JS development company in the UK, we build real time, fast, and scalable backends using Node.JS. We have a highly skilled and experienced team of engineers who have designed and developed several award-winning enterprise solutions based on Node.js and other modern frameworks.",
    cta: "Get in Touch"
};

export const NODEJS_COUNTERS = [
    { label: "Years of experience", value: "22", symbol: "+" },
    { label: "Mobile Projects", value: "1000", symbol: "+" },
    { label: "Domain served", value: "30", symbol: "+" },
    { label: "Mobile Experts", value: "125", symbol: "+" }
];

export const NODEJS_SERVICES = [
    {
        title: "Custom Backend Development",
        desc: "Node.js is a powerful JavaScript platform that enables you to create scalable and real-time applications. We have a team of experienced developers who can help you with custom backend development using Node.js.",
        icon: <Database size={40} />
    },
    {
        title: "API development",
        desc: "Are you looking for a Node js development company that can help you with API development? Look no further than Hidden Brains. We have a team of experienced developers who are well-versed in Node.js and can provide top-notch development services.",
        icon: <Link2 size={40} />
    },
    {
        title: "SPAs development",
        desc: "If you’re looking for a Node js development company that can provide top-notch development services, look no further than Hidden Brains. We specialize in SPAs development and can help you create a beautiful, functional website or application.",
        icon: <Zap size={40} />
    },
    {
        title: "Enterprise software solutions",
        desc: "We offer custom Node.js development services to build enterprise software solutions that are scalable, reliable, and secure. Our team of experienced developers can help you create a robust and high-performance application that meets all your business needs.",
        icon: <Building2 size={40} />
    },
    {
        title: "Technology Consulting Services",
        desc: "We provide Technology Consulting Services to help you make the most of your technology investments. We work with you to understand your business goals and objectives, and then recommend the best technology solutions to help you achieve them.",
        icon: <Search size={40} />
    },
    {
        title: "Support & Maintenance",
        desc: "Hidden Brains provide top-notch Support & Maintenance for all your web development needs. We keep your website up and running so you can focus on your business. Our team of experts are available 24/7 to help you with any problems you may have.",
        icon: <Settings size={40} />
    }
];

export const NODEJS_INDUSTRIES = [
    {
        name: "Banking",
        desc: "Hidden Brains offers top-notch Node.js development services that can help banks stay ahead of the curve with secure and efficient custom solutions.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance"
    },
    {
        name: "Insurance",
        desc: "The insurance industry is complex and competitive. We have worked with some of the largest insurance companies to provide excellent customer service and innovative products.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel",
        desc: "Our experienced developers provide the node.js services you need to take your travel business to the next level with world-class security and reliability.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics and Transportation",
        desc: "We provide top-notch Node.js development services for the logistics industry, well-versed in the latest technologies and trends.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    },
    {
        name: "Healthcare",
        desc: "We provide node js development services for the healthcare industry to create highly scalable and efficient applications.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail",
        desc: "We create scalable and secure applications for the retail industry, helping businesses manage tasks and inventories effectively.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "Our top-notch Node.js development services can help take your media business to the next level with innovative ways to reach audiences.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    },
    {
        name: "Real Estate",
        desc: "We create custom solutions for the Real Estate industry, from property listings to secure payment integrations.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "/real-estate"
    },
    {
        name: "ECommerce",
        desc: "Get a robust, scalable, and secure eCommerce website or application with our specialized Node.js development services.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "Our expert Node.js developers offer custom solutions that understand the specific needs of the online booking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "We create custom social networking applications as per your requirements with a proven track record of high quality.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "Our app development services help streamline the manufacturing process and make it more efficient for any scale.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "Adopt innovative Node.js technologies to keep up with the latest trends in the dynamic education industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "Develop the perfect app for your energy business, whether it's a utility company or renewable energy provider.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    }
];

export const NODEJS_GUIDE_ITEMS = [
    { id: "benefits", label: "What are the benefits of Nodejs?" },
    { id: "types", label: "Which types of applications are created using Nodejs?" },
    { id: "restful", label: "What are RESTful APIs?" },
    { id: "companies", label: "Which leading companies are using Node.js?" },
    { id: "mean", label: "What is MEAN Stack?" },
    { id: "mern", label: "What is MERN Stack?" }
];

export const NODEJS_GUIDE_DETAILS = [
    {
        id: "benefits",
        title: "What are the benefits of Nodejs?",
        content: (
            <>
                <p>Nodejs is a powerful tool for creating web applications. It is fast, efficient, and easy to use. Plus, it has a large community of developers who are always creating new modules and tools to make Nodejs even better. Here are some of the benefits of Nodejs that make it such a great choice for web development.</p>
                <ul className="list-disc ml-6 mt-4 space-y-2">
                    <li><strong>Fast</strong> – Nodejs uses an event-driven non-blocking I/O model which makes it very efficient. The single threaded nature of Node also means that you can have many more connections on your server with less overhead per connection.</li>
                    <li><strong>Powerful</strong> – Nodejs provides asynchronous programming with callbacks, making it possible to manage multiple events without worrying about blocking the entire program’s execution.</li>
                    <li><strong>Easy</strong> – The Node package manager (npm) provides an ecosystem where thousands of open source libraries are available to download and incorporate into your application easily.</li>
                </ul>
                <p className="mt-4">All these reasons are why Nodejs is one of the most popular languages out there today.</p>
            </>
        )
    },
    {
        id: "types",
        title: "Which types of applications are created using Nodejs?",
        content: "Node.js is used for many different types of applications, including web applications, mobile applications, desktop applications, and more. Node.js is a popular choice for creating microservices and RESTful APIs."
    },
    {
        id: "restful",
        title: "What are RESTful APIs?",
        content: "RESTful APIs are Application Programming Interfaces that use the HTTP protocol. They’re typically created with GET or POST requests and can be accessed by anyone who has access to the internet. The server responds with data in the JSON format which then gets transformed into HTML for webpages or XML for native apps on various devices."
    },
    {
        id: "companies",
        title: "Which leading companies are using Node.js?",
        content: "LinkedIn, NASA, Netflix, Twitter, and eBay are all leading companies that use Node.js. Node.js is a versatile platform that helps these companies run their websites and applications smoothly. Plus, Node.js is constantly being updated with new features and security patches, which makes it an ideal choice for companies that want to stay up-to-date with the latest technology trends."
    },
    {
        id: "mean",
        title: "What Is MEAN Stack?",
        content: "MEAN Stack is a popular web development stack made up of MongoDB, Express.js, AngularJS, and Node.js. It’s a great choice for building dynamic web applications. In this guide, we’ll cover everything you need to know about Node.js development, from environment setup to creating a basic CRUD application. By the end of this guide, you’ll be well on your way to becoming a Node.js developer!"
    },
    {
        id: "mern",
        title: "What is MERN stack?",
        content: "The MERN stack is a JavaScript-based stack for building web applications. It consists of MongoDB, Express, React, and Node.js. MongoDB is a database, Express is a web framework, React is a front-end library, and Node.js is a runtime environment. The MERN stack is used to build web applications that are fast, scalable, and easy to maintain."
    }
];

export const NODEJS_FAQS = [
    {
        question: "Why should I choose you for Node Js development services?",
        answer: (
            <ul className="list-disc ml-6 space-y-2">
                <li>With over five years of experience, Hidden Brains is a reliable and trusted partner for Node.js development services.</li>
                <li>We have a team of dedicated and certified Node.js developers for hire who are well-versed in the latest technology trends and tools.</li>
                <li>We follow a systematic approach to Node.js development, which helps us deliver high-quality and scalable solutions within the stipulated time frame.</li>
                <li>We offer flexible engagement models that help you choose the most suitable option for your project requirements and budget.</li>
                <li>We have a proven track record of delivering successful Node.js projects for clients from various industry verticals such as eCommerce, healthcare, education, and more.</li>
            </ul>
        )
    },
    {
        question: "Do you think Node.JS development services are good for enterprise applications?",
        answer: "All programming languages have some pros and cons with various levels. Though Node.Js is little different, latest tools and versions of Node.Js have opened lots of opportunities to solve complex applications that make Node.Js a very good option to build enterprise app development."
    },
    {
        question: "How much does it cost to build a Node.js web application development?",
        answer: (
            <>
                <p>The cost to develop a Node.JS application depends on various factors:</p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Project Idea</li>
                    <li>Technology Stack</li>
                    <li>Development Time</li>
                    <li>Development Methodology Option</li>
                    <li>Third Party Platforms Requirements</li>
                    <li>And more...</li>
                </ul>
            </>
        )
    },
    {
        question: "What are the main advantages of using Node.js Development Services?",
        answer: "Node.Js uses Javascript both on client and server side, also it is lightweight programming language with speedy data streaming."
    },
    {
        question: "Will you sign a NDA for my project?",
        answer: "Yes, We sign NDA for all our projects. We promised to fulfill clients’ project requirements to deliver advanced Node Js web development services results. We keep out clients’ information and data confidential."
    },
    {
        question: "Does Hidden Brains UK provide Node.js consulting services?",
        answer: "Yes we provide! Our expert Node.js team will provide consultancy for your particular need or simply a new idea for Node.js development services. Contact us!"
    }
];

export const NODEJS_TESTIMONIALS = [
    {
        quote: "We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!",
        author: "Mr. Daniel Vant, UK",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/Daniel-Vant-1.webp",
        videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
    }
];

export const NODEJS_PROJECTS = [
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
