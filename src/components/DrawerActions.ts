import { RenderPropChildren } from '@bluebase/core';
import { getComponent } from '../getComponent';

export interface DrawerActionsObject {
	openDrawer: () => void;
	closeDrawer: () => void;
	toggleDrawer: () => void;
}

export interface DrawerActionsProps {
	children: RenderPropChildren<DrawerActionsObject>;
}

/**
 * A render prop component to control the DrawerLayout
 */
export const DrawerActions = getComponent<DrawerActionsProps>('DrawerActions');
