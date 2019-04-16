import { PickerItemProps as RNPickerItemProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface PickerItemProps extends RNPickerItemProps {
	disabled?: boolean;
}

export const PickerItem = getComponent<PickerItemProps>('PickerItem');

/**
 * Default props for PickerItem component
 */
export const PickerItemDefaultProps = {};
