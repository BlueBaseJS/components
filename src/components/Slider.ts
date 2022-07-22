import { getComponent } from '@bluebase/core';
import React from 'react';
import { SliderProps as NativeSliderProps } from 'react-native';

export interface SliderProps extends NativeSliderProps {
	/**
	 * The color used for the track to the right of the button.
	 * Overrides the default blue gradient image.
	 */
	maximumTrackTintColor?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | string;

	/**
	 * The color used for the track to the left of the button.
	 * Overrides the default blue gradient image.
	 */
	minimumTrackTintColor?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | string;

	/**
	 * Color of the foreground switch grip.
	 */
	thumbTintColor?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | string;

	/**
	 * If `true`, the label will be displayed in an error state.
	 */
	error?: boolean;

	/**
	 * The helper text content.
	 */
	helperText?: React.ReactNode;

	/**
	 * The label content.
	 */
	label?: React.ReactNode;

	/**
	 * If `true`, the label is displayed as required and the input will be required.
	 */
	required?: boolean;

	/**
	 * If `true`, the component will display value
	 */
	showValue?: boolean;

	valueLabelFormat?: (value: number) => string;

	onSlidingStart?: (value: number) => void;
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
