// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import workBoardsReducer from './workBoardsSlice';
import authReducer from './authSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    workBoards: workBoardsReducer,
    auth: persistedAuthReducer,
  },
});

export const persistor = persistStore(store);
