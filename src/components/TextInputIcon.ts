import { getComponent } from '@bluebase/core';

import { IconButtonProps } from './IconButton';

export interface TextInputIconProps extends IconButtonProps {}

export const TextInputIconDefaultProps: Partial<TextInputIconProps> = {
	// size: 24,
};

/**
 * 📚 TextInputIcon
 *
 * A component to show tiles inside a TextInput.
 */
export const TextInputIcon = getComponent<TextInputIconProps>('TextInputIcon');

TextInputIcon.defaultProps = TextInputIconDefaultProps;
