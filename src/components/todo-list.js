import React from 'react';
import ListItem from './todo-list-items';


const List = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const liElems = todos.map((item) => {
        const { id, ...itemProps} = item;
        return (
            <li className="list-group-item" key={ id }>
                <ListItem { ...itemProps }
                    onDelete={ () => onDeleted(id) }
                    onToggleDone ={ () => onToggleDone(id) }
                    onToggleImportant ={ () => onToggleImportant(id) }/>
            </li>
        );
    })

    return (
        <ul className="list-group">
            { liElems }
        </ul>
    );
};

export default List;