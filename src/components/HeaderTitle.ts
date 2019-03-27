import { TextProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface HeaderTitleProps extends TextProps {}
export const HeaderTitle = getComponent<HeaderTitleProps>('HeaderTitle');
