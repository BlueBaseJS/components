import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface H2Props extends TextProps {}

export const H2 = getComponent<H2Props>('H2');
