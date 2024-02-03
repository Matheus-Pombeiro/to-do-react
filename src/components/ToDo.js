import React from "react";

const ToDo = ({ todo, removeTodo }) => {
    return (
        <div className="todo">
            <div className="content">
              <p>{ todo.text }</p>
              <p className="category">
                ({ todo.category })
              </p>
            </div>
            <div>
              <button className="complete">To Complete</button>
              <button className="remove" onClick={ () => removeTodo(todo.id) }>X</button>
            </div>
        </div>
    )
};

export default ToDo;