import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { UserProfile } from "@/lib/types";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

export const AccountSettingsModal = ({
	children,
	userProfile,
}: {
	readonly children: React.ReactNode;
	userProfile?: UserProfile;
}) => {
	return (
		<Dialog>
			<DialogTrigger>{children}</DialogTrigger>
			<DialogContent>
				<section className="flex">
					<section className="flex-[0.3] border-r-2 pr-8">
						<Button variant="ghost" className="w-full space-x-4">
							<FaUser />
							<span>Account</span>
						</Button>
					</section>
					<section className="flex-1 px-8 space-y-8">
						<div>
							<DialogHeader className="text-3xl text-left">
								Account
							</DialogHeader>
							<p className="text-sm text-muted-foreground">
								Manage your account information
							</p>
						</div>
						<div className="space-y-4">
							<DialogTitle className="text-lg font-medium">Profile</DialogTitle>
							<div className="flex items-center space-x-4 pl-4">
								<Image
									src={userProfile?.imageUrl ?? ""}
									alt="hub"
									width="40"
									height="40"
									className="rounded-full border border-white p-1"
								/>
								<p className="text-sm">{userProfile?.fullName}</p>
							</div>
                  </div>
                  <div className="space-y-4">
                     <DialogTitle className="text-lg font-medium">Username</DialogTitle>
                     <p className="text-sm pl-4">{userProfile?.username}</p>
                  </div>
					</section>
				</section>
			</DialogContent>
		</Dialog>
	);
};
