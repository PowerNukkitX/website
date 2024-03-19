import React from 'react';
import {Spacer} from "@nextui-org/react";

const StatsSection = () => {
    const stats = [
        {
            data: "213",
            title: "Totals Users"
        },
        {
            data: "899+",
            title: "Downloads"
        },
        {
            data: "79",
            title: "Servers using PowerNukkitX"
        },
    ];

    return (
        <section className="py-14 p-4 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]">
            <div
                className="shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
                <div className="text-center">
                    <h3 className="text-4xl font-extrabold text-white">51 <span className="text-success">Servers</span></h3>
                    <p className="text-gray-300 font-semibold mt-3">are running PowerNukkitX</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-extrabold text-white">8 <span className="text-success">Players</span></h3>
                    <p className="text-gray-300 font-semibold mt-3">are playing on PowerNukkitX</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-extrabold text-white">384 <span className="text-success">Github Star</span></h3>
                    <p className="text-gray-300 font-semibold mt-3">on Github</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
