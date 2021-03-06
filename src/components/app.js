import { React, Component }from 'react';
import "./style.css";
import Header from './header';
import Search from './search-item';
import List from './todo-list';
import ItemStatusFilter from './item-status-filter';
import AddInput from './add-list-tem';

export default class App extends Component {
    newId = 100; 

    state = {
        todoData: [
            this.createElement('Drink Cofee'),
            this.createElement('Build ToDo app'),
            this.createElement('Have a lunch')
        ],
        word: '',
        filter: 'all'
    };   

    toggleProperty(dataArr, id, prop) {
        const index = dataArr.findIndex((el) => el.id === id);

        const oldItem = dataArr[index];
        const newItem = {...oldItem, [prop]: !oldItem[prop]};
        return [
            ...dataArr.slice(0, index),
            newItem,
            ...dataArr.slice(index+1)
        ];
    }

    checkSize(label) {
        return label = label.length >= 35 ? label.slice(0, 35) + ' ...' : label;
    }

    onToggleImportant = (id) => { 
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    }

    createElement(label) {
        return {
            label: this.checkSize(label),
            important: false,
            done: false,
            id: this.newId++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, index), ...todoData.slice(index+1)];
            
            return {
                todoData: newArray
            };
        });
    }

    addItem = (label) => {
        if (label) {
            const newItem = this.createElement(label);

            this.setState(({ todoData }) => {
                
                const newArray = [...todoData, newItem];

                return {
                    todoData: newArray
                };
            });
            document.querySelector('.form-control').style.background = '';
        } else {
            document.querySelector('.form-control').style.background = 'rgba(207, 0, 15, 0.3)';
        }
    }

    search(items, word) {
        if (word.length === 0)
            return items;
        
        return items.filter((item) => {
            return item.label.toLowerCase().includes(word.toLowerCase());
        });
    }

    onSearchChange = (word) => {
        this.setState(({ word }))
    }

    filter(items, filter) {
        switch(filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items
        }
    } 

    onFilterChange = (filter) => {
        this.setState({ filter })
    }

    render() {

        const { todoData, word, filter } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const toDoCount = todoData.length - doneCount;
        const visibleItems = this.filter(this.search(todoData, word), filter);

        return (
            <div className="container"> 
                <Header toDo={toDoCount} done={doneCount}/>
                <div className="searchNstatus">
                    <Search onSearchChange={ this.onSearchChange }/>
                    <ItemStatusFilter filter={ filter }
                        onFilterChange={ this.onFilterChange }/>
                </div>
                <List todos={ visibleItems }
                onDeleted={ (id) => this.deleteItem(id) }
                onToggleDone={ this.onToggleDone }
                onToggleImportant={ this.onToggleImportant }/>
                <AddInput 
                    onItemAdded={ this.addItem }/>
            </div>
        );
    }
};