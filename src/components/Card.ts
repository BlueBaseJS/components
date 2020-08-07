import { CardActions } from './CardActions';
import { CardContent } from './CardContent';
import { CardCover } from './CardCover';
import { CardHeader } from './CardHeader';
import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface CardProps {
	/** Function to execute on press. */
	onPress?: () => void;

	/** Function to execute on long press. */
	onLongPress?: () => void;

	children: React.ReactNode;
	style?: ViewStyle;
}

export const CardDefaultProps = {};

type CardType = React.ComponentType<CardProps> & {
	Actions: typeof CardActions;
	Content: typeof CardContent;
	Cover: typeof CardCover;
	Header: typeof CardHeader;
};

// tslint:disable: jsdoc-format
/**
 * # 🃏 Card
 *
 * Cards are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information.
 * Elements, like text and images, should be placed on them in a way that
 * clearly indicates hierarchy.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Avatar, Body1, Button, Card, H4 } from '@bluebase/components';

const MyComponent = () => (
  <Card>
		<Card.Header
			title="Card Title"
			subtitle="Card Subtitle"
			left={<Avatar type="image" image={{ uri: 'https://picsum.photos/200' }} />}
			right={(props) => <Button title="Go" onPress={() => {}} />}
		/>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
		<Card>
			<Card.Content>
				<H4>Card title</H4>
				<Body1>Card content</Body1>
			</Card.Content>
		</Card>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent;
```
 */
export const Card = getComponent<CardProps>('Card') as CardType;
Card.Actions = CardActions;
Card.Content = CardContent;
Card.Cover = CardCover;
Card.Header = CardHeader;

Card.defaultProps = CardDefaultProps;
