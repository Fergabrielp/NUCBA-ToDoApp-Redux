import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../reducers/taskReducers/taskSlice'

export const store = configureStore({
    reducer: {
        task: taskReducer,
    }
})