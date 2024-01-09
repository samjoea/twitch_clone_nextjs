import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const font = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
	return <Link href="/">
		<div className="flex items-center gap-x-4 hover:opacity-75 transition">
			<div className="bg-white rounded-full p-1 min-w-8">
				<Image
					src="/spooky.svg"
					alt="hub"
					width="32"
					height="32"
					className="rounded-full"
				/>
			</div>
			<div className={cn(font.className, "hidden lg:flex flex-col")}>
				<p className="text-lg font-semibold">Hub</p>
				<p className="text-sm text-muted-foreground">Let&apos;s do this</p>
			</div>
		</div>
	</Link>;
};
