import { getComponent } from '@bluebase/core';
import { PickerItemProps as RNPickerItemProps } from '@react-native-picker/picker';

export interface PickerItemProps extends RNPickerItemProps {
	disabled?: boolean;
}

export const PickerItem = getComponent<PickerItemProps>('PickerItem');

/**
 * Default props for PickerItem component
 */
export const PickerItemDefaultProps = {};
