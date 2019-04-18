import { IconProps } from './Icon';
import { getComponent } from '@bluebase/core';

export interface IconButtonProps extends IconProps {
	/**
	 * Whether the button is disabled. A disabled button is greyed out
	 * and onPress is not called on touch.
	 */
	disabled?: boolean;

	/**
	 * Accessibility label for the button. This is read by the screen
	 * reader when the user taps the button.
	 */
	accessibilityLabel?: string;

	/**
	 * Function to execute on press.
	 */
	onPress: () => void;

	style?: any;
}

export const IconButtonDefaultProps: Partial<IconButtonProps> = {
	disabled: false,
	size: 24,
};

/**
 * 🗿 IconButton
 *
 * An icon button is a button which displays only an icon without a label.
 */
export const IconButton = getComponent<IconButtonProps>('IconButton');
IconButton.defaultProps = IconButtonDefaultProps;
