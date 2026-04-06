import dynamic from 'next/dynamic';
import React from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { FeatureDetailedGrid } from "@/components/shared/FeatureDetailedGrid";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { StepperProcessSection } from "@/components/shared/StepperProcessSection";

import { HiringModelsSection } from "@/components/shared/HiringModelsSection";

import { CtaSection } from "@/components/shared/CtaSection";
import { GuideSection } from "@/components/shared/GuideSection";
import { ProcessSection } from "@/components/shared/ProcessSection";

import { getData } from "@/lib/data";
import { Users, ShieldCheck, FileText, Lightbulb, Shield, Workflow } from "lucide-react";
import {
    HIRE_WORDPRESS_HERO,
    HIRE_WORDPRESS_COUNTERS,
    HIRE_WORDPRESS_EXPERTISE,
    HIRE_WORDPRESS_INDUSTRIES,
    HIRE_WORDPRESS_PROPS,
    HIRE_WORDPRESS_PROCESS,
    HIRE_WORDPRESS_FAQ,
    HIRE_WORDPRESS_MODELS,
    HIRE_WORDPRESS_GUIDE
} from "@/lib/hire-wordpress-data";
import banner from "@/images/wordpress.webp";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TESTIMONIALS } from "@/lib/constants";
import { HIRE_WEB_DESIGNERS_MODELS } from "@/lib/hire-web-designers-data";

export const metadata = {
    title: "Hire WordPress Developers UK | Dedicated WordPress Experts",
    description: "Hire certified WordPress developers from Hidden Brains UK. We offer flexible models to hire expert WordPress app developers on hourly, part-time, and full-time basis."
};

export default async function HireWordPressDeveloperPage() {
    const data = await getData();

    return (
        <main className="min-h-screen">
            <HeroSection
                title={HIRE_WORDPRESS_HERO.title}
                description={HIRE_WORDPRESS_HERO.excerpt}
                ctaText={HIRE_WORDPRESS_HERO.cta}
                ctaHref="/contact"
                banner={banner}
                alt="WordPress Development Services"
            />

            <IntroductionSection
                title="Hire Talented WordPress Developers in the UK At Hidden Brains"
                content={
                    <div className="space-y-6 text-[#6a7c92]">
                        <p>
                            Have you ever had a problem maintaining a CMS website with thousands of pages? How many content managers are around the world? Is traffic scaled accordingly every day? Stay cool. Our WordPress developers will put you in a zone of WordPress expertise and design a web platform that embodies our company's commitment.
                        </p>
                        <p>
                            The WordPress development team at Hidden Brains UK prides itself on its ability to implement cutting-edge features and industry-driven best practices while creating beautiful and complex WordPress designs. Besides being a CMS, our dedicated WordPress developers can help you leverage much more features and functionalities of WordPress.
                        </p>
                        <p className="font-semibold text-[#14133b]">
                            We offer complete WordPress development services ranging from classy design and data migration to API integrations and maintenance, regardless of whether you are a startup or an enterprise.
                        </p>
                    </div>
                }
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Hire Developers", href: "/hire-dedicated-developers" },
                    { label: "WordPress Developer" }
                ]}
                counters={HIRE_WORDPRESS_COUNTERS}
            />

            <CtaSection
                title="Let's get started on your WordPress Development project!"
                buttonText="Get a Quote"
                buttonLink="/contact"
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-3xl md:text-[40px] font-bold text-[#14133b] mb-6">Our WordPress Developers Can Help You With These Service Expertise</h2>
                    <p className="text-[#6a7c92] text-lg mb-12 max-w-4xl mx-auto">
                        A WordPress Developer from our company can develop a website from scratch or make design changes to an existing one. Furthermore, the team also offers SEO services for increased traffic and search engine rankings.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {HIRE_WORDPRESS_EXPERTISE.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-left group">
                                <h3 className="text-xl font-bold text-[#14133b] mb-4 group-hover:text-[#f29111] transition-colors">{item.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-[40px] font-bold text-[#14133b] mb-6">Serving WordPress Development Solutions To a Variety of Industries</h2>
                        <p className="text-[#6a7c92] text-lg max-w-3xl mx-auto">
                            For over a decade, our highly skilled WordPress engineers have provided unmatched quality web solutions to several industries.
                        </p>
                    </div>
                    <IndustrySlider industries={HIRE_WORDPRESS_INDUSTRIES} />
                </div>
            </section>




            <section className="py-20 bg-gray-50/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-[40px] font-bold text-[#14133b] mb-6">
                            Hire Top Choice Of WordPress Developers At Hidden Brains In The UK
                        </h2>
                        <p className="text-[#6a7c92] text-lg max-w-4xl mx-auto">
                            Hidden Brains excels at designing and developing customer-specific websites harnessing the power of WordPress plugins. Here at Hidden Brains UK, we allow you to hire the best WordPress Developers from the handpicked pool of WP Coders. Apart, here are a few reasons that make us legit to hire WordPress Developers:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Box 1 */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:border-transparent">
                            <Users className="w-12 h-12 text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors" strokeWidth={1.5} />
                            <h3 className="text-[22px] md:text-2xl font-bold text-[#14133b] mb-4 leading-[1.3]">500+ App Development<br className="hidden md:block" /> Team</h3>
                            <p className="text-[#6a7c92] text-[15px] leading-[1.8]">
                                We have a team of highly-trained WordPress developers, analysts, and project managers that are always just a call away to deliver cutting-edge solutions.
                            </p>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:border-transparent">
                            <ShieldCheck className="w-12 h-12 text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors" strokeWidth={1.5} />
                            <h3 className="text-[22px] md:text-2xl font-bold text-[#14133b] mb-4 leading-[1.3]">Complete<br className="hidden md:block" /> Transparency</h3>
                            <p className="text-[#6a7c92] text-[15px] leading-[1.8]">
                                Keeping our clients fully updated on every stage of development and production is one of Hidden Brains UK's core values and our developers strictly follow that.
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:border-transparent">
                            <FileText className="w-12 h-12 text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors" strokeWidth={1.5} />
                            <h3 className="text-[22px] md:text-2xl font-bold text-[#14133b] mb-4 leading-[1.3]">No Obligation<br className="hidden md:block" /> Quote</h3>
                            <p className="text-[#6a7c92] text-[15px] leading-[1.8]">
                                If you want to make your existing website more useful or are starting from scratch, our team of professionals can estimate how much it will cost you.
                            </p>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:border-transparent">
                            <Lightbulb className="w-12 h-12 text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors" strokeWidth={1.5} />
                            <h3 className="text-[22px] md:text-2xl font-bold text-[#14133b] mb-4 leading-[1.3]">Smooth Projects<br className="hidden md:block" /> Management</h3>
                            <p className="text-[#6a7c92] text-[15px] leading-[1.8]">
                                The web developers at Hidden Brains UK are capable professionals who will handle your project with care and make sure to lead it in the right way.
                            </p>
                        </div>

                        {/* Box 5 */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:border-transparent">
                            <Shield className="w-12 h-12 text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors" strokeWidth={1.5} />
                            <h3 className="text-[22px] md:text-2xl font-bold text-[#14133b] mb-4 leading-[1.3]">Project Security<br className="hidden md:block" /> with an NDA</h3>
                            <p className="text-[#6a7c92] text-[15px] leading-[1.8]">
                                The information you provide us will remain confidential with us because we will sign a non-disclosure agreement with you and ensure you that your project is in safe hands.
                            </p>
                        </div>

                        {/* Box 6 */}
                        <div className="bg-white p-8 md:p-10 rounded-xl border border-gray-100 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:border-transparent">
                            <Workflow className="w-12 h-12 text-[#14133b] mb-6 group-hover:text-[#f29111] transition-colors" strokeWidth={1.5} />
                            <h3 className="text-[22px] md:text-2xl font-bold text-[#14133b] mb-4 leading-[1.3]">Flexible Engagement<br className="hidden md:block" /> Models</h3>
                            <p className="text-[#6a7c92] text-[15px] leading-[1.8]">
                                So the needs of our clients have changed, therefore we offer them the opportunity to hire a WordPress developer on an hourly, part-time, or full-time billing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <GuideSection
                title="Guide To Hire WordPress Developers In The UK"
                description="If you have any doubt left about hiring WordPress Developer, then you can refer to this guide section. In addition, you can directly drop a query to our experts or feel free to get in touch with them."
                items={HIRE_WORDPRESS_GUIDE.map(item => ({ id: item.id, label: item.title }))}
                details={HIRE_WORDPRESS_GUIDE}
            />

            <ProcessSection
                title="Hire WordPress Development Services Process"
                description="Our team has effective development methodologies to deliver intuitive and scalable WordPress development services."
                processItems={HIRE_WORDPRESS_PROCESS.map(item => ({ step: item.id, title: item.title, icon: item.icon }))}
            />

            <CtaSection title="Your idea is most important to us. Share Now!" />
            <PortfolioSection
                projects={data.PROJECTS.slice(0, 8)}
                title="Our WordPress Development Projects"
                subtitle="Portfolio"
                description="Your application, your brand, create them any way you want it with our professional development team of WordPress experts."
            />
            <TestimonialsSection testimonials={TESTIMONIALS} />

            <HiringModelsSection
                description="Our expert website designers are at your service once you hire them on remotely, hourly, part-time or full time basis. Get your coding done by experienced remote web designer by following a transparent procedure."
                models={HIRE_WEB_DESIGNERS_MODELS}
                bgClass="bg-white"
            />
            <FAQSection
                faqs={HIRE_WORDPRESS_FAQ}
                title="FAQs To Hire WordPress Developers In The UK"
            />

            <Contact data={data} />
        </main>
    );
}

const PortfolioSection = dynamic(() => import('@/components/home/PortfolioSection').then(mod => mod.PortfolioSection));

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
