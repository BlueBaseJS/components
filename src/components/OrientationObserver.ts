import { getComponent, RenderPropChildren } from '@bluebase/core';

export interface OrientationObserverProps {
	children: RenderPropChildren<boolean>;
}

/**
 * # 🖥 Observes changes in Screen Orientation
 */
export const OrientationObserver = getComponent<OrientationObserverProps>('OrientationObserver');
