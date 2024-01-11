import { getRecommendations } from "@/lib/actions/recommendation-service";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
	const recommended = await getRecommendations();

	return (
		<Wrapper>
			<Toggle />
			<section className="space-y-4 pt-4 lg:pt-0">
				<Recommended data={recommended!} />
			</section>
		</Wrapper>
	);
};

export const SidebarSkeleton = () => {
	return (
		<aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2DE3] z-50">
			<RecommendedSkeleton />
		</aside>
	);
};
