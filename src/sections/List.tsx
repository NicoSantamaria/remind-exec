import React, { useState, useEffect } from 'react';
import { ListData } from '../utils/types';
import ListEntry from '../components/ListEntry';

type ListProps = {
    user_id: number,
    list_data: ListData
}

const List: React.FC<ListProps> = ({ user_id }) => {
    const [listItems, setListItems] = useState<ListItems | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchdata = async () => {
			fetch(`http://localhost:3001/api/init/${TEST_USER_ID}`)
				.then(res => res.json())
				.then(res => {
					setListItems({
						list_name: "This is a test",
						list_data: Object.values(res)
					})
				})
				.catch(error => {
					console.error('Client: ERROR! ', error)
				});
			setLoading(false);
		}
		fetchdata();
	}, [loading]);

    return (loading 
        ? <p>Loading...</p>
        : <div>
            {listItems?.list_data.map((item) => (
                <ListEntry {...item} />
            ))}
        </div>
    )
}

export default List;