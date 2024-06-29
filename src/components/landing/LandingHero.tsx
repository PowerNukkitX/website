import React, {useState} from "react";
import {Button, Chip} from "@nextui-org/react";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {DownloadIcon, FlameIcon, GithubIcon, StarIcon} from "@/components/icons";
import {useGithub} from "@/libs/github";

const LandingHero = () => {

    const [showChip] = useState(true);
    const [chipText] = useState("PowerNukkitX version 2.0");

    const { data: stars, error } = useGithub();

    if (error) {
        console.error('An error occurred:', error);
    }

    return (
        <>
            <section id={"home"}>
                <div className="mx-auto max-w-screen-xl gap-12 px-8 md:px-8">
                    <div className="mx-auto max-w-4xl space-y-5 text-center">
                        {showChip && (
                            <Chip
                                variant="dot"
                                color="success"
                                size="lg"
                                radius="sm"
                            >
                                {chipText}
                            </Chip>
                        )}
                        <h2 className="mx-auto text-4xl font-bold md:text-4xl lg:text-8xl">
                            Create your own server with {""}
                            <span
                                className="bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700 bg-clip-text text-transparent">
                    PowerNukkitX
                </span>
                        </h2>
                        <p className="mx-auto max-w-1xl text-2xl text-white">
                            Unleash the potential of your Minecraft server with PowerNukkitX, where performance meets flexibility, crafting an unparalleled gaming experience for you and your players.
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Button
                                className={"inline-flex w-48 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-success-300 hover:bg-success-400 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-emerald-500"}
                                size="md"
                                startContent={<DownloadIcon className="group-hover:text-success-300 transition-colors duration-200 ease-in-out"/>}
                                as={Link}
                                href="https://github.com/PowerNukkitX/PowerNukkitX/releases"
                            >
                                Download
                            </Button>
                            <Button
                                className={"inline-flex w-48 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-success-300 hover:bg-success-400 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-emerald-500"}
                                startContent={<FlameIcon className="group-hover:text-orange-400 transition-colors duration-200 ease-in-out"/>}
                                as={Link}
                                href="/#features"
                            >
                                Check out features
                            </Button>
                        </div>
                        <Button as={Link} href={siteConfig.links.github}
                                className={"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"}>
                            <GithubIcon></GithubIcon>
                            <span className="text-white">Star on Github</span>
                            <span
                                className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out"
                            >
							<StarIcon className=""/>
							<span className="text-white ml-2">{stars?.stargazers_count ?? 0}</span>
						        </span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingHero;
