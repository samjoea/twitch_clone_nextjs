import { db } from "@/lib/db";
import { getUserProfile } from "@/lib/actions/auth-service";

export const isFollowingUser = async (email: string) => {
	try {
		const self = await getUserProfile();
		const otherUser = await db.user.findUnique({
			where: {
				email,
			},
		});

		if (!otherUser) return false;
		if (self?.email === otherUser?.email) return true;

		const existingFollow = await db.follow.findFirst({
			where: {
				followerId: self?.id,
				followingId: otherUser?.id,
			},
		});

		return !!existingFollow;
	} catch (error) {
		return false;
	}
};

export const followUser = async (id: string) => {
	const self = await getUserProfile();
	const otherUser = await db.user.findUnique({
		where: {
			id,
		},
	});
	if (!otherUser) return;

	if (self?.id === otherUser?.id) return;

	const existingFollow = await db.follow.findFirst({
		where: {
			followerId: self?.id,
			followingId: otherUser?.id,
		},
	});

	if (existingFollow) return;

	return await db.follow.create({
		data: {
			followerId: self?.id!,
			followingId: otherUser?.id!,
		},
		include: {
			follower: true,
			following: true,
		},
	});
};
