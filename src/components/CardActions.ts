import { getComponent } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

export interface CardActionsProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export const CardActionsDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🃏 CardActions
 *
 * A component to show a list of actions inside a Card.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Button, Card } from '@bluebase/components';

const MyComponent = () => (
  <Card>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;
```
 */
export const CardActions = getComponent<CardActionsProps>('CardActions');
CardActions.defaultProps = CardActionsDefaultProps;
