import React from "react";
import './ListTodo.scss'
import AddTodo from './AddTodo'
import { toast } from 'react-toastify';
import { eventWrapper } from "@testing-library/user-event/dist/utils";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Watching video' },
            { id: 'todo3', title: 'Learning Japanese' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        // let currentListTodo = this.state.listTodos
        // currentListTodo.push(todo)
        this.setState({
            listTodos: [...this.state.listTodos, todo]
            // listTodos: currentListTodo
        })

        toast.success('Wow so easy!')
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success('Delete succeed!')
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        if (isEmptyObj === false && todo.id === editTodo.id) {
            let listTodoCopy = [...listTodos]

            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))

            listTodoCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })

            toast.success('Update todo succeed!')
            return;

        }

        // Edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        // let listTodos = this.state.listTodos

        return (
            <>
                <p>
                    Simple TODO App with React.js (Jun Nguyen)
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {item.id === editTodo.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span> {index + 1} - {item.title} </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save'
                                                :
                                                'Edit'
                                            }
                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo