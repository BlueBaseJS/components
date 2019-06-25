import { getComponent } from '@bluebase/core';

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

	style?: any;
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
