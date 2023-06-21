import React from "react";
import { IconProps } from "./interface";
import { useRouter } from "next/router";

const AccountIcon: React.FC<IconProps> = ({
	width = 45,
	height = 45,
	isActive,
}) => {
	const { push } = useRouter();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			className="scale-75 cursor-pointer"
			fill={isActive ? "#2563eb" : "#9ca3af"}
			onClick={() => push("/account")}
		>
			<path d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"></path>
			<path fill="none" d="M0 0h48v48H0z"></path>
		</svg>
	);
};

export default AccountIcon;
