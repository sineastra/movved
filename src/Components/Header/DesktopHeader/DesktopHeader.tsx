import styles from "../Header.module.scss"
import { Link, useLocation } from "react-router-dom"
import defaultProfileImg from "../../../assets/default-profile.svg"
import { FaAngleDown } from "react-icons/fa"
import SearchInput from "../../SearchInput/SearchInput"
import { signedUserInfoInterface } from "../../../_misc/interfaces"
import { SyntheticEvent, useState } from "react"
import UserSubmenu from "../UserSubmenu/UserSubmenu"
import ProfilePic from "../../ProfilePic/ProfilePic"


interface desktopPropsInterface {
	loggedUser: signedUserInfoInterface | null,
	className?: string,
}

const loggedUserMock: signedUserInfoInterface = {
	_id: '1',
	name: 'Pesho',
	email: 'pesho@abv.bg',
	password: 'sasho123',
	profilePic: null,
}

const DesktopHeader = ({ loggedUser = loggedUserMock, className = '' }: desktopPropsInterface) => {
	const [showSubmenu, setShowSubmenu] = useState(false)
	const location = useLocation()
	const pathname = location.pathname

	const toggleSubmenu = (e: SyntheticEvent) => {
		setShowSubmenu(oldState => !oldState)
	}

	return (
		<div className={ `${ className }` } data-testid="desktop-header">
			<Link to="movies">Movies</Link>
			<Link to="series">Series</Link>
			<Link to="actors">Actors</Link>
			<SearchInput/>
			<div className={ styles.userDesktopNavLink }>
				{ loggedUser
					? <>
						<div className={ styles.loggedInUser } role="submenu-toggle" onClick={ toggleSubmenu }>
							<ProfilePic user={ loggedUser }/>
							<div className={ styles.profileName }>{ loggedUser?.name }</div>
							<FaAngleDown/>
						</div>
						{ showSubmenu && <UserSubmenu/> }
					</>
					: <Link to="sign-in" className={ styles.loggedOffUser }>Sign In</Link>
				}
			</div>
		</div>
	)
}

export default DesktopHeader