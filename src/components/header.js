import React from 'react';

const Header = ({toDo, done}) => {
    return (
        <div className="header">
            <h1>ToDo List</h1>
            <small>{ toDo } active, { done } done</small>
        </div>
    );
};

export default Header;
