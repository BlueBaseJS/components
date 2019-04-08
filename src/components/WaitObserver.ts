import { MaybeRenderPropChildren } from '../utils/Components';
import { getComponent } from '../getComponent';

export interface WaitObserverChildrenProps {
	/** A flag that tells if a timeout has occured */
	timedOut: boolean;

	/** A function the resets timers */
	retry: () => void;
}

export interface WaitObserverProps {
	/** Delay before rendering a component. */
	delay?: number;

	/** Timeout duration. */
	timeout?: number;

	/**
	 * A callback function executed when a timeout occurs.
	 */
	onTimeout?: () => void;

	/**
	 * A callback function executed when retry method is called from the child component.
	 */
	onRetry?: () => void;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;

	children?: MaybeRenderPropChildren<WaitObserverChildrenProps>;
}

/**
 * # ⏰ WaitObserver
 *
 * This component is used to do the following:
 *
 * - WaitObserver a certain period of time before rendering a component
 * - Show timeout state, if the component is visible for a certain time period
 *
 * A use case for this can be to show a loading state after waiting a certain period
 * of time for data to load, and if the loading takes too long, show a timeout state.
 *
 * ## Usage
 * ```jsx
 * <WaitObserver
 *  delay={1000}
 *  timeout={3000}
 *  onTimeout={onTimeout}
 *  onRetry={onRetry}
 *  children={(props: WaitObserverChildrenProps) => <LoadingState {...props} />}
 * />
 * ```
 */
export const WaitObserver = getComponent<WaitObserverProps>('WaitObserver');
