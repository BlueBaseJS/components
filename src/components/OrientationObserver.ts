import { RenderPropChildren, getComponent } from '@bluebase/core';

export interface OrientationObserverProps {
	children: RenderPropChildren<OrientationObserverState>;
}

export interface OrientationObserverState {
	isLandscape: boolean;
}

/**
 * # 🖥 Observes changes in Screen Orientation
 */
export const OrientationObserver = getComponent<OrientationObserverProps>('OrientationObserver');
