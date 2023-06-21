import {
	CreditCardIcon,
	DollarIcon,
	DownGrowthIcon,
	QuestionMarkIcon,
	TopUpIcon,
	UpGrowthIcon,
} from "@elements";
import { ActivityCardProps } from "components/elements/Card/interface";

export const dummyVisaData = [
	{
		isPremium: true,
		id_card: "4000 5127 2123 2018",
		owner_name: "Aurellia",
	},
	{
		isPremium: false,
		id_card: "4000 5127 2123 2019",
		owner_name: "Aurellia",
	},
	{
		isPremium: true,
		id_card: "4000 5127 2123 2020",
		owner_name: "Aurellia",
	},
];

export const dummyServicesData = [
	{
		name: "Card",
		icon: <CreditCardIcon />,
	},
	{
		name: "Finance",
		icon: <DollarIcon />,
	},
	{
		name: "Top Up",
		icon: <TopUpIcon />,
	},
	{
		name: "Help",
		icon: <QuestionMarkIcon fill="#2563eb" />,
	},
];

export const dummyActivitiesData: ActivityCardProps[] = [
	{
		bank: "Bank Mandiri ATM",
		type: "deposit",
		icon: <UpGrowthIcon />,
		date: "4 March 2022",
		time: "11.21 AM",
		amount: 15510000,
	},
	{
		bank: "Bank Mandiri ATM",
		type: "deposit",
		icon: <UpGrowthIcon />,
		date: "1 April 2022",
		time: "10.00 AM",
		amount: 35000000,
	},
	{
		bank: "Bank Mandiri ATM",
		type: "withdraw",
		icon: <DownGrowthIcon />,
		date: "26 May 2022",
		time: "08.00 PM",
		amount: 10000000,
	},
	{
		bank: "Bank Mandiri ATM",
		type: "withdraw",
		icon: <DownGrowthIcon />,
		date: "2 June 2022",
		time: "09.20 AM",
		amount: 2500000,
	},
];
