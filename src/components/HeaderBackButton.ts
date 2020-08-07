import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import { getComponent } from '@bluebase/core';

export interface HeaderBackButtonStyles {
	androidButtonWrapper: ViewStyle;
	icon: ImageStyle;
	iconWithTitle: ImageStyle;
	wrapper: ViewStyle;
	title: TextStyle;
}

export interface HeaderBackButtonProps {
	tintColor?: string;
	backTitleVisible?: boolean;
	title?: string | null;
	backImage?: React.ReactElement<any>;
	truncatedTitle?: string;
	titleStyle?: TextStyle;
	pressColorAndroid?: string;
	onPress?: () => void;
	width?: number;
	allowFontScaling?: boolean;
	styles?: Partial<HeaderBackButtonStyles>;
	style?: ViewStyle;
	testId?: string;
}

export const HeaderBackButton = getComponent<HeaderBackButtonProps>('HeaderBackButton');
