import styles from "../Header.module.scss"
import { Link, useLocation } from "react-router-dom"
import defaultProfileImg from "../../../assets/default-profile.svg"
import { FaAngleDown } from "react-icons/fa"
import { desktopPropsInterface } from "../_misc/_interfaces"
import SearchInput from "../../SearchInput/SearchInput"


const DesktopHeader = ({ loggedUser = {
	name: 'Pesho',
	email: 'pesho@abv.bg',
	password: 'sasho123',
}, className = '' }: desktopPropsInterface) => {
	const location = useLocation()
	const pathname = location.pathname

	return (
		<div className={ `${ className }` } data-testid="desktop-header">
			<Link to="movies">Movies</Link>
			<Link to="series">Series</Link>
			<Link to="actors">Actors</Link>
			<SearchInput pathname={ pathname }/>
			<div className={ styles.userDesktopNavLink }>
				{ loggedUser
					? <div className={ styles.loggedInUser }>
						<img src={ defaultProfileImg } alt="default-profile"
						     className={ styles.defaultProfilePic }/>
						<div className={ styles.profileName }>{ loggedUser?.name }</div>
						<FaAngleDown/>
					</div>
					: <Link to="sign-in" className={ styles.loggedOffUser }>Sign In</Link>
				}
			</div>
		</div>
	)
}

export default DesktopHeader