import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface IconProps extends TextProps {
	size?: number;
	name?: string;
	color?: string;
}

export const Icon = getComponent<IconProps>('Icon');
