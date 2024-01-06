"use client";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { UserProfile } from "@/lib/types";
import { IoSettings } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import Image from "next/image";
import React from "react";
import { signOut } from "next-auth/react";
import { AccountSettingsModal } from "./accountSettingsModa";

export const ProfileLogo = ({
	session,
	userProfile,
}: {
	session: any;
	userProfile?: UserProfile;
}) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="ghost"
					className="p-1 h-20 w-20 border rounded-full"
				>
					<Image
						src={userProfile?.imageUrl ?? ""}
						alt="hub"
						width="80"
						height="80"
						className="rounded-full"
					/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0 py-4">
				<section className="space-y-2">
					<div className="flex items-center space-x-4 pl-4">
						<Image
							src={userProfile?.imageUrl ?? ""}
							alt="hub"
							width="50"
							height="50"
							className="rounded-full border border-white p-1"
						/>
						<div>
							<p>{userProfile?.fullName}</p>
							<p className="text-sm text-muted-foreground">
								@{userProfile?.username}
							</p>
						</div>
					</div>
					<AccountSettingsModal userProfile={userProfile}>
						<Button
							variant="ghost"
							className="justify-start w-full space-x-8 pl-8  "
						>
							<IoSettings className="text-muted-foreground" />
							<p>Manage Account</p>
						</Button>
					</AccountSettingsModal>
					<Button
						onClick={() => signOut()}
						variant="ghost"
						className="justify-start w-full space-x-8 pl-8 "
					>
						<PiSignOutBold className="text-muted-foreground" />
						<p>Sign out</p>
					</Button>
				</section>
			</PopoverContent>
		</Popover>
	);
};
