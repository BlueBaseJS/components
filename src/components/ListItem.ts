import { getComponent } from '../getComponent';

export interface ListItemProps {
	title: React.ReactNode;
	description?: React.ReactNode;
	left?: React.ReactNode;
	right?: React.ReactNode;
	onPress?: () => void;
	active?: boolean;
	disabled?: boolean;
}

export const ListItem = getComponent<ListItemProps>('ListItem');
