import { SwitchProps as NativeSwitchProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface SwitchProps  extends NativeSwitchProps {
	/**
	 * Color of the switch.
	 */
	color?:  'primary' | 'secondary' | 'default' | string;

	/**
	 * The text to be used in an enclosing label element.
	 */
	label?: React.ReactNode;

	/**
	 * The position of the label.
	 */
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

export const Switch = getComponent<SwitchProps>('Switch');

/**
 * Default props for Switch component
 */
export const SwitchDefaultProps = {
	color:  'primary',
	disabled: false,
	labelPlacement: 'start',
	onValueChange: () => { return; },
};