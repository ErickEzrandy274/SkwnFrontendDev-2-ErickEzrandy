import React from "react";
import { ActivityCardProps } from "./interface";
import { LocationIcon } from "@elements";
import { makeRupiah } from "@utils";

const ActivityCard: React.FC<ActivityCardProps> = ({
	bank,
	type,
	icon,
	date,
	time,
	amount,
}) => {
	return (
		<section className="flex justify-between items-center rounded-xl shadow-xl text-gray-600 p-3 md:p-5 md:px-4 text-sm">
			<section className="flex gap-3 md:gap-5 items-center">
				<section
					className={`p-2 rounded-full ${
						type === "deposit" ? "bg-blue-100" : "bg-red-100"
					}`}
				>
					{icon}
				</section>

				<section className="capitalize">
					<h2 className="text-lg font-semibold">{type}</h2>
					<p className={type === "deposit" ? "text-blue-500" : "text-red-500"}>
						{makeRupiah(amount)}
					</p>
					<section className="flex gap-2">
						<LocationIcon />
						<p>{bank}</p>
					</section>
				</section>
			</section>

			<section className="flex flex-col justify-between gap-5 items-end">
				<p>{date}</p>
				<p>{time}</p>
			</section>
		</section>
	);
};

export default ActivityCard;
