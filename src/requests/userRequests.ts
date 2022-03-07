import { signedUserInfoInterface } from "../_misc/interfaces"


interface userRequestsIntF {
	getUserById: (id: string) => Promise<signedUserInfoInterface>
}
const userRequests: userRequestsIntF = {
	getUserById: async () => ({
		_id: '1',
		name: 'a',
		email: 'a',
		password: 'a',
		profilePic: 'a',
	})
}

export default userRequests