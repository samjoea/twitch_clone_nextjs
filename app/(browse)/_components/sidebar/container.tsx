"use client";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Container = ({ children }: { children: React.ReactNode }) => {
	const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);

	const matches = useMediaQuery("( min-width: 1024px )");

	useEffect(() => {
		if (matches) {
			onExpand();
		} else {
			onCollapse();
		}
	}, [matches, onCollapse, onExpand]);

	return (
		<div
			className={cn(
				"flex-1",
				collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-60"
			)}
		>
			{children}
		</div>
	);
};
