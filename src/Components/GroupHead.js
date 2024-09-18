import React from 'react'
import high from '../assets/icons_FEtask/HighPriority.svg'
import add from '../assets/icons_FEtask/add.svg'
import dotmenu from '../assets/icons_FEtask/3dotmenu.svg'
const GroupHead = ({ group }) => {
    return (
        <div className='grouphead flex flex-row'>
            <div className='iconGroup flex flex-row'>
                <img src={high} alt='high' />
                <label>{group.name}</label>
            </div>
            <div className='iconGroup flex flex-row'>
                <img src={add} alt='add' />
                <img src={dotmenu} alt='Menu' />
            </div>

            <style jsx>{`
            .grouphead {
                justify-content: space-between; 
                align-items: center; 
                padding: 10px;
            }
            .iconGroup {
                gap: 2px;
            }
        `}</style>
        </div>
    )
}

export default GroupHead
