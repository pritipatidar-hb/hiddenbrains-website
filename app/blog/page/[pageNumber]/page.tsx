import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '@/lib/data';
import TitleBanner from '@/images/bg-titlebar.jpg';
import { BLOG_POSTS, POPULAR_POSTS, BLOG_ARCHIVES, BLOG_CATEGORIES } from '@/lib/blog-data';
import { Facebook, Twitter, Linkedin, Youtube, Search } from 'lucide-react';
import { Button } from "@/components/common/Button";
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ pageNumber: string }> }) {
    const { pageNumber } = await params;
    return {
        title: `Blog - Page ${pageNumber} | Hidden Brains UK`,
        description: `Read the latest news and blog posts from Hidden Brains UK. Page ${pageNumber}.`,
    };
}

const POSTS_PER_PAGE = 6;

export default async function BlogPaginationPage({ params }: { params: Promise<{ pageNumber: string }> }) {
    const { pageNumber } = await params;
    const page = parseInt(pageNumber);

    if (isNaN(page) || page < 1) {
        return notFound();
    }

    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = BLOG_POSTS.slice(startIndex, endIndex);

    if (currentPosts.length === 0 && page > 1) {
        return notFound();
    }

    const totalPages = Math.ceil(BLOG_POSTS.length / POSTS_PER_PAGE);

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
                                    <Link href="/blog" className="hover:text-orange-500 transition-colors font-bold">Blog</Link>
                                    <span className="mx-2">/</span>
                                    <span className="current opacity-80">Page {page}</span>
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
                                {currentPosts.map((post) => (
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
                                    <Button
                                        href="/blog"
                                        variant={page === 1 ? "primary" : "ghost"}
                                        className={`w-10 h-10 flex items-center justify-center font-bold rounded transition-colors px-0 ${page !== 1 ? "bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white" : ""}`}
                                    >
                                        1
                                    </Button>

                                    {page > 3 && <span className="px-2 text-gray-400">...</span>}

                                    {/* Pages around current page */}
                                    {Array.from({ length: 5 }, (_, i) => page - 2 + i)
                                        .filter(p => p > 1 && p < 61)
                                        .map(p => (
                                            <Button
                                                key={p}
                                                href={`/blog/page/${p}`}
                                                variant={p === page ? "primary" : "ghost"}
                                                className={`w-10 h-10 flex items-center justify-center font-bold rounded transition-colors px-0 ${p !== page ? "bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white" : ""}`}
                                            >
                                                {p}
                                            </Button>
                                        ))
                                    }

                                    {page < 58 && <span className="px-2 text-gray-400">...</span>}

                                    <Button
                                        href="/blog/page/61"
                                        variant={page === 61 ? "primary" : "ghost"}
                                        className={`w-10 h-10 flex items-center justify-center font-bold rounded transition-colors px-0 ${page !== 61 ? "bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white" : ""}`}
                                    >
                                        61
                                    </Button>
 
                                    {page < 61 && (
                                        <Button
                                            href={`/blog/page/${page + 1}`}
                                            variant="ghost"
                                            className="w-10 h-10 flex items-center justify-center bg-gray-50 text-[#14133b] hover:bg-orange-500 hover:text-white transition-colors rounded px-0"
                                        >
                                            <span className="sr-only">Next</span>
                                            <span className="font-bold">→</span>
                                        </Button>
                                    )}
                                </nav>
                            </div>
                        </div>

                        {/* Sidebar Column (Right) */}
                        <aside className="w-full lg:w-1/4 px-4 mt-16 lg:mt-0">
                            <div className="sticky top-24 space-y-12">
                                <div className="widget search-widget">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Search</h4>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search posts..."
                                            className="w-full bg-gray-50 border border-gray-100 py-3 pl-4 pr-12 rounded-lg outline-none focus:border-orange-500 transition-colors"
                                        />
                                        <Button 
                                            variant="ghost" 
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                                        >
                                            <Search size={20} />
                                        </Button>
                                    </div>
                                </div>

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

                                <div className="widget follow-social">
                                    <h4 className="text-[20px] font-bold text-[#14133b] mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-orange-500">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-80 transition-opacity"><Facebook size={20} /></a>
                                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:opacity-80 transition-opacity"><Twitter size={20} /></a>
                                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:opacity-80 transition-opacity"><Linkedin size={20} /></a>
                                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:opacity-80 transition-opacity"><Youtube size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
