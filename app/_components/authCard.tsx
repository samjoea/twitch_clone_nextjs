"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

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
			<Button
				onClick={() => signIn("google")}
				variant="ghost"
				className="gap-2 font-bold"
			>
				<Image src="/googleLogo.png" alt="hub" width={20} height={20} />
				<span>Continue with Google</span>
			</Button>
			<div className="text-sm">{children}</div>
		</section>
	);
};
