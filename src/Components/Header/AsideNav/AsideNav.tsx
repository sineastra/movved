import { Link } from "react-router-dom"
import styles from "../Header.module.scss"
import defaultProfileImg from "../../../assets/default-profile.svg"
import { FaAngleDown } from "react-icons/fa"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import UserSubmenu from "../UserSubmenu/UserSubmenu"
import { useState } from "react"


interface asideNavPropsInterface {
	loggedUser: signedUserInfoInterface | null,
	className?: string,
}

const AsideNav = ({ loggedUser, className = '' }: asideNavPropsInterface) => {
	const [showSubmenu, setShowSubmenu] = useState(false)

	const toggleSubmenu = () => {
		setShowSubmenu(oldState => !oldState)
	}

	return (
		<aside className={ className }>
			<Link to="/movies">Movies</Link>
			<Link to="/series">Series</Link>
			<Link to="/actors">Actors</Link>
			<div className={ styles.userMobileNavLink }>
				{ loggedUser
					? <>
						<div className={ styles.loggedInUser }  role="submenu-toggle" onClick={ toggleSubmenu }>
							<img src={ defaultProfileImg } alt="default-profile"
							     className={ styles.defaultProfilePic }/>
							<div className={ styles.profileName }>{ loggedUser?.name }</div>
							<FaAngleDown/>
						</div>
						{ showSubmenu && <UserSubmenu/> }
					</>
					: <Link to="sign-in" className={ styles.loggedOffUser }>Sign In</Link>
				}
			</div>
		</aside>
	)
}

export default AsideNav