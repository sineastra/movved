export interface signedUserInfoInterface {
	name: string,
	email: string,
	password: string,
	profilePic: string | null,
}

export interface movie {
	_id: string,
	title: string,
	engTitle: string,
	genre: string,
	smallPoster: string,
	bigPoster: string,
	isSubbed: boolean,
	isDubbed: boolean,
	year: number,
	watchLink: string
}

