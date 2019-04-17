import { IconProps } from './Icon';
import { getComponent } from '@bluebase/core';

export interface ListIconProps extends IconProps {}

export const ListIconDefaultProps: Partial<ListIconProps> = {
	size: 24
};

/**
 * 📚 ListIcon
 *
 * A component to show tiles inside a List.
 */
export const ListIcon = getComponent<ListIconProps>('ListIcon');

ListIcon.defaultProps = ListIconDefaultProps;
