import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../_state/app/store"
import { useCallback, useEffect, useState } from "react"
import userRequests from "../../requests/userRequests"
import { signedUserInfoInterface } from "../../_misc/interfaces"
import ProfilePic from "../../Components/ProfilePic/ProfilePic"


const Profile = () => {
	const loggedUserData = useSelector((state: RootState) => state.users.loggedUser)
	const [user, setUser] = useState<signedUserInfoInterface | null>(null)

	// testing useCallback
	const getUser = useCallback(async () => {
		if (loggedUserData) {
			const userData = await userRequests.getUserById(loggedUserData._id)

			setUser(userData)
		}
	}, [loggedUserData])
	useEffect(() => {

	}, [getUser])

	return (
		user &&
		<section>
			<form>
				<ProfilePic user={ user }/>

			</form>
		</section>
	)
}

export default Profile