import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            <h3>TodoInput</h3>
            <div className="row">
                <input
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
                    type="text"
                />
                <button
                    onClick={() => {
                        dispatch(addTodo(
                                {
                                    id: uuid(),
                                    name: name
                                }
                        ))
                        setName('');
                    }}
                >Add</button>
            </div>
        </div>
    )
}

export default TodoInput
