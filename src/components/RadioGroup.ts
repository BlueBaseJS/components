import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface RadioGroupProps extends ViewProps {
	/**
	 * Function to execute on selection change.
	 */
	onValueChange: (value: string | number | boolean) => any;

	/**
	 * Value of the currently selected radio button.
	 */
	value: string | number | boolean;

	/**
	 * React elements containing radio buttons.
	 */
	children: React.ReactNode;
}

export const RadioGroup = getComponent<RadioGroupProps>('RadioGroup');

/**
 * Default props for RadioGroup component
 */
export const RadioGroupDefaultProps = {
	onValueChange: () => {
		return;
	},
};
