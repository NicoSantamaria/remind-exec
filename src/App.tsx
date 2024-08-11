// npm run start

import React, { useState, useEffect } from 'react';
import { testConnection } from './utils/tests';
import Loading from './utils/Loading';
import List from './sections/List';

const TEST_USER_ID: number = 1;

type ListType = {
	id: number,
	user_id: number,
	list_name: string,
}

const App: React.FC = () => {
	const [lists, setLists] = useState<ListType[] | null>(null);
	const [userId] = useState<number>(TEST_USER_ID);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		testConnection();
	}, []);

	useEffect(() => {
		const getLists = async () => {
			fetch(`http://localhost:3001/api/lists/${userId}`)
				.then(res => res.json())
				.then(res => {setLists(res)})
				.catch(error => console.error('Client Error: ', error));

			setLoading(false);
		}
		getLists();
	}, [userId]);

	const addListData = async () => {
        // add another list item
    }

    const editListData = async () => {
        // edit current list information
    }

    const deleteList = async () => {
        // delete the current list
    }

	return (loading 
		? <Loading />
		: <main className="flex justify-between h-full w-full">
			<section className="w-full rounded m-5 bg-sky-700 text-white">
				{lists?.map((item: ListType) => (
					<div className="p-2">
						<div className="flex flex-row w-full justify-between px-2">
							<h1 className="font-bold text-2xl self-center">{item.list_name}</h1>
							<div className="self-center">
								<button className="px-2" onClick={() => addListData()}>Add</button>
								<button className="px-2" onClick={() => editListData()}>Edit</button>
								<button className="px-2" onClick={() => deleteList()}>Delete</button>
							</div>
            			</div>
						<List
							user_id={item.user_id}
							parent_id={item.id}
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
