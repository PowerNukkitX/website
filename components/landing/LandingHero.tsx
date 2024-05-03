import React, {useState} from "react";
import { Button, Chip} from "@nextui-org/react";
import { FaArrowDown, FaPlus } from "react-icons/fa6";
import Link from "next/link";

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
                                className="bg-gradient-to-t from-success-300 to-success-500 bg-clip-text text-transparent">
                    PowerNukkitX
                </span>
                        </h2>
                        <p className="mx-auto max-w-1xl text-2xl text-emerald-100">
                            Unleash the potential of your Minecraft server with PowerNukkitX, where performance meets flexibility, crafting an unparalleled gaming experience for you and your players.
                        </p>
                        <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Button
                                color="success"
                                size="md"
                                startContent={<FaPlus/>}
                                as={Link}
                                href="https://github.com/PowerNukkitX/PowerNukkitX"
                            >
                                Try it out
                            </Button>
                            <Button
                                color="success"
                                size="md"
                                startContent={<FaArrowDown/>}
                                as={Link}
                                href="/#features"
                            >
                                Check out features
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingHero;
