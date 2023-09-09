import { getComponent } from '@bluebase/core';
import { NavigationAction, ParamListBase } from '@react-navigation/native';
import { To } from '@react-navigation/native/lib/typescript/src/useLinkTo';
import React from 'react';
import { GestureResponderEvent, TextProps } from 'react-native';

export type LinkProps = {
	[key: string]: any;

	to: To<ParamListBase>;
	action?: NavigationAction;
	target?: string;
	onPress?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
} & (TextProps & {
	children: React.ReactNode;
});

export const LinkDefaultProps: Partial<LinkProps> = {
	method: 'navigate',
};

/**
 * 🔗 Link
 */
export const Link = getComponent<LinkProps>('Link');
Link.defaultProps = LinkDefaultProps;
