import { useDispatch } from 'react-redux';

import { deleteTodoAsync, toggleCompleteAsync } from 'features/todo';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCompleteToggle = () => {
        const todo = { id, completed: !completed };
        dispatch(toggleCompleteAsync(todo));
    };

    const handleDelete = (id) => {
        dispatch(deleteTodoAsync(id));
    };

    return (
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center'>
                    <input
                        type='checkbox'
                        className='mr-3'
                        checked={completed}
                        onChange={handleCompleteToggle}
                    />
                    {title}
                </span>
                <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
