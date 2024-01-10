import {
	ProfileLogo,
} from "@/app/_components/dashboard/profileLogo";
import { Button } from "@/components/ui/button";
import { getUserProfile } from "@/lib/actions/auth-service";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {
	const userProfile = await getUserProfile();

	return (
		<div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
			{userProfile ? (
				<div className="flex items-center gap-x-4">
					<Button
						size="sm"
						variant="ghost"
						className="text-muted-foreground hover:text-primary"
					>
						<Link href={`/u/${userProfile.username}`} className="flex">
							<Clapperboard className="h-5 w-5 lg:mr-2" />
							<span className="hidden lg:block">Dashboard</span>
						</Link>
					</Button>
						<ProfileLogo />
				</div>
			) : (
				<Button variant="primary">
					<Link href="/sign-in">Login</Link>
				</Button>
			)}
		</div>
	);
};
