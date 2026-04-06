import React from "react";
import { Users, ShieldCheck, Lightbulb, Workflow, Lock, Zap, RefreshCw, BarChart3, Database, Globe, ShoppingCart, Puzzle, Headphones, Building2, Terminal, Layers } from "lucide-react";
import type { TechExpertiseItem, WebServiceItem, IndustryItem, ReasonItem, GuideItem, GuideDetail, ProcessStep } from "./web-app-data";

export const CODEIGNITER_HERO = {
    title: "Top CodeIgniter Web Development Company in The UK",
    excerpt: "Avail of the best CodeIgniter development services to create fully-featured & functionally-rich web applications. Our experts are well aware of the development practices of Codeigniter and build high-performing web applications for global clients.",
    cta: "Get in Touch"
};

export const CODEIGNITER_COUNTERS = [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "1000", symbol: "+", label: "Mobile Projects" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
];

export const CODEIGNITER_SERVICES = [
    {
        title: "CodeIgniter Migration Services",
        desc: "If you are moving your website to the CodeIgniter framework, you cannot find a smoother transition than with our CI Migration service, which protects your data during the process.",
        icon: <RefreshCw size={40} />
    },
    {
        title: "Corporate Website Development",
        desc: "With advanced technologies and tools and proficiency in the industry, we create industry-specific, enterprise-grade web applications for corporates. We specialize in SaaS-based solutions, Project management tools, CRMS, and many more.",
        icon: <Building2 size={40} />
    },
    {
        title: "API Integration Services",
        desc: "No waiting any longer than you have to to make your website or application compatible with third-party APIs, as we can offer our exclusive integration service for your every need: payment gateways, social media, analytics, and many more.",
        icon: <Layers size={40} />
    },
    {
        title: "CodeIgniter Support & Maintenance",
        desc: "After CodeIgniter developers finish the app’s web development, we will provide support and maintenance to make it run as smoothly as possible with every new update. Our developers follow the agreement norms and offer maintenance and support services.",
        icon: <Headphones size={40} />
    },
    {
        title: "CodeIgniter Extensions",
        desc: "As a robust framework with a simpler code base, CodeIgniter is the perfect platform for the development of modular additions for your application. Hence, we offer CI extension solutions to help you and your company grow and succeed.",
        icon: <Puzzle size={40} />
    },
    {
        title: "CodeIgniter eCommerce Solution",
        desc: "If you want to expand your e-commerce business to the next level, come and use our CI e-commerce solution, which employs CI and AJAX to build your online store’s shopping carts, along with data security to make your shopping experience even more pleasant.",
        icon: <ShoppingCart size={40} />
    }
];

export const CODEIGNITER_REASONS: any[] = [
    {
        title: "Dynamic Team",
        description: "Our Codeigniter web developers are experienced and know the intricacies of Codeigniter development.",
        icon: <Users size={32} />
    },
    {
        title: "Complete Transparency",
        description: "Your idea is secure with us because we will respect your confidentiality. Our team of developers strictly follow the NDA.",
        icon: <ShieldCheck size={32} />
    },
    {
        title: "No Obligation Quote",
        description: "We provide you with a free estimate with no obligation post on your project idea within 24 hours.",
        icon: <Lightbulb size={32} />
    },
    {
        title: "Smooth Project Management",
        description: "You won't have to worry about complex project management because we'll work with you and manage your project for you.",
        icon: <Workflow size={32} />
    },
    {
        title: "Regular Updates",
        description: "We routinely keep you apprised of project status through Skype, email, and telephone calls.",
        icon: <Layers size={32} />
    },
    {
        title: "Flexible Commitment Models",
        description: "From a part-time contract to a full-time project, you can now hire a Codeigniter web expert as you want.",
        icon: <Users size={32} />
    }
];

export const CODEIGNITER_INDUSTRIES: IndustryItem[] = [
    {
        name: "Healthcare",
        desc: "We have Codeigniter developers who design HIPAA-compliant and enterprise-grade Codeigniter applications for the healthcare industry. Our solutions include robust and scalable web applications.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail & Ecommerce",
        desc: "Our programs possess extensive experience in the development of custom retail and e-commerce portals. Our skilled developers create unique features to assist with your supply chain and online ordering.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "Use our experienced Codeigniter developers; they're experienced in building websites for the media and entertainment industries. Their superior solutions can offer your users a more interactive and enriching experience.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment"
    },
    {
        name: "Real Estate",
        desc: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes. Whether you need an app to help with property listings, transactions, or payments, we can develop a solution that meets your needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "/real-estate"
    },
    {
        name: "ECommerce",
        desc: "Whether you're looking to improve your customers' experience or increase sales, we can help you achieve your goals.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends and technologies. That's where Hidden Brains comes in. We provide app development services for the online booking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "/online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses in the Social Networking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes, from small businesses to Fortune 500 companies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "/manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "Hire our Codeigniter coders with their engineering expertise in developing interactive web courses for schools, universities, and colleges to improve learning. Our education and e-learning programming experts have 5+ years of average experience.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business, whether it's a utility company, an oil and gas producer, or a renewable energy provider.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    },
    {
        name: "Banking & Finance",
        desc: "Our dexterous developers who work on Codeigniter, are well-versed in creating web-based systems for the banking and finance industry.",
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
        desc: "We help companies make their offerings accessible on the web to people who seek those services. Our programmers create easy-to-use ticket booking apps to help foster business growth and produce good user experiences.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Utilize our deep knowledge of industry sectors to build digital solutions that simplify mobile and complicated business problems, and make it easier for you to grow your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    }
];

export const CODEIGNITER_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-codeigniter", label: "What is Codeigniter?" },
    { id: "is-still-used", label: "Is CodeIgniter still used?" },
    { id: "front-or-backend", label: "Is CodeIgniter front end or backend?" },
    { id: "what-apps", label: "What type of applications are built on Codeigniter?" },
    { id: "vs-laravel", label: "Is CodeIgniter better than Laravel?" }
];

export const CODEIGNITER_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-codeigniter",
        title: "What is Codeigniter?",
        content: "CodeIgniter is a powerful open source PHP web application framework with a very small footprint, built for developers who need a simple and elegant toolkit to create full-featured web applications. It’s an MVC application framework that makes things like database integration, authentication, sessions, and caching much easier than doing it yourself. CodeIgniter was created in 2006 by EllisLab (now ELLIPSE) with input from members of the PHP community. It is currently maintained by Phil Sturgeon and distributed under the MIT license."
    },
    {
        id: "is-still-used",
        title: "Is CodeIgniter still used?",
        content: "CodeIgniter has a large client base due to its simplicity and easy customization. It is quite fast, too; with just a few tweaks, you can get your application working at top speed. It currently owns 0.22% of the entire market share among all the existing web frameworks. Codeigniter currently boasts 18.2k stars and 7.8k forks on GitHub. Today, 1,453,681 websites are powered by CodeIgniter, produced by Indian developers, Indonesian developers, Japanese developers, Vietnamese developers, and the developers of 39 other countries."
    },
    {
        id: "front-or-backend",
        title: "Is CodeIgniter front end or backend?",
        content: "It is Backend. CodeIgniter can be used for front-end development or backend development. This framework is famous for its flexibility, hence it can be used both on frontend and backend development depending upon your requirements."
    },
    {
        id: "what-apps",
        title: "What type of applications are built on Codeigniter?",
        content: "Codeigniter is a free, open-source PHP framework for developing web applications. It features a powerful Active Record implementation (persistent data storage in the database) and can be extended with various libraries. While Codeigniter started off as an application development framework, it has evolved into a full-stack solution that also supports rapid development of database-driven websites. Today, its robust architecture makes it suitable for building everything from custom content management systems to eCommerce sites and online communities—all without needing to download or install any third-party components or software."
    },
    {
        id: "vs-laravel",
        title: "Is CodeIgniter better than Laravel?",
        content: "Both CodeIgniter and Laravel are powerful PHP frameworks for building web and GUI applications. The performance, usability, speed of development, and code quality between these two frameworks are almost similar. So you can use either of them for your projects based on your requirements."
    }
];

export const CODEIGNITER_FAQS = [
    {
        question: "Why should we choose Hidden Brains as the best CodeIgniter web development company in the UK?",
        answer: (
            <>
                <p>Our talented and expert team of dedicated CodeIgniter programmers offers you robust and secure web development services. Also, we assure you to keep your information and data fully confidential and will deliver the project on time.</p>
                <p>Here are some reasons you should hire us:</p>
                <ul className="list-disc ml-6 mt-4">
                    <li>Experienced professionals</li>
                    <li>Transparent Communication</li>
                    <li>In-depth domain knowledge</li>
                    <li>Wide industry experience</li>
                    <li>High-quality deliverables</li>
                    <li>Professional environment</li>
                    <li>Pre-vetted professionals</li>
                </ul>
            </>
        )
    },
    {
        question: "What is the cost of a web app with CodeIgniter development services?",
        answer: "The cost of a web app with CodeIgniter is different from project to project. In Fact it completely depends on various factors such as Project Idea, features, complexity, etc."
    },
    {
        question: "What is the expertise of your CodeIgniter developers?",
        answer: (
            <>
                <p>Hidden Brains UK is a one-stop solution for all types of CodeIgniter web development services. Our CodeIgniter developers have expertise in below-mentioned services:</p>
                <ol className="list-decimal ml-6 mt-4">
                    <li>CodeIgniter Web Development</li>
                    <li>Custom Ecommerce Solutions</li>
                    <li>Customize Module plugin development</li>
                    <li>Enterprise web development</li>
                    <li>Maintenance and Migration</li>
                </ol>
            </>
        )
    },
    {
        question: "Will you provide post-launch project support and maintenance?",
        answer: "Of Course, we provide. Our CodeIgniter programmers can help you with all your queries and requirements after the project launch as mentioned in the agreement."
    }
];

export const CODEIGNITER_PROJECTS = [
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
        title: "Cay Guide",
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

export const CODEIGNITER_TESTIMONIALS = [
    {
        quote: "We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!",
        author: "Mr. Daniel Vant",
        location: "UK",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/Daniel-Vant-1.webp",
        videoUrl: "https://www.youtube.com/watch?v=KVpn_zWMpA8"
    }
];
