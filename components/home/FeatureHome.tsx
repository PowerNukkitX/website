import React from 'react';
import FeatureCard from "@/components/home/FeatureCard";
import {CPUIcon, JavaIcon, VanillaIcon} from "@/components/icons";

const FeatureHome: React.FC = () => {
    const features = [
        {
            Icon: CPUIcon,
            title: "High performance",
            subtitle: "Multi-core parallel computing + Graal JIT",
            description: "The parallel processing capability of PNX enables it to make full use of multi-core CPU. You don&apos;t need to pursue high CPU frequency, and you can enjoy the huge performance improvement brought by multi-core CPU. At the same time, we use the world&apos;s leading graaljit compiler to dynamically convert java code into high-quality machine code most suitable for your CPU, so that Java code has high performance comparable to C++."
        },
        {
            Icon: VanillaIcon,
            title: "Vanilla features",
            subtitle: "All blocks, items, recipes, etc.",
            description: "PNX supports more vanilla features, including but not limited to all blocks, items, recipes, redstone, vanilla commands, water-logged blocks, etc. PNX is committed to providing a better survival mode game experience."
        },
        {
            Icon: JavaIcon,
            title: "Massive plugins",
            subtitle: "Thousands of plugins for you to choose",
            description: "PNX retains good plugin compatibility while adding many vanilla features, and can directly run Java plugins written targeting nukkitx and PowerMockito. In addition, PNX also implements the JSAPI of LiteLoader based on the built-in JS engine, which enables LLSE plugins to run on PNX with only a few changes."
        }
    ];

    return (
        <section className="feature-home w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 items-center">
                    <div className="flex flex-col justify-center space-y-8 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
                                Discover PowerNukkitX&apos;s features
                            </h1>
                            <p className="dark max-w-[600px] md:text-xl dark:text-zinc-100 light:text-black mx-auto">
                                Our features are designed to optimize your productivity and simplify your work
                                processes, because your server deserves the <span className="text-focus font-bold bg-clip-text text-transparent bg-blue-600">best</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-20 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            Icon={feature.Icon}
                            featureTitle={feature.title}
                            featureSubtitle={feature.subtitle}
                            featureDescription={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureHome;