import { Link } from "react-router-dom"
import styles from "./AsideNav.module.scss"
import { FaAngleDown } from "react-icons/fa"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import UserSubmenu from "../UserSubmenu/UserSubmenu"
import { useEffect, useState } from "react"
import ProfilePic from "../../ProfilePic/ProfilePic"


interface asideNavPropsInterface {
	loggedUser: signedUserInfoInterface | null,
	visible: boolean,
}

const AsideNav = ({ loggedUser, visible }: asideNavPropsInterface) => {
	const [showSubmenu, setShowSubmenu] = useState(false)

	const toggleAuthSubmenu = () => {
		setShowSubmenu(oldState => !oldState)
	}

	useEffect(() => {
		setShowSubmenu(false)
	}, [visible])

	const visibilityClass = visible ? '' : styles.hidden

	return (
		<aside className={ `${ styles.mainWrapper } ${ visibilityClass }` }>
			<Link to="/movies">Movies</Link>
			<Link to="/series">Series</Link>
			<Link to="/actors">Actors</Link>
			<div className={ styles.userNavLinkWrapper }>
				{ loggedUser
					? <>
						<div role="submenu-toggle" onClick={ toggleAuthSubmenu }>
							<ProfilePic user={ loggedUser } className={ styles.profilePicWrapper }/>
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