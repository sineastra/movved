import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { movieInterface } from "../../_misc/interfaces"


interface moviesReducerIntF {
	currentMovie: movieInterface | null
}

const initialState: moviesReducerIntF = {
	currentMovie: null,
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setCurrentMovie: (state, action: PayloadAction<movieInterface | null>) => {
			state.currentMovie = action.payload
		},
	},
})

export const { setCurrentMovie } = moviesSlice.actions

export default moviesSlice.reducer