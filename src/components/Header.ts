import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { getComponent } from '@bluebase/core';

type renderFunction<T = any> = (props: T) => React.ReactElement<T>;

export interface HeaderProps {
	headerTitleContainerStyle?: ViewStyle;
	headerRightContainerStyle?: ViewStyle;
	headerLeftContainerStyle?: ViewStyle;
	layoutPreset?: 'left' | 'center';

	backTitleVisible?: boolean;
	headerBackAllowFontScaling?: boolean;

	styles?: Partial<HeaderStyles>;

	// NavigationOptions
	title?: string;
	header?: React.ReactElement<any> | renderFunction<any /*HeaderProps*/> | null;
	headerTransparent?: boolean;
	headerTitle?: string | React.ReactElement<any>;
	headerTitleStyle?: TextStyle;
	headerTitleAllowFontScaling?: boolean;
	headerTintColor?: string;
	headerLeft?:
		| React.ReactElement<any>
		| ((backButtonProps: any /*HeaderBackButtonProps*/) => React.ReactElement<any>)
		| null;
	headerBackTitle?: string | null;
	headerBackImage?: React.ReactElement<any>;
	headerTruncatedBackTitle?: string;
	headerBackTitleStyle?: TextStyle;
	headerPressColorAndroid?: string;
	headerRight?: React.ReactElement<any> | null;
	headerStyle?: ViewStyle;
	headerForceInset?: any /*HeaderForceInset*/;
	headerBackground?: React.ReactElement<any> | renderFunction<any /*HeaderProps*/> | null;
	// [key: string]: any,
}

export interface HeaderStyles {
	root: ViewStyle;
	wrapper: ViewStyle;
	transparentContainer: ViewStyle;
	header: ViewStyle;
	item: ViewStyle;
	iconMaskContainer: ViewStyle;
	iconMaskFillerRect: ViewStyle;
	iconMask: ImageStyle;
	title: ViewStyle;
	left: ViewStyle;
	right: ViewStyle;
	flexOne: ViewStyle;
}

/**
 * 🎩 Header
 */
export const Header = getComponent<HeaderProps>('Header');
