import {Navbar} from "@/components/navbar";
import {Head} from "./head";
import {Link} from "@nextui-org/react";
import React from "react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen flex-col selection:bg-success-600/70 selection:text-white">
			<Head/>
			<Navbar/>
			<div className="flex flex-1 flex-col">
				<div className="flex flex-1 flex-col">
					{children}
				</div>
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
		</div>
	);
}
