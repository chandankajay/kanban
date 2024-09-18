import React from 'react'
import high from '../assets/icons_FEtask/HighPriority.svg'
import dotmenu from '../assets/icons_FEtask/3dotmenu.svg'

const GroupItems = ({ items }) => {
    return (
        <div className='flex flex-column cardContainer'>
            {
                items.map((item, index) => (
                    <div className='card flex flex-column' key={index}>
                        <div className='card-head flex flex-row'>
                            <label>{item.id}</label>
                            <img src={high} alt='high' />
                        </div>
                        <label title={item.title} className='card-title'>{item.title}</label>
                        <div className='card-foot flex flex-row'>
                            <img src={dotmenu} alt='Menu' />
                            <label>{item.tag[0]}</label>
                        </div>
                    </div>
                ))
            }

            <style jsx>{`
            .cardContainer {
                gap: 10px;
            }
            .card {
                justify-content: space-between; 
                background-color: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                padding: 10px;
                width: 300px; 
            }
            .card-head {
                justify-content: space-between; 
                align-items: center; 
                gap: 10px;
            }
            .card-title {
                font-weight: 500;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 200px;
                ,}
        `}</style>
        </div>
    )
}

export default GroupItems
