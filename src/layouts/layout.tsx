import React from "react";
import {siteConfig} from "@/config/site";
import NextHead from "next/head";
import {Footer} from "@/components/footer";
import NavbarPNX from "@/components/navbar";

export default function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen flex-col selection:bg-success-600/70 selection:text-white">
			<NextHead>
				<title>{"PowerNukkitX"}</title>
				<meta content={siteConfig.description} name="description"/>
				<meta property="og:title" content={siteConfig.name}/>
				<meta property="og:description" content={siteConfig.description}/>
				<meta property="og:site_name" content="PowerNukkitX"/>
				<meta property="og:image" content="/logoPNX.webp"/>
				<meta property="og:url" content=""/>
				<meta property="og:type" content="website"/>
				<meta name="twitter:title" content="PowerNukkitX"/>
				<meta name="twitter:description" content={siteConfig.description}/>
				<meta name="twitter:image" content="/logoPNX.webp"/>
				<meta property="keywords" name="keywords"
					  content="PowerNukkitX, powernukkitx, powernukkit, minecraft, bedrock, mcpe, mcbe, minecraft-bedrock, software, software-bedrock, nukkit, nukkitx"/>
				<meta
					key="viewport"
					content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
					name="viewport"
				/>
				<link href="/favicon.ico" rel="icon"/>
			</NextHead>
			<NavbarPNX/>
			<div className="flex flex-1 flex-col">
				<div className="flex flex-1 flex-col">
					{children}
				</div>
			</div>
			<Footer/>
		</div>
	);
}
