import dynamic from 'next/dynamic';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "@/images/Testimonial-Banner.webp";
import { CLIENTS_DATA } from "@/lib/clients-data";
import { getData } from "@/lib/data";


export const metadata = {
    title: "Our Clients | Hidden Brains UK",
    description: "Explore our diverse portfolio of clients from around the world. Hidden Brains UK has delivered successful IT solutions to businesses across multiple industries.",
};

export default async function OurClientsPage() {
    const data = await getData();
    return (
        <main className="">
            {/* Page Header */}
            <section className="relative py-20 md:py-24 text-white overflow-hidden min-h-[400px] flex items-center">
                <Image
                    src={bannerImg}
                    alt="Testimonial Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-4xl md:text-[50px] font-bold leading-tight mb-[25px] tracking-tight">
                                Our Clients
                            </h1>
                            <nav className="flex items-center text-sm md:text-[15px] font-medium">
                                <Link href="/" className="text-white hover:text-orange-500 transition-colors ">Home</Link>
                                <span className="mx-2 text-white/60">/</span>
                                <span className="text-white/90">Our Clients</span>
                            </nav>
                        </div>
                        <div className="w-full lg:w-2/5 mt-10 lg:mt-0 flex lg:justify-end items-center">
                            <ul className="flex flex-wrap lg:flex-nowrap items-center gap-6 text-[13px] font-bold uppercase ">
                                <li>
                                    <span className=" py-2.5 px-5 block text-[17px] font-semibold  text-white bg-black/10">
                                        Our Clients
                                    </span>
                                </li>
                                <li>
                                    <Link href="/client-speak" className="hover:text-orange-500 transition-colors font-semibold py-2.5 px-5 block text-[17px]  text-white">
                                        Client Speak
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonials" className=" text-[17px] font-semibold  py-4 block  text-white bg-black/10">
                                        Video Testimonial | Our  Valuable Clients
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients Grid Section */}
            <section className="py-[70px] bg-[#f8f9fa]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                            Without our clients, our work would have no meaning!
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 ">
                        {CLIENTS_DATA.map((client) => (
                            <div
                                key={client.id}
                                className="bg-white aspect-[2/1] flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300 group"
                            >
                                <div className="relative w-full h-[94px]">
                                    <Image
                                        src={client.url}
                                        alt={client.alt}
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <Contact data={data} /> */}
        </main>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
