// npm run start

import React, { useState, useEffect } from 'react';
import { ListItems } from './utils/types';
import { testConnection } from './utils/tests';
import List from './sections/List';

const TEST_USER_ID: number = 1;

const App: React.FC = () => {
	const [lists, setLists] = useState<ListItems | null>(null);
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
	})

	return (
		<main className="flex justify-between h-full w-full">
			<section className="w-full border border-black rounded m-5">
				<List user_id={TEST_USER_ID} />
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
