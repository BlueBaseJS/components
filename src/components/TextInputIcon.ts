import { getComponent } from '@bluebase/core';

import { IconProps } from './Icon';

export interface TextInputIconProps extends IconProps {}

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
