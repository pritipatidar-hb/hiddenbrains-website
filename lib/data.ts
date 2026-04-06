import { servicesMenu } from "@/data/servicesMenu";
import { solutionsMenu } from "@/data/solutionsMenu";
import { industriesMenu } from "@/data/industriesMenu";

import slide1 from "../images/slide1.webp";
import slide2 from "../images/slide2.webp";
import slide3 from "../images/slide3.webp";

export async function getData() {
    return {
        SITE_CONFIG: {
            name: "Hidden Brains UK",
            email: "biz@hiddenbrains.com",
            phone: "+44 207 993 2188",
            address: "Unit P Hunting Gate, East Portway, Andover, Hampshire,\nSP10 3ER, United Kingdom (UK)",
        },
        HOME_CONTENT: {
            SERVICES_SECTION: {
                title: "Web & Mobile Development Services to Build Future-Ready Apps",
            },
            PORTFOLIO_SECTION: {
                subtitle: "Our Work",
                title: "Delivered Web & Mobile Projects Across 30+ Industries",
                description: "Hidden Brains UK’s Web and Mobile App Development portfolio spans diverse industries, companies & geography with adherence to high quality and time.",
            },
            AWARDS_SECTION: {
                // subtitle: "Recognition & Awards",
                title: "Awards & Accolades",
                description: "Technology drives the modern world and at Hidden Brains UK, we envision the future of technology and create new possibilities for the connected world. Hidden Brains leverage latest and emerging technologies to stimulate our urge for creating excellence in designing and developing world class web and mobile app development solutions & services. Over the years, we have won awards and recognized by various industry associations and forums for outstanding contribution in the field of web and mobile application development. We combine technology and our deep industry knowledge to unlock actionable insights.",
            },
            BLOG_SECTION: {
                subtitle: "Latest Insights",
                title: "Get The Latest Insights",
            },
            CONTACT_SECTION: {
                subtitle: "Get in Touch",
                title: "Are you looking to digitally transform your business?",
                description: "We offer technical expertise, global footprints and insights to take your app idea to the next level. Let's discuss.",
            },
            WHO_WE_ARE: {
                title: "Mobile and Web Application Development Company",
                description: [
                    "Hidden Brains is one of the leading web and mobile app development company UK, providing custom solutions. We believe in building long-term partnerships with our clients by exceeding expectations and maintaining a great level of transparency.",
                    "Our team of designers, developers, and QAs create high-quality, scalable web and mobile solutions for clients across diverse industry domains. Whether you need to hire an expert developer with specialized knowledge or a team with diverse skills, Hidden Brains UK has a talent pool of more than 500+ professionals to meet your business requirements."
                ]
            },
            WHY_CHOOSE_US: [
                {
                    icon: "mic", // Replaced microphone with mic for consistency, or I'll just keep the SVGs in HomeView for now as they are complex
                    title: "Futuristic Solutions",
                    description: "Innovative technologies to deliver breakthrough solutions for dynamic businesses."
                },
                {
                    icon: "cube",
                    title: "Technical Expertise",
                    description: "Technology expertise to reimagine the potential of the intelligent enterprise."
                },
                {
                    icon: "academic",
                    title: "Domain Knowledge",
                    description: "Deep domain knowledge to leverage the right technology and address critical challenges."
                },
                {
                    icon: "users",
                    title: "Skilled Resources",
                    description: "Dedicated & skilled resources to develop and deploy technology-ahead solutions."
                }
            ],
            INNOVATIVE_THINKERS: {
                subtitle: "Innovative Thinkers",
                title: "Hidden Brains Infotech Helps You Succeed…",
                description: "Hidden Brains UK is a team of innovative thinkers who aspire to do incredible things. Hidden Brains Top app developers team endeavors to deliver Web and Mobile App Development solutions adhering to quality and excellence.",
                stats: [
                    { count: "22", symbol: "+", label: "Years of experience", icon: "stat-building" },
                    { count: "1000", symbol: "+", label: "Mobile applications", icon: "stat-mobile" },
                    { count: "30", symbol: "+", label: "Web Applications", icon: "stat-desktop" },
                    { count: "125", symbol: "+", label: "Expert Professionals", icon: "stat-users" },
                    { count: "2400", symbol: "+", label: "Client Base", icon: "stat-user" },
                    { count: "42", symbol: "+", label: "Industries Served", icon: "stat-industry" }
                ]
            },
            HOW_WE_WORK: {
                title: "How We Work",
                subtitle: "20+ YEARS OF EXPERIENCE",
                description: "Hidden Brains UK have 20+ years of experience providing Web and Mobile App Development solutions & services UK.\n We focus on developing a clear understanding of client’s needs and providing strategic, sustainable solutions,\n and follow a collaborative approach to enhance business performance.",
                steps: [
                    {
                        title: "Analyze",
                        description: "Industry expertise and research techniques to provide insights and develop clear strategy.",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-Analyasis-02.png",
                        color: "blue"
                    },
                    {
                        title: "Design",
                        description: "Create a beautiful, highly functional and intuitive design with your specific users in mind.",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-Design.png.png",
                        color: "purple"
                    },
                    {
                        title: "Develop",
                        description: "Fast, fluid and error-free development for web and mobile, any platform or technical stack.",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-Development-02.png",
                        color: "dark"
                    },
                    {
                        title: "Deliver",
                        description: "We bring best products to market, ensuring proper support and optimization for final launch.",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/methods-deliver-02.png",
                        color: "red"
                    }
                ]
            }
        },
        ABOUT_CONTENT: {
            title: "About",
            description: "This is the about page for the corporate IT services website. Use this space to introduce your organization, its history, leadership, and the principles that guide how you work with clients.",
        },
        CONTACT_CONTENT: {
            title: "Contact Us",
            description: "Ready to discuss your next initiative? Share a few details about your organization and we'll connect you with the right experts.",
        },
        SERVICES_CONTENT: {
            title: "Services",
            description: "This is the services page for the corporate IT services website. Outline your core offerings here, such as cloud, infrastructure, security, application development, and managed services.",
        },
        PORTFOLIO_CONTENT: {
            title: "Our Work",
            description: "Hidden Brains UK’s Web and Mobile App Development portfolio spans diverse industries, companies & geography with adherence to high quality and time.",
        },
        INDUSTRIES_CONTENT: {
            title: "Industries",
            description: "This is the industries page for the corporate IT services website. Describe the key sectors you serve, such as financial services, healthcare, manufacturing, and retail, and highlight typical use cases.",
        },
        SERVICES_MENU: servicesMenu,
        SOLUTIONS_MENU: solutionsMenu,
        INDUSTRIES_MENU: industriesMenu,
        HERO_SLIDES: [
            {
                title: "Hire Expert Developers\nFor Your Project",
                subtitle: "Multi-disciplinary resources to work on hourly, part-time or full-time basis. Rapid team scaling to match your IT and business needs.",
                image: slide1,
                link: "/hire-dedicated-developers",
            },
            {
                title: "We Help Companies Grow\nIn Digital World",
                subtitle: "We build business-critical websites and web applications that are fluid, easy-to-navigate and exciting to use.",
                image: slide2,
                link: "/web-design-development",
            },
            {
                title: "Award-Winning Mobile App\nDevelopment Company",
                subtitle: "We’ve done everything from enterprise apps to innovative consumer-focused apps and multiplayer.",
                image: slide3,
                link: "/mobile-application-development",
            },
        ],
        SERVICES: [
            {
                id: "01",
                title: "Mobile Apps Development", // Found originally as id 02
                description: "A leading mobile application development company Hidden Brains UK offers a wide range of mobile app services.",
                icon: "mobile",
                link: "/mobile-application-development",
                iconBgColor: "bg-orange-50",
                iconColor: "text-[#f29111]",
                accentColor: "bg-[#f29111]",
            },
            {
                id: "02",
                title: "Web Application Development", // Found originally as id 01
                description: "Hidden Brains UK offers Website Development Services UK for diverse industry verticals to simplify complex business workflows.",
                icon: "window",
                link: "/web-design-development",
                iconBgColor: "bg-pink-50",
                iconColor: "text-[#f06292]",
                accentColor: "bg-[#f06292]",
            },
            {
                id: "03",
                title: "Hire Dedicated Developers",
                description: "Hidden Brains is one of the most trusted names in the tech industry to hire dedicated developers.",
                icon: "users",
                link: "/hire-dedicated-developers",
                iconBgColor: "bg-purple-50",
                iconColor: "text-[#7e57c2]",
                accentColor: "bg-[#7e57c2]",
            },
            {
                id: "04",
                title: "Emerging Technologies Services",
                description: "Leverage the power of wearables, big data, IoT, iBeacon, AWS & Augmented Reality to gain first-mover advantage.",
                icon: "cpu",
                link: "/emerging-technology-services",
                iconBgColor: "bg-yellow-50",
                iconColor: "text-[#fb8c00]",
                accentColor: "bg-[#fb8c00]",
            },
            {
                id: "05",
                title: "Game Development Services",
                description: "Highly interactive games with stunning animations for all platforms including Android, iOS, iPad & Windows.",
                icon: "gamepad",
                link: "/",
                iconBgColor: "bg-red-50",
                iconColor: "text-[#ff5252]",
                accentColor: "bg-[#ff5252]",
            },
            {
                id: "06",
                title: "Open Source Customization",
                description: "Custom CMS, Open Source & E-Commerce solutions delivering high-performance and scalable digital platforms.",
                icon: "shopping-cart",
                link: "/open-source-customization",
                iconBgColor: "bg-blue-50",
                iconColor: "text-[#03a9f4]",
                accentColor: "bg-[#03a9f4]",
            },
        ],
        PROJECTS: [
            {
                title: "Plant Village",
                category: "agritech",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/plant-village.webp",
                link: "https://www.hiddenbrains.com/ai-powered-plant-monitoring-system-case-study.html",
            },
            {
                title: "Boardroom IQ",
                category: "smes",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Boardroom-IQ.png",
                link: "https://www.hiddenbrains.com/ai-powered-boardroomiq.html",
            },
            {
                title: "OMV",
                category: "oil-gas",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/OMV-Fuel-Station-Finder-Receipt.png",
                link: "https://www.hiddenbrains.com/filling-stations-finder-and-receipt-generation-case-study.html",
            },
            {
                title: "Layr",
                category: "insurtech",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Layr.png",
                link: "https://www.hiddenbrains.com/commercial-insurance-solution-layr.html",
            },
            {
                title: "Digital LMS",
                category: "edtech",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Digital-LMS.png",
                link: "https://www.hiddenbrains.com/moodle-elearning-platform.html",
            },
            {
                title: "Budget Building",
                category: "education",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Building.png",
                link: "https://www.hiddenbrains.com/budget-planning-and-forecasting-software-solution.html",
            },
            {
                title: "Scosche",
                category: "ecommerce",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Scosche.png",
                link: "https://www.hiddenbrains.com/scosche-ecommerce-store-development.html",
            },
            {
                title: "CUSTOM WRKSHOP",
                category: "ecommerce",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Industry-eCommerce-1.png",
                link: "https://www.hiddenbrains.com/ecommerce-product-configurator.html",
            },
            {
                title: "FunLearn",
                category: "elearning",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/FunLearn.png",
                link: "https://www.hiddenbrains.com/fun-learning-app-development.html",
            },
            {
                title: "Simply Org",
                category: "event-management",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Simply-Org.png",
                link: "https://www.hiddenbrains.com/seminar-management-software-development.html",
            },
            {
                title: "Econship",
                category: "container-shipping",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Econship.png",
                link: "https://www.hiddenbrains.com/container-shipping-solutions.html",
            },
            {
                title: "Swiftship",
                category: "saas",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/10/Swiftship.png",
                link: "https://www.hiddenbrains.com/swiftship-shipping-and-payment-agreegator.html",
            },
            {
                title: "Accessible Living Solutions",
                category: "real-estate",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/accessible-living-solutions.webp",
                link: "https://www.hiddenbrains.com/real-estate-solutions.html",
            },
            {
                title: "CreditPulse",
                category: "fintech",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/credit-pulse.webp",
                link: "https://www.hiddenbrains.com/fintech-transformation.html",
            },
            {
                title: "datums",
                category: "corporate",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/datums.webp",
                link: "https://www.hiddenbrains.com/ai-powered-business-intelligence-solutions.html",
            },
            {
                title: "Generative AI LMS",
                category: "ai-ml",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/generative-ai-lms.webp",
                link: "https://www.hiddenbrains.com/generative-ai-in-learning-management-system.html",
            },
            {
                title: "GT Bank",
                category: "fintech",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/gt-bank.webp",
                link: "https://www.hiddenbrains.com/mobile-banking-app-development.html",
            },
            {
                title: "Hire and Sales",
                category: "corporate",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/hire-and-sales.webp",
                link: "https://www.hiddenbrains.com/ai-powered-recruitment-solutions-case-study.html",
            },
            {
                title: "Kamdhenu",
                category: "automobile",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/kamdhenu.webp",
                link: "https://www.hiddenbrains.com/automotive-car-retailer-case-study.html",
            },
            {
                title: "Mall for Africa",
                category: "fintech",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/mall-for-africa.webp",
                link: "https://www.hiddenbrains.africa/case-studies/mallforafrica-online-shopping-platform.html",
            },
            {
                title: "MRS",
                category: "oil-gas",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/11/mrs-solutions.webp",
                link: "https://www.hiddenbrains.com/digital-transformation-in-oil-and-gas.html",
            },
            {
                title: "Parking App",
                category: "lifestyle",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/parken.webp",
                link: "https://www.hiddenbrains.com/parken-im-pott-parking-app.html",
            },
            {
                title: "Deliver Any",
                category: "corporate",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2022/12/deliver-any-1.png",
                link: "https://www.hiddenbrains.com/online-logistics-platform-development.html",
            },
            {
                title: "Werko",
                category: "manufacturing",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/09/werko.webp",
                link: "https://www.hiddenbrains.com/portal-development-for-contractors-craftsman.html",
            },
            {
                title: "Neoxeo App",
                category: "entertainment",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/neoxe.webp",
                link: "https://www.hiddenbrains.com/online-internet-radio-app-development.html",
            },
            {
                title: "Cay Guide",
                category: "travel-tourism",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/cayguide-v2.webp",
                link: "https://www.hiddenbrains.com/cayguide.html",
            },
            {
                title: "Guess The Price",
                category: "entertainment",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/guesstheprice.webp",
                link: "https://www.hiddenbrains.com/guess-the-price-gaming-app.html",
            },
            {
                title: "Food Express",
                category: "restaurant",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/foodexpress.webp",
                link: "https://www.hiddenbrains.com/food-express.html",
            },
            {
                title: "Evil Escape Game",
                category: "game",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/evilescape.webp",
                link: "https://www.hiddenbrains.com/evil-escape-game-app.html",
            },
            {
                title: "Dublin Convention Bureau",
                category: "travel-tourism",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/dublin_convention.webp",
                link: "https://www.hiddenbrains.com/dublin-convention-bureau.html",
            },
            {
                title: "Catwalk88",
                category: "ecommerce",
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/catwalk-v2.webp",
                link: "https://www.hiddenbrains.com/womens-clothing-website-development.html",
            },
        ],
        TESTIMONIALS: [
            {
                quote: "“We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!”",
                author: " Daniel Vant, UK",
            }
        ],
        AWARDS: [
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2019/12/tv9_gujarati_ace_achievers_award-1.png",
                title: "TV9 Gujarati ACE Achievers Award 2019",
                subtitle: "‘Ace Achievers : Making a Difference’"
            },
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/excellence-award-17.png",
                title: "ICTIS Global Industry & Academic Excellence Award 2017",
                subtitle: "‘IoT Innovation’"
            },
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/excellence-award-17-1.png",
                title: "ICTIS Global Industry & Academic Excellence Award 2017",
                subtitle: "‘Corporate Excellence’"
            },
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/award1.png",
                title: "ICT4SD's ICT Awards The EXCELLENCIA",
                subtitle: "Best ICT Company of the Year, 2016"
            }
        ],
        BLOG_POSTS: [
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/08/Offshore-Software-Development.webp",
                title: "Why Offshore Software Development Is the Future of Software Delivery for UK Businesses",
                excerpt: "Discover how UK businesses can cut costs, boost speed, and scale smartly with offshore software development. Your global tech advantage starts here.",
                link: "/blog/why-offshore-software-development-is-the-future-of-software-delivery-for-uk-businesses.html",
            },
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2025/06/How-to-hire-react-native-developers-in-the-uk.webp",
                title: "How to Hire React Native Developers in the UK",
                excerpt: "Good news for UK business owners thinking about creating a mobile app: you don’t need to do it twice. With React Native, you can make both iOS and Android apps with one codebase.",
                link: "/blog/how-to-hire-react-native-developers.html",
            },
            {
                image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2023/10/Tricks-Tips-To-Hire-Full-Stack-Developers_-What-You-Need-To-Focus__Thumbnail.png",
                title: "Tricks & Tips To Hire Full-Stack Developers: What You Need To Focus?",
                excerpt: "Planning to hire full-stack developers to fill the tech and cost gaps? Here you can discover tips to hire full-stack developers with the right skills and expertise.",
                link: "/blog/tips-to-hire-full-stack-developer.html",
            },
        ],
        CLIENT_LOGOS: [
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-omv-old.webp",
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-02.webp",
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-03-1.webp",
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-04.webp",
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-05.webp",
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-06.webp",
            "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/client-logo-07.webp",

        ],
        COMPANY_PROFILE: {
            CORE_VALUES: {
                subtitle: "DNA of Our Values",
                title: "Our Core Values Describe How We Conduct Business",
                leftValues: [
                    {
                        title: "Operational Excellence",
                        desc: "High-performance technology solutions for operational excellence.",
                        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/operational-icon.png",
                    },
                    {
                        title: "Eye for Innovation",
                        desc: "Embrace new tools to drive innovation and path-breaking solutions.",
                        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/eye-innovation-icon.png",
                    },
                    {
                        title: "Industry Differentiation",
                        desc: "Leverage latest emerging technologies to create differentiated positioning.",
                        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/industry-diff-icon.png",
                    },
                ],
                rightValues: [
                    {
                        title: "Quality Centric Work",
                        desc: "Providing clients with services of the highest quality standards.",
                        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/qualitywork-icon.png",
                    },
                    {
                        title: "Integrated Workflow",
                        desc: "Streamlined workflow to respond to clients’ needs today & tomorrow.",
                        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/integrated-workflow-icon.png",
                    },
                    {
                        title: "Transparency in Work",
                        desc: "Complete transparency and accountability throughout development.",
                        icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2017/07/transparencywork-icon.png",
                    },
                ],
                dnaImage: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/06/DNA-image.png"
            },
            PHILOSOPHY: {
                title: "Our Business Philosophy",
                items: [
                    {
                        title: "Vision",
                        desc: "“Our vision is to be a global leader in IT solutions and services with impetus on Innovation, Productivity, and implementation of ethical Business Strategies – with the ultimate aim of giving back to the society.”",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/11/Vision-img.jpg",
                        icon: "eye",
                        color: "blue"
                    },
                    {
                        title: "Mission",
                        desc: "“Our mission is to create innovative products and deliver excellence in services with constant emphasis on engineering, process quality and customer satisfaction – We add value to your business.”",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/11/Mission-img.jpg",
                        icon: "target",
                        color: "orange"
                    },
                    {
                        title: "Quality Policy",
                        desc: "“We DELIVER effective quality solutions and services to our customers – meeting project requirements and achieving continual excellence in all our solutions and services – guided by defined global standards in quality management.”",
                        image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/11/Qualitypolicy-img.jpg",
                        icon: "medal",
                        color: "dark"
                    }
                ]
            },
            DIFFERENTIATORS: {
                subtitle: "A Few Reasons Why We’re Different",
                title: "With 22+ years of experience, Hidden Brains will surpass your expectations.",
                items: [
                    {
                        title: "Latest Technology, Diversified Talent",
                        desc: "We are backed by the latest technologies proficiently utilized by talented and highly experienced resources with expertise in diverse fields.",
                        icon: "lightbulb",
                        bgColor: "bg-[#eef8ff]"
                    },
                    {
                        title: "Technical Requirement, Our Expertise",
                        desc: "We work on your project in a consultative manner by keeping your requirements and feedback the topmost priority. Client satisfaction is an achievement for us.",
                        icon: "file-text",
                        bgColor: "bg-[#fdf3e8]"
                    },
                    {
                        title: "Meticulous Work, Innovative Ideas",
                        desc: "Experienced developers working for our company have an eye for innovation and assure meticulous development work, thus earning us repetitive business.",
                        icon: "award",
                        bgColor: "bg-[#ededf5]"
                    }
                ]
            },
            STATS: {
                title: "We help you Succeed...",
                description: "We are a team of innovative thinkers who aspire to incredible things. Our team endeavours to deliver winning web and mobile solutions\nadhering to quality and excellence.",
                stats: [
                    { count: "22", symbol: "+", label: "Years of Experience", icon: "stat-building" },
                    { count: "1000", symbol: "+", label: "Mobile Applications", icon: "stat-mobile" },
                    { count: "30", symbol: "+", label: "Projects", icon: "stat-desktop" },
                    { count: "125", symbol: "+", label: "Expert Professionals", icon: "stat-users" },
                    { count: "2400", symbol: "+", label: "Client Base", icon: "stat-user" },
                    { count: "39", symbol: "+", label: "Industries Served", icon: "stat-industry" }
                ]
            }
        }
    };
}
