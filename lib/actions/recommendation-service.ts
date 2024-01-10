import { db } from "@/lib/db";
import { currentUser } from "./auth-service";

export const getRecommendations = async () => {
	const user = await currentUser();
	try {
		if (!user) {
			return await db.user.findMany({
				orderBy: {
					createdAt: "desc",
				},
			});
		}
		return await db.user.findMany({
			where: {
				NOT: {
					email: user.email!,
				}
			},
			orderBy: {
				createdAt: "desc",
			},
      });
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};
