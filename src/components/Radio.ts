import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface RadioProps extends ViewProps {
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
	onValueChange?: (value: boolean) => void;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;

	/**
	 * The value of the Radio. If true the Radio will be turned on.
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

export const Radio = getComponent<RadioProps>('Radio');

/**
 * Default props for Radio component
 */
export const RadioDefaultProps = {
	color: 'secondary',
	disabled: false,
	labelPlacement: 'end',
	onValueChange: () => {
		return;
	},
};
