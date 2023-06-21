import Image from "next/image";
import React from "react";
import { dummyActivitiesData, dummyServicesData, dummyVisaData } from "./dummy";
import { ActivityCard, ServiceCard, VisaCard } from "@elements";

const Dashboard = () => {
	return (
		<section className="flex flex-col gap-6">
			<section className="flex justify-between">
				<section>
					<p className="text-gray-600 md:text-xl">Hello,</p>
					<p className="text-xl md:text-3xl font-bold">Aurellia!</p>
				</section>

				<Image
					src="/profile-picture.jpg"
					alt="avatar-image"
					width={60}
					height={60}
					className="rounded-full scale-90"
				/>
			</section>

			<section className="flex flex-col gap-3">
				<section className="flex justify-between items-center text-gray-600">
					<p className="font-semibold text-lg md:text-2xl">Your Visa</p>
					<button className="text-sm md:text-lg font-medium">See All</button>
				</section>

				<section className="overflow-x-auto">
					<section className="flex flex-row w-screen md:w-full gap-10 pb-2">
						{dummyVisaData.map((item) => {
							return (
								<section key={item.id_card}>
									<VisaCard {...item} />
								</section>
							);
						})}
					</section>
				</section>
			</section>

			<section className="flex flex-col gap-3">
				<section className="flex justify-between items-center text-gray-600">
					<p className="font-semibold text-lg md:text-2xl">Services</p>
					<button className="text-sm md:text-lg font-medium">See All</button>
				</section>

				<section className="flex justify-between md:justify-evenly px-5">
					{dummyServicesData.map((item) => {
						return <ServiceCard key={item.name} {...item} onClick={() => {}} />;
					})}
				</section>
			</section>

			<section className="flex flex-col gap-3">
				<section className="flex justify-between items-center text-gray-600">
					<p className="font-semibold text-lg md:text-2xl">Activity</p>
					<button className="text-sm md:text-lg font-medium">See All</button>
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

export default Dashboard;
