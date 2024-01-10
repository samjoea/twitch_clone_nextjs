import { cva, type VariantProps } from "class-variance-authority"; // Path: components/user-avatar.tsx

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiveBadge } from "@/components/live-badge";

export const userAvatarStyles = cva("", {
	variants: {
		size: {
			default: "h-8 w-8",
			lg: "h-14 w-14",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

interface UserAvatarProps extends VariantProps<typeof userAvatarStyles> {
	imageUrl: string;
	userName: string;
	isAlive?: boolean;
	showBadge?: boolean;
}
export const UserAvatar = ({
	imageUrl,
	userName,
	isAlive,
	showBadge,
	size,
}: UserAvatarProps) => {
	console.log("imageUrl", imageUrl);
	return (
		<div className="relative">
			<Avatar
				className={cn(userAvatarStyles({ size }), {
					"ring-2 ring-rose-500 border border-background": isAlive,
					// "bg-red-500": !isAlive,
				})}
			>
				<AvatarImage src={imageUrl} className="object-cover" />
				<AvatarFallback>
					<span className="sr-only">
						{userName[0]}
						{userName[userName.length - 1]}
					</span>
				</AvatarFallback>
			</Avatar>
			{showBadge && (
				<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
					<LiveBadge className="ml-auto" />
				</div>
			)}
		</div>
	);
};

type UserAvatarSkeletonProps = VariantProps<typeof userAvatarStyles>;

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
	return (
		<Skeleton className={cn(userAvatarStyles({ size }), "rounded-full")} />
	);
};
