import React, { useState, useEffect } from 'react';
import Loading from '../utils/Loading';
import { TaskType } from '../utils/types';

type TaskProps = {
    user_id: number,
    parent_id: number,
    first_layer: boolean,
}

const Task: React.FC<TaskProps> = ({ user_id, parent_id, first_layer }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [tasks, setTasks] = useState<TaskType[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            fetch(`http://localhost:3001/api/task/${user_id}/${parent_id}/${first_layer ? '1' : '0'}`)
                .then(res => res.json())
                .then(res => {setTasks(res)})
                .catch(error => console.error('Client Error: ', error))
                
            setLoading(false);
        }
        fetchData();
    }, [user_id, parent_id, first_layer]);

    return (loading
        ? <Loading />
        : <div>
            {tasks?.map((item) => (
                <div className="ml-4 mb-2 border-l border-black px-2">
                    <h1>{item.title}</h1>
                    <Task 
                        user_id={user_id}
                        parent_id={item.id}
                        first_layer={false}    
                    />
                </div>
            ))}
        </div>
    )
}

export default Task;