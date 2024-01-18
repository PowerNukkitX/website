import { Image } from "@nextui-org/react";

export const HeroHome = () => {
    return (
        <section className="hero-section px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-25">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 justify-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Create your own server with{" "}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500 font-bold">
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
                    </div>

                    <div className="relative overflow-hidden w-full h-full">
                        <Image
                            width={2000}  // Ajustez la largeur selon vos besoins
                            height={1200} // Ajustez la hauteur selon vos besoins
                            alt="PowerNukkitX World generator"
                            src="/coverPNX.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};