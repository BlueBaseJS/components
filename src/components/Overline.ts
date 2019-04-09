import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface OverlineProps extends TextProps {}

export const Overline = getComponent<OverlineProps>('Overline');
