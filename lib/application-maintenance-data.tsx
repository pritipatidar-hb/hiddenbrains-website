import React from 'react';
import { Cog, RefreshCw, Layers } from "lucide-react";

export const APP_MAINTENANCE_PROCESS = [
  {
    step: "1",
    title: "Application Support & Regular Testing",
    icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/app-maintenance-icon1.png"
  },
  {
    step: "2",
    title: "Troubleshooting & Re-engineering",
    icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/app-maintenance-icon2.png"
  },
  {
    step: "3",
    title: "Application Migration & Integration",
    icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/app-maintenance-icon3.png"
  },
  {
    step: "4",
    title: "QA, Application Testing & Bug Fixing",
    icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/app-maintenance-icon4.png"
  },
  {
    step: "5",
    title: "Application Improvisations/Enhancements",
    icon: "https://www.hiddenbrains.co.uk/wp-content/uploads/2016/08/app-maintenance-icon5.png"
  }
];

export const APP_MAINTENANCE_INFO_BOXES = [
  {
    title: "Why Choose Hidden Brains?",
    content: "Hidden Brains has an extensive experience in deploying as well as maintaining mission critical applications. Our success stories speak about our quality of work & commitment to deliver excellence. Choose Hidden Brains and be assured to get quality work delivered!",
    image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/ourfocusarea-image3.webp",
    color: "dark",
    icon: <Cog className="text-white w-7 h-7" />
  },
  {
    title: "App Maintenance Services",
    list: [
      "Application Reconstruction / Renovation",
      "Application Re-Engineering",
      "Application Customization",
      "Application Improvisation",
      "Application Support",
      "Application Troubleshooting"
    ],
    image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/application-maintenance-done.webp",
    color: "green",
    icon: <RefreshCw className="text-white w-7 h-7" />
  },
  {
    title: "Hidden Brains Proposition",
    list: [
      "Application Support & Maintenance",
      "Application Renovation & Reengineering",
      "Application Enhancements",
      "Client-Centric Governance Model",
      "Application Portfolio Maintenance",
      "Bespoke Transition Programs"
    ],
    image: "https://www.hiddenbrains.co.uk/wp-content/uploads/2021/07/hb-edge-img3.webp",
    color: "blue",
    icon: <Layers className="text-white w-7 h-7" />
  }
];

export const APP_MAINTENANCE_TESTIMONIALS = [
  {
    quote: "“We have been working together since last 5 to 6 years on various projects including the release of an iOS app and updates to the existing software and system. Level of commitment shown by Hidden Brains team is just marvelous!”",
    author: "Daniel Vant, UK"
  }
];

export const INTRO_CONTENT = {
  title: "Application Maintenance and Support Services",
  paragraphs: [
    <>Hidden Brains allows clients to maintain business applications at optimal effectiveness, such that it faces minimum to zero downtime. The high performance of the application is the result of code optimization and implementation of tried and tested methodologies. We allow you to grow with your business and take it to the next level by offering world-class app maintenance services in the UK.</>,
    <>Hidden Brains has over Decades of experience in offering application maintenance support and services. We provide app maintenance services for web, desktop as well as <a href="/mobile-application-development" className="text-[#14133b] font-bold hover:text-[#f29111] transition-colors">mobile applications developed</a> on a variety of technologies and platforms.</>,
    <>We offer application maintenance and support services for application renovation, re-engineering and migration from one platform to another. Industry experts working for Hidden Brains are pro at adding new functionalities in the application, make improvements where needed, work on enhancements and customizations.</>
  ],
  stats: [
    { value: "22", symbol: "+", label: "Years of experience" },
    { value: "30", symbol: "+", label: "Domain served" },
    { value: "1000", symbol: "%", label: "On time delivery" },
    { value: "125", symbol: "+", label: "Mobile Experts" }
  ]
};
