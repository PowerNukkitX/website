import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider>
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}