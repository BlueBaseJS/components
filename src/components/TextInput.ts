import { getComponent } from '@bluebase/core';
import React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';

import { TextInputAffix } from './TextInputAffix';
import { TextInputIcon } from './TextInputIcon';

export interface TextInputProps extends RNTextInputProps {
	/**
	 * If `true`, the input will be disabled.
	 */
	disabled?: boolean;

	/**
	 * If `true`, the label will be displayed in an error state.
	 */
	error?: boolean;

	/**
	 * The helper text content.
	 */
	helperText?: React.ReactNode;

	/**
	 * The label content.
	 */
	label?: React.ReactNode;

	/**
	 * If `true`, the label is displayed as required and the input will be required.
	 */
	required?: boolean;

	/**
	 * The variant to use.
	 */
	variant?: 'standard' | 'outlined' | 'filled';

	/**
	 * (Web Only) The id of the input element. Use this property to make label
	 * and helperText accessible for screen readers.
	 */
	id?: string;

	/**
	 * Web only
	 */
	name?: string;

	/**
	 * Web only
	 */
	type?: string;

	left?: React.ReactNode;

	right?: React.ReactNode;
}

type TextInputType = React.ComponentType<TextInputProps> & {
	Affix: typeof TextInputAffix;
	Icon: typeof TextInputIcon;
};

/**
 * A foundational component for inputting text into the app via a keyboard.
 * Props provide configurability for several features, such as auto-correction,
 * auto-capitalization, placeholder text, and different keyboard types, such
 * as a numeric keypad.
 */
export const TextInput = getComponent<TextInputProps>('TextInput') as TextInputType;

/**
 * Default props for TextInput component
 */
export const TextInputDefaultProps = {
	autoCapitalize: 'sentences',
	autoComplete: 'on',
	autoCorrect: true,
	editable: true,
	keyboardType: 'default',
	multiline: false,
	numberOfLines: 1,
	secureTextEntry: false,
	style: {},
};

TextInput.Affix = TextInputAffix;
TextInput.Icon = TextInputIcon;
