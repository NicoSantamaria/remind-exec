import { useEffect } from 'react';

export const testConnection = () => {
    const fetchData = () => {
        fetch('http://localhost:3001/api/check')
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => {
                console.error('Client: Something went wrong: ', error)
            });
    }
    
    fetchData();
};