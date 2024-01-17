export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "PowerNukkitX | Home",
	description: "Elevate your Minecraft Bedrock server experience with PowerNukkitX – the Java-powered software that brings innovation and performance to every block, ensuring seamless adventures for you and your players.",
	navItems: [
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
