import { db } from "@/lib/db";

export const getRecommendations = async () => {
	try {
		return await db.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
      });
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};
