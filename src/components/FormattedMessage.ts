import { getComponent } from '@bluebase/core';
import React from 'react';

export interface FormattedMessageProps {
	[key: string]: any;
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
