"use server";

import { getServerSession } from "next-auth";
import { db } from "@/lib/db";
import { UserProfile } from "@/lib/types";

export const currentUser = async () => {
	try {
		const session = await getServerSession();
		return session?.user;
	} catch (error) {
		return null;
	}
	// console.log("session", session?.user);
};

export const getUserProfile = async () => {
	try {
		const user = await currentUser();
		if (!user) return;
		const userProfile = await db.user.findUnique({
			where: {
				email: user?.email!,
			},
		});
		return userProfile;
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};

export const updateUserProfile = async (userData: Partial<UserProfile>) => {
	try {
		const user = await currentUser();
		if (!user) return;
		const userProfile = await db.user.update({
			where: {
				email: user?.email!,
			},
			data: userData!,
		});
		console.log("userProfile", userProfile);
		return userProfile;
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};

export const createUserProfile = async (userData: UserProfile) => {
	try {
		const userProfile = await db.user.create({
			data: userData!,
		});
		return userProfile;
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};

export const deleteUserProfile = async ({ email }: { email: string }) => {
	try {
		const userProfile = await db.user.delete({
			where: {
				email,
			},
		});
		return userProfile;
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};
