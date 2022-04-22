import { getComponent } from '@bluebase/core';
import React from 'react';

import { MaybeRenderPropChildren } from '../utils/Components';

export interface ErrorObserverState {
	readonly error?: Error;
}

export interface ErrorObserverProps {
	[prop: string]: any;

	/** If an error is passed as a prop, shows an error state. */
	error?: Error;

	/** A function to check error based on props. */
	checkError?: (props: ErrorObserverProps & any, state: ErrorObserverState) => Error;

	/** Component to show the error state. */
	errorComponent?: React.ComponentType<any>;

	/** Children are rendered when there are no error. */
	children?: MaybeRenderPropChildren;

	/**
	 * Used to locate this view in end-to-end tests.
	 */
	testID?: string;
}

/**
 * # 🚨 ErrorObserver
 *
 * Observes any exceptions in child tree hierarchy. When an exception is caught, displays
 * an Error state to gracefully handle it on the frontend.
 *
 * ## Usage
 * ```jsx
 * <ErrorObserver
 *  errorComponent={ErrorState}
 * >
 *  <Text>Rendered if there is no error here</Text>
 * </ErrorObserver>
 * ```
 */
export const ErrorObserver = getComponent<ErrorObserverProps>('ErrorObserver');
