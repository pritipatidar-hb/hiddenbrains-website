import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '@/lib/data';
import TitleBanner from '@/images/bg-titlebar.jpg';
import { BLOG_POSTS, POPULAR_POSTS, BLOG_ARCHIVES, BLOG_CATEGORIES } from '@/lib/blog-data';

import { Facebook, Twitter, Linkedin, Youtube, Search } from 'lucide-react';

export const metadata = {
    title: "Latest Blogs on Mobile & Web IT solutions | Hidden Brains UK",
    description: "Read the latest news and blog posts on mobile and web app development, emerging technologies, and business strategies from Hidden Brains UK experts.",
};

export default async function BlogPage() {
    const data = await getData();

    return (
        <div className="main-content loaded bg-white text-slate-900">
            {/* Page Header / Hero Section */}
            <div className="page-header pagetitle-v2">
                <div
                    className="hero parallax wrapper mo-title-bar-wrap py-24 text-white bg-cover bg-center bg-no-repeat relative overflow-hidden"
                    style={{ backgroundImage: `url(${TitleBanner.src})` }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="cd-intro mo-title-bar max-w-7xl mx-auto md:ml-[100px]">
                            <h1 className="text-[40px] md:text-[48px] font-bold text-white mb-2 ml-[0px]">Blog</h1>
                            <div className="mo-path text-[14px] font-medium text-white/90">
                                <div className="mo-path-inner flex items-center">
                                    <Link href="/" className="hover:text-orange-500 transition-colors font-bold">Home</Link>
                                    <span className="mx-2">/</span>
                                    <span className="current opacity-80">Blog</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Blog Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                    <div className="flex flex-wrap -mx-4">

                        {/* Blog Posts Column (Left) */}
                        <div className="w-full lg:w-3/4 px-4">
                            <div className="blog-posts grid gap-12">
                                {BLOG_POSTS.slice(0, 6).map((post) => (
                                    <article key={post.id} className="post-item bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex flex-wrap md:flex-nowrap">
                                            {/* Post Thumbnail */}
                                            <div className="w-full md:w-1/3 shrink-0 relative min-h-[250px] md:min-h-full overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                />
                                                <Link
                                                    href={post.categoryUrl}
                                                    className="absolute top-4 left-4 bg-orange-500 text-white text-[12px] font-bold uppercase py-1 px-3 rounded shadow-sm z-10"
                                                >
                                                    {post.category}
                                                </Link>
                                            </div>

                                            {/* Post Content */}
                                            <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                                                <div className="meta-post flex items-center gap-4 text-[13px] text-[#6a7c92] mb-4 font-medium">
                                                    <span>{post.date}</span>
                                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                    <span>By {post.author}</span>
                                                </div>
                                                <h3 className="post-title text-[22px] md:text-[26px] font-bold text-[#14133b] mb-4 leading-tight hover:text-orange-500 transition-colors">
                                                    <Link href={post.url}>{post.title}</Link>
                                                </h3>
                                                <p className="description text-[#6a7c92] text-[15px] leading-relaxed mb-6 line-clamp-3">
                                                    {post.excerpt}
                                                </p>
                                                <Link
                                                    href={post.url}
                                                    className="inline-flex items-center text-orange-500 font-bold uppercase text-[13px] tracking-wider group"
                                                >
                                                    Read More
                                                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-16 flex justify-center">
                                <nav className="flex items-center gap-2">
                                    <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white font-bold rounded">1</span>
                                    <Link href="/blog/page/2" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-colors font-bold rounded">2</Link>
                                    <Link href="/blog/page/3" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-colors font-bold rounded">3</Link>
                                    <Link href="/blog/page/4" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-colors font-bold rounded">4</Link>
                                    <span className="px-2 text-gray-400">...</span>
                                    <Link href="/blog/page/61" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-colors font-bold rounded">61</Link>
                                    <Link href="/blog/page/2" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-colors rounded">
                                        <span className="sr-only">Next</span>
                                        <span className="font-bold">→</span>
                                    </Link>
                                </nav>
                            </div>
                        </div>

                        {/* Sidebar Column (Right) */}
                        <aside className="w-full lg:w-1/4 px-4 mt-16 lg:mt-0">
                            <div className="sticky top-24 space-y-12">

                                {/* Search Widget */}
                                <div className="widget search-widget">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Search</h4>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search posts..."
                                            className="w-full bg-gray-50 border border-gray-100 py-3 pl-4 pr-12 rounded-lg outline-none focus:border-orange-500 transition-colors"
                                        />
                                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                                            <Search size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Popular Blogs Widget */}
                                <div className="widget popular-posts">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Popular Blogs</h4>
                                    <div className="space-y-6">
                                        {POPULAR_POSTS.map((post, idx) => (
                                            <div key={idx} className="flex gap-4 items-start group">
                                                {post.image && (
                                                    <div className="w-20 h-16 shrink-0 overflow-hidden rounded bg-gray-100">
                                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                    </div>
                                                )}
                                                <div>
                                                    <h6 className="text-[14px] font-bold text-[#14133b] mb-1 leading-snug line-clamp-2 hover:text-orange-500 transition-colors">
                                                        <Link href={post.url}>{post.title}</Link>
                                                    </h6>
                                                    <div className="text-[12px] text-[#6a7c92]">{post.date}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Ads Widget */}
                                <div className="widget ads-widget p-6 bg-[#14133b] rounded-xl text-white">
                                    <h4 className="text-[16px] font-bold mb-4 uppercase tracking-widest text-orange-500">Promoted</h4>
                                    <div className="ad-item mb-6">
                                        <div className="text-[11px] font-bold mb-2 opacity-60">Ad · HiddenBrains.co.uk</div>
                                        <Link href="/hire-dedicated-developers" className="text-[15px] font-bold block mb-2 hover:text-orange-500 transition-colors">Hire Best Laravel Developers</Link>
                                        <p className="text-[12px] text-white/70 leading-relaxed">Looking to hire the industry’s best Laravel developers? Get a Free Quote!</p>
                                    </div>
                                    <div className="ad-item">
                                        <div className="text-[11px] font-bold mb-2 opacity-60">Ad · HiddenBrains.co.uk</div>
                                        <Link href="/mobile-application-development" className="text-[15px] font-bold block mb-2 hover:text-orange-500 transition-colors">Mobile App Development</Link>
                                        <p className="text-[12px] text-white/70 leading-relaxed">Deliver top ranking apps with our reliable mobile app development team.</p>
                                    </div>
                                </div>

                                {/* Follow Us Widget */}
                                <div className="widget social-widget">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Follow Us</h4>
                                    <div className="flex gap-3">
                                        <a href="https://facebook.com" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-all rounded-lg shadow-sm">
                                            <Facebook size={18} />
                                        </a>
                                        <a href="https://twitter.com" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-all rounded-lg shadow-sm">
                                            <Twitter size={18} />
                                        </a>
                                        <a href="https://linkedin.com" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-all rounded-lg shadow-sm">
                                            <Linkedin size={18} />
                                        </a>
                                        <a href="https://youtube.com" className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-all rounded-lg shadow-sm">
                                            <Youtube size={18} />
                                        </a>
                                    </div>
                                </div>

                                {/* Archives Widget */}
                                <div className="widget archives">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Archives</h4>
                                    <select className="w-full bg-gray-50 border border-gray-100 py-3 px-4 rounded-lg outline-none cursor-pointer focus:border-orange-500 transition-colors font-medium text-[14px]">
                                        <option value="">Select Month</option>
                                        {BLOG_ARCHIVES.map((arch, idx) => (
                                            <option key={idx} value={arch.url}>{arch.label} ({arch.count})</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Categories Widget */}
                                <div className="widget categories-widget">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Categories</h4>
                                    <ul className="space-y-3">
                                        {BLOG_CATEGORIES.map((cat, idx) => (
                                            <li key={idx}>
                                                <Link href={cat.url} className="flex items-center justify-between text-[14px] font-medium text-[#6a7c92] hover:text-orange-500 transition-colors py-1 group">
                                                    <span>{cat.label}</span>
                                                    <span className="bg-gray-50 group-hover:bg-orange-500/10 group-hover:text-orange-500 px-2 py-0.5 rounded text-[12px]">{cat.count}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </aside>

                    </div>
                </div>
            </section>


        </div>
    );
}

const Contact = dynamic(() => import('@/components/layout/Contact'));
