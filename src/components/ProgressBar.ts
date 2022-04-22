import { getComponent } from '@bluebase/core';
import { ProgressBarAndroidProps } from 'react-native';

export interface ProgressBarProps extends ProgressBarAndroidProps {}

export const ProgressBarDefaultProps = {
	animating: true,
	indeterminate: true,
	styleAttr: 'Normal' as ProgressBarProps['styleAttr'],
};

// tslint:disable: jsdoc-format
/**
 * # 💈 ProgressBar
 *
 * Used to indicate that the app is loading or there is some activity in the app.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { ProgressBar } from '@bluebase/components';

const MyComponent = () => (
  <ProgressBar indeterminate={false} progress={0.5} />
);

export default MyComponent;
```
 */
export const ProgressBar = getComponent<ProgressBarProps>('ProgressBar');

ProgressBar.defaultProps = ProgressBarDefaultProps;
