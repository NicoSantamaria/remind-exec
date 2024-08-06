import React from 'react';
import { Task } from '../utils/types';

const SubTask: React.FC<Task> = (subtask) => {
	return (
		<div className="ml-4">
			{/* <p>{subtask.title}</p>
			<p><i>{subtask.description}</i></p>
			<p>
				{subtask.children?.map((task) => (
					<SubTask {...task} />
				))}
			</p> */}
		</div>
	);
};

export default SubTask;
