import * as React from "react";
import { IconSvgProps } from "@/types";
import Image from "next/image";
import { useTheme } from 'next-themes';
import { FaDiscord, FaGithub } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";

const IconComponent = ({ Icon, size = 24, width, height }: IconSvgProps & { Icon: any }) => {
	const { theme } = useTheme();
	let color;

	if (theme === 'dark' || theme === undefined) {
		color = 'white';
	} else {
		color = 'black';
	}

	return (
		<Icon
			size={size}
			width={width}
			height={height}
			color={color}
		/>
	);
};

export const Logo = ({ size = 35, width, height, ...props }: IconSvgProps) => (
	<Image
		src="/logoPNX.webp"
		alt="PowerNukkitX logo"
		width={size ? Number(size) : width}
		height={size ? Number(size) : height}
		{...props}
	/>
);

export const DiscordIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaDiscord} />;
export const GithubIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaGithub} />;
export const MoonFilledIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={LuMoon} />;
export const SunFilledIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={LuSun} />;
