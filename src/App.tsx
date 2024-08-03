// npm run start

import React, { useState, useEffect } from 'react';
import { TEST_DATA } from './utils/test-data';
import ListEntry from './components/ListEntry';
import QueueEntry from './components/QueueEntry';
import { ListItems } from './utils/types';

const TEST_USER_ID: number = 1;

const App: React.FC = () => {
	const [listItems, updateListItems] = useState<ListItems | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	// get listdata by userid
	useEffect(() => {
		const fetchdata = async () => {
			fetch(`https://localhost:3001/api/init/${TEST_USER_ID}`)
				.then(response => response.json())
				.then(data => updateListItems({...data}))
				.catch(error => {
					console.error('Client: Could not fetch data: ', error)
				});
		}

		fetchdata();

	}, [loading]);

	// test connections
	useEffect(() => {
		const fetchData = async () => {
			fetch('http://localhost:3001/api/check')
				.then(response => response.json())
				.then(data => alert(data.message))
				.catch(error => {
					console.error('Client: Something went wrong: ', error)
				});
			
			setLoading(false);
		}

		fetchData();
	}, []);

	return (
		<main className="flex justify-between h-full w-full">
		
			<div className="w-full border border-black rounded m-5">
				<h1>{listItems?.list_name}</h1>
				{listItems?.list_data.map((item) => (
					<div className="">
						<ListEntry {...item} />
					</div>
				))}
			</div>

			<div className="w-full border border-black rounded m-5">
				<h1>{listItems?.list_name}</h1>
				{listItems?.list_data.map((item) => (
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
