import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signedUserInfoInterface, usersInterface } from "../../_misc/interfaces"


const initialState: usersInterface = {
	loggedUser: null,
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		signInUser: (state, action: PayloadAction<signedUserInfoInterface>) => {
			state.loggedUser = action.payload
		},
		signOutUser: (state, action: PayloadAction<null>) => {
			state.loggedUser = null
		},
	},
})

export const { signInUser, signOutUser } = usersSlice.actions

export default usersSlice.reducer