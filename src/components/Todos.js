import React from 'react'

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                   <h5 className="red accent-1"> {todo.content} </h5>
                    <i className="fas fa-trash-alt" onClick={() => {deleteTodo(todo.id)}}></i>
                   
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's  left</p>
    )
    
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos
