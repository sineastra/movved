import styles from "./UserSubmenu.module.scss"
import { Link, useNavigate } from "react-router-dom"
import { SyntheticEvent } from "react"


interface userSubmenuIntF {
	className?: string,
}

const UserSubmenu = ({ className = '' }: userSubmenuIntF) => {

	const logout = (e: SyntheticEvent) => {
		const navigate = useNavigate()
		console.log('logged out')

		navigate("/")
	}

	return (
		<div className={ `${ styles.wrapper } ${ className }` } role="auth-submenu">
			<Link to="/profile">Profile</Link>
			<Link to="/my-collection">My Collection</Link>
			<Link to="/settings">Settings</Link>
			<hr/>
			<div onClick={ logout }>Logout</div>
		</div>
	)
}

export default UserSubmenu