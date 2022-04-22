import { getComponent } from '@bluebase/core';
import React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

import { NavigationActionParams } from './NavigationActions';

export interface LinkProps {
	/**
	 * If we give a different component, like Button, allow more props to pass on
	 * to the component.
	 */
	[key: string]: any;

	routeName?: string;
	path?: string;
	params?: NavigationActionParams;
	onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	component?: React.ComponentType<any>;
	method?: 'navigate' | 'push' | 'replace';

	/**
	 * @deprecated
	 * Use "method" instead
	 */
	replace?: boolean;
}

export const LinkDefaultProps: Partial<LinkProps> = {
	method: 'navigate',
};

/**
 * 🔗 Link
 */
export const Link = getComponent<LinkProps>('Link');
Link.defaultProps = LinkDefaultProps;
