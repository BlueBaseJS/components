import { getComponent } from '@bluebase/core';

export interface IconProps {
	size?: number;
	name?: string;
	color?: string;
}

export const IconDefaultProps: Partial<IconProps> = {
	size: 24,
};

/**
 * 🗿 Icon
 */
export const Icon = getComponent<IconProps>('Icon');
Icon.defaultProps = IconDefaultProps;