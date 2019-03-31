import { PickerItem, PickerItemProps } from './PickerItem';
import { Omit } from '@bluebase/core';
import { PickerProps as RNPickerProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface PickerProps extends Omit<RNPickerProps, 'mode'> {
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
	 * Specifies how to display the selection items when the user taps on the picker:
	 *
	 *   - 'dialog': Show a modal dialog. This is the default.
	 *   - 'dropdown': Shows a dropdown anchored to the picker view
	 *   - 'default': Shows platform default view
	 *
	 */
	mode?: 'dialog' | 'dropdown' | 'default';

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
	 * The string that will be rendered before text input has been entered
	 */
	placeholder?: string;
}

type PickerType = React.ComponentType<PickerProps> & { Item: React.ComponentType<PickerItemProps> };

/**
 * Picker components are used for collecting user provided information
 * from a list of options.
 */
export const Picker = getComponent<PickerProps>('Picker') as PickerType;
Picker.Item = PickerItem;

/**
 * Default props for Picker component
 */
export const PickerDefaultProps = {
	mode: 'default',
};
