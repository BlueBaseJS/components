import { MaybeRenderPropChildren } from '../utils/Components';
import { SyntheticEvent } from 'react';
import { getComponent } from '@bluebase/core';

interface MouseEventObject {
	e: SyntheticEvent;
	setIsHovering: () => void;
	unsetIsHovering: () => void;
}

export interface HoverObserverProps {
	/** Milliseconds to delay hover trigger. Defaults to zero. */
	hoverDelayInMs?: number;

	/** Milliseconds to delay hover-off trigger. Defaults to zero. */
	hoverOffDelayInMs?: number;

	/** Called with named argument isHovering when isHovering is set or unset. */
	onHoverChanged?: (state: HoverObserverState) => void;

	/** Defaults to set isHovering. */
	onMouseEnter?: (obj: MouseEventObject) => void;

	/** Defaults to unsetting isHovering. */
	onMouseLeave?: (obj: MouseEventObject) => void;
	onMouseOver?: (obj: MouseEventObject) => void;
	onMouseOut?: (obj: MouseEventObject) => void;
	children?: MaybeRenderPropChildren<HoverObserverState>;
}

export interface HoverObserverState {
	readonly isHovering: boolean;
}

/**
 * # 🛸 HoverObserver
 *
 * A React component that notifies its children of hover interactions.
 *
 * Initial code taken from: https://github.com/ethanselzer/react-hover-observer.
 *
 * ## Usage
 * ```jsx
 * <HoverObserver>
 *  {({ isHovering }) => (
 * 		 <YourChildComponent isActive={isHovering} />
 *  )}
 * </HoverObserver>
 * ```
 */
export const HoverObserver = getComponent<HoverObserverProps>('HoverObserver');
