import React from 'react';
import { Provider } from 'react-redux';
import { store } from './application/redux/store/store';
import RoutesData from './presentation/routes/routes';
import ErrorBoundary from './presentation/errorBoundary/ErrorBoundary';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RoutesData />
      </div>
    </Provider>
  );
}

export default App;
