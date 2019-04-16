import { StyleProp, ViewStyle } from 'react-native';
import { DynamicIconProps } from './DynamicIcon';
import { getComponent } from '@bluebase/core';

export interface MenuItemProps {
	/** Title text for the MenuItem. */
	title: string;

	/** Icon to display for the MenuItem. */
	icon?: DynamicIconProps;

	/**
	 * Whether the 'item' is disabled. A disabled 'item' is greyed out and
	 * onPress is not called on touch.
	 */
	disabled?: boolean;

	/** Function to execute on press. */
	onPress?: () => void;

	style?: StyleProp<ViewStyle>;
}

export const MenuItemDefaultProps = {};

/**
 */
// tslint:disable: jsdoc-format
/**
 * # 📋 MenuItem
 *
 * A component to show a single list item inside a Menu.
 */
export const MenuItem = getComponent<MenuItemProps>('MenuItem');

MenuItem.defaultProps = MenuItemDefaultProps;
