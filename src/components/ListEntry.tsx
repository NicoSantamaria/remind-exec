import React from 'react';
import { ListData } from '../utils/types';

type ListEntryProps = {
	user_id: number,
	parent_id: number

}

const ListEntry: React.FC<ListEntryProps> = ({ user_id, parent_id }) => {
	return (
		<div>
			<p>
				{user_id}
			</p>
			<p>
				{parent_id}
			</p>
		</div>
	);
};

export default ListEntry;
