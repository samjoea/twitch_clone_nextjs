import { isFollowingUser } from "@/lib/actions/follow-service";
import { getUserByName } from "@/lib/actions/user-service";
import { notFound } from "next/navigation";

type UserPageProps = {
	params: {
		username: string;
	};
};

export default async function UserPage({ params }: UserPageProps) {
	const user = await getUserByName(params.username);

	if (!user) {
		notFound();
   }
   
   const isFollowing = await isFollowingUser(user.id);

	return (
		<div>
			<p>username: {user.username}</p>
			<p>fullName: {user.fullName}</p>
         <p>id: {user.id}</p>
         <p>isFollowing: {isFollowing ? "true" : "false"}</p>
		</div>
	);
}
