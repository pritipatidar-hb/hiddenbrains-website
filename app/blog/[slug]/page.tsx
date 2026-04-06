import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import BlogFrame from "@/components/blog/BlogFrame";
import { Metadata } from 'next';

interface BlogPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params;
    const title = slug
        .replace(/-/g, ' ')
        .replace('.html', '')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${title} | Hidden Brains UK Blog`,
        description: `Read our latest insights on ${title}.`,
    };
}

export default async function BlogDetailPage(props: BlogPageProps) {
    const params = await props.params;
    const { slug } = params;

    // Verify if the blog file exists
    const filePath = path.join(process.cwd(), "assests", slug);

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    return (
        <div className="w-full bg-white flex flex-col">
            <main className="flex-1 w-full bg-white">
                <BlogFrame src={`/api/blog/${slug}`} />
            </main>
        </div>
    );
}
