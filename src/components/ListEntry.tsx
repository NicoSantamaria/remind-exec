import React from 'react';
import { Task } from '../utils/types';

type ListEntryProps = {
	user_id: number,
	parent_id: number,
	first_layer: boolean,
}

const ListEntry: React.FC<ListEntryProps> = ({ user_id, parent_id, first_layer }) => {
	// Call to grab next layer from user_id and parent_id
	// Parent_id will refer to list table if first_layer == true, else
	// refers to tasks table
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
