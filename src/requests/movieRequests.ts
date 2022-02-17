import { movieCommentIntF, signedUserInfoInterface } from "../_misc/interfaces"


interface movieRequestsIntF {
	sendReport: (m: string, type: string) => void,
	addComment: (id: string, c: string) => Promise<movieCommentIntF[]>
}
const movieRequests: movieRequestsIntF = {
	sendReport: async (message, type) => { return null},
	addComment: async (movieId, comment) => {
		return [{
			_id: 'b',
			user: {
				_id: '3',
				name: 'asd',
				email: '',
				password: '',
				profilePic: null,
			},
			comment: '',
		}]
	},
}

export default movieRequests