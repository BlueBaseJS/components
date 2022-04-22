import { getComponent } from '@bluebase/core';
import { TextProps as NativeTextProps, TextStyle } from 'react-native';

export interface TextStyles {
	root: TextStyle;
}

export interface TextProps extends NativeTextProps {
	href?: string;
	target?: string;
	styles?: Partial<TextStyles>;
}

export const Text = getComponent<TextProps>('Text');
