import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { signedUserInfoInterface, userInterface } from "../../_misc/interfaces"


const initialState: userInterface = {
	loggedUser: { name: 'Pesho', email: 'pesho@abv.bg', password: 'sasho123' },
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		signUser: ({ loggedUser }, action: PayloadAction<signedUserInfoInterface>) => {
			loggedUser = loggedUser ? null : { name: 'Pesho', email: 'pesho@abv.bg', password: 'sasho123' }
		},
	},
})

export const { signUser } = usersSlice.actions

export default usersSlice.reducer