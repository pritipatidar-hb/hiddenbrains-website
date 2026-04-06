'use client';
import React, { useState, useEffect } from 'react';

export default function BlogFrame({ src }: { src: string }) {
    const [height, setHeight] = useState('100vh');

    useEffect(() => {
        const handleMessage = (e: MessageEvent) => {
            if (e.data && e.data.height) {
                setHeight(`${e.data.height}px`);
            }
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <div className="w-full bg-white relative overflow-hidden">
            <iframe
                src={src}
                className="w-full border-none bg-white lg:mt-[0px]"
                style={{ height, display: 'block' }}
                title="Blog Content"
                loading="lazy"
            />
        </div>
    );
}
