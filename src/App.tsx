import React, { useState, useEffect } from 'react';
import { TEST_DATA } from './utils/test-data';
import ListEntry from './components/ListEntry';
import QueueEntry from './components/QueueEntry';

type TimeEstimate = { amount: number, time_unit: 'hrs' | 'mins' }
type TimePeriod = { start_time: Date, end_time: Date }
type Priority = 'Essential' | 'Important' | 'Optional';
export type ListItems = { list_name: string, list_data: ListData[] }

export type Subtask = {
	title: string,
	description: string | null,
	completed: boolean,
	children: Subtask[] | null
}

export type ListData = {
	title: string,
	description: string | null,
	location: string | null,
	due_date: Date | TimePeriod | null,
	time_estimate: TimeEstimate | null,
	attachments: any | null,
	priority: Priority
	subtasks: Subtask[] | null
}

const App: React.FC = () => {
	const [listItems, updateListItems] = useState<ListItems>(TEST_DATA);

	// call to db
	useEffect(() => {
		// call to db
	}, [listItems]);

	return (
		<main className="flex justify-between h-full w-full">
		
			<div className="w-full border border-black rounded m-5">
				<h1>{listItems.list_name}</h1>
				{listItems.list_data.map((item) => (
					<div className="">
						<ListEntry {...item} />
					</div>
				))}
			</div>

			<div className="w-full border border-black rounded m-5">
				<h1>{listItems.list_name}</h1>
				{listItems.list_data.map((item) => (
					<QueueEntry {...item} />
				))}
			</div>

			<div className="w-full border border-black rounded m-5">
				Calendar
			</div>

		</main>
	);
}

export default App;
