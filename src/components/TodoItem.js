import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import {
    TableRow,
    TableCell,
    makeStyles
} from '@material-ui/core';

let useStyles = makeStyles({
    root: {
        
    }
})

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch()
    let classes = useStyles();

    return (
        <TableRow>
                <TableCell>{todo.id}</TableCell>
                {editable ? <TableCell><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></TableCell> : <TableCell>{todo.name}</TableCell>}
                <TableCell>
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
                    </TableCell>
                <TableCell>
                    <button onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
                </TableCell>
        </TableRow>
    )
}

export default TodoItem
