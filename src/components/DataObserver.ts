import { MaybeRenderPropChildren } from '../utils/Components';
import { getComponent } from '../getComponent';

export interface DataObserverChildrenProps {
	/** Initial data that was passed as a prop. */
	data: any;

	/** Loading flag. */
	loading: boolean;

	/** Empty flag. */
	empty: boolean;
}

export interface DataObserverProps {
	/** A function used to check if data is loading. */
	isLoading?: (props: DataObserverProps & { [prop: string]: any }) => boolean;

	/** A function used to check if data is empty. */
	isEmpty?: (props: DataObserverProps & { [prop: string]: any }) => boolean;

	/** Loading flag. */
	loading?: boolean;

	/** Input data. */
	data?: any;

	/**
	 * Children, data is passed in the param object of the render prop function.
	 * This object is typed as `DataObserverChildrenProps`.
	 */
	children?: MaybeRenderPropChildren<DataObserverChildrenProps>;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

/**
 * # ⚡️ DataObserver
 *
 * Observes data to check if it is data is loading, loaded or empty. The resulting flags
 * are passed on to the children function. These flags may be used to show different UIs,
 * i.e. loading state, empty state, etc.
 *
 * ## Usage
 * ```jsx
 * <DataObserver>
 *  <Text>{data}</Text>
 * </DataObserver>
 * ```
 */
export const DataObserver = getComponent<DataObserverProps>('DataObserver');
