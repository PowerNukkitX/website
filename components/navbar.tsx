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

import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {ThemeSwitch} from "@/components/theme-switch";
import {DiscordIcon, GithubIcon, Logo,} from "@/components/icons";
import {useTheme} from "next-themes";

export const Navbar = () => {
	const {resolvedTheme} = useTheme();
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="mb-4 top-0" style={{ zIndex: 1000 }}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit pr-2">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
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
						<DiscordIcon className={resolvedTheme === 'light' ? 'text-default-500' : 'text-black'} />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className={resolvedTheme === 'light' ? 'text-default-500' : 'text-black'} />
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