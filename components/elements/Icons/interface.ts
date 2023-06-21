export interface IconProps {
	width?: number;
	height?: number;
	isActive?: boolean;
}

export interface VisaIconProps extends IconProps {
	isPremium: boolean;
}
