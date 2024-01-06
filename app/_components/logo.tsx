import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = ({ className }: { className?: string }) => {
	return (
		<section
			className={cn(
				"flex flex-col items-center text-xl font-semibold tracking-tight space-y-2 sm:text-3xl",
				font.className,
				className
			)}
		>
			<div className="bg-white rounded-full p-1">
				<Image src="/spooky.svg" alt="hub" width="80" height="80" />
			</div>
			<div className="text-center">
				<p>Hub</p>
				<p className="text-sm text-muted-foreground">Let&apos;s do this!</p>
			</div>
		</section>
	);
}
