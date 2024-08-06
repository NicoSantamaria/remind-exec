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
        : <div className="border border-black m-2 p-2">
            {listData?.map((item: ListData) => (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{item.priority}</p>
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