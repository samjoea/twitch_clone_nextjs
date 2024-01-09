"use client";
import { useSidebar } from "@/store/useSidebar";
import { User } from "@prisma/client";

type RecommendedProps = {
	data: User[];
};

export const Recommended = ({ data }: RecommendedProps) => {
	const { collapsed } = useSidebar((state) => state);
	const showLabel = !collapsed && data?.length > 0;

	return (
		<div>
			{showLabel && (
				<div className="pl-6 mb-4">
					<p className="text-sm text-muted-foreground">Recommended</p>
				</div>
         )}
         <ul className="space-y-2 px-2">
            {data?.map((user) => (
               <li key={user.id}>
                  {user.username}
               </li>
            ))}
         </ul>
		</div>
	);
};
