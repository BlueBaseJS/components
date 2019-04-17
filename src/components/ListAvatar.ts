import { AvatarProps } from './Avatar';
import { getComponent } from '@bluebase/core';

export interface ListAvatarProps extends AvatarProps {}

/**
 * 📚 ListAvatar
 *
 * A component to show tiles inside a List.
 */
export const ListAvatar = getComponent<ListAvatarProps>('ListAvatar');
