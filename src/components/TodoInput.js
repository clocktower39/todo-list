import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';

function TodoInput() {
    let [name, setName] = useState();
    const dispatch = useDispatch();

    return (
        <div>
            <h3>TodoInput</h3>
            <div className="row">
                <TextField
                    label="Task"
                    onChange={(e)=> setName(e.target.value)}
                    value={name}
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
