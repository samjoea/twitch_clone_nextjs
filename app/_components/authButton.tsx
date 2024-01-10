"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import React from "react";

const func: {
	readonly [key: string]: () => void;
} = {
	signIn: () => {
		signIn("google");
	},
	signOut: () => {
		signOut();
	},
};

export const AuthButton = ({
	children,
	className,
	funcAction,
}: {
	readonly children: React.ReactNode;
	readonly className?: string;
	readonly funcAction: string;
}) => {

	return (
		<Button onClick={func[funcAction]} variant="ghost" className={className}>
			{children}
		</Button>
	);
};
