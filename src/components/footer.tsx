import React from "react";
import {DiscordIcon, GithubIcon} from "@/components/icons";

export const Footer = () => {
    const navigation = {
        main: [
            { name: 'Home', href: '#' },
            { name: 'Documentation', href: 'https://docs.powernukkitx.com/' },
            { name: 'Plugins', href: '#' },
            { name: 'Team', href: 'teams' },
            { name: 'Partners', href: '#' },
        ],
        social: [
            {
                name: 'Discord',
                href: '#',
                icon: DiscordIcon,
            },
            {
                name: 'GitHub',
                href: '#',
                icon: GithubIcon,
            },
        ],
    };
    return (
        <footer className="bg-content1">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="px-5 py-2">
                            <a href={item.href} className="text-base text-white hover:text-primary">
                                {item.name}
                            </a>
                        </div>
                    ))}
                </nav>
                <div className="mt-8 flex justify-center space-x-6">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-white hover:text-primary">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6"/>
                        </a>
                    ))}
                </div>
                <p className="mt-8 text-center text-base text-white">&copy; 2024 PowerNukkitX, Inc. All rights
                    reserved.</p>
            </div>
        </footer>
    );
};