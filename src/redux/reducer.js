import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
} from './actions';
    import { todos } from './states'

export let reducer = (state = todos, action) => {
    let newTodos = [...state];
    switch( action.type) {
        case ADD_TODO:
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = newTodos.filter(todo => todo.id !== action.payload)
            return newTodos;
        case UPDATE_TODO:
            newTodos = newTodos.forEach(todo => {
                if(todo.id === action.payload.id){
                    todo.name = action.payload.name
                }
            })
            return newTodos;
        default:
            break;
    }
    return state;
}