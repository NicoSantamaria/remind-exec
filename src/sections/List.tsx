import React, { useState, useEffect } from 'react';
import { ListData } from '../utils/types';
import Loading from '../utils/Loading';
import Task from '../components/Task';

export type ListProps = {
    user_id: number,
    parent_id: number,
}

const List: React.FC<ListProps> = ({ user_id, parent_id }) => {
    const [listData, setListData] = useState<ListData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`http://localhost:3001/api/list_data/${user_id}/${parent_id}`)
                .then(res => res.json())
                .then(res => {setListData(res)})
                .catch(error => console.error('Client Error: ', error));

			setLoading(false);
		};
		fetchData();
	}, [user_id, parent_id]);

    return (loading 
        ? <Loading />
        : <div className="flex flex-col rounded bg-sky-600">
            {listData?.map((item: ListData) => (
                <div className="flex flex-col p-2 hover:bg-sky-700">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-md font-bold">{item.title}</h1>
                        <p className="text-xs pr-2">{item.priority}</p>
                    </div>
                    <p className="text-xs italic pb-2">{item.description}</p>
                    <Task
                        user_id={user_id}
                        parent_id={item.id}
                        first_layer={true}
                    />                 
                </div>
            ))}
        </div>
    )
}

export default List;