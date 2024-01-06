import { AuthCard } from "@/app/_components/authCard";
import Link from "next/link";

export default function SignUp() {
   return (
      <div className="flex  items-center justify-center w-full">
         <AuthCard action="Sign up">
            <p>
               Existing account? &nbsp;
               <Link
                  href="/sign-in"
                  className="text-blue-700 hover:text-blue-400 hover:underline"
               >
                  Sign in
               </Link>
            </p>
         </AuthCard>
      </div>
   )
 }