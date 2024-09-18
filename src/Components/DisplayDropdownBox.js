import React, { useState } from 'react';

function DisplayDropdownBox(props) {
    const { handleSort, handleGroup } = props
    const [isOpen, setIsOpen] = useState(false);
    const [groupBy, setGroupBy] = useState('');
    const [sortBy, setSortBy] = useState('');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleGroupChange = (e) => {
        setGroupBy(e.target.value);
        handleGroup(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        handleSort(e.target.value);
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-box flex flex-column gap-6">
                <div className='flex flex-row gap-2 justify-between align-center'>
                    <label>Grouping</label>
                    <select className="custom-select" value={groupBy} onChange={handleGroupChange}>
                        <option value="">Select Group</option>
                        <option value="status">Status</option>
                        <option value="userId">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className='flex flex-row gap-2 justify-between align-center'>
                    <label>Ordering</label>
                    <select className="custom-select" value={sortBy} onChange={handleSortChange}>
                        <option value="">Select Sort</option>
                        <option value="title">Title</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
            </div>

            <style jsx>{`
                .dropdown-container {
                    position: relative;
                    width: 250px;
                    font-size: 14px;
                }

                .custom-select {
                    width: 120px;          
                    padding: 8px;          
                    font-size: 14px;       
                    border-radius: 8px;    
                    border: 1px solid #ccc; 
                    outline: none;         
                    appearance: none;      
                }

                .custom-select:focus {
                    border-color: #007bff; 
                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); 
                }

                .dropdown-box {
                position: absolute;
                width: 100%;
                top: 100%;
                left: 0;
                margin-top: 8px;
                background-color: #fff;
                border: 1px solid #ccc;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
                padding: 10px;
                z-index: 10;
                }

                .dropdown-box label {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
                }

      `}</style>
        </div>
    );
}

export default DisplayDropdownBox;
