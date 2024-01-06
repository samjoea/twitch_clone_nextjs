import { Logo } from "../_components/logo";

export default function AuthLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="h-svh flex flex-col justify-center border space-y-5">
			<Logo />
			{children}
		</div>
	);
}
