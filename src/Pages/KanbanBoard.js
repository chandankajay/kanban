import React, { useState } from 'react'
import DropdownButton from '../Components/DropdownButton';
import useFetchData from '../helpers/useFetchData';
import Board from '../Components/Board';
import DisplayDropdownBox from '../Components/DisplayDropdownBox';
const KanbanBoard = (props) => {
    const [groupBy, setGroupBy] = useState('status');
    const [sortBy, setSortBy] = useState('priority');
    const [isOpen, setIsOpen] = useState(false);
    const { data, error, loading } = useFetchData(groupBy, sortBy);

    const handleSort = (value) => {
        setSortBy(value);
    };
    const handleGroup = (value) => {
        setGroupBy(value);
    };
    return (
        <>
            <div className='kbhead mx-5'>
                <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <DropdownButton ></DropdownButton>
                </div>
                {
                    isOpen &&
                    <DisplayDropdownBox handleSort={handleSort} handleGroup={handleGroup}></DisplayDropdownBox>
                }

            </div>
            <div className='kbbody mx-5' onClick={() => setIsOpen(false)}>
                {
                    data && data.length &&
                    <Board groupedData={data}></Board>
                }
            </div>
            <style jsx>{`
                .kbhead {
                    width: 100%;
                }
                .kbbody {
                    width: 100%;
                    background-color: #f5f6fa;
                }
        `}</style>
        </>
    )
}


export default KanbanBoard
