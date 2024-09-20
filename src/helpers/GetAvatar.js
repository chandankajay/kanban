import React from 'react';

const Avatar = ({ name }) => {
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className="avatar">
      {getInitial(name)}
      <style jsx>{`
        .avatar {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #AFAFAF;
        display: flex;
        margin-top: 2px;
        justify-content: center;
        align-items: center;
        color: #000;
        font-weight: bold;
        font-size: 10px;
        }
    `}</style>
    </div>
  );
};

export default Avatar;
