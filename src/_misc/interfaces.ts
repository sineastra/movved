export interface signedUserInfoInterface {
	_id: string,
	name: string,
	email: string,
	password: string,
	profilePic: string | null,
}

export interface movieCommentIntF {
	_id: string,
	user: signedUserInfoInterface,
	comment: string
}

export interface movieInterface {
	_id: string,
	title: string,
	engTitle: string,
	genres: string[],
	smallPoster: string,
	bigPoster: string,
	isSubbed: boolean,
	isDubbed: boolean,
	year: number,
	watchLink: string,
	trailerLink: string,
	comments: movieCommentIntF[],
	actors: string[],
	director: string,
	description?: string,
}

