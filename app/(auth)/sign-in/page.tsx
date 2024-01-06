import { AuthCard } from "@/app/_components/authCard";
import Link from "next/link";

export default function SignIn() {
	return (
		<div className="flex  items-center justify-center w-full">
			<AuthCard action="Sign in">
				<p>
					New account? &nbsp;
					<Link
						href="/sign-up"
						className="text-blue-700 hover:text-blue-400 hover:underline"
					>
						Sign up
					</Link>
				</p>
			</AuthCard>
		</div>
	);
}
