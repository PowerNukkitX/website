import { Image } from "@nextui-org/react";

export const HeroHome = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Create your own server with&nbsp;
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
                            PowerNukkitX
                        </span>
                    </h1>
                    <p className="text-lg sm:text-lg lg:text-xl">
                        Unleash the potential of your Minecraft server with PowerNukkitX, where&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                            performance&nbsp;
                        </span>
                        meets&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                            flexibility
                        </span>,
                        crafting an unparalleled gaming experience for you and your players.
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <Image
                        width={1700}
                        height={1400}
                        alt="PowerNukkitX World generator"
                        src="/coverPNX.png"
                    />
                </div>
            </div>
        </section>
    );
};