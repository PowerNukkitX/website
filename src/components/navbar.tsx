import {
	Button,
	Link,
	Navbar as NextUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import {DiscordIcon, GithubIcon, Logo} from "@/components/icons";
import React from "react";

export const NavbarPNX = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="mb-4 top-0">
			<NavbarContent className="flex-grow" justify="start">
				<NavbarBrand className="gap-3 max-w-fit pr-2">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">PowerNukkitX</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden lg:flex gap-2 flex-grow justify-center">
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						{item.redirect ? (
							<Button
								className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
								variant="light"
								href={item.href}
								as={Link}
								showAnchorIcon
								target="_blank"
							>
								{item.label}
							</Button>
						) : (
							<NextLink href={item.href}>
								<Button
									className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
									variant="light"
								>
									{item.label}
								</Button>
							</NextLink>
						)}
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent className="flex-grow" justify={"end"}>
				<NavbarItem className="flex gap-4">
					<Button
						as={Link}
						href={siteConfig.links.discord}
						isIconOnly
						className="inline-flex bg-transparent items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
					>
						<span
							className="flex items-center group-hover:text-blue-500 transition-colors duration-200 ease-in-out">
							<DiscordIcon />
						</span>
					</Button>
					<Button
						as={Link}
						href={siteConfig.links.github}
						isIconOnly
						className="inline-flex bg-transparent items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
					>
						<span
							className="flex items-center group-hover:text-neutral-500 transition-colors duration-200 ease-in-out">
							<GithubIcon />
						</span>
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenuToggle className="lg:hidden" />

			<NavbarMenu className="lg:hidden">
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color="foreground" href={item.href} size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem className="space-x-8">
						<Link isExternal href={siteConfig.links.discord}>
							<DiscordIcon />
						</Link>
						<Link isExternal href={siteConfig.links.github}>
							<GithubIcon />
						</Link>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

export default NavbarPNX;