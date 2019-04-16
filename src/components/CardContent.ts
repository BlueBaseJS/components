import { StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface CardContentProps {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

export const CardContentDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🃏 CardContent
 *
 * A component to show content inside a Card.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Body1, Card, H4 } from '@bluebase/components';

const MyComponent = () => (
  <Card>
    <Card.Content>
      <H4>Card title</H4>
      <Body1>Card content</Body1>
    </Card.Content>
  </Card>
);

export default MyComponent;
```
 */
export const CardContent = getComponent<CardContentProps>('CardContent');
CardContent.defaultProps = CardContentDefaultProps;
