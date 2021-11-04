import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './config/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true} autoDismissTimeout='3000' placement='bottom-right'>
        <Routes />
      </ToastProvider>
    </Provider>
  );
};

export default App;
