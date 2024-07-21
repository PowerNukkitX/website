import Layout from "@/layouts/layout";
import {Button, Link} from "@nextui-org/react";
import {siteConfig} from "@/config/site";
import {DocsIcon, GithubIcon} from "@/components/icons";
import React from "react";

export default function Index() {

    return (
        <Layout>
            <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 h-screen">
                <div className="mx-auto mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold md:text-4xl lg:text-8xl">Download <span
                        className="text-success">PowerNukkitX</span></h2>
                    <p className="text-gray-400 text-2xl">Download PowerNukkitX, our Minecraft server software Bedrock,
                        which implements an API for creating its own plugins </p>
                </div>

                <div className="flex justify-center gap-x-4 mx-auto">
                    <Button
                        as={Link}
                        href="https://github.com/PowerNukkitX/PowerNukkitX/releases"
                        className="inline-flex items-center justify-center sm:w-auto flex-grow h-12 px-6 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
                    >
                        <GithubIcon/>
                        <span className="text-white">Download on Github</span>
                    </Button>

                    <Button
                        as={Link}
                        href={siteConfig.links.docs}
                        className="inline-flex items-center justify-center sm:w-auto flex-grow h-12 px-6 group text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
                    >
                        <DocsIcon/>
                        <span className="text-white">Read Docs</span>
                    </Button>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4 w-auto max-h-full mx-auto">
                    <div
                        className="h-96 w-full hover:opacity-85 bg-manuel-bg bg-cover bg-center rounded-lg cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2">
                        <Link href="/"
                              className="flex flex-col items-center justify-center h-full text-white">
                            <h3 className="text-6xl tracking-tight font-bold text-success-400">Manuel</h3>
                            <p className="text-white font-bold pt-64">Read the Manuel: Learn More</p>
                        </Link>
                    </div>
                    <div
                        className="h-96 w-full hover:opacity-85 bg-cli-bg bg-cover bg-center rounded-lg shadow-lg cursor-pointer ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2">
                        <Link href="/"
                              className="flex flex-col items-center justify-center h-full text-white z-10">
                            <h3 className="text-6xl tracking-tight font-bold text-success-400">CLI</h3>
                            <p className="text-white font-bold pt-64">Use CLI: Simpler and More Efficient</p>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
};