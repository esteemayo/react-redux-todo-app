import http from './httpService';

const apiEndPoint = '/todos';

function todoUrl(id) {
    return `${apiEndPoint}/${id}`;
};

export function getTodos() {
    return http.get(apiEndPoint);
};

export function createTodo(todo) {
    return http.post(apiEndPoint, todo);
};

export function updateTodo(id, todo) {
    return http.patch(todoUrl(id), todo);
};

export function removeTodo(id) {
    return http.delete(todoUrl(id));
};
