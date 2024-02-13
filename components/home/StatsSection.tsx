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
        <section className="py-14 bg-content1">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-3xl sm:text-4xl bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold text-transparent">
                        Unlock the Full Potential of Minecraft with PowerNukkitX
                    </h3>
                    <p className="mt-3">
                        PowerNukkitX revolutionizes the Minecraft experience, offering both casual players and server administrators a gateway to unparalleled gameplay enhancements. Dive into a world of limitless creativity and adventure, where every download brings you closer to a community.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {stats.map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-emerald-500 to-emerald-800 shadow-lg rounded-lg p-6 text-center">
                            <h4 className="text-3xl font-semibold">{item.data}</h4>
                            <p className="mt-3 text-lg font-medium">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
