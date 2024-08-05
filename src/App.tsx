// npm run start

import React, { useState, useEffect } from 'react';
import { ListItems } from './utils/types';
import { testConnection } from './utils/tests';
import List from './sections/List';

const TEST_USER_ID: number = 1;

const App: React.FC = () => {
	const [lists, setLists] = useState<ListItems[] | null>(null);
	const [userId, setuserId] = useState<number>(TEST_USER_ID);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		testConnection();
	}, []);

	useEffect(() => {
		const getLists = async () => {
			// fetch and set setLists bu user_id
			setLoading(false);
		}
		getLists();
	}, [loading]);

	return ( loading 
		? <p>Loading...</p>
		: <main className="flex justify-between h-full w-full">

			<section className="w-full border border-black rounded m-5">
				{lists?.map((item) => (
					<div>
						<h1>{item.list_name}</h1>
						<List 
							user_id={userId} 
							list_data={item.list_data}
						/>
					</div>
				))}
			</section>

			<section className="w-full border border-black rounded m-5">
				Queue
			</section>

			<section className="w-full border border-black rounded m-5">
				Calendar
			</section>
			
		</main>
	);
}

export default App;
