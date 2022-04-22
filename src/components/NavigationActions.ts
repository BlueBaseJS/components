import { getComponent } from '@bluebase/core';
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

export interface NavigationActionsObject {
	navigate: (routeName: NavigationActionPayload, params?: NavigationActionParams) => void;
	goBack: () => void;

	replace: (routeName: NavigationActionPayload, params?: NavigationActionParams) => void;
	push: (routeName: NavigationActionPayload, params?: NavigationActionParams) => void;
	pop: (steps?: number) => void;

	setParams: (params: NavigationActionParams, addToSearch?: boolean) => void;
	getParam: (key: string, defaultValue: any) => any;

	source: any;

	state: {
		key: string;
		routeName: string;
		url: string;
		search?: string;
		params: NavigationActionParams;
	};
}

export interface NavigationActionsProps {
	children: (actions: NavigationActionsObject) => React.ReactNode;
}

export const NavigationActions = getComponent<NavigationActionsProps>('NavigationActions');
