import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {
    Container,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    Paper,
    makeStyles
} from '@material-ui/core';


let useStyles = makeStyles({
    root: {
        
    }
})

function TodoList() {
    let todos = useSelector(state => state);
    let classes = useStyles();
    return (
        <Container>
            <TableContainer className={classes.root} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TASK</TableCell>
                        <TableCell>OPTION</TableCell>
                        <TableCell>OPTION</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default TodoList