import { BlueBase, BlueBaseConsumer } from '@bluebase/core';
import React from 'react';

/**
 * Resolves a component from BlueBase context, and returns it.
 * It is possible to pass multiple keys as backup. So if one component
 * is not found, the function will fallback and try to find next component.
 *
 * @param keys
 */
export function getComponent<T = any>(...keys: string[]) {

	if (keys.length === 0) {
		throw Error('getComponent method needs at least one key');
	}

	const displayName = keys.join('_');

	const BlueBaseComponent = (props: T) => (
		<BlueBaseConsumer>
			{(BB: BlueBase) => {

				if (!BB) {
				// tslint:disable-next-line: max-line-length
					throw Error(`Could not resolve component "${displayName}" in "getComponent" command. Reason: BlueBase context not found.`);
				}

				const Component = BB.Components.resolve(...keys);

				return React.createElement(Component, props);
			}}
		</BlueBaseConsumer>
	);

	BlueBaseComponent.displayName = displayName;

	return BlueBaseComponent as React.ComponentType<T>;
}
