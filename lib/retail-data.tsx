import React from 'react';
import { CreditCard, Package, MonitorSmartphone, Database, ShoppingBag, Globe, Truck, LayoutDashboard, MapPin, Users, Shield, Lightbulb, Activity, RefreshCw, DollarSign } from 'lucide-react';

export const RETAIL_HERO = {
    title: "Retail IT Solutions",
    description: "Retail IT Solutions by Hidden Brains ensures that your business stays ahead of the competition by helping you develop your brand, increase productivity, and optimize processes with minimal downtime. Here are just some of the ways retail businesses can benefit from our retail IT solutions",
    buttonText: "Get in Touch",
    buttonLink: "/contact",
};

export const RETAIL_INTRODUCTION = {
    title: "Retail Industry Software Solutions",
    content: [
        "With the use of retail industry IT solutions, the retail industry is witnessing a paradigm shift. Hidden Brains UK provides retail IT solutions that positively impact the business of retailers in improving services, convenience and personalization thereby enabling them to attract and retain their long-term customers. Along with web and mobile solutions for the retail industry, Hidden Brains also provides facilities management solutions, POS, and Epos software development services, retail technology solutions inventory management solutions, warehouse management solutions, omnichannel solutions, and ubiquitous user experience.",
        "As a leading retail IT solution provider Company in the UK we help our clients reach out to every customer with a cohesive shopping experience using robust technology. Whether it is category management, merchandise planning, or space planning solutions, we use technical expertise combined with domain knowledge to build brands and drive traffic to stores and increase bottom-line profitability."
    ]
};

export const RETAIL_WHAT_WE_DO = {
    title: "Our Retail IT Solutions",
    description: "Hidden Brains provides retail technology solutions for the retail industry to reduce the barriers that exist within and outside the store.",
    items: [
        {
            title: "Payment Processing Software",
            content: "This software is designed to work with all major credit cards and debit cards, as well as ACH payments. With this software, businesses can avoid the hassle of manually processing payments and can instead focus on other aspects of their business.",
            icon: <CreditCard className="w-12 h-12" />
        },
        {
            title: "Inventory Management Software",
            content: "In today’s fast-paced and ever-changing business world, it’s more important than ever to have a reliable inventory management system in place. An effective inventory management system can help you keep track of your stock, optimize your stock levels, and save you time and money.",
            icon: <Package className="w-12 h-12" />
        },
        {
            title: "Point of Sale (POS) Software",
            content: "It can streamline transactions, keep track of inventory, and provide valuable insights into your customers’ buying habits. With a POS system from Hidden Brains, you can get all of these benefits and more. Our software is designed to help businesses run more efficiently and profitably.",
            icon: <MonitorSmartphone className="w-12 h-12" />
        },
        {
            title: "Retail ERP Systems",
            content: "By automating and streamlining operations, retail ERP systems can help businesses save time and money. In addition, retail ERP systems can provide insights that can help businesses make better decisions and improve their bottom line. It gives your business a competitive edge.",
            icon: <Database className="w-12 h-12" />
        },
        {
            title: "Ecommerce Platforms",
            content: "An ecommerce platform is a software solution that enables you to create an online store and sell products and services. A good ecommerce platform will provide you with everything you need to get started, including a website builder, shopping cart, payment processing, and more.",
            icon: <ShoppingBag className="w-12 h-12" />
        },
        {
            title: "Omnichannel Retail Platforms",
            content: "In order to stay ahead of the competition, it is important to have a robust and reliable retail IT solution in place. Hidden Brains offers a comprehensive suite of retail IT solutions that can help your business streamline operations, improve customer service, and boost sales.",
            icon: <Globe className="w-12 h-12" />
        },
        {
            title: "Supply Chain Management",
            content: "We solve clients’ supply chain problems and deliver value. Providing inventory solutions for retailers helps them to scale new heights along with their transformation journey. Additionally, a retail IT solution can help you keep track of your inventory, customers, and employees.",
            icon: <Truck className="w-12 h-12" />
        },
        {
            title: "POS Software Development",
            content: "Create omnichannel experience with our end-to-end Point of Sales services to enhance customer experiences across channels and enable payment. By having all of this information in one place, you can make better decisions for your business and provide better customer service.",
            icon: <MonitorSmartphone className="w-12 h-12" />
        },
        {
            title: "Merchandising",
            content: "Merchandising value chain, including retail information management, merchandise financial planning, category management, space planning, pricing & promotion planning. You can provide your customers with a seamless shopping experience across all channels, including in-store, online, and mobile.",
            icon: <LayoutDashboard className="w-12 h-12" />
        },
        {
            title: "Location Based Apps",
            content: "Web & Mobile apps to track customers in real-time and provide highly relevant promotions, coupons or deals to customers based on location of the nearest store. In addition, our software is PCI compliant, so businesses can be confident that their customers’ information is safe.",
            icon: <MapPin className="w-12 h-12" />
        }
    ]
};

export const RETAIL_WHY_CHOOSE_US = {
    title: "Why Choose Our Retail IT Solutions?",
    description: "Get retail IT solutions custimized as per your specific needs. We also add advanced features that give competitive advantage:",
    items: [
        {
            title: "Increased sales and productivity",
            content: "A retail IT solution can help you stay ahead of the competition by automating processes and tasks that would otherwise be done manually. This can lead to increased sales and productivity, as well as reducing errors and increasing efficiency.",
            icon: <Users className="w-8 h-8" />
        },
        {
            title: "Streamlined operations",
            content: "Investing in retail IT solutions will help you save money and time, and allow you to focus on other areas of your business. It can help you focus on other aspects of operations, sales and customer management aimed at improving overall profitability.",
            icon: <Shield className="w-8 h-8" />
        },
        {
            title: "Reduced costs",
            content: "One of the main benefits of working with a retail IT solutions provider like Hidden Brains is that they can help you reduce your overall costs. By outsourcing your IT needs, you can free up internal resources and redirect them to other areas of your business.",
            icon: <Lightbulb className="w-8 h-8" />
        },
        {
            title: "Easy Management",
            content: "With a retail IT solution from Hidden Brains, you can get ahead of the competition by making it easier to manage your business. The benefits of using a retail IT solution include easier to keep track of inventory and customers and faster and more efficient transactions.",
            icon: <Activity className="w-8 h-8" />
        },
        {
            title: "Reduce Errors",
            content: "With retail IT solutions from Hidden Brains, you can reduce errors in your inventory management, customer service, and point-of-sale processes. By automating these processes and integrating them with your back-end systems, you can free up your staff to focus on more important tasks.",
            icon: <RefreshCw className="w-8 h-8" />
        },
        {
            title: "Save time and cost",
            content: "With retail IT solutions from Hidden Brains, you can save time and money while getting a leg up on the competition. We can help you streamline your operations, increase efficiency, and cut costs. We can also help you customize your solutions to fit your specific needs.",
            icon: <DollarSign className="w-8 h-8" />
        }
    ]
};

export const RETAIL_GUIDE_ITEMS = [
    { id: "how-to-choose", label: "How to Choose the Right Retail Systems for Your Business?" },
    { id: "how-can-you-improve", label: "How Can You Improve Customer Experience Through the Use of Retail IT Solutions?" },
    { id: "how-can-you-save", label: "How can you Save Money Through Retail process Automation?" }
];

export const RETAIL_GUIDE_DETAILS = [
    {
        id: "how-to-choose",
        title: "The Importance of Retail IT solutions",
        content: (
            <>
                <p className="mb-4">
                    As the retail industry becomes increasingly competitive, it’s more important than ever for retailers to have a reliable and efficient IT infrastructure in place. Retail IT solutions can help streamline operations, improve customer service, and boost sales. The complexity of today’s retail environments requires retailers to work with skilled professionals who are familiar with cutting-edge technologies.
                </p>
                <p>
                    Outsourcing is one way that stores can free up valuable resources that would otherwise be tied up managing their technology, so they can focus on doing what they do best – running their business. Security Retailers need security solutions that ensure data privacy and regulatory compliance while simultaneously keeping their operating costs low. By partnering with a knowledgeable firm like Hidden Brains, stores will benefit from an enhanced security posture without the hassle of managing and maintaining expensive hardware or software themselves.
                </p>
            </>
        )
    },
    {
        id: "how-can-you-improve",
        title: "How Can You Improve Customer Experience Through the Use of Retail IT Solutions?",
        content: (
            <p>
                In order to improve customer experience, retailers need to employ IT solutions that will allow for a more seamless and efficient shopping experience. By doing so, customers will be able to save time and feel more satisfied with their purchase. Additionally, retailers can use IT solutions to better understand customer behavior and preferences. This information can then be used to create targeted marketing campaigns and improve overall operations. Ultimately, the goal is to provide customers with a superior shopping experience that keeps them coming back for more.
            </p>
        )
    },
    {
        id: "how-can-you-save",
        title: "How can you Save Money Through Retail process Automation?",
        content: (
            <ul className="list-decimal pl-5 space-y-2">
                <li>By automating retail processes, you can minimize or eliminate human error.</li>
                <li>Automation can also help to speed up processes, saving time and money.</li>
                <li>Automated systems can also provide data that can help you make better decisions about your business.</li>
                <li>Automation can help to improve customer service by providing faster and more accurate service.</li>
                <li>Automated systems can also help you to track inventory and sales, providing valuable insights into your business.</li>
            </ul>
        )
    }
];

export const RETAIL_FAQ = [
    {
        question: "Why should I choose you for retail software?",
        answer: "We have over 19 years of experience in the retail industry. Our team of experts can tailor a solution that fits your specific needs. We offer a comprehensive suite of retail software, including point-of-sale (POS), inventory management, and e-commerce solutions. Our software is backed by 24/7 customer support. We offer a free consultation to help you get started."
    },
    {
        question: "Do you sign an NDA?",
        answer: (
            <>
                <p className="mb-3">If you are working with or considering working with Hidden Brains, you may be wondering if you need to sign a non-disclosure agreement (NDA). The answer is yes, you should sign an NDA. Here’s why:</p>
                <ul className="list-disc pl-5 space-y-2">
                    <li>It protects your confidential information.</li>
                    <li>It ensures that Hidden Brains will not disclose your confidential information to any third party.</li>
                    <li>It creates a legally binding agreement between you and Hidden Brains.</li>
                </ul>
            </>
        )
    },
    {
        question: "What is the cost of software development?",
        answer: "The cost of software development depends on various factors, such as the size and complexity of the project, the number of developers involved, their experience and skills, the project management method used, and so on. In addition, the price may also be affected by whether you need to purchase licenses for any third-party tools or platforms used."
    }
];

export const RETAIL_PORTFOLIO = {
    title: "Delivering Retail IT Solutions",
    description: "We have delivered wide range of innovative retail solutions to our clients – Have a look on our work"
};
