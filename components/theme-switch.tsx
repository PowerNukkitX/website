import React, {useEffect, useState} from 'react';
import {Button} from '@nextui-org/react';
import {MoonFilledIcon, SunFilledIcon} from '@/components/icons';
import {useTheme} from "next-themes";

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	if (!mounted) {
		return null;
	}

	return (
		<Button
			size="sm"
			onClick={toggleTheme}
			isIconOnly
			disableRipple
			className="bg-transparent"
		>
			{theme === 'light' ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
		</Button>
	);
};