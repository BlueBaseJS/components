import { ViewProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface RadioGroupProps extends ViewProps {
	/**
	 * Function to execute on selection change.
	 */
	onValueChange?: (value: string | number | boolean) => any;

	/**
	 * Value of the currently selected radio button.
	 */
	value?: string | number | boolean;

	/**
	 * React elements containing radio buttons.
	 */
	children: React.ReactNode;

	/**
	 * The helper text content.
	 */
	helperText?: React.ReactNode;

	/**
	 * The label content.
	 */
	label?: React.ReactNode;

	/**
	 * If `true`, the label will be displayed in an error state.
	 */
	error?: boolean;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
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
