import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session = await getServerSession();
  console.log('sessions::::::::::::', JSON.stringify(session?.user));
	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<Button variant="destructive" size={"lg"}>
				Emm
			</Button>
		</div>
	);
}

