import { getRecommendations } from "@/lib/actions/recommendation-service";
import { Recommended } from "./recommended";
import { Toggle } from "./toggle";
import { Wrapper } from "./wrapper";

export const Sidebar = async () => {
	const recommended = await getRecommendations();
	console.log("recommended", recommended);

	return (
		<Wrapper>
			<Toggle />
			<section className="space-y-4 pt-4 lg:pt-0">
				<Recommended data={recommended!} />
			</section>
		</Wrapper>
	);
};
