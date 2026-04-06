"use client";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useEffect, useState } from "react";
import { LottieAnimationProps } from '@/types/components/shared/LottieAnimation';

export const LottieAnimation = ({ animationUrl, animationData, className }: LottieAnimationProps) => {
    const [data, setData] = useState(animationData);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (animationUrl && !animationData) {
            fetch(animationUrl)
                .then((res) => {
                    if (!res.ok) throw new Error(`Failed to fetch Lottie: ${res.status}`);
                    return res.json();
                })
                .then((json) => setData(json))
                .catch((err) => {
                    console.error("Error loading lottie animation:", err);
                    setError(true);
                });
        }
    }, [animationUrl, animationData]);

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-slate-100 rounded-lg text-slate-400 text-sm ${className}`}>
                Failed to load animation
            </div>
        );
    }

    if (!data) {
        return <div className={`animate-pulse bg-slate-100 rounded-lg ${className}`}></div>;
    }

    return (
        <div className={className}>
            <Lottie animationData={data} loop={true} />
        </div>
    );
};
