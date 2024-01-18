import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps & { Component: NextPage }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider attribute="class" defaultTheme="dark">
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}