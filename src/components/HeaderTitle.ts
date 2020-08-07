import { TextProps, TextStyle } from 'react-native';

import { getComponent } from '@bluebase/core';

export interface HeaderTitleStyles {
	root: TextStyle;
}

export interface HeaderTitleProps extends TextProps {
	styles?: Partial<HeaderTitleStyles>;
}

export const HeaderTitle = getComponent<HeaderTitleProps>('HeaderTitle');
