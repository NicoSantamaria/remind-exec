import React from 'react';
import { ListData } from '../App';
import SubTask from './SubTask'

const ListEntry: React.FC<ListData> = (list_data) => {
	return (
		<div className="mb-5">
			<h1><b>{list_data.title}</b></h1>
			<p><i>{list_data.description}</i></p>
			<p><i>{list_data.time_estimate?.amount} {list_data.time_estimate?.unit}</i></p>
			{list_data.subtasks?.map((task) => (
				<SubTask {...task} />
			))}
		</div>
	);
};

export default ListEntry;
