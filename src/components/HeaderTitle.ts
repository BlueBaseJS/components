import { StyleProp, TextProps, TextStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface HeaderTitleStyles {
	root: StyleProp<TextStyle>;
}

export interface HeaderTitleProps extends TextProps {
	styles?: Partial<HeaderTitleStyles>;
}

export const HeaderTitle = getComponent<HeaderTitleProps>('HeaderTitle');
