import { StyleProp, ViewStyle } from 'react-native';
import { getComponent } from '../getComponent';

export interface DialogContentProps {
	children: React.ReactNode;
	style?: StyleProp<ViewStyle>;
}

export const DialogContentDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🔲 DialogContent
 *
 * A component to show content in a Dialog.
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
export const DialogContent = getComponent<DialogContentProps>('DialogContent');
DialogContent.defaultProps = DialogContentDefaultProps;
