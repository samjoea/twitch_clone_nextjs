import { getServerSession } from "next-auth";
import { ProfileLogo } from "../_components/dashboard/profileLogo";
import { db } from "@/lib/db";
import { getUserProfile } from "@/lib/actions";

export default async function Dashboard() {
   const session = await getServerSession();
   const userProfile = await getUserProfile({ email: session?.user?.email! })

	return (
		<section>
         <h1>Dashboard</h1>
			<ProfileLogo session={session} userProfile={userProfile} />
		</section>
	);
}
