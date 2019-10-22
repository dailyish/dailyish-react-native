import { persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './Reducers';

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage,
  blacklist: ['forms'],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk, logger));

export default store;
