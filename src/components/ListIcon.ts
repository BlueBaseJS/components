import { IconProps } from './Icon';
import { getComponent } from '@bluebase/core';

/**
 * 📚 ListIcon
 *
 * A component to show tiles inside a List.
 */
export interface ListIconProps extends IconProps {}

export const ListIconDefaultProps: Partial<ListIconProps> = {
	size: 24
};

export const ListIcon = getComponent<ListIconProps>('ListIcon');

ListIcon.defaultProps = ListIconDefaultProps;
