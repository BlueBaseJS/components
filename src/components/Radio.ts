import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface RadioProps extends ViewProps {
	/**
	 * If true, the component is checked.
	 */
	checked?: boolean;

	/**
	 * Color of the Radio.
	 */
	color?: 'primary' | 'secondary' | 'default' | string;

	/**
	 * If true the user won't be able to toggle the Radio.
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
	 * (Web Only) The id of the input element. Use this property to make label
	 * and helperText accessible for screen readers.
	 */
	id?: string;

	/**
	 * Web only
	 */
	name?: string;
}

export const Radio = getComponent<RadioProps>('Radio');

/**
 * Default props for Radio component
 */
export const RadioDefaultProps = {
	checked: false,
	color: 'secondary',
	disabled: false,
	labelPlacement: 'end',
};
