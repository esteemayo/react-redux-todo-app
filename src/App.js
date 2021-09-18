import { ToastContainer } from 'react-toastify';
import Axios from 'axios';

import TotalCompleteItems from './component/TotalCompleteItems';
import AddTodoForm from './component/AddTodoForm';
import TodoList from './component/TodoList';
import Title from './component/Title';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

Axios.defaults.baseURL = 'http://localhost:3300/api/v1';

function App() {
  return (
    <div className='container bg-white p-4 mt-5'>
      <ToastContainer />
      <Title title='My Todo List' />
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
