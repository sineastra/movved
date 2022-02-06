import { Link } from "react-router-dom"
import styles from "./AsideNav.module.scss"
import defaultProfileImg from "../../../assets/default-profile.svg"
import { FaAngleDown } from "react-icons/fa"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import UserSubmenu from "../UserSubmenu/UserSubmenu"
import { useState } from "react"


interface asideNavPropsInterface {
	loggedUser: signedUserInfoInterface | null,
	wrapperClassName?: string,
	visibilityWrapperClassName?: string
}

const AsideNav = ({ loggedUser, wrapperClassName = '' }: asideNavPropsInterface) => {
	const [showSubmenu, setShowSubmenu] = useState(false)

	const toggleAuthSubmenu = () => {
		setShowSubmenu(oldState => !oldState)
	}

	return (
		<aside className={ `${ styles.mainWrapper } ${ wrapperClassName }` }>
			<Link to="/movies" className={ styles.navLink }>Movies</Link>
			<Link to="/series" className={ styles.navLink }>Series</Link>
			<Link to="/actors" className={ styles.navLink }>Actors</Link>
			<div className={ styles.userMobileNavLink }>
				{ loggedUser
					? <>
						<div className={ styles.loggedInUser } role="submenu-toggle" onClick={ toggleAuthSubmenu }>
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