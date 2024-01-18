import {
	Button,
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem, NavbarMenuToggle,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	GithubIcon,
	DiscordIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="mb-4">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit pr-2">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-inherit">PNX</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden lg:flex gap-2 justify-start" justify="center">
				{siteConfig.navItems.map((item) => (
					<NavbarItem key={item.href}>
						<Button
							className={clsx(
								linkStyles({ color: "foreground" }),
								"data-[active=true]:text-primary data-[active=true]:font-medium"
							)}
							variant="light"
							href={item.href}
						>
							{item.label}
						</Button>
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon color="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link>
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarMenuToggle className="lg:hidden" />

			<NavbarMenu className="lg:hidden">
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link color="foreground" href="#" size="lg">
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
					<NavbarMenuItem className="space-x-8">
						<Link isExternal href={siteConfig.links.discord}>
							<DiscordIcon color="text-default-500" />
						</Link>
						<Link isExternal href={siteConfig.links.github}>
							<GithubIcon className="text-default-500" />
						</Link>
						<ThemeSwitch />
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};