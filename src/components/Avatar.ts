import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '../getComponent';

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
	color?: string;

	/**
	 * Used when type is 'icon'.
	 * This is the name prop of the Icon component
	 */
	icon?: string;

	/**
	 * Used when type is 'image'.
	 * This is the Image source.
	 */
	image?: ImageSourcePropType;

	/**
	 * Used when type is 'text'.
	 * This is the Image source.
	 */
	text?: ImageSourcePropType;

	style?: StyleProp<ViewStyle>;
}

export const AvatarDefaultProps = {
	size: 56,
};

// tslint:disable: jsdoc-format
/**
 * # 🤠 Avatar
 *
 * Avatar component.
 *
 * ## Usage
```jsx
<DynamicIcon
	type="image"
	size={250}
	source={{ uri: 'https://picsum.photos/200' }}
/>
```
 */
export const Avatar = getComponent<AvatarProps>('Avatar');
Avatar.defaultProps = AvatarDefaultProps;
