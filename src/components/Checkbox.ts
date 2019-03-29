import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface CheckboxProps extends ViewProps {
	/**
	 * If true, the component is checked.
	 */
	checked?: boolean;

	/**
	 * Color of the Checkbox.
	 */
	color?: 'primary' | 'secondary' | 'default' | string;

	/**
	 * If true the user won't be able to toggle the Checkbox.
	 * Default value is false.
	 */
	disabled?: boolean;

	/**
	 * Invoked with the new value when the value changes.
	 */
	onValueChange?: (value: string | number | boolean, checked: boolean) => void;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;

	/**
	 * The value of the component.
	 */
	value?: string | number | boolean;

	/**
	 * The text to be used in an enclosing label element.
	 */
	label?: React.ReactNode;

	/**
	 * The position of the label.
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';

	/**
	 * If true, the component appears indeterminate.
	 */
	indeterminate?: boolean;
}

export const Checkbox = getComponent<CheckboxProps>('Checkbox');

/**
 * Default props for Checkbox component
 */
export const CheckboxDefaultProps = {
	checked: false,
	color: 'secondary',
	disabled: false,
	labelPlacement: 'end',
};
