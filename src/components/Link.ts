import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import { NavigationActionParams } from './NavigationActions';
import { getComponent } from '@bluebase/core';

export interface LinkProps {
	routeName?: string;
	path?: string;
	params?: NavigationActionParams;
	onPress?: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
	component?: React.ComponentType<any>;
	method?: 'navigate' | 'push' | 'replace'

	/**
	 * @deprecated
	 * Use "method" instead
	 */
	replace?: boolean;
}

export const LinkDefaultProps: Partial<LinkProps> = {
	method: 'navigate'
};

/**
 * 🔗 Link
 */
export const Link = getComponent<LinkProps>('Link');
Link.defaultProps = LinkDefaultProps;
