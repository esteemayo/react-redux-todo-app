import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoAsync } from '../features/todo';

const AddTodoForm = () => {
    const titleInputRef = useRef();

    const dispatch = useDispatch();
    const { error, pending } = useSelector((state) => state.todos)

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleInputRef.current.value;

        if (!title) return;

        const newTodo = {
            title,
        };

        titleInputRef.current.value = '';

        dispatch(addTodoAsync(newTodo));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form-inline mt-3 mb-3'>
                <label className='sr-only'>Name</label>
                <input
                    type='text'
                    placeholder='Add todo...'
                    className='form-control mb-2 mr-sm-2'
                    ref={titleInputRef}
                    disabled={pending}
                />

                <button disabled={pending} type='submit' className='btn btn-primary mb-2'>
                    Submit
                </button>
            </form>
            {error && <p className='text-danger'>Something went wrong!</p>}
        </>
    );
};

export default AddTodoForm;
