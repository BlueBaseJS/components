import { SliderProps as NativeSliderProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface SliderProps extends NativeSliderProps {
	/**
	 * The color used for the track to the right of the button.
	 * Overrides the default blue gradient image.
	 */
	maximumTrackTintColor?: 'primary' | 'secondary' | 'default' | string;

	/**
	 * The color used for the track to the left of the button.
	 * Overrides the default blue gradient image.
	 */
	minimumTrackTintColor?: 'primary' | 'secondary' | 'default' | string;

	/**
	 * Color of the foreground switch grip.
	 */
	thumbTintColor?: 'primary' | 'secondary' | 'default' | string;
}

export const Slider = getComponent<SliderProps>('Slider');

/**
 * Default props for Slider component
 */
export const SliderDefaultProps = {
	disabled: false,
	maximumValue: 1,
	minimumValue: 0,
	step: 0,
	value: 0,
};
