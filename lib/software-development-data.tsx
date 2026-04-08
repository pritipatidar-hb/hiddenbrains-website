import React from "react";
import { Users, ShieldCheck, Lightbulb, Workflow, Lock, Cog } from "lucide-react";

export interface SoftwareServiceItem {
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

export const SOFTWARE_SERVICES: SoftwareServiceItem[] = [
    {
        title: "Custom Software Development",
        desc: "We have 19+ years of domain expertise, which helps us provide scalability, state-of-the-art features, security, and industry-leading performance in our web and mobile apps, eCommerce sites, and content management systems."
    },
    {
        title: "Expert Software Consulting",
        desc: "Our technology consulting team will assess the current environment and understand the requirements, recommend an appropriate technological solution, and design a system that matches your desired architecture."
    },
    {
        title: "API Development and Integration",
        desc: "Integrating existing software products with our APIs and customizing them is easy and flexible. Our software development team makes sure to deliver high-performing solutions integrated with the latest APIs."
    },
    {
        title: "App Maintenance and Support",
        desc: "You will receive 24/7 technical support from our software development team, continuous software performance monitoring, proactive optimization, and fast issue resolution, as well as safe integration into the app."
    },
    {
        title: "Software Testing & QA",
        desc: "Throughout the development process, we involved our experts from the Quality Assurance team to ensure that your custom software application runs on every browser and screen without any hiccups."
    },
    {
        title: "UI/UX Design and Development",
        desc: "Our custom software development and design company in the UK will help you design highly interactive web or mobile apps with a website interface that is user-friendly and packed with engaging visuals and graphics."
    }
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
    {
        name: "Banking & Finance",
        desc: "As a leading software development company in the UK, we provide custom banking & financial software solutions to increase operational efficiency and streamline functionality. Our prime focus is to modernize the banking process.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/fintech-industries-thumb.jpg",
        link: "/banking-finance"
    },
    {
        name: "Insurance",
        desc: "We help our clients develop their insurance business by providing them with custom applications designed to meet their specific needs. We have a team of experienced developers who are familiar with the insurance industry and can provide you with the best possible solution for your business.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Insurance-Industries-Thumbnails.png",
        link: "/insurance"
    },
    {
        name: "Travel & Hospitality",
        desc: "With our agile and reliable software development services, you can increase the return on investment for your travel business and reduce the operational costs to help make it more profitable.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Travel-Hospitality-Industries-Thumbnails.png",
        link: "/travel-hospitality"
    },
    {
        name: "Logistics & Transport",
        desc: "Utilize our deep knowledge of industry sectors to build digital solutions that simplify mobile and complicated business problems, and make it easier for you to grow your business. What are you waiting for? Get in touch with us to hire a mobile app developer.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/logistics-industries-thumb.jpg",
        link: "/logistics"
    },
    {
        name: "Healthcare",
        desc: "As a reliable offshore software development company in the UK, we develop software applications for the healthcare domain that automate methods for patient management, data collection, and healthcare data automation.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/healthcare-industries-thumb.jpg",
        link: "/healthcare"
    },
    {
        name: "Retail",
        desc: "We design and build robust custom solutions for e-commerce websites, such as e-carts, marketplaces, social commerce, auction sites, and more. Our custom-tailored retail solutions help you to streamline your business processes and increase your ROI.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/retail-industries-thumb.jpg",
        link: "/retail"
    },
    {
        name: "Media & Entertainment",
        desc: "We offer tailor-made solutions to the media and entertainment industries, which include online promotion solutions, social networking development tools, and the distribution of media content using the latest trends.",
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
        desc: "Our custom eLearning solutions encompass a wide range of eLearning apps, online courses, learning management systems, corporate learning portals, and more. We offer complete web, mobile, and SaaS-based eLearning applications.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Education-ELearning-industries-thumb.png",
        link: "/elearning"
    },
    {
        name: "Energy",
        desc: "The energy industry provides the power we need to live and run our businesses. We can help you develop the perfect app for your energy business, whether it's a utility company, an oil and gas producer, or a renewable energy provider. Our team works with you to create an app that meets your specific needs.",
        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/07/Energy-Industries-Thumbnails.png",
        link: "/energy"
    }
];

export const WHY_CHOOSE_HB: ReasonItem[] = [
    {
        icon: <Users size={32} />,
        title: "500+ Dedicated Developers",
        desc: "We have a pool of highly experienced software developers with a minimum of 5+ years of experience in crafting bespoke, cost-effective solutions that perfectly match your unique business needs and add a competitive edge to your business."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Complete Transparency",
        desc: "We at Hidden Brains UK, strive to build a lasting relationship with our clients by maintaining consistent transparency throughout the project. We keep our clients in the loop about the development process and share regular project progress reports."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "No Obligation Quote",
        desc: "Want to build an app but are not sure how much it will cost you? Don't worry, we have a team of technical experts who evaluate your app idea, conduct market research, and then suggest the best solution and its cost estimation."
    },
    {
        icon: <Workflow size={32} />,
        title: "Smooth Project Management",
        desc: "We ensure seamless project management as we have a pool of app development teams, including project managers who are responsible for managing the entire process of app developers communicating the requirements with the development team."
    },
    {
        icon: <Lock size={32} />,
        title: "Project Security With an NDA",
        desc: "As a leading software development company in the UK, we make sure that your app idea will remain secure with us as we sign an NDA agreement with the client and undertake all security measures."
    },
    {
        icon: <Cog size={32} />,
        title: "Flexible Engagement Models",
        desc: "As a top-rated software development company in the UK, we understand the changing market requirements; therefore, we offer the flexibility to hire dedicated programmers on an hourly, part-time or full-time basis."
    }
];

export const SOFTWARE_GUIDE_ITEMS: GuideItem[] = [
    { id: "what-is-custom", label: "What is Custom Software Development?" },
    { id: "when-should-you", label: "When Should You Choose Custom Software Development Services?" },
    { id: "what-are-the-main", label: "What Are the Main Benefits of Custom Software Development?" }
];

export const SOFTWARE_GUIDE_DETAILS: GuideDetail[] = [
    {
        id: "what-is-custom",
        title: "What is Custom Software Development?",
        content: (
            <>
                <p className="mb-4">Building mobile or web-based solutions from the ground up in order to better align them with company needs. Custom software can be built either by writing the codes from the scratch or using pre-made development systems, such as WordPress, Shopify and Wix, which are commercial off-the-shelf software (COTS) programs.</p>
                <p>Custom software development is specialized, and focused on very narrow and specific tasks. In contrast, off-the-shelf or generic software, or COTS, can address a variety of potential and potential user-defined difficulties. Initially, custom software development may be more expensive. Still, it offers many benefits, including scalability, flexibility, independence, customization, and full ownership.</p>
            </>
        )
    },
    {
        id: "when-should-you",
        title: "When Should You Choose Custom Software Development Services?",
        content: (
            <>
                <p className="mb-4">Organizations that have been looking for solutions that are specifically tailored to address the unique needs of their customers can look for custom software development solutions. They are customized with a personalised UI/UX design that reflects your brand identity. Also, you can consider implementing the best choice of features and functionalities to make it work wonderfully.</p>
                <p>For example, Magento, WooCommerce, and BigCommerce can assist you in developing eCommerce software. It is best to hire a custom software developer if you need the latest technology stack, to handle huge traffic loads, use custom design, and have endless functionality for a unique and user-friendly interface. Moreover, custom software can be easily integrated with existing infrastructure if an organization needs to digitize or expand.</p>
            </>
        )
    },
    {
        id: "what-are-the-main",
        title: "What Are the Main Benefits of Custom Software Development?",
        content: (
            <p>Software customized to a company’s particular needs and designed for maximum performance gives you the ability to profit off of your production by selling it to other companies. The best thing about custom software development is that it allows organizations to meet changing business and user needs in an easy way. By creating custom software, you control the entire process from top to bottom. You can jump on new technological advances without worrying about catching up to the competition. Long-term, custom software development, bug fixes, and quality assurance are less expensive than using commercial software.</p>
        )
    }
];

export const SOFTWARE_FAQ = [
    {
        question: "What is the cost of software development at Hidden Brains UK?",
        answer: "There is no fixed cost of software development as it majorly depends upon various factors such as the complexity of the app requirement, features and flexibility, UI & UX design, and more. Generally, the average cost of building an app starts at $15,000 and can go beyond $75,000. Therefore, to get the right estimate, you can discuss the project details."
    },
    {
        question: "Do You Provide the Ownership of the App Source Codes?",
        answer: "Yes, definitely! Once your app is successfully deployed on the app store, we provide the ownership of the source code to the clients. Also, we keep things crystal clear with our clients regarding the app development process and its authority at the time of signing the NDA."
    },
    {
        question: "Do you offer Post-launch software development maintenance and support services?",
        answer: "Yes, our team of experts offers end-to-end development services to our clients as we strive for perfection and satisfaction. We make sure that your app will run smoothly and keep it upgraded with the latest technologies even after the app launch."
    }
];
