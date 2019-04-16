import { StyleProp, TextStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface DialogTitleProps {
	children: React.ReactNode;
	style?: StyleProp<TextStyle>;
}

export const DialogTitleDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🔲 DialogTitle
 *
 * A component to show a title in a Dialog.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Body1, Dialog } from '@bluebase/components';

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
			<Dialog
				visible={this.state.visible}
				onDismiss={this._hideDialog}>
				<Dialog.Title>This is a title</Dialog.Title>
				<Dialog.Content>
					<Body1>This is simple dialog</Body1>
				</Dialog.Content>
			</Dialog>
    );
  }
}

export default MyComponent;
```
 */
export const DialogTitle = getComponent<DialogTitleProps>('DialogTitle');
DialogTitle.defaultProps = DialogTitleDefaultProps;
