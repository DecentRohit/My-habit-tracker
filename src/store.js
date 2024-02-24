import { configureStore } from '@reduxjs/toolkit'
import habitsReducer from "./redux/reducers/habitsSlice"
const store = configureStore({
  reducer: {
   habitsReducer,
  },
})

export default store
