import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../features/usersSlice"
import moviesReducer from "../features/moviesSlice"


const store = configureStore({
	reducer: {
		users: usersReducer,
		movies: moviesReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store