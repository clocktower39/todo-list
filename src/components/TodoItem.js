import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import {
    Button,
    TableRow,
    TableCell,
    makeStyles
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';

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
        <TableRow className={classes.root}>
                <TableCell>{todo.id}</TableCell>
                {editable ? <TableCell><input type="text" value={name} onChange={(e)=>setName(e.target.value)}/></TableCell> : <TableCell>{todo.name}</TableCell>}
                <TableCell>
                    <Button
                        onClick={()=>{
                            if(editable){
                                dispatch(updateTodo({
                                    ...todo,
                                    name: name
                                }))
                            }
                            setEditable(!editable)
                        }}
                    ><Edit /></Button>
                    </TableCell>
                <TableCell>
                    <Button onClick={()=>dispatch(deleteTodo(todo.id))}><Delete /></Button>
                </TableCell>
        </TableRow>
    )
}

export default TodoItem
