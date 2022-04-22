import { getComponent } from '@bluebase/core';
import { TextProps, TextStyle } from 'react-native';

export interface HeaderTitleStyles {
	root: TextStyle;
}

export interface HeaderTitleProps extends TextProps {
	styles?: Partial<HeaderTitleStyles>;
}

export const HeaderTitle = getComponent<HeaderTitleProps>('HeaderTitle');
