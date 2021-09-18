import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './todo';

const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;
