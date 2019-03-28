import { Omit } from '@bluebase/core';
import { SwitchProps as NativeSwitchProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface SwitchProps extends Omit<NativeSwitchProps, 'value'> {
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
	onValueChange: () => {
		return;
	},
};
