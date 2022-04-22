import { getComponent } from '@bluebase/core';

import { NavigationActionParams } from './NavigationActions';

export interface RedirectProps {
	routeName?: string;
	path?: string;
	params?: NavigationActionParams;
	push?: boolean;
}

export const Redirect = getComponent<RedirectProps>('Redirect');
