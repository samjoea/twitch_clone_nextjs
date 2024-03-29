import Image from "next/image";
import { AuthButton } from "./authButton";
import { Skeleton } from "@/components/ui/skeleton";

export const AuthCard = ({
	action,
	children,
}: {
	action: string;
	children: React.ReactNode;
}) => {
	return (
		<section className="w-[25rem] h-[15rem] p-[2rem] space-y-5 bg-zinc-900 border border-zinc-800">
			<div>
				<p className="text-xl font-semibold">{action}</p>
				<p className="text-sm">to continue to Hub</p>
			</div>
			<AuthButton
				className="gap-2 font-bold"
				funcAction="signIn"
			>
				<Image src="/googleLogo.png" alt="hub" width="20" height="20" />
				<span>Continue with Google</span>
			</AuthButton>
			<div className="text-sm">{children}</div>
		</section>
	);
};

export const AuthCardSkeleton = () => {
	return (
		<div className="h-10 px-4 py-2 flex gap-2">
			<Skeleton className="h-6 w-6 rounded-full" />
			<Skeleton className="w-1/2 h-5" />
		</div>
	);
}
