/* eslint-disable max-len */
import { getComponent } from '@bluebase/core';
import { NavigationProp, ParamListBase, Route } from '@react-navigation/native';
import React from 'react';

export interface NavigationActionParams {
	[key: string]: any;
}

export interface NavitionActionRouteNamePayload {
	routeName: string;
	params?: NavigationActionParams;
}

export interface NavigationActionPathPayload {
	path: string;
	params?: NavigationActionParams;
}

export type NavigationActionPayload =
	| string
	| NavitionActionRouteNamePayload
	| NavigationActionPathPayload;

export type NavigationActionsObject = {
	source: any;

	/**
	 * Route
	 */
	route: Route<string, object>;

	/**
	 * Navigate to a route in current navigation tree.
	 *
	 * @param name Name of the route to navigate to.
	 * @param [params] Params object for the route.
	 */
	navigate<RouteName extends keyof ParamListBase>(
		...args: undefined extends ParamListBase[RouteName]
			? [screen: RouteName] | [screen: RouteName, params: ParamListBase[RouteName]]
			: [screen: RouteName, params: ParamListBase[RouteName]]
	): void;

	/**
	 * Navigate to a route in current navigation tree.
	 *
	 * @param route Object with `key` or `name` for the route to navigate to, and a `params` object.
	 */
	navigate<RouteName extends keyof ParamListBase>(
		options:
			| {
					key: string;
					params?: ParamListBase[RouteName];
					merge?: boolean;
			  }
			| {
					name: RouteName;
					key?: string;
					params: ParamListBase[RouteName];
					merge?: boolean;
			  }
	): void;

	/**
	 * Reset the navigation state to the provided state.
	 *
	 * @param state Navigation state object.
	 */
	reset(state: any): void;

	/**
	 * Go back to the previous route in history.
	 */
	goBack(): void;

	/**
	 * Check if the screen is focused. The method returns `true` if focused, `false` otherwise.
	 * Note that this method doesn't re-render screen when the focus changes. So don't use it in `render`.
	 * To get notified of focus changes, use `addListener('focus', cb)` and `addListener('blur', cb)`.
	 * To conditionally render content based on focus state, use the `useIsFocused` hook.
	 */
	isFocused(): boolean;

	/**
	 * Check if dispatching back action will be handled by navigation.
	 * Note that this method doesn't re-render screen when the result changes. So don't use it in `render`.
	 */
	canGoBack(): boolean;

	/**
	 * Returns the name of the navigator specified in the `name` prop.
	 * If no name is specified, returns `undefined`.
	 */
	getId(): string | undefined;

	/**
	 * Returns the navigation prop from a parent navigator based on the ID.
	 * If an ID is provided, the navigation prop from the parent navigator with matching ID (including current) will be returned.
	 * If no ID is provided, the navigation prop from the immediate parent navigator will be returned.
	 *
	 * @param id Optional ID of a parent navigator.
	 */
	getParent<T = NavigationProp<ParamListBase> | undefined>(id?: string): T;

	/**
	 * Update the param object for the route.
	 * The new params will be shallow merged with the old one.
	 *
	 * @param params Params object for the current route.
	 */
	setParams(params: any): void;

	/**
	 * Update the options for the route.
	 * The options object will be shallow merged with default options object.
	 *
	 * @param options Options object for the route.
	 */
	setOptions(options: any): void;

	// ////////
	// Stack //
	// ////////

	/**
	 * Replace the current route with a new one.
	 *
	 * @param name Route name of the new route.
	 * @param [params] Params object for the new route.
	 */
	replace<RouteName extends keyof ParamListBase>(
		...args: undefined extends ParamListBase[RouteName]
			? [screen: RouteName] | [screen: RouteName, params: ParamListBase[RouteName]]
			: [screen: RouteName, params: ParamListBase[RouteName]]
	): void;

	/**
	 * Push a new screen onto the stack.
	 *
	 * @param name Name of the route for the tab.
	 * @param [params] Params object for the route.
	 */

	push<RouteName extends keyof ParamListBase>(
		...args: undefined extends ParamListBase[RouteName]
			? [screen: RouteName] | [screen: RouteName, params: ParamListBase[RouteName]]
			: [screen: RouteName, params: ParamListBase[RouteName]]
	): void;
	/**
	 * Pop a screen from the stack.
	 */

	pop(count?: number): void;
	/**
	 * Pop to the first route in the stack, dismissing all other screens.
	 */
	popToTop(): void;

	// /////////
	// Drawer //
	// /////////

	/**
	 * Open the drawer sidebar.
	 */
	openDrawer(): void;

	/**
	 * Close the drawer sidebar.
	 */
	closeDrawer(): void;

	/**
	 * Open the drawer sidebar if closed, or close if opened.
	 */
	toggleDrawer(): void;

	// //////
	// Tab //
	// //////

	/**
	 * Jump to an existing tab.
	 *
	 * @param name Name of the route for the tab.
	 * @param [params] Params object for the route.
	 */
	jumpTo<RouteName extends Extract<keyof ParamListBase, string>>(
		...args: undefined extends ParamListBase[RouteName]
			? [screen: RouteName] | [screen: RouteName, params: ParamListBase[RouteName]]
			: [screen: RouteName, params: ParamListBase[RouteName]]
	): void;
};

export interface NavigationActionsProps {
	children: (actions: NavigationActionsObject) => React.ReactNode;
}

export const NavigationActions = getComponent<NavigationActionsProps>('NavigationActions');
