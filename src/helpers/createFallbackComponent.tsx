import { Body1, Body2, View } from '../';

import React from 'react';
import { getComponent } from '@bluebase/core';

export interface CreateFallbackComponentParams {
	name: string;
	moduleName: string;
	[key: string]: any;
}

/**
 * Creates a component that displays an error message with the Component name and the node module
 * name of the plugin that registers this plugin.
 */
export const createFallbackComponent = ({ name, moduleName }: CreateFallbackComponentParams) => {
	const Component = () => (
		<View
			style={{
				alignItems: 'center',
				backgroundColor: 'rgba(255,0,0,.05)',
				borderColor: 'red',
				borderRadius: 4,
				borderWidth: 1,
				padding: 8,
			}}
		>
			<Body1 style={{ color: 'red' }}>
				"
				<Body1 style={{ color: 'red', fontWeight: 'bold' }} testID="fallback-name">
					{name}
				</Body1>
				" component not found!
			</Body1>
			<Body2 style={{ marginTop: 8 }}>
				Did you forget to add{' '}
				<Body2
					style={{
						backgroundColor: 'rgba(255,0,0,.1)',
						borderRadius: 4,
						fontWeight: 'bold',
						paddingHorizontal: 8,
						paddingVertical: 4,
						// textDecorationLine: 'underline',
					}}
					testID="fallback-module-name"
				>
					{moduleName}
				</Body2>{' '}
				plugin in your project?
			</Body2>
		</View>
	);

	return Component;
};

/**
 * Like getComponent, but with a fallback component, if the original component is not found.
 */
export function getComponentWithFallback<T = any>(
	opts: CreateFallbackComponentParams
): (...keys: Array<string | React.ComponentType<any>>) => React.ComponentType<T> {
	const Fallback = createFallbackComponent(opts);
	return (...keys: Array<string | React.ComponentType<any>>) => getComponent<T>(...keys, Fallback);
}
