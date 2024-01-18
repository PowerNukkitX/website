import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";
import clsx from "clsx";

export interface ThemeSwitchProps {
	className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
	const [isMounted, setIsMounted] = useState(false);

	const { theme, setTheme } = useTheme();

	const onChange = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	const { Component, getBaseProps, getInputProps, getWrapperProps, isSelected } =
		useSwitch({
			isSelected: theme === "light",
			onChange,
		});

	useEffect(() => {
		setIsMounted(true);
	}, [isMounted]);

	// Prevent Hydration Mismatch
	if (!isMounted) return <div className="w-6 h-6" />;

	const baseProps = getBaseProps({
		className: clsx(
			"px-px transition-opacity hover:opacity-80 cursor-pointer",
			className
		),
	});

	return (
		<Component {...baseProps}>
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<div
				{...getWrapperProps()}
				className={clsx(
					"w-auto h-auto bg-transparent rounded-lg flex items-center justify-center",
					"group-data-[selected=true]:bg-transparent",
					"!text-default-500 pt-px px-0 mx-0"
				)}
			>
				{isSelected ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
			</div>
		</Component>
	);
};
