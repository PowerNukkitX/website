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

import {siteConfig} from "@/config/site";
import NextLink from "next/link";

import {DiscordIcon, GithubIcon, Logo,} from "@/components/icons";
import {useDiscord} from "@/libs/discord";

export const Navbar = () => {

	const {data: discordData} = useDiscord();

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
						{item.redirect ? (
							<Button
								className={"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"}
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
									className={"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"}
									variant="light"
								>
									{item.label}
								</Button>
							</NextLink>
						)}
					</NavbarItem>
				))}
			</NavbarContent>
			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
				<NavbarItem className="hidden sm:flex gap-1">
					<Button as={Link} href={siteConfig.links.discord}
							className={"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-content1 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-content2"}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path fill="currentColor"
								  d="M8.52 13.846c-1.04 0-1.888-.945-1.888-2.101c0-1.157.827-2.102 1.889-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.839 2.1-1.89 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101c0-1.157.829-2.102 1.89-2.102c1.05 0 1.91.945 1.89 2.102c0 1.156-.829 2.1-1.89 2.1m-5.369-9.523l-.308-.563l-.634.106a16.354 16.354 0 0 0-4.158 1.28l-.228.105l-.142.21c-2.613 3.853-3.33 7.648-2.975 11.375l.039.407l.33.24a16.91 16.91 0 0 0 5.078 2.543l.79.242L9.03 17.55c1.91.472 4.03.472 5.939 0l1.107 2.717l.79-.242a16.82 16.82 0 0 0 5.08-2.545l.327-.238l.04-.402c.436-4.32-.697-8.083-2.958-11.384l-.142-.208l-.228-.104a16.575 16.575 0 0 0-4.154-1.28l-.618-.103l-.314.542c-.088.15-.177.32-.263.493a15.878 15.878 0 0 0-3.263 0c-.085-.17-.17-.333-.248-.474M6.715 16.61c.197.114.405.226.61.328l-.449 1.096a15.018 15.018 0 0 1-3.428-1.778c-.225-3.138.413-6.305 2.564-9.57a14.551 14.551 0 0 1 2.824-.913c.06.125.116.248.162.356l.273.643l.692-.101a14.108 14.108 0 0 1 4.09 0l.69.1l.272-.642c.047-.112.102-.234.16-.356c.977.21 1.923.52 2.828.915c1.875 2.82 2.821 5.966 2.546 9.567a14.901 14.901 0 0 1-3.43 1.779l-.445-1.095c.206-.102.414-.214.613-.329c.49-.282 1.017-.634 1.353-.97l-1.28-1.28c-.163.164-.523.42-.977.682c-.444.256-.885.463-1.167.556c-2.003.663-4.428.663-6.432 0c-.281-.093-.722-.3-1.166-.556c-.454-.261-.814-.518-.978-.682l-1.28 1.28c.337.336.864.688 1.354.97"/>
						</svg>
						<span className="text-white">Join Discord</span>
						<span
							className="flex items-center ml-4 group-hover:text-blue-500 transition-colors duration-200 ease-in-out"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
								 stroke-linejoin="round" className="lucide lucide-user"><path
								d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
							<span className="text-white ml-2">
      							Join{' '}
								<CountUp start={0}
										 end={discordData?.memberCount ?? 0}
										 duration={15}
										 delay={0}>
        								{({countUpRef}) => (
											<span ref={countUpRef}/>
										)}
      							</CountUp>
								+ members
							</span>
						</span>
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenuToggle className="lg:hidden"/>

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

export default Navbar;
