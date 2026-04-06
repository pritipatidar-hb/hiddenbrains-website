import React from "react";
import { Users, ShieldCheck, Lightbulb, Workflow, RefreshCw, Zap } from "lucide-react";

export interface TechExpertiseItem {
    title: string;
    desc: string;
    image: string;
    link: string;
    color: string;
}

export interface WebServiceItem {
    title: string;
    desc: string;
}

export interface IndustryItem {
    name: string;
    desc: string;
    image: string;
    link: string;
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

export interface ProcessStep {
    title: string;
    icon: string;
}

export const TECH_EXPERTISE: TechExpertiseItem[] = [
    {
        title: "PHP Development",
        desc: "To create excellent, eye-catching, and dynamic web applications, our dedicated web app developers uses PHP server-side scripting language.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/php-dev.webp",
        link: "/php-web-development",
        color: "orange"
    },
    {
        title: "ASP.NET Development",
        desc: "Our programmers create flawless and company-specific web development solutions using ASP.NET technology to ensure excellent performance.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/asnet-dev.webp",
        link: "/asp-dot-net-web-development",
        color: "purple"
    },
    {
        title: "Angular Development",
        desc: "Hidden Brains UK assists clients in extending the reach of their businesses by providing scalable and dependable web apps built with Angular technology.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/angular-dev.webp",
        link: "/angularjs-development",
        color: "dark"
    },
    {
        title: "Node.js Development",
        desc: "To create client- and server-side web applications, our web development specialists use the power of Node.JS and ensure unmatched performance.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/nodejs-dev.webp",
        link: "/node-js-development",
        color: "green"
    },
    {
        title: "Laravel Development",
        desc: "To create scalable, reliable, and visually appealing web applications that grow client businesses, we use the Laravel framework.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/laravel-dev.webp",
        link: "/laravel-development",
        color: "yellow"
    },
    {
        title: "CodeIgniter Development",
        desc: "By choosing to partner with Hidden Brains, you can develop full-featured and high-performance web applications using CodeIgniter.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/codeIgniter-dev.webp",
        link: "/codeigniter-development-services",
        color: "purple"
    }
];

export const WEB_SERVICES: WebServiceItem[] = [
    {
        title: "Custom Web App Development",
        desc: "No matter what industry you are in, take into account using our secure, scalable, high-performing, and feature-rich web application development services that have been tailored to meet all of your business needs."
    },
    {
        title: "Website Prototyping & UX Design",
        desc: "Hidden Brains is a website development company in the UK that specializes in creating a wide range of website development services, from creating prototyping and user-friendly UX design to coding and launching your site."
    },
    {
        title: "Progressive Web App Development",
        desc: "We at Hidden Brains UK have a pool of app developers that enables you to develop websites that offer progressive web apps and are distinguished by their high performance, reliability, and visual appeal."
    },
    {
        title: "Consulting & Business Analysis",
        desc: "Contact us for help choosing the right technology for your next web app project, because our technology consultants are available to help you."
    },
    {
        title: "Full Stack Development",
        desc: "At Hidden Brains UK, we provide full stack development services. We have a team of expert developers who can help you with all aspects of website development, from conception to execution."
    },
    {
        title: "Third-Party Integration",
        desc: "At Hidden Brains UK, we provide website application development services in the UK and have a team of experienced developers who can help you create a custom website or integrate your existing website with third-party applications."
    }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
    {
        name: "Healthcare",
        desc: "As one of the leading web app development agencies in the UK, we specialize in helping businesses modernize traditional healthcare processes with cutting-edge technology.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail",
        desc: "By infusing cutting-edge technologies and incorporating dynamic business practices into both traditional as well as virtual stores, Hidden Brains provides end-to-end intelligent retail services.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail.html"
    },
    {
        name: "Media & Entertainment",
        desc: "Our complete solutions ensure all ends of the spectrum are covered. From content and distribution to presentation and growth - it's easy for us to put together creative end-to-end workflows for every project.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/media-industries-thumb.jpg",
        link: "/media-and-entertainment.html"
    },
    {
        name: "Real Estate",
        desc: "Hidden Brains has a team of experienced developers who can create custom apps for Real Estate businesses of all sizes. Whether you need an app to help with property listings, transactions, or payments, we can develop a solution that meets your needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Real-Estate-Industries-Thumbnails.png",
        link: "//real-estate"
    },
    {
        name: "ECommerce",
        desc: "We have a team of experienced developers who can create custom ecommerce applications tailored to your specific needs. Whether you're looking to improve your customer's experience or increase sales, we can help you achieve your goals.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/ECommerce-Industries-Thumbnails.png",
        link: "/ecommerce.html"
    },
    {
        name: "Online Booking",
        desc: "If you're in the online booking industry, you know that things are constantly changing. You need an app that can keep up with the latest trends and technologies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Online-Booking-Industries-Thumbnails.png",
        link: "//online-booking"
    },
    {
        name: "Social Networking",
        desc: "Our team of experienced developers can create custom apps for your business, whether it's a small business or a large enterprise. We've worked with all types of businesses in the Social Networking industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Social-Networking-Industries-Thumbnails.png",
        link: "/social-networking.html"
    },
    {
        name: "Manufacturing",
        desc: "We provide app development services that can help streamline the manufacturing process and make it more efficient. We've worked with manufacturers of all sizes, from small businesses to Fortune 500 companies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Manufacturing-Industries-Thumbnails.png",
        link: "//manufacturing"
    },
    {
        name: "Education / eLearning",
        desc: "We provide app development services that can help you create an eLearning platform that is both effective and engaging for your students. We understand the needs of the education industry.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning.html"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business, whether it's a utility company, producer, or provider.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "//energy"
    },
    {
        name: "Banking & Finance",
        desc: "Our Fintech experts at Hidden Brains create practical IT solutions for the Fintech sector, helping banks and traditional financial institutions automate tedious processes with latest technologies.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "//banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance.html"
    },
    {
        name: "Travel & Hospitality",
        desc: "With decades of experience working with customer-focused solutions, we have become renowned for developing world-class security, reliability, and digitalization technology.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "//travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "At Hidden Brains, we combine our in-depth knowledge of logistics and technology to create Supply-Chain Automation solutions that boost productivity in actual operations.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "//logistics"
    }
];

export const WHY_CHOOSE_HB: ReasonItem[] = [
    {
        icon: <Users size={32} />,
        title: "Talented Web Developers",
        desc: "At Hidden Brains, we have a team of 100+ talented web developers with 5+ years of experience, capable of providing a range of website development services."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Complete Project Security",
        desc: "To maintain a project's security, we sign NDAs with all our clients and work closely with them throughout the entire process."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Free No Obligation Quote",
        desc: "We at Hidden Brains UK are aware of your concerns about your budget, which is why we offer free project estimates."
    },
    {
        icon: <Workflow size={32} />,
        title: "Smooth Projects Management",
        desc: "Hidden Brains UK offers you peace of mind by ensuring that your project is carefully handled and managed by our skilled project managers."
    },
    {
        icon: <RefreshCw size={32} />,
        title: "Regular Updates",
        desc: "We believe in project transparency and ensure regular reporting to provide full details of your project. We also work on agile mode."
    },
    {
        icon: <Zap size={32} />,
        title: "Flexible Engagement Models",
        desc: "We provide our clients with the flexibility to hire our web development experts on an hourly, part-time, or dedicated billing model."
    }
];

export const WEB_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-custom", label: "What is Custom Web App Development?" },
    { id: "what-programming-languages", label: "What programming languages are ideal for creating custom websites?" },
    { id: "why-should-businesses", label: "Why Should Businesses Invest in Web App Development Solutions?" },
    { id: "what-are-the", label: "What are the Common Challenges of Developing Web App?" },
    { id: "what-are-some", label: "What are some great web development frameworks?" },
    { id: "where-to-find", label: "Where to find the best web development company in the UK?" },
    { id: "is-web-design", label: "Is web design the same as web application development?" }
];

export const WEB_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-custom",
        title: "What is Custom Web App Development?",
        content: "Custom web app development is the process of creating a web application that is specifically designed to meet the needs of a particular business or organization. This type of development can be used to create internal tools, automate processes, or even create customer-facing applications. In order to create a custom web app, you will need to work with a development team who can understand your specific requirements and build an application that meets those needs."
    },
    {
        id: "what-programming-languages",
        title: "What programming languages are ideal for creating custom websites?",
        content: "Custom web app development can be done in a variety of programming languages, each with its own set of benefits. For example, Python is often praised for its readability and comprehensibility, while Java is a versatile language that can be used for a wide range of applications. Other popular options include PHP, Ruby on Rails, and Node.js."
    },
    {
        id: "why-should-businesses",
        title: "Why Should Businesses Invest in Web App Development Solutions?",
        content: "In today’s fast-paced world, businesses need to be able to move quickly and adapt to changes in the market. There are a number of reasons why businesses should invest in web app development solutions. With custom web app development services, they’ll have access to developers who can help make these changes happen. Web apps also allow companies to integrate all of their services into one platform, which helps streamline processes for employees as well as customers. Web apps also allow companies to create a personalized experience."
    },
    {
        id: "what-are-the",
        title: "What are the Common Challenges of Developing Web App?",
        content: "There are a few challenges that come with developing web apps. The first is making sure that the app is compatible with all web browsers. This can be a difficult task, as each browser has its own defined requirements. Additionally, web apps need to be designed for both desktop and mobile devices. This means that the user interface needs to be responsive and easy to use on a variety of screen sizes. Another challenge is ensuring that the app is secure from hackers."
    },
    {
        id: "what-are-some",
        title: "What are some great web development frameworks?",
        content: "Some great web development frameworks are- CakePHP, Phalcon, Symfony, Laravel, Yii, Angular, TypeScript, etc."
    },
    {
        id: "where-to-find",
        title: "Where to find the best web application development agency in the UK?",
        content: (
            <>
                <p className="mb-4">While there are a plethora of website development companies providing web app development services in the UK, Hidden Brains can be your one-stop platform to hire the best web app development team. To make sure you are hiring the best web application development services company in the UK, it is worth keeping some parameters in mind. Before making a decision, make sure that you get a clear idea about their proven successful work, check their portfolios and case studies, etc. Once you are convinced with the IT company’s work, go ahead as you are going to work with them for a few months or more.</p>
                <p>You can also go through the testimonials available and cross-check them to get very clear picture of the company’s successful work. You must trust the web development agency with whom you are going to work.</p>
            </>
        )
    },
    {
        id: "is-web-design",
        title: "Is web design the same as web application development?",
        content: (
            <p>There is a difference. Actually, web designers use programs such as Adobe Photoshop to create the layout and other visual elements of the web application. And the web development team uses several software coding languages <wbr /><wbr />like HTML, CSS, JavaScript, PHP, and other programming languages <wbr /><wbr />to give functionality to the design.</p>
        )
    }
];

export const WEB_APP_FAQ = [
    {
        question: "What Methodologies Do You Follow to Build Web Applications?",
        answer: "To ensure hassle free development procedures and on-time project delivery, we at Hidden Brains strictly adhere to the agile web development methodology. Key steps include Analysis, Wireframing, UX Design, Front-end Development, Back-end Development, Testing & Quality Assurance, and Deployment & Maintenance."
    },
    {
        question: "What type of web applications do you build?",
        answer: "Hidden Brains UK offers all types of latest development services including Static Web Applications, Dynamic Web Applications, Shopping or eCommerce Apps, Portal Web Applications, Web Applications with CMS, Multi-Page Applications (MPA), and Animated Web Applications."
    },
    {
        question: "How Much Do You Cost to Build a Web Application?",
        answer: "The cost of a web application development service depends on its functionalities, features, complexity, time, and process of customization. Contact us with your web development ideas for most affordable cost estimations."
    },
    {
        question: "How much time does it take to build a web application?",
        answer: "The web application development time always depends on the app idea, the app scope, and the complexity of the app. It may change depending upon features and third-party widget integration."
    },
    {
        question: "What web development technologies do you work on?",
        answer: "Our web application developers work on all major web development platforms, including ASP.NET, Web, PHP, Node.JS, AngularJS, React.js, Laravel, Python, and more."
    },
    {
        question: "Do You Sign an NDA for Project Security?",
        answer: "Yes, we respect our clients’s privacy, so we begin by signing a Non-disclosure agreement and adhere to other security measures to maintain project transparency and security."
    }
];

export const WEB_PROCESS_STEPS: ProcessStep[] = [
    { title: "Business Requirement Analysis", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon2.png" },
    { title: "Ideation / Preparing Design Layout", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon1.png" },
    { title: "Designing of Prototype & Reviewing", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon3.png" },
    { title: "Programming / Coding for Web App", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon4.png" },
    { title: "Testing & Launch of Web App", icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/mobile-app-icon5.png" }
];
