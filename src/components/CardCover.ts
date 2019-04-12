import { ImageProps } from 'react-native';
import { getComponent } from '../getComponent';

export interface CardCoverProps extends ImageProps {}

export const CardCoverDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🃏 CardCover
 *
 * A component to show a cover image inside a Card.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Card } from '@bluebase/components';

const MyComponent = () => (
  <Card>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
  </Card>
);

export default MyComponent;
```
 */
export const CardCover = getComponent<CardCoverProps>('CardCover');
CardCover.defaultProps = CardCoverDefaultProps;