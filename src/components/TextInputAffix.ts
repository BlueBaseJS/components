import { getComponent } from '@bluebase/core';
import { TextStyle } from 'react-native';

export interface TextInputAffixProps {
	text: string;
	textStyle?: TextStyle;
}

export const TextInputAffixDefaultProps: Partial<TextInputAffixProps> = {
	// size: 24,
};

/**
 * 📚 TextInputAffix
 *
 * A component to text inside a TextInput.
 */
export const TextInputAffix = getComponent<TextInputAffixProps>('TextInputAffix');

TextInputAffix.defaultProps = TextInputAffixDefaultProps;
