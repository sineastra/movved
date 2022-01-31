import { Link } from "react-router-dom"
import styles from "../Header.module.scss"
import defaultProfileImg from "../../../assets/default-profile.svg"
import { FaAngleDown } from "react-icons/fa"
import { asideNavPropsInterface } from "../_misc/_interfaces"


const AsideNav = ({ loggedUser, className = '' }: asideNavPropsInterface) => {
	return (
		<aside className={ className }>
			<Link to="/movies">Movies</Link>
			<Link to="/series">Series</Link>
			<Link to="/actors">Actors</Link>
			<div className={ styles.userMobileNavLink }>
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
		</aside>
	)
}

export default AsideNav