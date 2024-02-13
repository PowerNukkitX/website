export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Home",
	description: "PowerNukkitX is a server software for Minecraft Bedrock that always aims to be the best, pushing the boundaries of creation.",
	navItems: [
	{
		label: "Home",
		href: "/",
		redirect: false
	},
    {
      label: "Docs",
      href: "https://dev.pnx-wiki.pages.dev/",
		redirect: true
    },
    {
      label: "Plugins",
      href: "/plugins",
		redirect: true
    },
    {
      label: "Team",
      href: "/team",
		redirect: false
    },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Plugins",
			href: "/plugins",
		},
		{
			label: "Team",
			href: "/team",
		},
	],
	links: {
		github: "https://github.com/PowerNukkitX",
		docs: "/",
		discord: "https://discord.gg/8bTGJ5FzY4",
    	sponsor: "/"
	},
};
