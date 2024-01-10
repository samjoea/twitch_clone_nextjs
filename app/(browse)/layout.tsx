import { NavBar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { Container } from "./_components/sidebar/container";

export default function BrowseLayout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			<section className="flex h-full pt-20">
				<Sidebar />
				<Container>{children}</Container>
			</section>
		</>
	);
}
