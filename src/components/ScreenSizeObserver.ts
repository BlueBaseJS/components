import { RenderPropChildren, getComponent } from '@bluebase/core';

export type SCREEN_SIZE = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ScreenSizeObserverProps {
	children: RenderPropChildren<SCREEN_SIZE>;
}

/**
 * # 🖥 Observes changes in Screen Size
 */
export const ScreenSizeObserver = getComponent<ScreenSizeObserverProps>('ScreenSizeObserver');
