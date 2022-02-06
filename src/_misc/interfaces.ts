export interface signedUserInfoInterface {
	name: string,
	email: string,
	password: string,
	profilePic: string | null,
}

export interface usersInterface {
	loggedUser: signedUserInfoInterface | null
}
