import { EditInput } from "@/components/editInput";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { updateUserProfile } from "@/lib/actions/auth-service";
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
			<DialogTrigger className="hover:bg-accent hover:text-accent-foreground w-full">
				{children}
			</DialogTrigger>
			<DialogContent className="max-w-xl h-[90%]">
				<section className="flex">
					<section className="flex-[0.5] border-r-2 pr-4">
						<div className="cursor-pointer w-full flex pl-3 py-2 space-x-4 bg-accent text-accent-foreground rounded-sm">
							<FaUser />
							<span>Account</span>
						</div>
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
							<DialogTitle className="text-lg font-medium">
								Profile
							</DialogTitle>
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
							<DialogTitle className="text-lg font-medium">
								Username
							</DialogTitle>
							<EditInput
								value={userProfile?.username}
							/>
						</div>
					</section>
				</section>
			</DialogContent>
		</Dialog>
	);
};
