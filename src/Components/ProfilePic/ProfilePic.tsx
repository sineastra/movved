import { signedUserInfoInterface } from "../../_misc/interfaces"
import DefaultProfilePicSVG from "../_SVGs/DefaultProfilePicSVG"
import styles from "./ProfilePic.module.scss"


interface props {
	user: signedUserInfoInterface | null,
	className?: string,
}

const ProfilePic = ({ user, className = '' }: props) => {

	return (
		<div className={ `${ className } ${ styles.wrapper }` }>
			{
				user?.profilePic
					? <img src={ user.profilePic } role="profile-img" alt="profile"
					       className={ className }/>
					: <DefaultProfilePicSVG/>
			}
		</div>
	)
}

export default ProfilePic