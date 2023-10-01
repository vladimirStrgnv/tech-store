import React from 'react';
import ReactDOM from 'react-dom/client';
import './share/styles/index.css';
import App from './App';
import {store} from './share/store/index';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import  {persistor} from './share/store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
    <PersistGate  persistor={persistor}>
      <App />
     </PersistGate>
    </Provider>
);

