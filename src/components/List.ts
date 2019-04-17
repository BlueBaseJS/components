import React from 'react';
import { ViewProps } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface ListProps extends ViewProps {
	children?: React.ReactNode;
}

/**
 * # 📚 List
 *
 * A component used to group list items.
 */
export const List = getComponent<ListProps>('List');
