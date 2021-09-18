import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodosAsync } from 'features/todo';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <ul className='list-group'>
            {todos?.map((todo) => {
                return <TodoItem key={todo.id} {...todo} />
            })}
        </ul>
    );
};

export default TodoList;
