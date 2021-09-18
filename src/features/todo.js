import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as todoService from './../services/todoService';

export const getTodosAsync = createAsyncThunk('todos/getTodosAsync', async () => {
    const { data } = await todoService.getTodos();
    return data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (todo) => {
    const { data } = await todoService.createTodo(todo);
    return data;
});

export const toggleCompleteAsync = createAsyncThunk('todos/toggleCompleteAsync', async (todo) => {
    const { data } = await todoService.updateTodo(todo.id, todo)
    return data;
});

export const deleteTodoAsync = createAsyncThunk('todo/deleteTodoAsync', async (id) => {
    const { data } = await todoService.removeTodo(id);
    return data;
});

export const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        pending: false,
        error: false,
    },
    reducers: {
        addTodo: (state, { payload }) => {
            state.todos.push(payload);
        },
        toggleComplete: (state, { payload }) => {
            state.todos = state.todos.map((todo) => (
                todo.id !== payload ? todo : { ...todo, completed: !todo.completed }
            ));
        },
        deleteTodo: (state, { payload }) => {
            state.todos = state.todos.filter((todo) => todo.id !== payload);
        },
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, { payload }) => {
            state.todos = payload;
        },
        [addTodoAsync.pending]: (state) => {
            state.pending = true;
        },
        [addTodoAsync.fulfilled]: (state, { payload }) => {
            state.todos.push(payload);
            state.pending = false;
        },
        [addTodoAsync.rejected]: (state) => {
            state.error = true;
            state.pending = false;
        },
        [toggleCompleteAsync.fulfilled]: (state, { payload }) => {
            state.todos = state.todos.map((todo) => (
                todo.id !== payload.id ? todo : { ...todo, completed: payload.completed }
            ));
        },
        [deleteTodoAsync.fulfilled]: (state, { payload }) => {
            state.todos = state.todos.filter((todo) => todo.id !== payload);
            state.todos = payload;
        },
    },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
