import { getComponent } from '@bluebase/core';

import { AvatarProps } from './Avatar';

export interface ListAvatarProps extends AvatarProps {}

export const ListAvatarDefaultProps: Partial<ListAvatarProps> = {
	size: 40,
};

/**
 * 📚 ListAvatar
 *
 * A component to show tiles inside a List.
 */
export const ListAvatar = getComponent<ListAvatarProps>('ListAvatar');
ListAvatar.defaultProps = ListAvatarDefaultProps;
