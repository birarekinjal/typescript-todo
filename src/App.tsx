import React from 'react';
import { store } from './redux/store/store';
import {Provider} from 'react-redux';
import ListTodo from './pages/todo/listTodo/listTodo';
import User from './pages/users/user';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ListTodo />
        {/* <User/> */}
    </div>
    </Provider>
  );
}

export default App;
