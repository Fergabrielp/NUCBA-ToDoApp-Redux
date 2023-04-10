import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        },
        deleteTask: (state, action) => {
            state.tasks = [...state.tasks.filter(task => task.id !== action.payload)]
        },
        deleteAllTasks: (state) => {
            state.tasks = []
        },
    },
})

export const { addTask, deleteTask, deleteAllTasks } = taskSlice.actions

export default taskSlice.reducer