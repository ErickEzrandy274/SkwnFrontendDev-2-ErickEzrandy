export interface IconProps {
	width?: number;
	height?: number;
	isActive?: boolean;
	fill?: string;
	onClick?: () => void;
}

export interface VisaIconProps extends IconProps {
	isPremium: boolean;
}
