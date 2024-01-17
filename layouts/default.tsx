import { Navbar } from "@/components/navbar";
import { Head } from "./head";
import {Link} from "@nextui-org/react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://github.com/AzaleeX"
					title="Github AzaleeX"
				>
					<span className="text-default-600">Founded by</span>
					<p className="text-primary">AzaleeX ❤️</p>
				</Link>
			</footer>
		</div>
	);
}
