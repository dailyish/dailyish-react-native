import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

import Router from './utils/Routes';
import store from './utils/Store';

// TODO: Add createGlobalStyles
// TODO: Add themes for dark mode
// TODO: add loading={<LoadingView /> to PersistGate}
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
