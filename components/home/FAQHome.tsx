import React from 'react';
import {Accordion, AccordionItem, Link, Spacer} from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa6";
import {FaDiscord} from "react-icons/fa";

const FAQSection = () => {
    return (
        <section id="faqs">
            <Spacer y={24} />
            <div className="mx-auto max-w-screen-xl gap-12 px-4 md:px-8">
                <div className="mx-auto max-w-4xl space-y-5 text-center">
                    <h2 className="mx-auto text-4xl md:text-6xl">
							<span
                                className="bg-gradient-to-t from-success-300 to-success-500 bg-clip-text text-transparent">
								If you have any queries or concerns,
							</span>{" "}
                        <span className="underline decoration-success">
								rest assured
							</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl">
                        we&apos;ve compiled answers to the most common
                        questions right here.
                    </p>
                </div>
                <div className="mx-auto max-w-screen-xl gap-12 px-4 py-28 md:px-8">
                    <div className="bg-content1 rounded-xl px-9 py-9">
                        <Accordion variant="light">
                            <AccordionItem
                                key="1"
                                aria-label="What is PowerNukkitX and how can it help me?"
                                title="What is PowerNukkitX and how can it help me?"
                                indicator={
                                    <FaArrowLeft size={20} className="text-success" />
                                }
                            >
                                <span className="text-success">PowerNukkitX</span> is a powerful Minecraft server software built on the <span className="text-success">NukkitX project</span>. It offers enhanced <span className="text-success">performance</span>, <span className="text-success">stability</span>, and <span className="text-success">compatibility</span> compared to traditional Minecraft server software. It can help you create and manage your own Minecraft server with ease.
                            </AccordionItem>
                            <AccordionItem
                                key="2"
                                aria-label="How does PowerNukkitX differ from traditional Minecraft server software?"
                                title="How does PowerNukkitX differ from traditional Minecraft server software?"
                                indicator={
                                    <FaArrowLeft size={20} className="text-success" />
                                }
                            >
                                Unlike traditional Minecraft server software, <span className="text-success">PowerNukkitX</span> is optimized for performance and stability. It offers better compatibility with <span className="text-success">plugins</span>, ensuring a <span className="text-success">smoother gameplay experience for players</span>.
                            </AccordionItem>
                            <AccordionItem
                                key="3"
                                aria-label="Is PowerNukkitX free to use?"
                                title="Is PowerNukkitX free to use?"
                                indicator={
                                    <FaArrowLeft size={20} className="text-success" />
                                }
                            >
                                Yes, <span className="text-success">PowerNukkitX</span> is <span className="text-success">open-source</span> and free to use for everyone. <span className="text-success">You can download it from GitHub</span> and use it to set up your own Minecraft server without any cost.
                            </AccordionItem>
                            <AccordionItem
                                key="4"
                                aria-label="Where can I get support for PowerNukkitX?"
                                title="Where can I get support for PowerNukkitX?"
                                indicator={
                                    <FaArrowLeft size={20} className="text-success" />
                                }
                            >
                                You can get support for <span className="text-success">PowerNukkitX</span> from the <Link className="text-success font-bold" isExternal showAnchorIcon href="https://discord.gg/RprjEqWUMX" anchorIcon={<FaDiscord size={20}/>}>official Discord server</Link>. There is also extensive <Link className="text-success font-bold" isExternal showAnchorIcon href="https://dev.pnx-wiki.pages.dev/">documentation</Link>
                                and tutorials available to help you with setting up and managing your server.
                            </AccordionItem>
                            <AccordionItem
                                key="5"
                                aria-label="How do I create our first plugin for PowerNukkitX?"
                                title="How do I create our first plugin for PowerNukkitX?"
                                indicator={
                                    <FaArrowLeft size={20} className="text-success" />
                                }
                            >
                                To create your first plugin with PowerNukkitX, you can utilize the template provided by our <Link className="text-success font-bold" isExternal showAnchorIcon href="">plugin template</Link>. It will guide you through the necessary steps to develop your own plugin and integrate it into your server.
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
