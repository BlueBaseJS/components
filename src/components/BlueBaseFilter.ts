import { getComponent } from '@bluebase/core';
import React from 'react';

export interface BlueBaseFilterProps<T = any> {
	/** Event name */
	filter: string;

	/** Initial value to filter */
	value: T;

	/** Filter arguments */
	args?: { [key: string]: any };

	/** Children as function (render prop pattern). Final value is passed as param to this function. */
	children: (value: any) => React.ReactNode;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

/**
 * # 🚇 BlueBaseFilter
 *
 * Since filters in BlueBase are based on promises, it may be tedious to handle loading state,
 * error state, etc. It may also become a repetitive task.
 *
 * To solve this issue, we ship BlueBaseFilter component. Just pass name of filter, initial value,
 * and filter arguments as props. The final filtered value will be passed to the children function.
 * This component will handle loading and error states itself.
 *
 * ## Usage
 * ```jsx
 * <BlueBaseFilter filter="math" value={5} args={{ op: 'add' }} children={(val: number) => {
 * 	return <Text>{val}</Text>;
 * }} />
 * ```
 */
export const BlueBaseFilter = getComponent<BlueBaseFilterProps>('BlueBaseFilter');
