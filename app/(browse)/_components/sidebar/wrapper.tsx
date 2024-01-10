"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";
import { useIsClient } from "usehooks-ts";

type WrapperProps = {
	children: React.ReactNode;
};
export const Wrapper = ({ children }: WrapperProps) => {
	const { collapsed } = useSidebar((state) => state);
	const isClient = useIsClient();

	if (!isClient)
		return (
			<aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
				<ToggleSkeleton />
				<RecommendedSkeleton />
			</aside>
		);

	return (
		<aside
			className={cn(
				"fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
				collapsed && "w-[70px]"
			)}
		>
			{children}
		</aside>
	);
};
