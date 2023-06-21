import React from "react";
import { ChipIcon, VisaIcon } from "@elements";
import { VisaCardProps } from "./interface";

const VisaCard: React.FC<VisaCardProps> = ({
	isPremium,
	id_card,
	owner_name,
	onClick,
}) => {
	return (
		<section
			onClick={onClick}
			className={`flex flex-col gap-5 p-5 rounded-xl font-medium w-[20rem] cursor-pointer ${
				isPremium
					? "bg-gradient-to-bl from-cyan-400 via-sky-500 to-blue-600 text-white"
					: "bg-white drop-shadow-lg text-gray-600"
			}`}
		>
			<section className="flex justify-between items-center">
				<ChipIcon isPremium={isPremium} />
				<p>{isPremium ? "Premium" : "Standard"}</p>
			</section>

			<p>{id_card}</p>

			<section className="flex items-center justify-between font-semibold">
				<p>{owner_name}</p>
				<VisaIcon isPremium={isPremium} />
			</section>
		</section>
	);
};

export default VisaCard;
