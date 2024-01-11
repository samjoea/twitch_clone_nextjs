import { db } from "@/lib/db";

export const getUserByName = async (username: string) => {
	return await db.user.findUnique({
		where: {
			username,
		},
	});
};
