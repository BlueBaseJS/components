import { Omit, getComponent } from '@bluebase/core';
import { SwitchProps as NativeSwitchProps } from 'react-native';

export interface SwitchProps extends Omit<NativeSwitchProps, 'value' | 'onValueChange'> {
	/**
	 * If true, the component is checked.
	 */
	checked?: boolean;

	/**
	 * Color of the switch.
	 */
	color?: 'primary' | 'secondary' | 'default' | string;

	/**
	 * The text to be used in an enclosing label element.
	 */
	label?: React.ReactNode;

	/**
	 * The position of the label.
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';

	/**
	 * The value of the component.
	 */
	value?: string | number | boolean;

	/**
	 * Invoked with the new value when the value changes.
	 */
	onValueChange?: (value: string | number | boolean, checked: boolean) => void;

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

export const Switch = getComponent<SwitchProps>('Switch');

/**
 * Default props for Switch component
 */
export const SwitchDefaultProps = {
	checked: false,
	color: 'secondary',
	disabled: false,
	labelPlacement: 'start',
};
