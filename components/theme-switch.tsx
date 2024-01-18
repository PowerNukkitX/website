import React, { FC, useEffect } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { SwitchProps, useSwitch } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

import { SunFilledIcon, MoonFilledIcon } from '@/components/icons';

interface ThemeSwitchProps {
	className?: string;
	classNames?: SwitchProps['classNames'];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
													  className,
													  classNames,
												  }) => {
	const [isMounted, setIsMounted] = React.useState(false);

	const { theme, setTheme } = useTheme();

	const onChange = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const {
		isSelected,
		getBaseProps,
		getInputProps,
		getWrapperProps,
	} = useSwitch({
		isSelected: theme === 'light',
		onChange,
	});

	useEffect(() => {
		setIsMounted(true);
	}, [isMounted]);

	// Prevent Hydration Mismatch
	if (!isMounted) return <div className="w-6 h-6" />;

	return (
		<label className="relative cursor-pointer">
			<VisuallyHidden>
				<input {...getInputProps()} />
			</VisuallyHidden>
			<div
				{...getWrapperProps()}
				className={clsx(
					'w-auto h-auto bg-transparent rounded-lg flex items-center justify-center group-data-[selected=true]:bg-transparent !text-default-500 pt-px px-0 mx-0',
					classNames?.wrapper
				)}
			>
				{isSelected ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
			</div>
		</label>
	);
};