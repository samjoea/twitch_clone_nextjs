import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
type HintProps = {
	children: React.ReactNode;
	label: string;
	asChild?: boolean;
	side?: "top" | "right";
	align?: "start" | "center" | "end";
};

export const Hint = ({ children, label, align, asChild, side }: HintProps) => {
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
				<TooltipContent
					className="text-black bg-white"
					side={side}
					align={align}
				>
					<p className="font-semibold">{label}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
