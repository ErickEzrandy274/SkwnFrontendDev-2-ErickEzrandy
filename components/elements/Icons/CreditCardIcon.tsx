import React from "react";
import { IconProps } from "./interface";

const CreditCardIcon: React.FC<IconProps> = ({ width = 30, height = 30 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			fill="none"
		>
			<path
				fill="#2563eb"
				fillRule="evenodd"
				d="M2 9a3 3 0 013-3h22a3 3 0 013 3v1H2V9zm0 3h28v11a3 3 0 01-3 3H5a3 3 0 01-3-3V12zm16 7a1 1 0 100 2h6a1 1 0 100-2h-6z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default CreditCardIcon;
