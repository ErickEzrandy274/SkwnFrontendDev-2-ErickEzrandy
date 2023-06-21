import React from "react";
import { ServiceCardProps } from "./interface";

const ServiceCard: React.FC<ServiceCardProps> = ({ name, icon, onClick }) => {
	return (
		<section
			onClick={onClick}
			className="flex flex-col gap-2 items-center text-xs md:text-sm text-gray-600 font-medium cursor-pointer"
		>
			<section className="bg-blue-100/80 rounded-full p-2">{icon}</section>
			<p>{name}</p>
		</section>
	);
};

export default ServiceCard;
