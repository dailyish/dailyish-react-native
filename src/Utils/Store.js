import { persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import FilesystemStorage from 'redux-persist-filesystem-storage';

import rootReducer from './Reducers';

const persistConfig = {
  key: 'root',
  storage: FilesystemStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));

export default store;
