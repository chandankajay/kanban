import React from 'react';
import GroupHead from './GroupHead';
import GroupItems from './GroupItems';
const Board = ({ groupedData }) => {
  return (
    <div className="kanban-board flex flex-row">
      {groupedData.map((group, index) => (
        <div key={index} className="kanban-column">
          <GroupHead group={group}> </GroupHead>
          <div >
           <GroupItems items = {group.items}></GroupItems>
          </div>
        </div>
      ))}

      <style jsx>{`
        .kanban-board {
            width: 100%;
            padding: 4px;
            gap: 10px;
        }
      `}</style>
      </div>
  );
};

export default Board;
