import React from 'react';
import { store } from './application/redux/store/store';
import { Provider } from 'react-redux';
import ListTodo from './presentation/todo/listTodo/listTodo';
import User from './presentation/users/user';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListTodo />
        {/* <User /> */}
      </div>
    </Provider>
  );
}

export default App;
