"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GrEdit } from "react-icons/gr";
import { IoCheckmark } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { Skeleton } from "./ui/skeleton";
import { updateUserProfile } from "@/lib/actions/auth-service";

export const EditInput = ({
	value,
}: {
	readonly value?: string;
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [inputValue, setInputValue] = useState<string>(value ?? "");
	const router = useRouter();
	const handleInputEdit = async () => {
		const res = await updateUserProfile({ username: inputValue }!);
		setIsEditing(false);
		router.refresh();
	};

	const handleInputCancel = () => {
		setIsEditing(false);
		setInputValue(value!);
	};

	return (
		<div className="relative">
			{isEditing ? (
				<>
					<Input
						type="text"
						name="inputValue"
						value={inputValue}
						onChange={(e) => setInputValue(e.currentTarget.value)}
						autoFocus
					/>
					<Button
						onClick={handleInputEdit}
						variant="ghost"
						className="group rounded-none hover:bg-popover-foreground"
					>
						<IoCheckmark className="group-hover:text-accent" />
					</Button>
					<Button
						onClick={handleInputCancel}
						variant="ghost"
						className="group rounded-none hover:bg-popover-foreground"
					>
						<FaXmark className="group-hover:text-accent" />
					</Button>
				</>
			) : (
				<div className="text-sm pl-4 flex items-center hover:bg-accent hover:text-accent-foreground">
					<p className="w-full">{value}</p>
					<Button
						onClick={() => setIsEditing(true)}
						variant="ghost"
						className="group rounded-none hover:bg-popover-foreground"
					>
						<GrEdit className="group-hover:text-accent" />
					</Button>
				</div>
			)}
		</div>
	);
};

export const EditInputSkeleton = () => {
	return (
		<Skeleton className="h-10 px-4 py-2" />
	)
 }
