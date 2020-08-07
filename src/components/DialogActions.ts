import { ViewStyle } from 'react-native';
import { getComponent } from '@bluebase/core';

export interface DialogActionsProps {
	children: React.ReactNode;
	style?: ViewStyle;
}

export const DialogActionsDefaultProps = {};

// tslint:disable: jsdoc-format
/**
 * # 🔲 DialogActions
 *
 * A component to show a list of actions in a Dialog.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Button, Dialog } from '@bluebase/components';

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
        <Dialog.Actions>
          <Button onPress={() => console.log("Cancel")}>Cancel</Button>
          <Button onPress={() => console.log("Ok")}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}


export default MyComponent;
```
 */
export const DialogActions = getComponent<DialogActionsProps>('DialogActions');
DialogActions.defaultProps = DialogActionsDefaultProps;
