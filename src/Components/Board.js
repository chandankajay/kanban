import React from 'react';
import GroupHead from './GroupHead';
import GroupItems from './GroupItems';
const Board = ({ groupBy, groupedData }) => {
  return (
    <div className="kanban-board flex flex-row justify-between">
      {groupedData.map((group, index) => (
        <div key={index} className="kanban-column">
          <GroupHead groupBy={groupBy} group={group}> </GroupHead>
          <div >
           <GroupItems groupBy={groupBy} items = {group.items}></GroupItems>
          </div>
        </div>
      ))}

      <style jsx>{`
        .kanban-board {
            width: 100%;
            align-items: flex-start;  
        }
      `}</style>
      </div>
  );
};

export default Board;
