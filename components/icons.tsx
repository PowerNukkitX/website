import * as React from "react";
import {IconSvgProps} from "@/types";
import Image from "next/image";
import {useTheme} from 'next-themes';

interface IconProps {
	className?: string
}

export const Logo = ({size = 35, width, height, ...props}: IconSvgProps) => (
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

export const ChevronDownIcon = ({className}: IconProps) => (
	<svg fill="none" height="14" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
			fill="currentColor"/>
	</svg>
);

export const GithubIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
		 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
		 className={`lucide lucide-github ${className}`}>
		<path
			d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
		<path d="M9 18c-4.51 2-5-2-7-2"/>
	</svg>
);

export const DiscordIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
		<path fill="currentColor"
			  d="M8.52 13.846c-1.04 0-1.888-.945-1.888-2.101c0-1.157.827-2.102 1.889-2.102c1.05 0 1.91.945 1.889 2.102c0 1.156-.839 2.1-1.89 2.1m6.974 0c-1.04 0-1.89-.945-1.89-2.101c0-1.157.829-2.102 1.89-2.102c1.05 0 1.91.945 1.89 2.102c0 1.156-.829 2.1-1.89 2.1m-5.369-9.523l-.308-.563l-.634.106a16.354 16.354 0 0 0-4.158 1.28l-.228.105l-.142.21c-2.613 3.853-3.33 7.648-2.975 11.375l.039.407l.33.24a16.91 16.91 0 0 0 5.078 2.543l.79.242L9.03 17.55c1.91.472 4.03.472 5.939 0l1.107 2.717l.79-.242a16.82 16.82 0 0 0 5.08-2.545l.327-.238l.04-.402c.436-4.32-.697-8.083-2.958-11.384l-.142-.208l-.228-.104a16.575 16.575 0 0 0-4.154-1.28l-.618-.103l-.314.542c-.088.15-.177.32-.263.493a15.878 15.878 0 0 0-3.263 0c-.085-.17-.17-.333-.248-.474M6.715 16.61c.197.114.405.226.61.328l-.449 1.096a15.018 15.018 0 0 1-3.428-1.778c-.225-3.138.413-6.305 2.564-9.57a14.551 14.551 0 0 1 2.824-.913c.06.125.116.248.162.356l.273.643l.692-.101a14.108 14.108 0 0 1 4.09 0l.69.1l.272-.642c.047-.112.102-.234.16-.356c.977.21 1.923.52 2.828.915c1.875 2.82 2.821 5.966 2.546 9.567a14.901 14.901 0 0 1-3.43 1.779l-.445-1.095c.206-.102.414-.214.613-.329c.49-.282 1.017-.634 1.353-.97l-1.28-1.28c-.163.164-.523.42-.977.682c-.444.256-.885.463-1.167.556c-2.003.663-4.428.663-6.432 0c-.281-.093-.722-.3-1.166-.556c-.454-.261-.814-.518-.978-.682l-1.28 1.28c.337.336.864.688 1.354.97"/>
	</svg>
);

export const CubeIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-box ${className}`}>
		<path
			d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
		<path d="m3.3 7 8.7 5 8.7-5"/>
		<path d="M12 22V12"/>
	</svg>
);

export const FlameIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-flame ${className}`}>
		<path
			d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
	</svg>
);

export const ServerIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
		 className={`lucide lucide-server ${className}`}>
		<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
		<rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
		<line x1="6" x2="6.01" y1="6" y2="6"/>
		<line x1="6" x2="6.01" y1="18" y2="18"/>
	</svg>
);

export const PerformanceIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-gauge ${className}`}>
		<path d="m12 14 4-4"/>
		<path d="M3.34 19a10 10 0 1 1 17.32 0"/>
	</svg>
);

export const PluginIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
		 className={`lucide lucide-package ${className}`}>
		<path d="m7.5 4.27 9 5.15"/>
		<path
			d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
		<path d="m3.3 7 8.7 5 8.7-5"/>
		<path d="M12 22V12"/>
	</svg>
);

export const CodeIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
		 className={`lucide lucide-code-xml ${className}`}>
		<path d="m18 16 4-4-4-4"/>
		<path d="m6 8-4 4 4 4"/>
		<path d="m14.5 4-5 16"/>
	</svg>
);

export const AnvilIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-anvil ${className}`}>
		<path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"/>
		<path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"/>
		<path d="M9 12v5"/>
		<path d="M15 12v5"/>
		<path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"/>
	</svg>
);

export const CommunityIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-messages-square ${className}`}>
		<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/>
		<path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
	</svg>
);

export const UserIcon = ({className}: IconProps) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
		 stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-user ${className}`}>
		<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
		<circle cx="12" cy="7" r="4"/>
	</svg>
);