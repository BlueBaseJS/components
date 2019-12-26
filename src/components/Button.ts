import { TextStyle, ViewStyle } from 'react-native';

import { DynamicIconProps } from './DynamicIcon';
import React from 'react';
import { getComponent } from '@bluebase/core';

export interface ButtonStyles {
	root: ViewStyle;
	primary: ViewStyle;
	secondary: ViewStyle;
	default: ViewStyle;
	link: ViewStyle;
	fullWidth: ViewStyle;
	text: TextStyle;
	primaryText: TextStyle;
	secondaryText: TextStyle;
	defaultText: TextStyle;
	linkText: TextStyle;
}

export interface ButtonProps {
	/* Label to be passed as child. */
	children?: React.ReactNode;

	/** Ignored if children prop is provided. Otherwise this string is used. */
	title?: string;

	/* Color prop of type enum. */
	color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | string;

	/** Button variant */
	variant?: 'text' | 'outlined' | 'contained';

	/**
	 * Callback function fired when button is pressed.
	 */
	onPress?: (event?: any) => any;

	/**
	 * If true, renders a disabled button.
	 */
	disabled?: boolean;

	/**
	 * If true, button is generated with 100% width of the container.
	 */
	fullWidth?: boolean;

	/**
	 * The size of the button.
	 */
	size?: 'small' | 'medium' | 'large';

	/**
	 * Button Styles
	 */
	styles?: ButtonStyles;

	/**
	 * Whether to show a loading indicator.
	 */
	loading?: boolean;

	/**
	 * Icon to display for the Button.
	 */
	icon?: DynamicIconProps;

	/**
	 * Whether the color is a dark color. A dark button will render light
	 * text and vice-versa. Only applicable for contained mode.
	 */
	dark?: boolean;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;

	[key: string]: any;
}

export const Button = getComponent<ButtonProps>('Button');

/**
 * Default props for TextInput component
 */
export const ButtonDefaultProps: Partial<ButtonProps> = {
	color: 'primary',
	fullWidth: false,
	loading: false,
	size: 'medium',
	variant: 'contained',
};

Button.defaultProps = ButtonDefaultProps;
