import { React, Component } from 'react';

export default class ListItem extends Component {

    render() {
        const { label, id, onDelete, done, important, onToggleDone, onToggleImportant } = this.props;

        let classNames = 'todo-list-item-label';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <div className='todo-list-item'>
                <span className={ classNames } 
                    id={ id }
                    onClick={ onToggleDone }>
                    { label }
                </span>
                <span className='d-flex flex-row-reverse'>
                    <button type='button'
                        className='btn btn-outline-success btn-sm'
                        onClick={ onToggleImportant }>
                        <i className='fa fa-exclamation'></i>
                    </button>
                    <button type='button' 
                        className='btn btn-outline-danger btn-sm'
                        onClick={ onDelete }>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </span>
            </div>
        );
    }
}
