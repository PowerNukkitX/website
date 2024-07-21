import React from 'react';
import {AnvilIcon, CodeIcon, CommunityIcon, PerformanceIcon, PluginIcon, ServerIcon} from "@/components/icons";
import {motion, useMotionTemplate} from 'framer-motion';
import {useColor} from "@/components/ColorContext";

const FeatureHome: React.FC = () => {
    const features = [
        {
            Icon: ServerIcon,
            title: "Cross-Platform Compatibility",
            description: "PowerNukkitX supports cross-platform compatibility, allowing you to host Bedrock servers seamlessly on various operating systems.",
        },
        {
            Icon: PerformanceIcon,
            title: "Optimized Performance",
            description: "Experience superior performance with PowerNukkitX. Optimized for efficiency, it ensures smooth gameplay experiences for all players.",
        },
        {
            Icon: PluginIcon,
            title: "Extensive Plugin Support",
            description: "Customize and expand your server functionalities with a wide range of plugins supported by PowerNukkitX, providing endless possibilities.",
        },
        {
            Icon: CodeIcon,
            title: "JavaScript Plugin Development",
            description: "Create custom plugins for your server using JavaScript. PowerNukkitX offers extensive support for JavaScript plugins, enabling you to enhance your server with limitless possibilities.",
        },
        {
            Icon: AnvilIcon,
            title: "Vanilla features",
            description: "Leverage PowerNukkitX's CustomItem, CustomBlock, and CustomEnchantment systems to introduce unique items, blocks, and enchantments to your server, expanding gameplay options for your players.",
        },
        {
            Icon: CommunityIcon,
            title: "Community-Driven Development",
            description: "Join a thriving community of developers and users contributing to the continuous improvement and development of PowerNukkitX.",
        },
    ];

    const { color } = useColor();
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #121212 50%, ${color})`;

    return (
        <motion.section
            style={{
                backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                marginTop: "0",
                paddingTop: "5vh",
                transition: 'background-image 1s ease-in-out'
            }}
            animate={{scaleY: -1}}
            transition={{duration: 0}}
            id={"features"}
        >
            <div className="mx-auto max-w-screen-xl gap-12 px-4 py-36 md:px-8" style={{transform: 'scaleY(-1)'}}>
                <div className="mx-auto max-w-4xl space-y-5 text-center">
                    <h2 className="mx-auto text-4xl md:text-6xl ">
                            <span
                                className="bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold text-transparent">
                                Looking for a powerful server solution?
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
                                    <item.Icon className={"size-11"}/>
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
        </motion.section>
    );
};

export default FeatureHome;