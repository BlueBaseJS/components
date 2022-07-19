import { getComponent } from '@bluebase/core';
import React from 'react';
import { TextProps, TextStyle, ViewStyle } from 'react-native';

export interface ListItemProps {
	/**
	 * Title text for the list item.
	 */
	title: React.ReactNode;

	/**
	 * Description text for the list item.
	 */
	description?: React.ReactNode;

	/**
	 * React element to display on the left side.
	 */
	left?: React.ReactNode;

	/**
	 * React element to display on the right side.
	 */
	right?: React.ReactNode;

	/**
	 * Function to execute on press.
	 */
	onPress?: () => void;

	/**
	 * Is the list item selected
	 */
	selected?: boolean;

	/**
	 * Is the list item disabled
	 */
	disabled?: boolean;

	/**
	 * If true, the title and description will be indented.
	 * This should be used if there is no left avatar or left icon.
	 */
	inset?: boolean;

	style?: ViewStyle;

	/**
	 * Style that is passed to Title element.
	 */
	titleStyle?: TextStyle;

	/**
	 * Style that is passed to Description element.
	 */
	descriptionStyle?: TextStyle;

	/**
	 * Truncate Title text such that the total number of lines does not exceed this number.
	 */
	titleNumberOfLines?: number;

	/**
	 * Truncate Description text such that the total number of lines does not exceed this number.
	 */
	descriptionNumberOfLines?: number;

	/**
	 * Ellipsize Mode for the Title. One of 'head', 'middle', 'tail', 'clip'.
	 */
	titleEllipsizeMode?: TextProps['ellipsizeMode'];

	/**
	 * Ellipsize Mode for the Description. One of 'head', 'middle', 'tail', 'clip'.
	 */
	descriptionEllipsizeMode?: TextProps['ellipsizeMode'];
}

export const ListItemDefaultProps = {
	disabled: false,
	inset: false,
	selected: false,
};

/**
 * 📚 ListItem
 *
 * A component to show tiles inside a List.
 */
export const ListItem = getComponent<ListItemProps>('ListItem');

ListItem.defaultProps = ListItemDefaultProps;
