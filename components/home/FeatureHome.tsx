import React from 'react';
import {FaCode, FaCubes, FaRocket, FaServer, FaToolbox, FaUsersCog} from "react-icons/fa";

const FeatureHome: React.FC = () => {
    const features = [
        {
            Icon: FaServer,
            title: "Cross-Platform Compatibility",
            description: "PowerNukkitX supports cross-platform compatibility, allowing you to host Bedrock servers seamlessly on various operating systems.",
        },
        {
            Icon: FaRocket,
            title: "Optimized Performance",
            description: "Experience superior performance with PowerNukkitX. Optimized for efficiency, it ensures smooth gameplay experiences for all players.",
        },
        {
            Icon: FaToolbox,
            title: "Extensive Plugin Support",
            description: "Customize and expand your server functionalities with a wide range of plugins supported by PowerNukkitX, providing endless possibilities.",
        },
        {
            Icon: FaCode,
            title: "JavaScript Plugin Development",
            description: "Create custom plugins for your server using JavaScript. PowerNukkitX offers extensive support for JavaScript plugins, enabling you to enhance your server with limitless possibilities.",
        },
        {
            Icon: FaCubes,
            title: "Vanilla features",
            description: "Leverage PowerNukkitX's CustomItem, CustomBlock, and CustomEnchantment systems to introduce unique items, blocks, and enchantments to your server, expanding gameplay options for your players.",
        },
        {
            Icon: FaUsersCog,
            title: "Community-Driven Development",
            description: "Join a thriving community of developers and users contributing to the continuous improvement and development of PowerNukkitX.",
        },
    ];

    return (
        <section id="features">
            <div className="mx-auto max-w-screen-xl gap-12 px-4 py-36 md:px-8">
                <div className="mx-auto max-w-4xl space-y-5 text-center">
                    <h2 className="mx-auto text-4xl md:text-6xl ">
                        <span
                            className="bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold text-transparent">
                            Looking for powerful server solutions ?
                        </span>{" "}
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl">
                        PowerNukkitX provides{" "}
                        <span className="font-bold">
                            robust features
                        </span>{" "}
                        for your Bedrock server needs.
                    </p>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="space-y-3 rounded-lg border border-content2 bg-content1 p-4"
                            >
                                <div className="pb-3 text-success">
                                    <item.Icon size={25}/>
                                </div>
                                <h4 className="text-lg font-semibold text-success">
                                    {item.title}
                                </h4>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FeatureHome;
