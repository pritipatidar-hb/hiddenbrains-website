import { Button } from '@/components/common/Button';

interface HiringModel {
    title: string;
    price?: string | number;
    features: string[];
    active?: boolean;
}

interface HiringModelsSectionProps {
    title?: string;
    description?: string;
    models: HiringModel[];
    className?: string;
    bgClass?: string;
    ctaHref?: string;
}

export const HiringModelsSection = ({
    title = "Hiring Models",
    description,
    models,
    className = "",
    bgClass = "bg-[#f8faff]",
    ctaHref = "/contact"
}: HiringModelsSectionProps) => {
    return (
        <section className={`py-[60px] md:py-[50px] ${bgClass} ${className}`}>
            <div className="container mx-auto px-6 max-w-7xl text-center">
                <h2 className="text-[26px] md:text-[36px] font-semibold text-[#14133b] mb-[18px]">
                    {title}
                </h2>
                {description && (
                    <p className="text-[#6a7c92] text-[16px] font-normal mb-12  mx-auto leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-4">
                    {models.map((model, index) => (
                        <article
                            key={index}
                            className={`p-8 md:p-10 rounded-[32px] border flex flex-col transition-all duration-500 hover:-translate-y-2 ${model.active
                                ? 'border-[#f29111] bg-white shadow-[0_20px_50px_rgba(242,145,17,0.15)] relative lg:scale-105 z-10'
                                : 'border-gray-100 bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]'
                                }`}
                        >
                            {/* Most Popular Badge for Active State */}
                            {model.active && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f29111] text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-[#14133b] mb-4">{model.title}</h3>

                            {model.price && (
                                <div className="text-4xl font-black text-[#14133b] mb-4">
                                    <span className="text-3xl font-bold align-top leading-none text-[#f29111]">$</span>
                                    {typeof model.price === 'string' && model.price.startsWith('$') ? model.price.substring(1) : model.price}
                                    <span className="text-base font-medium text-[#6a7c92] ml-1">/hr</span>
                                </div>
                            )}

                            <ul className="text-left space-y-4 mb-10 flex-grow">
                                {model.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-4 text-[15px] group">
                                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${model.active ? 'bg-[#f29111]/10 text-[#f29111]' : 'bg-green-50 text-green-600'
                                            }`}>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                        <span className="text-[#6a7c92] leading-tight group-hover:text-[#14133b] transition-colors">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                href={ctaHref}
                                variant={model.active ? "primary" : "outline"}
                                fullWidth
                                className={`py-4 rounded-2xl font-bold transition-all duration-300 text-center shadow-md hover:shadow-xl ${!model.active ? "border-2 border-[#f29111] !text-[#f29111] hover:bg-[#f29111] hover:text-white" : ""}`}
                            >
                                Hire Now
                            </Button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
