import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { BlueBaseImageProps } from './BlueBaseImage';
import { ButtonProps } from './Button';
import React from 'react';
import { TextProps } from './Text';
import { getComponent } from '@bluebase/core';

export interface ComponentStateStyles {
	/** Action button container styles */
	actionRoot?: ViewStyle;

	/** Description text styles */
	description?: TextStyle;

	/** Image styles */
	image?: ImageStyle;

	/** Styles of image container view */
	imageRoot?: ViewStyle;

	/** Main root container styles */
	root?: ViewStyle;

	/** Title styles */
	title?: TextStyle;
}
export interface ComponentStateProps {
	/**
	 * Action button title
	 */
	actionTitle?: string;

	/**
	 * Action button onPress callback function
	 */
	actionProps?: ButtonProps;

	/**
	 * Action button onPress callback function
	 */
	actionOnPress?: ButtonProps['onPress'];

	/**
	 * Description Text
	 */
	description?: string;

	/**
	 * Description Text props
	 */
	descriptionProps?: TextProps;

	/**
	 * A ReactNode to show custom UI, if provided, imageSource will be ignored
	 */
	image?: React.ReactNode;

	/**
	 * Image source
	 */
	imageProps?: BlueBaseImageProps;

	/**
	 * Image source
	 */
	imageSource?: BlueBaseImageProps['source'];

	/**
	 * Title text
	 */
	title?: React.ReactNode;

	/**
	 * Title text props
	 */
	titleProps?: TextProps;

	styles?: ComponentStateStyles;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

/**
 * # 🤡 ComponentState
 *
 * A generic component to show different states of a screen or a view. For example,
 * you may need to:
 *
 * - Show a loading state when data is loading,
 * - Show an empty state when there is not data to show on a screen.
 * - Show an error message when an exception occurs during execution.
 *
 * These are just a few examples. This component displays a message with an image, a title,
 * a description and a call to action button.
 *
 * ## Usage
 * ```jsx
 * <ComponentState
 *  title="Looks like your'e new here!"
 *  description="Start by creating your first entry."
 *  imageSource="https://picsum.photos/200"
 *  styles={{ image: { width: 100, height: 100 } }}
 *  actionTitle="Tap to Create"
 * />
 * ```
 */
export const ComponentState = getComponent<ComponentStateProps>('ComponentState');
