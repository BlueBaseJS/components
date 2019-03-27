import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface CheckBoxProps  extends ViewProps {
	/**
	 * Color of the CheckBox.
	 */
	color?:  'primary' | 'secondary' | 'default' | string;

	/**
	 * If true the user won't be able to toggle the CheckBox.
	 * Default value is false.
	 */
	disabled?: boolean;

	/**
	 * Invoked with the new value when the value changes.
	 */
	onValueChange?: (value: boolean) => void;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;

	/**
	 * The value of the CheckBox. If true the CheckBox will be turned on.
	 * Default value is false.
	 */
	value?: boolean;

	/**
	 * The text to be used in an enclosing label element.
	 */
	label?: React.ReactNode;

	/**
	 * The position of the label.
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';

}

export const CheckBox = getComponent<CheckBoxProps>('CheckBox');

/**
 * Default props for CheckBox component
 */
export const CheckBoxDefaultProps = {
	color:  'primary',
	disabled: false,
	labelPlacement: 'end',
	onValueChange: () => { return; },
};