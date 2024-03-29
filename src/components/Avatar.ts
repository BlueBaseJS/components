import { getComponent } from '@bluebase/core';
import { TextStyle, ViewStyle } from 'react-native';

import { BlueBaseImageProps } from './BlueBaseImage';

export interface AvatarProps {
	/**
	 * Type of Avatar. We currently support 3 types:
	 *
	 * - Image (default)
	 * - Icon
	 * - Text
	 */
	type: 'image' | 'icon' | 'text';

	/**
	 * Size of avatar. Defaults: 56
	 */
	size?: number;

	/**
	 * Custom color of text or icon.
	 */
	color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | string;

	/**
	 * Used when type is 'icon'.
	 * This is the name prop of the Icon component
	 */
	icon?: string;

	/**
	 * Used when type is 'image'.
	 * This is the Image source.
	 */
	image?: BlueBaseImageProps['source'];

	/**
	 * Used when type is 'text'.
	 * This is the text that is displayed
	 */
	text?: string;

	/**
	 * The shape of the avatar.
	 */
	variant?: 'circle' | 'rounded' | 'square';

	textStyle?: TextStyle;
	style?: ViewStyle;
}

export const AvatarDefaultProps: Partial<AvatarProps> = {
	size: 56,
	variant: 'circle',
};

// tslint:disable: jsdoc-format
/**
 * # 🤠 Avatar
 *
 * Avatar control enables users to add images, icons or initials
 * within any application for instances such as a profile pictures.
 *
 * ## Usage
```jsx
<Avatar type="image" image={{ uri: 'https://picsum.photos/200' }} />
```
 */
export const Avatar = getComponent<AvatarProps>('Avatar');
Avatar.defaultProps = AvatarDefaultProps;
