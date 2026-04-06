import React from 'react';
import { VEHICLE_TRACKING_ALERTS } from '../../../lib/vehicle-tracking-data';

export const AlertsSection = () => {
    return (
        <section className="py-[50px] bg-white">
            <div className="container px-6 mx-auto max-w-7xl">
                <div className=" mx-auto text-center mb-[30px]">
                    <h2 className="text-[36px] font-semibold text-[#14133b] mb-[18px]">
                        Our Vehicle Tracking and Management Solution is designed to offer complete notifications to ensure vehicle and trip safety.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {VEHICLE_TRACKING_ALERTS.map((item, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group border border-slate-100 flex items-center gap-6"
                        >
                            <div className="w-14 h-14 bg-white text-orange-600 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
