import { db } from "./db";
import { UserProfile } from "./types";

export const getUserProfile = async ({ email }: { email: string }) => {
	"use server";
	try {
		const userProfile = await db.user.findUnique({
			where: {
				email,
			},
		});
		return userProfile;
	} catch (error) {
		console.log("errors:::::::::::", error);
	}
};

export const updateUserProfile = async (
	userData: Partial<UserProfile>,
	id: string
) => {
	"use server";
	try {
		const userProfile = await db.user.update({
			where: {
				email: id,
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
	"use server";
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
	"use server";
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
