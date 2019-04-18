import { getComponent } from '@bluebase/core';

export interface IconProps {
	/** Size of the icon. */
	size?: number;

	/** Icon to display. */
	name?: string;

	/** Color of the icon. */
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
