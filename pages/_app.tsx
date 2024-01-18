import type { AppProps } from "next/app";
import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps & { Component: NextComponentType }) {
	const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider>
				<Component {...pageProps} />
			</NextThemesProvider>
		</NextUIProvider>
	);
}

export default App;
