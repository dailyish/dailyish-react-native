import React, { Fragment } from 'react';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Router from './utils/Routes';
import Reducers from './utils/Reducers';

const App = () => {
  return (
    <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
};

export default App;
