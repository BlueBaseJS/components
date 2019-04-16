import { TouchableNativeFeedbackProps, TouchableOpacityProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface TouchableItemProps extends TouchableNativeFeedbackProps, TouchableOpacityProps {
	borderless?: boolean;
	pressColor?: string;
}

export const TouchableItemDefaultProps = {
	borderless: false,
};

/**
 * # 👆 TouchableItem
 * TouchableItem renders a touchable that looks native on both iOS and Android.
 *
 * It provides an abstraction on top of TouchableNativeFeedback and
 * TouchableOpacity.
 *
 * On iOS you can pass the props of TouchableOpacity, on Android pass the props
 * of TouchableNativeFeedback.
 */
export const TouchableItem = getComponent<TouchableItemProps>('TouchableItem');

TouchableItem.defaultProps = TouchableItemDefaultProps;
