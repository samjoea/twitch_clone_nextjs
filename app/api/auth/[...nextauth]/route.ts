import { db } from "@/lib/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? "",
			clientSecret: process.env.GOOGLE_SECRET ?? "",
		}),
	],
   secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
      redirect: async () => {
         return '/'
      },
   },
   pages: {
      signIn: '/',
   },
   events: {
      async signIn({ user: {  email, name, image, id } }) {
         const userExist = await db.user.findUnique({
				where: { email: email! },
			});
         if (!userExist) {
            await db.user.create({
               data: {
                  email: email!,
                  username: email?.split("@")[0]!,
                  imageUrl: image!,
                  externalId: id,
                  fullName: name!,
               },
            });
         };
      },
   }
};

export const auth = NextAuth(authOptions);

export { auth as GET, auth as POST };
