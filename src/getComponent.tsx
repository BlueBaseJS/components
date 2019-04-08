import { BlueBase, BlueBaseContext } from '@bluebase/core';
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

	return class BlueBaseComponent extends React.Component<any> {

		static displayName = displayName;

		static contextType = BlueBaseContext;

		Component?: React.ComponentType<T>;


		// Before mounting, resolve component and store it.
		// So we don't end up creating a new component during every render
		componentWillMount() {

			const BB: BlueBase = this.context;

			// If there is no BlueBase context, throw an Error
			if (!BB) {
				// tslint:disable-next-line: max-line-length
				throw Error(`Could not resolve component "${displayName}" in "getComponent" command. Reason: BlueBase context not found.`);
			}

			// We don't want to resolve the component on every render.
			// If we don't do this, a new component is created on every
			// render, causing various set of problems.
			if (!this.Component) {

				// Do the rain dance
				this.Component = BB.Components.resolve(...keys);
			}

		}

		render() {
			// Render
			return this.Component? React.createElement(this.Component, this.props) : null;
		}
	};
}