import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_ID ?? "",
         clientSecret: process.env.GOOGLE_SECRET ?? "",
      })
   ],
   pages: {
		signIn: '/sign-in',
		signOut: '',
      newUser: '',
		error: '',
		verifyRequest: '',
	},
   secret: process.env.NEXTAUTH_SECRET,
}

export const auth = NextAuth(authOptions)

export { auth as GET, auth as POST }