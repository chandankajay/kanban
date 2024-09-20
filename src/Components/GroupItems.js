import React from 'react'
import high from '../assets/icons_FEtask/HighPriority.svg'
import dotmenu from '../assets/icons_FEtask/3dotmenu.svg'

const GroupItems = ({ groupBy, items }) => {
    return (
        <div className='flex flex-column cardContainer'>
            {
                items.map((item, index) => (
                    <div className='card' key={index}>
                        <div className='card-head flex flex-row'>
                            <label>{item.id}</label>
                            {
                                groupBy !== 'userId' ?
                                    <> {item.avatar} </>
                                    : null
                            }
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
                flex: 1 1 auto;  
                max-width: 300px;
                padding: 10px;
                margin: 0 5px;
                box-sizing: border-box;
                background-color: #fff;
                display: flex;
                flex-direction: column;
                gap: 10px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
                padding: 10px;
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
            }
            .card-foot {
                gap: 10px;
            }
        `}</style>
        </div>
    )
}

export default GroupItems
