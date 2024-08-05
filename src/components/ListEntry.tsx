import React, { useState, useEffect } from 'react';
import { Task } from '../utils/types';
import Loading from '../utils/Loading';

type ListEntryProps = {
	user_id: number,
	parent_id: number,
	first_layer: boolean,
}

const ListEntry: React.FC<ListEntryProps> = ({ user_id, parent_id, first_layer }) => {
	const [tasks, setTasks] = useState<Task[] | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		// fetch tasks
		setLoading(false);
	}, [loading]);

	// Call to grab next layer from user_id and parent_id
	// Parent_id will refer to list table if first_layer == true, else
	// refers to tasks table
	return (loading
		? <Loading />
		: <div>
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
