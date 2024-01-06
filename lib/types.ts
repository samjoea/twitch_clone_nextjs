export type Session = {
   user: {
      email: string
   }
}

export type UserProfile = {
   id: string;
   username: string;
   fullName: string;
   email: string;
   imageUrl: string;
   externalId: string;
   bio: string | null;
   createdAt: Date;
   updatedAt: Date;
} | null;