"use client";
import React from "react";

export const SOSHowItWorksAnimation = () => {
    return (
        <div className="w-full max-w-6xl mx-auto py-10 px-4">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_20px_60px_rgba(2,6,23,0.08)] p-6 md:p-10 overflow-hidden">
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/7] md:aspect-[21/8]">
                    {/* Connector lines (dotted) */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1100 420"
                        preserveAspectRatio="none"
                    >
                        {/* Left (user) to map/pin */}
                        <path
                            d="M 210 210 C 310 210, 350 165, 420 150"
                            stroke="#f59e0b"
                            strokeWidth="3"
                            strokeDasharray="6 8"
                            fill="none"
                            opacity="0.75"
                        />
                        {/* Map/pin to security personnel (top right) */}
                        <path
                            d="M 560 150 C 700 120, 780 95, 900 95"
                            stroke="#06b6d4"
                            strokeWidth="3"
                            strokeDasharray="6 8"
                            fill="none"
                            opacity="0.75"
                        />
                        {/* Map/pin to control center (bottom middle) */}
                        <path
                            d="M 520 190 C 520 250, 520 285, 520 315"
                            stroke="#06b6d4"
                            strokeWidth="3"
                            strokeDasharray="6 8"
                            fill="none"
                            opacity="0.75"
                        />
                        {/* Control center to circle of care (bottom right) */}
                        <path
                            d="M 620 330 C 740 350, 820 350, 900 330"
                            stroke="#06b6d4"
                            strokeWidth="3"
                            strokeDasharray="6 8"
                            fill="none"
                            opacity="0.75"
                        />
                    </svg>

                    {/* Left: user */}
                    <div className="absolute left-[2%] top-[28%] w-[24%] min-w-[190px] flex items-center gap-4">
                        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center">
                            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z"
                                    fill="#ef4444"
                                    opacity="0.22"
                                />
                                <path
                                    d="M4 22a8 8 0 0 1 16 0"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <div className="text-left">
                            <div className="text-sm md:text-base font-semibold text-slate-900 leading-snug">
                                Mr. Rob is in trouble &amp;
                                <br />
                                pressed SOS Button
                            </div>
                        </div>
                    </div>

                    {/* Middle: map with pin */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[38%] min-w-[240px]">
                        <div className="relative bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden h-[120px] md:h-[150px]">
                            {/* faux map lines */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 210" aria-hidden="true">
                                <g stroke="#94a3b8" strokeWidth="1.2" opacity="0.6" fill="none">
                                    <path d="M10 150 C 80 120, 140 110, 210 120 C 290 132, 330 90, 510 60" />
                                    <path d="M30 60 C 140 90, 220 90, 300 70 C 380 50, 430 90, 520 110" />
                                    <path d="M0 110 C 120 140, 180 160, 260 170 C 340 182, 420 170, 520 150" />
                                    <path d="M70 200 C 150 170, 220 150, 320 150 C 420 150, 470 190, 520 200" />
                                    <path d="M140 10 C 160 50, 200 70, 250 90 C 320 120, 390 120, 470 120" />
                                </g>
                            </svg>

                            {/* location pin */}
                            <div className="absolute left-[55%] top-[38%] -translate-x-1/2 -translate-y-1/2">
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 22s7-4.438 7-11a7 7 0 1 0-14 0c0 6.562 7 11 7 11Z"
                                        fill="#ef4444"
                                        opacity="0.9"
                                    />
                                    <circle cx="12" cy="11" r="2.5" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Bottom middle: Control center */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[3%] w-[36%] min-w-[240px] text-center">
                        <div className="mx-auto w-fit">
                            <div className="flex items-end justify-center gap-3">
                                {/* standing person */}
                                <div className="h-14 w-8 bg-slate-200 rounded-full relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-300 rounded-full" />
                                </div>
                                {/* desk + monitors */}
                                <div className="relative">
                                    <div className="flex gap-2 mb-2 justify-center">
                                        <div className="w-10 h-8 bg-slate-200 rounded-md" />
                                        <div className="w-10 h-8 bg-slate-200 rounded-md" />
                                        <div className="w-10 h-8 bg-slate-200 rounded-md" />
                                    </div>
                                    <div className="w-44 h-6 bg-slate-300 rounded-md" />
                                    <div className="w-44 h-3 bg-slate-200 rounded-md mt-1" />
                                </div>
                                {/* seated person */}
                                <div className="h-12 w-8 bg-slate-200 rounded-full relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-slate-300 rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 text-sm md:text-base font-semibold text-slate-900 leading-snug">
                            Control Center
                            <br />
                            <span className="font-normal text-slate-600">
                                Monitor all requests and take actions
                            </span>
                        </div>
                    </div>

                    {/* Top right: Nearest security personnel + steps */}
                    <div className="absolute right-[2%] top-[6%] w-[28%] min-w-[220px] text-center">
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path
                                        d="M4 21V5a2 2 0 0 1 2-2h6v18H4Z"
                                        fill="#94a3b8"
                                        opacity="0.25"
                                    />
                                    <path
                                        d="M12 21V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12H12Z"
                                        fill="#94a3b8"
                                        opacity="0.25"
                                    />
                                    <path
                                        d="M4 21V5a2 2 0 0 1 2-2h6v18M12 21V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"
                                        stroke="#64748b"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path d="M7 7h2M7 11h2M7 15h2M15 11h2M15 15h2" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="text-sm md:text-base font-semibold text-slate-900 leading-tight">
                                Nearest
                                <br />
                                Security personnel
                            </div>
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3">
                            {[
                                { label: "Received\nNotification" },
                                { label: "Accept\nRequest" },
                                { label: "Take\nAction" },
                            ].map((step, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2">
                                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="#0ea5e9" strokeWidth="2" />
                                            <path
                                                d="M9.5 7.5h5M9.5 10.5h5M9.5 13.5h3.5"
                                                stroke="#0ea5e9"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            />
                                            {idx >= 1 && (
                                                <path
                                                    d="M9.3 16.2l1.6 1.6 3.8-3.9"
                                                    stroke="#0ea5e9"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            )}
                                        </svg>
                                    </div>
                                    <div className="text-[11px] md:text-xs font-medium text-slate-700 whitespace-pre-line leading-snug">
                                        {step.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom right: Circle of care */}
                    <div className="absolute right-[4%] bottom-[10%] w-[22%] min-w-[180px] text-center">
                        <div className="mx-auto w-20 h-20 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                            <svg width="46" height="46" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path
                                    d="M7.5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                                    fill="#f97316"
                                    opacity="0.35"
                                />
                                <path
                                    d="M16.5 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                                    fill="#3b82f6"
                                    opacity="0.35"
                                />
                                <path
                                    d="M12 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    fill="#ef4444"
                                    opacity="0.25"
                                />
                                <path
                                    d="M3.8 20a4.4 4.4 0 0 1 7.4-2.9"
                                    stroke="#64748b"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M20.2 20a4.4 4.4 0 0 0-7.4-2.9"
                                    stroke="#64748b"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M8 20a4.5 4.5 0 0 1 8 0"
                                    stroke="#64748b"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className="mt-3 text-sm md:text-base font-semibold text-slate-900">
                            Circle of Care
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

