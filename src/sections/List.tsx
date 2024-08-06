import React, { useState, useEffect } from 'react';
import { ListData } from '../utils/types';
import Loading from '../utils/Loading';
import ListEntry from '../components/ListEntry';

export type ListProps = {
    user_id: number,
    parent_id: number,
}

const List: React.FC<ListProps> = ({ user_id, parent_id }) => {
    const [listData, setListData] = useState<ListData[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        alert('running');
		const fetchdata = async () => {
            // update to search from user_id and parent_id
			fetch(`http://localhost:3001/api/list_data/${user_id}`)
				.then(res => res.json())
				.then(res => { setListData({...Object.values(res)})})
				.catch(error => { console.error('Client: ERROR! ', error) });

			setLoading(false);
		}
		fetchdata();
	}, []);

    return (loading 
        ? <Loading />
        : <div>
            {listData?.map((item: ListData) => (
                <div>
                    <h1>{item.list_name}</h1>
                    <p>{item.description}</p>
                    <p>{item.priority}</p>
                    {/* And so on... */}
                    <ListEntry
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