export interface signedUserInfoInterface {
	name: string,
	email: string,
	password: string,
}

export interface userInterface {
	loggedUser: signedUserInfoInterface |  null
}
