import { StyleProp, ViewStyle } from 'react-native';
import { DialogActions } from './DialogActions';
import { DialogContent } from './DialogContent';
import { DialogTitle } from './DialogTitle';
import { getComponent } from '../getComponent';

export interface DialogProps {
	/**
	 * Determines whether clicking outside the dialog dismiss it.
	 */
	dismissable?: boolean;

	/**
	 * Callback that is called when the user dismisses the dialog.
	 */
	onDismiss?: () => void;

	/**
	 * Determines Whether the dialog is visible.
	 */
	visible: boolean;

	/**
	 * Content of the `Dialog`.
	 */
	children: React.ReactNode;

	style?: StyleProp<ViewStyle>;
}

export const DialogDefaultProps = {};

type DialogType = React.ComponentType<DialogProps> & {
	Actions: typeof DialogActions;
	Content: typeof DialogContent;
	Title: typeof DialogTitle;
};

// tslint:disable: jsdoc-format
/**
 * # 🔲 Dialog
 *
 * Dialogs inform users about a specific task and may contain critical
 * information, require decisions, or involve multiple tasks.
 *
 * ## Usage
 ```jsx
import * as React from 'react';
import { Button, Body1, Dialog, View } from '@bluebase/components';

export default class MyComponent extends React.Component {
  state = {
    visible: false,
  };

  _showDialog = () => this.setState({ visible: true });

  _hideDialog = () => this.setState({ visible: false });

  render() {
    return (
      <View>
        <Button onPress={this._showDialog}>Show Dialog</Button>
				<Dialog
					visible={this.state.visible}
					onDismiss={this._hideDialog}>
					<Dialog.Title>Alert</Dialog.Title>
					<Dialog.Content>
						<Body1>This is simple dialog</Body1>
					</Dialog.Content>
					<Dialog.Actions>
						<Button onPress={this._hideDialog}>Done</Button>
					</Dialog.Actions>
				</Dialog>
      </View>
    );
  }
}
```
 */
export const Dialog = getComponent<DialogProps>('Dialog') as DialogType;
Dialog.Actions = DialogActions;
Dialog.Content = DialogContent;
Dialog.Title = DialogTitle;

Dialog.defaultProps = DialogDefaultProps;
