import React from 'react'
import display from '../assets/icons_FEtask/Display.svg'
import down from '../assets/icons_FEtask/down.svg'
const DropdownButton = (props) => {
  return (
    <div className='flex flex-row p-2 ddcontainer'>
      <img src={display} alt='Display' />
      <label>Display</label>
      <img src={down} alt='Down' />

      <style jsx>{`
        .ddcontainer {
          width: 100px;
          border: 1px solid #e8e8e8;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
          font-weight: 500;
          gap: 6px;
        }
      `}</style>
    </div>
  )
}

export default DropdownButton
