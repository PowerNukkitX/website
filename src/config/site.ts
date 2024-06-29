export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Home",
	description: "PowerNukkitX is a server software for Minecraft Bedrock that always aims to be the best, pushing the boundaries of creation.",
	navItems: [
    {
      label: "Docs",
      href: "https://docs.powernukkitx.com/",
		redirect: true
    },
	{
		label: "Downloads",
		href: "/downloads",
	},
    {
      label: "Plugins",
      href: "/plugins",
		redirect: true
    },
    {
      label: "Contribute",
      href: "/contribute",
		redirect: false
    },
	{
		label: "API",
		href: "/powernukkitx-api",
		redirect: false
	},
	],
	navMenuItems: [
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Plugins",
			href: "/plugins",
		},
		{
			label: "Contribute",
			href: "/contribute",
		},
	],
	links: {
		github: "https://github.com/PowerNukkitX",
		docs: "/",
		discord: "https://discord.gg/8bTGJ5FzY4",
    	sponsor: "/"
	},
};
