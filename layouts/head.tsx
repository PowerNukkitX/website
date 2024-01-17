import React from "react";
import NextHead from "next/head";
import { siteConfig } from "@/config/site";

export const Head = () => {
	return (
		<NextHead>
			<title>{siteConfig.name}</title>
			<meta content={siteConfig.description} name="description"/>
			<meta property="og:title" content={siteConfig.name}/>
			<meta property="og:description" content={siteConfig.description}/>
			<meta property="og:site_name" content="PowerNukkitX"/>
			<meta property="og:image" content="/PNX_banner.png"/>
			<meta property="og:url" content=""/>
			<meta property="og:type" content="website"/>
			<meta name="twitter:title" content="PowerNukkitX"/>
			<meta name="twitter:description" content={siteConfig.description}/>
			<meta name="twitter:image" content="/PNX_banner.png"/>
			<meta name="twitter:card" content="summary_large_image"/>
			<meta name="twitter:site" content="@PowerNukkitX"/>
			<meta property="keywords" name="keywords"
				  content="PowerNukkitX, powernukkitx, powernukkit, minecraft, bedrock, mcpe, mcbe, minecraft-bedrock"/>
			<meta
				key="viewport"
				content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				name="viewport"
			/>
			<link href="/favicon.ico" rel="icon"/>
		</NextHead>
	);
};
