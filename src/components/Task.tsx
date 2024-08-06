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
            fetch(`http://localhost:3000/api/task/
                /${user_id}
                /${parent_id}
                /${first_layer ? '1' : '0'}
            `)
                .then(res => res.json())
                .then(res => {setTasks(res)})
                .catch(error => console.error('Client Error: ', error))
                
            setLoading(false);
        }
        fetchData();
    }, []);

    return (loading
        ? <Loading />
        : <div>
            {tasks?.map((item) => (
                <div>
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