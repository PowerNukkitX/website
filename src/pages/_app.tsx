import type {AppProps} from "next/app";
import type {NextPage} from "next";
import {Analytics} from "@vercel/analytics/react"
import {useRouter} from "next/router";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps & { Component: NextPage }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push} className="flex min-h-full flex-1 flex-col">
			<NextThemesProvider>
				<Component {...pageProps} />
			</NextThemesProvider>
			<Analytics />
		</NextUIProvider>
	);
}