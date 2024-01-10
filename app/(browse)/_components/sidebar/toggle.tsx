"use client";

import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSidebar } from "@/store/useSidebar";
import {
	ArrowLeftFromLine,
	ArrowRightFromLine,
} from "lucide-react";

export const Toggle = () => {
	const { collapsed, onCollapse, onExpand } = useSidebar((state) => state);
	const label = collapsed ? "Expand" : "Collapse";
	return (
		<>
			{!collapsed && (
				<div className="p-3 pl-5 mb-2 flex items-center justify-between w-full">
					<p className="font-semibold text-primary">For</p>
					<Hint label={label} asChild side="right">
						<Button onClick={onCollapse} variant="ghost" size="sm">
							<ArrowLeftFromLine className="h-4 w-4" />
						</Button>
					</Hint>
				</div>
			)}

			{collapsed && (
				<div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
					<p className="font-semibold text-primary">For</p>
					<Hint label={label} asChild side="right">
						<Button onClick={onExpand} variant="ghost" size="sm">
							<ArrowRightFromLine className="h-4 w-4" />
						</Button>
					</Hint>
				</div>
			)}
		</>
	);
};

export const ToggleSkeleton = () => { 
	return (
		<div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
			<Skeleton className="h-6 w-[100px]" />
			<Skeleton className="h-6 w-6" />
		</div>
	)
}
