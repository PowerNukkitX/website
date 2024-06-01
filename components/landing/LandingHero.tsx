import React, {useState} from "react";
import { Button, Chip} from "@nextui-org/react";
import { FaArrowDown, FaPlus } from "react-icons/fa6";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {CubeIcon, FlameIcon, GithubIcon} from "@/components/icons";

interface Release {
    id: number;
    tag_name: string;
    assets: { browser_download_url: string }[];
    body: string;
}

const LandingHero = () => {

    const [showChip, setShowChip] = useState(true);
    const [chipText, setChipText] = useState("PowerNukkitX version 2.0");

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
                        <p className="mx-auto max-w-1xl text-2xl text-emerald-100">
                            Unleash the potential of your Minecraft server with PowerNukkitX, where performance meets flexibility, crafting an unparalleled gaming experience for you and your players.
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Button
                                className={"inline-flex w-48 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-success-300 hover:bg-success-400 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-emerald-500"}
                                size="md"
                                startContent={<CubeIcon/>}
                                as={Link}
                                href="https://github.com/PowerNukkitX/PowerNukkitX"
                            >
                                Try it out
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
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" className="lucide lucide-star"><polygon
                                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
							<span className="text-white ml-2">612</span>
						        </span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingHero;
