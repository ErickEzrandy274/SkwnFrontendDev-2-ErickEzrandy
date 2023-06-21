import React from "react";
import { FinanceAccountProps } from "./interface";
import { makeRupiah } from "@utils";
import {
	ActivityCard,
	Interpolation,
	LeftArrowIcon,
	QuestionMarkIcon,
} from "@elements";
import { dummyActivitiesData } from "../Dashboard/dummy";
import { useRouter } from "next/router";

const FinanceAccount: React.FC<FinanceAccountProps> = ({ id_card }) => {
	const { back } = useRouter();

	return (
		<section className="flex flex-col gap-3 text-gray-600 font-medium -m-5 md:-mx-10 mb-1">
			<section className="flex flex-col gap-3 p-5 bg-gradient-to-tl from-cyan-300 via-sky-400 to-sky-500 text-white rounded-t-[1.5rem]">
				<section className="flex justify-between gap-3">
					<section className="flex gap-3 items-center">
						<LeftArrowIcon width={20} height={20} onClick={() => back()} />
						<h1 className="text-xl md:text-2xl">Account Finance</h1>
					</section>

					<section className="bg-white rounded-full md:p-1">
						<QuestionMarkIcon />
					</section>
				</section>

				<section>
					<p className="text-xl md:text-3xl font-semibold">
						{makeRupiah(2400000)}
					</p>
					<p>12 June 2022</p>
				</section>
			</section>

			<section className="flex flex-col gap-3 px-5">
				<section className="flex justify-between items-center text-gray-600">
					<p className="font-semibold text-lg md:text-2xl">Statistics</p>
					<button className="text-sm md:text-lg font-medium">See All</button>
				</section>

				<section className="overflow-x-auto">
					<Interpolation />
				</section>
			</section>

			<section className="flex flex-col gap-3 px-5">
				<section className="flex justify-between items-center text-gray-600">
					<p className="font-semibold text-lg md:text-2xl">History</p>
					<select className="text-sm md:text-lg font-medium">
						<option value="" disabled>
							Category
						</option>
						<option value="deposit">Deposit</option>
						<option value="withdraw">Withdraw</option>
					</select>
				</section>

				<section className="flex flex-col justify-between">
					{dummyActivitiesData.map((item, idx) => {
						return <ActivityCard key={idx} {...item} />;
					})}
				</section>
			</section>
		</section>
	);
};

export default FinanceAccount;
