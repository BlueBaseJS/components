import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface H3Props extends TextProps {}

export const H3 = getComponent<H3Props>('H3');
