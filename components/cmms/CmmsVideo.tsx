"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoModal } from "../shared/VideoModal";

export const CmmsVideo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div
                className="relative overflow-hidden shadow-2xl group cursor-pointer mt-8"
                onClick={() => setIsModalOpen(true)}
            >
                <Image
                    src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-d591ddb/www.hiddenbrains.co.uk/wp-content/uploads/2023/03/CMMS-HB-YouTube-Thumbnail_page.webp"
                    alt="CMMS Solutions HiddenBrains Video"
                    width={871}
                    height={490}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform shadow-lg">
                        <Image
                            src="https://cdn-fdiob.nitrocdn.com/HbitivJBuLhibWNKENaXSPjRdSdrKXLC/assets/images/optimized/rev-d591ddb/www.hiddenbrains.co.uk/wp-content/uploads/2023/03/collabration-video-icon.webp"
                            alt="Play Video Icon"
                            width={35}
                            height={35}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl="https://www.youtube.com/watch?v=RewqM1WFJzI"
            />
        </>
    );
};
