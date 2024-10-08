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
    const [tasks, setTasks] = useState<TaskType[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`http://localhost:3001/api/task/${user_id}/${parent_id}/${first_layer ? '1' : '0'}`)
                .then(res => res.json())
                .then(res => {setTasks(res.map((task: TaskType) => ({...task})))})
                .catch(error => console.error('Client Error: ', error))
                
            setLoading(false);
        }
        fetchData();
    }, [user_id, parent_id, first_layer]);

    const updateData = async () => {
        // sync
    }

    const toggleShowDescription = (id: number) => {
        if (tasks) {
            setTasks(tasks.map((task: TaskType) => {
                return task.id === id
                    ? { ...task, show_description: task.show_description
                        ? !task.show_description
                        : true
                    }
                    : task;
            }));
            updateData();
        };
    };

    const toggleCompleted = (id: number) => {
        if (tasks) {
            setTasks(tasks.map((task: TaskType) => {
                return task.id === id
                    ? { ...task, completed: !task.completed }
                    : task;
            }));
            updateData();
        };
    };

    return (loading
        ? <Loading />
        : <div className="pl-4 w-full">
            {tasks?.map((item) => (
                <ul className={`w-full ${
                    item.completed
                        ? "list-image-checked" 
                        : "list-image-unchecked"
                }`}>
                    <li className="w-full" onClick={() => toggleCompleted(item.id)}>
                        <div className="hover:cursor-pointer w-full">
                            <div className="flex flex-row justify-between w-full">
                                <h1>{item.title}</h1>
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    toggleShowDescription(item.id);
                                }}>
                                    Expand
                                </button>
                            </div>
                            {item.show_description
                                ? <p className="text-sm italic">{item.description}</p>
                                : null
                            }
                        </div>
                    </li>
                    <Task 
                        user_id={user_id}
                        parent_id={item.id}
                        first_layer={false}    
                    />
                </ul>
            ))}
        </div>
    )
}

export default Task;