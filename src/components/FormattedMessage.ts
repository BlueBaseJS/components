import { TextProps } from './Text';
import { getComponent } from '../getComponent';

export interface FormattedMessageProps extends TextProps {
	children: string;
	component?: React.ComponentType<any>;
}

// tslint:disable: jsdoc-format
/**
 * 🈯️ FormattedMessage
 *
 * Converts text message based on the current locale.
 *
 * ## Usage
 ```jsx
<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
```
 */
export const FormattedMessage = getComponent<FormattedMessageProps>('FormattedMessage');
