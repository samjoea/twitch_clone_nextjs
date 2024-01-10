"use client";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/useSidebar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";
import { LiveBadge } from "@/components/live-badge";

type UserItemProps = {
	userName: string;
	imageUrl: string;
	isAlive?: boolean;
};
export const UserItem = ({ imageUrl, userName, isAlive }: UserItemProps) => {
	const pathName = usePathname();
	const { collapsed } = useSidebar((state) => state);
	const href = `/u/${userName}`;
	const isActive = pathName === href;

	return (
		<Button
			asChild
			variant="ghost"
			className={cn("w-full h-12", {
				"bg-accent": isActive,
				"justify-center": collapsed,
				"justify-start": !collapsed,
			})}
		>
			<Link href={href}>
				<div
					className={cn("flex items-center gap-x-4", {
						"justify-center": collapsed,
					})}
				>
					<UserAvatar
						imageUrl={imageUrl}
						userName={userName}
                  isAlive={isAlive}
                  // showBadge
               />
               {
                  !collapsed && (
                     <p className="line-clamp-1">{userName}</p>
                  )
               }
               {
                  !collapsed && isAlive && (
                     <LiveBadge />
                  )
               }
				</div>
			</Link>
		</Button>
	);
};


export const UserItemSkeleton = () => {
   return (
      <li className="flex items-center gap-x-4 px-3 py-2">
         <Skeleton className="min-h-[32px] min-w-[32px] rounded-full" />
         <div className="flex-1">
            <Skeleton className="h-6" />
         </div>
      </li>
   );
}