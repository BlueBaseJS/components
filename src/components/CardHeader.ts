import { StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface CardHeaderProps {
	/** Text for the title. */
	title?: React.ReactNode;

	/** Text for the description. */
	description?: React.ReactNode;

	left?: React.ReactNode;
	right?: React.ReactNode;

	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

export const CardHeaderDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🃏 CardHeader
 *
 * A component to show a title, subtitle and an avatar inside a Card.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Avatar, Button, Card } from '@bluebase/components';

const MyComponent = () => (
  <Card.Header
    title="Card Title"
    subtitle="Card Subtitle"
    left={<Avatar type="image" image={{ uri: 'https://picsum.photos/200' }} />}
    right={(props) => <Button title="Go" onPress={() => {}} />}
  />
);

export default MyComponent;
```
 */
export const CardHeader = getComponent<CardHeaderProps>('CardHeader');
CardHeader.defaultProps = CardHeaderDefaultProps;
