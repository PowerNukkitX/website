import * as React from "react";
import {IconSvgProps} from "@/types";
import Image from "next/image";
import {useTheme} from 'next-themes';
import {FaArchive, FaBolt, FaCheck, FaDiscord, FaDownload, FaGithub, FaJava} from "react-icons/fa";
import {FiCpu} from "react-icons/fi";
import {LuMoon, LuSun} from "react-icons/lu";

const IconComponent = ({ Icon, size = 24, width, height, color}: IconSvgProps & { Icon: any }) => {
	const { theme } = useTheme();

	if (!color) {
		color = theme === 'dark' || theme === undefined ? 'white' : 'black';
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
		className={"rounded-sm"}
		{...props}
	/>
);

export const ChevronDownIcon = () => (
	<svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
		<path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z" fill="currentColor"/>
	</svg>
);

export const DiscordIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaDiscord} />;
export const DownloadIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaDownload} />;
export const GithubIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaGithub} />;
export const LatestIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaCheck} />;
export const DevIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaBolt} />;
export const MoonFilledIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={LuMoon} />;
export const SunFilledIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={LuSun} />;

export const CPUIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FiCpu} />;
export const JavaIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaJava} />;
export const VanillaIcon = (props: IconSvgProps) => <IconComponent {...props} Icon={FaArchive} />;
