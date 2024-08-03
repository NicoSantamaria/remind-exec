import React from 'react';
import { Subtask } from '../utils/types';

const SubTask: React.FC<Subtask> = (subtask) => {
	return (
		<div className="ml-4">
			<p>{subtask.title}</p>
			<p><i>{subtask.description}</i></p>
			<p>
				{subtask.children?.map((task) => (
					<SubTask {...task} />
				))}
			</p>
		</div>
	);
};

export default SubTask;
