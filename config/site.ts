export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Home",
	description: "PowerNukkitX constantly strives to make its Bedrock server software the best and fastest it can be.",
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
