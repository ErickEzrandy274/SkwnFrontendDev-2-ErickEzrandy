import { ReactNode } from "react";

export interface VisaCardProps {
	isPremium: boolean;
	id_card: string;
	owner_name: string;
}

export interface ServiceCardProps {
	name: string;
	icon: ReactNode;
	onClick: () => void;
}

export type ActivityType = "deposit" | "withdraw";

export interface ActivityCardProps {
	type: ActivityType;
	icon: ReactNode;
	bank: string;
	date: string;
	time: string;
	amount: number;
}
