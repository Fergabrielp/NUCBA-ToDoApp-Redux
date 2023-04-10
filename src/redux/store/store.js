import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskReducer from '../reducers/taskReducers/taskSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const reducers = combineReducers({
    task: taskReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['task'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)
