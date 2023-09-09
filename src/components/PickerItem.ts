import { getComponent } from '@bluebase/core';
import { PickerItemProps as RNPickerItemProps } from '@react-native-picker/picker';

export interface PickerItemProps<T = any> extends RNPickerItemProps<T> {
	disabled?: boolean;
}

export const PickerItem = getComponent<PickerItemProps>('PickerItem');

/**
 * Default props for PickerItem component
 */
export const PickerItemDefaultProps = {};
