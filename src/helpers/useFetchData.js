import { useState, useEffect } from 'react';
import { fetchKanbanData } from '../APIs/APIHandler';
import Avatar from '../helpers/GetAvatar';

import highPriority from '../assets/icons_FEtask/HighPriority.svg';
import mediumPriority from '../assets/icons_FEtask/MediumPriority.svg';
import lowPriority from '../assets/icons_FEtask/LowPriority.svg';
import urgentPriority from '../assets/icons_FEtask/UrgentPriorityColour.svg';
import noPriority from '../assets/icons_FEtask/No-priority.svg';
import doneIcon from '../assets/icons_FEtask/Done.svg';
import inProgressIcon from '../assets/icons_FEtask/in-progress.svg';
import cancelledIcon from '../assets/icons_FEtask/Cancelled.svg';
import todo from '../assets/icons_FEtask/Backlog.svg';

const priorityIconMap = {
    4: highPriority,
    3: mediumPriority,
    2: lowPriority,
    1: urgentPriority,
    0: noPriority
};

const statusIconMap = {
    'Done': doneIcon,
    'In progress': inProgressIcon,
    'Cancelled': cancelledIcon,
    'Todo': todo,
    'Backlog': todo,
};

const useFetchData = (groupBy = 'status', sortBy = 'priority') => {
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

        if (userMap[ticket.userId]) {
            ticket.name = userMap[ticket.userId].name;
            ticket.available = userMap[ticket.userId].available;
        }
        ticket.priorityicon = priorityIconMap[ticket.priority] || null;
        ticket.statusicon = statusIconMap[ticket.status] || null;
        ticket.avatar = <Avatar name={ticket.name} />;
        if (!acc[groupKey]) {
            acc[groupKey] = {
                name:
                    groupBy === 'userId'
                        ? userMap[groupKey]?.name || 'Unknown User'
                        : groupBy === 'priority'
                            ? priorityMap[groupKey] || 'No Priority'
                            : groupKey,
                icon: groupBy === 'userId' ? <Avatar name={userMap[groupKey]?.name} /> :
                    groupBy === 'priority' ? priorityIconMap[groupKey] :
                        groupBy === 'status' ? statusIconMap[groupKey] : null,
                items: []
            };
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
