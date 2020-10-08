import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './rootReducer'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middlewares = [thunk, logger];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['basket']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
)

export const persistor = persistStore(store);

export default store;



