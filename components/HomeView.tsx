import React from "react";
import { StaticImageData } from "next/image";
import { HeroSection } from "./home/Hero";
import { ClientLogos } from "./home/ClientLogos";
import { AboutSection } from "./home/AboutSection";
import { ServicesSection } from "./home/ServicesSection";
const PortfolioSection = dynamic(() => import("./home/PortfolioSection").then(mod => mod.PortfolioSection));
const ProcessSection = dynamic(() => import("./home/ProcessSection").then(mod => mod.ProcessSection));
const TestimonialsSection = dynamic(() => import("./home/TestimonialsSection").then(mod => mod.TestimonialsSection));
const AwardsSection = dynamic(() => import("./home/AwardsSection").then(mod => mod.AwardsSection));
const StatsSection = dynamic(() => import("./home/StatsSection").then(mod => mod.StatsSection));
const BlogSection = dynamic(() => import("./home/BlogSection").then(mod => mod.BlogSection));
import dynamic from "next/dynamic";
const Contact = dynamic(() => import("./layout/Contact"));
import { HeroSlide, Service, Project, Testimonial, Award, BlogPost, SiteConfig, HomeContent } from '@/types/components/HomeView';

// --- Main Component ---

export default function HomeView({ data }: {
    data: {
        SITE_CONFIG: SiteConfig;
        HOME_CONTENT: HomeContent;
        HERO_SLIDES: HeroSlide[];
        CLIENT_LOGOS: string[];
        SERVICES: Service[];
        PROJECTS: Project[];
        TESTIMONIALS: Testimonial[];
        AWARDS: Award[];
        BLOG_POSTS: BlogPost[];
    };
}) {
    const {
        SITE_CONFIG,
        HOME_CONTENT,
        HERO_SLIDES,
        CLIENT_LOGOS,
        SERVICES,
        PROJECTS,
        TESTIMONIALS,
        AWARDS,
        BLOG_POSTS
    } = data;

    return (
        <main>
            <HeroSection slides={HERO_SLIDES} siteConfig={SITE_CONFIG} />

            <ClientLogos logos={CLIENT_LOGOS} />

            <AboutSection
                whoWeAre={HOME_CONTENT.WHO_WE_ARE}
                whyChooseUs={HOME_CONTENT.WHY_CHOOSE_US}
            />

            <ServicesSection
                title={HOME_CONTENT.SERVICES_SECTION.title}
                services={SERVICES}
            />

            <PortfolioSection
                subtitle={HOME_CONTENT.PORTFOLIO_SECTION.subtitle}
                title={HOME_CONTENT.PORTFOLIO_SECTION.title}
                description={HOME_CONTENT.PORTFOLIO_SECTION.description}
                projects={PROJECTS}
            />

            <ProcessSection
                title={HOME_CONTENT.HOW_WE_WORK.title}
                subtitle="20+ YEARS OF EXPERIENCE"
                description={HOME_CONTENT.HOW_WE_WORK.description}
                steps={HOME_CONTENT.HOW_WE_WORK.steps}
            />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            <AwardsSection
                subtitle={HOME_CONTENT.AWARDS_SECTION.subtitle}
                title={HOME_CONTENT.AWARDS_SECTION.title}
                description={HOME_CONTENT.AWARDS_SECTION.description}
                awards={AWARDS}
            />

            <StatsSection
                subtitle={HOME_CONTENT.INNOVATIVE_THINKERS.subtitle}
                title={HOME_CONTENT.INNOVATIVE_THINKERS.title}
                description={HOME_CONTENT.INNOVATIVE_THINKERS.description}
                stats={HOME_CONTENT.INNOVATIVE_THINKERS.stats}
            />

            <BlogSection
                subtitle={HOME_CONTENT.BLOG_SECTION.subtitle}
                title={HOME_CONTENT.BLOG_SECTION.title}
                posts={BLOG_POSTS}
            />
            <Contact data={data} />
        </main>
    );
}
