import React from 'react';

const MarkAsReadButton = ({ handleClick, read }) => {
    const style = {
        background: read ? '' : '#4cc0ad',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        cursor: 'pointer',
        border: '2px solid #fff',
    }
    return (
        <div style={style} onClick={handleClick}></div>
    );
};

export default MarkAsReadButton;
