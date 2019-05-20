import { getComponent } from '@bluebase/core';

export interface FormattedMessageProps {
	component?: React.ComponentType<any>;

	[key: string]: any;
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
