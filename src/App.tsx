// npm run start

import React, { useState, useEffect } from 'react';
import { ListItems } from './utils/types';
import { testConnection } from './utils/tests';
import Loading from './utils/Loading';
import List from './sections/List';

const TEST_USER_ID: number = 1;

const App: React.FC = () => {
	const [lists, setLists] = useState<ListItems[] | null>(null);
	const [userId, setUserId] = useState<number>(TEST_USER_ID);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		testConnection();
	}, []);

	useEffect(() => {
		const getLists = async () => {
			// fetch and set setLists by user_id
			setLoading(false);
		}
		getLists();
	}, [loading]);

	return ( loading 
		? <Loading />
		: <main className="flex justify-between h-full w-full">

			<section className="w-full border border-black rounded m-5">
				{lists?.map((item: ListItems) => (
					<div>
						<h1>{item.list_name}</h1>
						<List user_id={userId} />
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
