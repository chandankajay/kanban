import { useState, useEffect } from 'react';
import { fetchKanbanData } from '../APIs/APIHandler';

const useFetchData = (groupBy = 'status', sortBy = 'priority') => {
    console.log(groupBy, sortBy);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchKanbanData();
                let manipulatedData =
                    groupAndSort(result, groupBy, sortBy);

                setData(manipulatedData);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [groupBy, sortBy]);

    return { data, error, loading };
};

const groupAndSort = (data, groupBy, sortBy) => {
    const userMap = data.users.reduce((acc, user) => {
        acc[user.id] = { name: user.name, available: user.available };
        return acc;
    }, {});

    const priorityMap = {
        0: 'No Priority',
        1: 'Low',
        2: 'Medium',
        3: 'High',
        4: 'Urgent',
    }

    const groupedData = data.tickets.reduce((acc, ticket) => {
        const groupKey = ticket[groupBy];
        debugger
        if (userMap[ticket.userId]) {
            ticket.name = userMap[ticket.userId].name;
            ticket.available = userMap[ticket.userId].available;
        } 
        if (!acc[groupKey]) {
            acc[groupKey] = { name: 
                groupBy === 'userId'
                ?  userMap[groupKey].name
                : groupBy === 'priority'
                ? priorityMap[groupKey]
                : groupKey, items: [] };
        }
        acc[groupKey].items.push(ticket);

        return acc;
    }, {});

    let result = Object.values(groupedData);
    if (sortBy) {
        result.forEach(group => {
            if (sortBy === 'priority') {
                group.items.sort((a, b) => b.priority - a.priority);
              } else if (sortBy === 'title') {
                group.items.sort((a, b) => a.title.localeCompare(b.title));
              }
        });
    }
    return result;
};


export default useFetchData;
