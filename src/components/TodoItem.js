import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch()
    return (
        <div>
            <h3>TodoItem</h3>
            <div className="row">
                <div>{todo.id}</div>
                {editable ? <><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br /></> : <div>{todo.name}</div>}
                <button
                    onClick={()=>{
                        if(editable){
                            dispatch(updateTodo({
                                ...todo,
                                name: name
                            }))
                        }
                        setEditable(!editable)
                    }}
                >Edit</button>
                <button
                    onClick={()=>dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
