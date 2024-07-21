import React, {useEffect, useState} from "react";
import {Stars} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {Button, Chip} from "@nextui-org/react";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {FlameIcon, GithubIcon, StarIcon} from "@/components/icons";
import {useGithub} from "@/libs/github";
import {animate, motion, useMotionTemplate, useMotionValue,} from "framer-motion";

const COLORS_TOP = ["#22c55e", "#16a34a", "#15803d", "#166534"];

const LandingHero = () => {
    const [showChip] = useState(true);
    const [chipText] = useState("PowerNukkitX version 2.0");

    const { data: stars, error } = useGithub();

    if (error) {
        console.error('An error occurred:', error);
    }

    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

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
            }}
            className="relative overflow-hidden px-4 py-16 text-gray-200"
            id="home"
        >
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2}/>
                </Canvas>
            </div>
            <div
                className="z-10 mx-auto max-w-screen-xl gap-12 px-8 md:px-8 flex flex-col justify-center items-center h-full">
                <div className="mx-auto max-w-4xl text-center">
                    {showChip && (
                        <Chip
                            variant="dot"
                            color="success"
                            size="md"
                            radius="sm"
                        >
                            {chipText}
                        </Chip>
                    )}
                    <h2 className="mx-auto mt-4 text-4xl font-bold md:text-4xl lg:text-8xl">
                        Create your own server with{" "}
                        <span
                            className="bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 bg-clip-text text-transparent">
                            PowerNukkitX
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-xl lg:text-xl text-white">
                        Unleash the potential of your Minecraft server with PowerNukkitX, where performance meets
                        flexibility, crafting an unparalleled gaming experience for you and your players.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 mt-4 sm:flex-row sm:justify-center">
                        <Button
                            className={"inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 py-2 group bg-success-300 hover:bg-success-400 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-emerald-500"}
                            startContent={<FlameIcon
                                className="group-hover:text-danger-400 transition-colors duration-200 ease-in-out"/>}
                            as={Link}
                            href="/#features"
                        >
                            Check out features
                        </Button>
                        <Button
                            as={Link}
                            href={siteConfig.links.github}
                            className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-6 group rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
                        >
                            <GithubIcon/>
                            <span className="text-white">Star on Github</span>
                            <span
                                className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
                                <StarIcon className=""/>
                                <span className="text-white ml-2">
                                    {stars?.stargazers_count ?? 0}
                                </span>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default LandingHero;
