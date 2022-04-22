import { getComponent } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { MaybeThunk } from '../utils/Thunks';

type renderFunction<T = any> = (props: T) => React.ReactElement<T>;

export interface NavigationOptions {
	title?: string;
	header?: React.ReactElement<any> | renderFunction<any /* HeaderProps*/> | null;
	headerTransparent?: boolean;
	headerTitle?: string | React.ReactElement<any>;
	headerTitleStyle?: TextStyle;
	headerTitleAllowFontScaling?: boolean;
	headerTintColor?: string;
	headerLeft?:
		| React.ReactElement<any>
		| ((backButtonProps: any /* HeaderBackButtonProps*/) => React.ReactElement<any>)
		| null;
	headerBackTitle?: string | null;
	headerBackImage?: React.ReactElement<any>;
	headerTruncatedBackTitle?: string;
	headerBackTitleStyle?: TextStyle;
	headerPressColorAndroid?: string;
	headerRight?: React.ReactElement<any> | ((props: any) => React.ReactElement<any>) | null;
	headerStyle?: ViewStyle;
	headerForceInset?: any /* HeaderForceInset*/;
	headerBackground?: React.ReactElement<any> | renderFunction<any /* HeaderProps*/> | null;
	gesturesEnabled?: boolean;
	gestureResponseDistance?: { vertical?: number; horizontal?: number };
	gestureDirection?: 'default' | 'inverted';
	// [key: string]: any,
}

export interface RouteConfig {
	[key: string]: any;

	/** Name of route */
	name: string;

	/** Screen component */
	screen?: React.ComponentType<any> | string;

	/** URL */
	path: string;

	/** Should route match exact path pattern? */
	exact?: boolean;

	/** Navigation options */
	navigationOptions?: MaybeThunk<NavigationOptions>;

	/** Child Navigator */
	navigator?: NavigatorProps;
}

export interface NavigatorProps {
	[key: string]: any;

	/**
	 * Defaults to 'switch'
	 */
	type?: 'switch' | 'stack' | string;

	/**
	 * Routes
	 */
	routes: MaybeThunk<RouteConfig[]>;

	/**
	 * [Stack Navigator] Sets the default screen of the navigator.
	 * Must match one of the keys in route configs.
	 */
	initialRouteName?: string;

	/**
	 * Default navigation options to use for screens.
	 */
	defaultNavigationOptions?: MaybeThunk<NavigationOptions>;

	/**
	 * Defines the style for rendering and transitions:
	 *
	 * - `card` - Use the standard iOS and Android screen transitions. This is the default.
	 * - `modal` - Make the screens slide in from the bottom which is a common iOS pattern.
	 * Only works on iOS, has no effect on Android.
	 */
	mode?: 'card' | 'modal';

	/**
	 * Specifies how the header should be rendered:
	 *
	 * - `float` - Render a single header that stays at the top and animates as screens
	 * are changed. This is a common pattern on iOS.
	 * - `screen` - Each screen has a header attached to it and the header fades in and
	 * out together with the screen. This is a common pattern on Android.
	 * - `none` - No header will be rendered.
	 */
	headerMode?: 'float' | 'screen' | 'none';
}

/**
 * Props for the Router component
 */
export interface NavigationProps {
	[key: string]: any;
	navigator: NavigatorProps;
}

export const Navigation = getComponent<NavigationProps>('Navigation');
