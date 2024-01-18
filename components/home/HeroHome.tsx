import { Button, Image, Spacer } from "@nextui-org/react";
import { DownloadIcon } from "@/components/icons";

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

const handleConfetti = async () => {
    const confetti = (await import("canvas-confetti")).default;
    confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.5, x: 0.2 },
    });
};

export const HeroHome = () => {
    const handleDownloadClick = async () => {
        handleConfetti(); // Trigger confetti on button click
        setTimeout(() => {
            window.location.href = "https://github.com/PowerNukkitX/PowerNukkitX/releases";
        }, 2000);
    };

    return (
        <section className="hero-section px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-25">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 justify-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Create your own server with{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500 font-bold">
                PowerNukkitX
              </span>
                        </h1>
                        <p className="text-lg lg:text-xl">
                            Unleash the potential of your Minecraft server with PowerNukkitX, where{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                performance
              </span>{" "}
                            meets{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                flexibility
              </span>
                            , crafting an unparalleled gaming experience for you and your players.
                        </p>
                        <Spacer y={8} />
                        <div className="space-x-2 md:space-x-4">
                            <Button
                                variant="shadow"
                                radius="sm"
                                color="primary"
                                disableRipple
                                onPress={handleDownloadClick}
                                startContent={<DownloadIcon size={10} />}
                            >
                                Download
                            </Button>
                            <Button variant="faded" radius="sm" color="default" disableRipple>
                                Documentation
                            </Button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden w-full h-full">
                        <Image
                            width={2000}
                            height={1200}
                            alt="PowerNukkitX World generator"
                            src="/coverPNX.png"
                            className="rounded-md shadow-md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};