import { PickerItemProps, PickerProps } from 'react-native';
import { getComponent } from '../getComponent';

export { PickerItemProps, PickerProps };
export const Picker = getComponent<PickerProps>('Picker');

/**
 * Default props for Picker component
 */
export const PickerDefaultProps = {
	mode: 'dialog',
};
