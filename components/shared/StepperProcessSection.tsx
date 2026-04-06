import React from 'react';

export interface StepperItem {
    step: string;
    title: string;
    content: string;
}

export interface StepperProcessSectionProps {
    title: string;
    description: string;
    items: StepperItem[];
}

const circleColors = [
    'bg-[#fff7f0]', // 1
    'bg-[#f0f9ff]', // 2
    'bg-[#f5f3ff]', // 3
    'bg-[#fffbeb]', // 4
    'bg-[#fef2f2]', // 5
];

const Arrow = () => (
    <svg
        className="absolute top-0 left-1/2 w-full h-12 -translate-y-4 hidden md:block"
        viewBox="0 0 100 20"
        fill="none"
    >
        <path
            d="M5,15 Q50,0 95,15"
            stroke="#14133b"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.3"
            markerEnd="url(#arrowhead)"
        />
        <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#14133b" opacity="0.3" />
            </marker>
        </defs>
    </svg>
);

export const StepperProcessSection: React.FC<StepperProcessSectionProps> = ({ title, description, items }) => {
    return (
        <section className="py-[50px] bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <div className=" mx-auto mb-16">
                    <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                        {title}
                    </h2>
                    <p className="text-[#6a7c92] text-lg font-normal leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-y-0 relative">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group relative px-4">
                            {/* Arrow between items */}
                            {index < items.length - 1 && (
                                <div className="absolute left-[60%] top-6 w-[80%] z-0">
                                    <Arrow />
                                </div>
                            )}

                            {/* Circle with Number */}
                            <div className={`w-[80px] h-[80px] md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 z-10 transition-transform duration-300 group-hover:scale-110 ${circleColors[index % circleColors.length]}`}>
                                <span className="text-3xl md:text-4xl font-bold text-[#14133b]">
                                    {item.step}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="max-w-[200px]">
                                <h3 className="text-xl font-bold text-[#14133b] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[#6a7c92] text-[14px] leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
