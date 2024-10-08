import React from 'react';
import { ListData } from '../utils/types';

const QueueEntry: React.FC<ListData> = (list_data) => {
	return (
		<div>
			<h1>{list_data.title}</h1>
		</div> 
	);
};

export default QueueEntry;
