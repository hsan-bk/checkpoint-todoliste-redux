import { configureStore } from '@reduxjs/toolkit'
import  todoSlice  from './todoSlice/TodoSlice'

export const store = configureStore({
  // configuration de Store
  reducer: {
    todo: todoSlice,
  },
})