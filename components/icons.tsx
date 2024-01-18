import * as React from "react";
import { IconSvgProps } from "@/types";
import Image from "next/image";
import { useTheme } from 'next-themes';
import {FaDiscord, FaDownload, FaGithub} from "react-icons/fa";
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
	// @ts-ignore
	<Image
		src="/logoPNX.webp"
		alt="PowerNukkitX logo"
		width={typeof size === 'number' ? size : (width ? Number(width) : undefined)}
		height={typeof size === 'number' ? size : (height ? Number(height) : undefined)}
		{...props}
	/>
);

export const DiscordIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaDiscord} />;
export const DownloadIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaDownload} />;
export const GithubIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaGithub} />;
export const MoonFilledIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={LuMoon} />;
export const SunFilledIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={LuSun} />;
