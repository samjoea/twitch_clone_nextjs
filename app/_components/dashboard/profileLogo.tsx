import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { IoSettings } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import Image from "next/image";
import { AccountSettingsModal } from "./accountSettingsModa";
import { AuthButton } from "../authButton";
import { Suspense } from "react";
import { getUserProfile } from "@/lib/actions/auth-service";

export const ProfileLogo = async () => {
	const userProfile = await getUserProfile();

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Popover>
				<PopoverTrigger className="border-2 min-w-8 border-muted-foreground hover:border-white rounded-full">
					<Image
						src={userProfile?.imageUrl ?? ""}
						alt="profile"
						width="40"
						height="40"
						className="rounded-full"
					/>
				</PopoverTrigger>
				<PopoverContent className="p-0 py-4">
					<section className="space-y-2">
						<div className="flex items-center space-x-4 pl-4">
							<Image
								src={userProfile?.imageUrl ?? ""}
								alt="hub"
								width="40"
								height="40"
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
							<div className="flex items-center py-2 pl-8 space-x-8">
								<IoSettings className="text-muted-foreground" />
								<p>Manage Account</p>
							</div>
						</AccountSettingsModal>
						<AuthButton
							className="justify-start w-full space-x-8 pl-8"
							funcAction="signOut"
						>
							<PiSignOutBold className="text-muted-foreground" />
							<p>Sign out</p>
						</AuthButton>
					</section>
				</PopoverContent>
			</Popover>
		</Suspense>
	);
};
