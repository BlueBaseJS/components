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

	let Component: React.ComponentType<any>;
	const displayName = keys.join('_');

	const BlueBaseComponent = (props: T) => (
		<BlueBaseConsumer>
			{(BB: BlueBase) => {

				// If there is no BlueBase context, throw an Error
				if (!BB) {
					// tslint:disable-next-line: max-line-length
					throw Error(`Could not resolve component "${displayName}" in "getComponent" command. Reason: BlueBase context not found.`);
				}

				// We don't want to resolve the component on every render.
				// If we don't do this, a new component is created on every
				// render, causing various set of problems.
				if (!Component) {
					// Do the rain dance
					Component = BB.Components.resolve(...keys);
				}

				// Render
				return React.createElement(Component, props);
			}}
		</BlueBaseConsumer>
	);

	BlueBaseComponent.displayName = displayName;

	return BlueBaseComponent as React.ComponentType<T>;
}
