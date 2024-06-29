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
import CountUp from 'react-countup';
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { DiscordIcon, GithubIcon, Logo } from "@/components/icons";
import { useDiscord } from "@/libs/discord";

export const NavbarPNX = () => {
	const { data: discordData } = useDiscord();

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="mb-4 top-0" style={{ zIndex: 1000 }}>
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit pr-2">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">PowerNukkitX</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden lg:flex gap-2 justify-start" justify="center">
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

			<NavbarContent className="hidden sm:flex sm:basis-full ml-10" justify="end">
				<NavbarItem className="hidden sm:flex gap-1" style={{marginRight: '20px'}}>
					<Button
						as={Link}
						href={siteConfig.links.discord}
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"
					>
						<DiscordIcon/>
						<span className="text-white">Join Discord</span>
						<span
							className="flex items-center ml-4 group-hover:text-blue-500 transition-colors duration-200 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="text-white ml-2">
                                Join {' '}
                                <CountUp start={0} end={discordData?.memberCount ?? 0} duration={15} delay={0}>
                                    {({ countUpRef }) => <span ref={countUpRef} />}
                                </CountUp>
                                + members
                            </span>
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
