import { getComponent } from '@bluebase/core';
import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

import { IconProps } from './Icon';

export interface SearchbarProps extends TextInputProps {
	/**
	 * Accessibility label for the button. This is read by the screen reader when the user taps the button.
	 */
	clearAccessibilityLabel?: string;

	/**
	 * Accessibility label for the button. This is read by the screen reader when the user taps the button.
	 */
	searchAccessibilityLabel?: string;

	/**
	 * Icon name for the left icon button (see `onIconPress`).
	 */
	icon?: IconProps;

	/**
	 * Callback to execute if we want the left icon to act as button.
	 */
	onIconPress?: () => void;

	/**
	 * Set style of the TextInput component inside the searchbar
	 */
	inputStyle?: TextStyle;

	style?: ViewStyle;

	/**
	 * Custom color for icon, default will be derived from theme
	 */
	iconColor?: string;

	/**
	 * Custom icon for clear button, default will be icon close
	 */
	clearIcon?: IconProps;
}

export const Searchbar = getComponent<SearchbarProps>('Searchbar');

/**
 * Default props for Searchbar component
 */
export const SearchbarDefaultProps = {
	clearAccessibilityLabel: 'clear',
	searchAccessibilityLabel: 'search',
};
