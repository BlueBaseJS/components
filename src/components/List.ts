import { ListAvatar } from './ListAvatar';
import { ListIcon } from './ListIcon';
import { ListItem } from './ListItem';
import { ListSubheader } from './ListSubheader';
import React from 'react';
import { ViewProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface ListProps extends ViewProps {
	children?: React.ReactNode;
}

type ListType = React.ComponentType<ListProps> & {
	Avatar: typeof ListAvatar;
	Icon: typeof ListIcon;
	Item: typeof ListItem;
	Subheader: typeof ListSubheader;
};

/**
 * # 📚 List
 *
 * A component used to group list items.
 */
export const List = getComponent<ListProps>('List') as ListType;

List.Avatar = ListAvatar;
List.Icon = ListIcon;
List.Item = ListItem;
List.Subheader = ListSubheader;