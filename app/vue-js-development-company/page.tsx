import dynamic from 'next/dynamic';
import React from "react";

import { getData } from "@/lib/data";

import { IntroductionSection } from "@/components/shared/IntroductionSection";
import { HeroSection } from "@/components/shared/HeroSection";
import { IndustrySlider } from "@/components/shared/IndustrySlider";
import { GuideSection } from "@/components/shared/GuideSection";
import { CtaSection } from "@/components/shared/CtaSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

import banner from "@/images/php-web-development.webp";

import {
    VUE_JS_HERO,
    VUE_JS_COUNTERS,
    VUE_JS_SERVICES,
    VUE_JS_INDUSTRIES,
    VUE_JS_WHY_CHOOSE,
    VUE_JS_GUIDE_ITEMS,
    VUE_JS_GUIDE_DETAILS,
    VUE_JS_TESTIMONIALS,
    VUE_JS_FAQS
} from "@/lib/vue-js-development-data";

export const metadata = {
    title: "Vue JS Development Company in UK | Hidden Brains",
    description: "Hidden Brains UK is a leading Vue JS development company that has web products with intuitive UI, a clean codebase, and outstanding customer service.",
};

export default async function VueJSDevelopmentPage() {
    const data = await getData();

    return (
        <main className="bg-white text-[#14133b]">
            <HeroSection
                banner={banner}
                alt="Vue JS Development Company"
                title={VUE_JS_HERO.title}
                description={VUE_JS_HERO.excerpt}
                ctaText={VUE_JS_HERO.cta}
            />

            <IntroductionSection
                bgColor="bg-gray-50"
                breadcrumbs={[
                    { label: "Front End Development", href: "/front-end-development-company" },
                    { label: "Vue JS Development" }
                ]}
                title="Top Vue.JS Application Development Company in the UK"
                counters={VUE_JS_COUNTERS}
                content={
                    <>
                        <p className="mb-[10px] ">
                            Our elite Vue.js developers offer full knowledge of the framework, fast UI solutions, and elite digital experiences. Utilising the VueJS framework, we’re able to craft awesome front-ends, dynamic single-page web applications, and mobile applications. VueJS is one of the popular tools utilised by web developers and an open-source library for building lightweight, intelligent, and versatile single-page applications (SPAs) and user interfaces with great compatibility with React.js and Angular.js.
                        </p>
                        <p className="mb-[10px]">
                            You can hire Vue.js developers from Hidden Brains and enjoy the benefits of Vue’s fault-proof JavaScript framework. Vue developers use a specialised methodology to serve our clients’ needs. At Hidden Brains UK, we have dedicated developers of the Vue.js front-end web framework, who engage closely with clients to produce custom solutions for their varied business needs. We build quality apps using best-in-class practices and new technology, adequate planning, effective research, and established workflows.
                        </p>
                    </>
                }
            />

            <CtaSection
                title="Let’s get started on your Vue.js application development project!"
            />

            {/* Services Section */}
            <section className="py-[50px] bg-gray-50 text-[#14133b]">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px]">Best Vue.js Development Services We Offer At Hidden Brains UK</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        With in-depth understanding of the framework and the expertise to provide the most superior Vue.js web development services to our clients, we are recognized as the premier Vue.js development firm in the UK. As our Vue.js team is composed of expert developers, we are your one-stop experts for developing Vuejs solutions.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-[30px]">
                        {VUE_JS_SERVICES.map((service, idx) => (
                            <div key={idx} className="bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-orange-500 group border border-gray-100 h-full flex flex-col">
                                <div className="mb-6 text-[#f29111] transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-[19px] font-bold mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{service.title}</h3>
                                <p className="text-[#6a7c92] text-[16px] leading-relaxed flex-grow">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Section */}
            <section className="py-[50px] bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-[30px] px-4">
                        <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Our Expert Vue.js Development Services For Various Industries</h2>
                        <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg leading-relaxed">
                            Vue.js development services in the UK for the following industries have set the benchmark in offering Vue.js solutions for clients from different industries.
                        </p>
                    </div>
                    <IndustrySlider industries={VUE_JS_INDUSTRIES} />
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-[50px] bg-gray-50">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-[26px] md:text-[36px] font-semibold mb-[18px] text-[#14133b]">Why Choose Us for Vue.js Development Services in the UK?</h2>
                    <p className=" mx-auto text-[#6a7c92] text-[16px] md:text-lg mb-[30px] leading-relaxed">
                        We understand the changing needs of the market, therefore enable you to hire the best Vue Js development team that strives to deliver secure, scalable, and robust solutions. Here are a few highlights that make us stand apart in the market:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                        {VUE_JS_WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
                                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-[#f29111] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-[#6a7c92] leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <GuideSection
                title="Guide"
                description="If you have a query regarding Vue.js App development services, then here is our comprehensive guide section to answer your common doubts."
                items={VUE_JS_GUIDE_ITEMS}
                details={VUE_JS_GUIDE_DETAILS}
            />

            <CtaSection
                title="Your idea is most important to us. Share Now!"
            />

            <TestimonialsSection
                testimonials={VUE_JS_TESTIMONIALS}
            />

            <FAQSection
                faqs={VUE_JS_FAQS}
                title="Vue.js FAQs"
            />

            <Contact data={data} />
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));

const FAQSection = dynamic(() => import('@/components/shared/FAQSection').then(mod => mod.FAQSection));
