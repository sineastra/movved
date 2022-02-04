import styles from "./Header.module.scss"
import { useSelector } from "react-redux"
import { RootState } from "../../_state/app/store"
import { useEffect, useState } from "react"
import DesktopHeader from "./DesktopHeader/DesktopHeader"
import MobileHeader from "./MobileHeader/MobileHeader"
import AsideNav from "./AsideNav/AsideNav"


const Header = () => {
	const loggedUser = useSelector((state: RootState) => state.users.loggedUser)
	const [windowWidth, setWindowWidth] = useState(0)
	const [showAsideNav, setShowAsideNav] = useState(false)

	const toggleAsideNav = () => {
		setShowAsideNav(oldState => !oldState)
	}

	const handleResize = () => {
		setWindowWidth(window.innerWidth)

		if (window.innerWidth > 768) {
			setShowAsideNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const asideNavVisibilityClass = windowWidth <= 768 && showAsideNav ? '' : 'hidden'

	return (
		<header className={ styles.header }>
			{
				windowWidth <= 768
					? <MobileHeader toggleAsideNav={ toggleAsideNav }/>
					: <DesktopHeader loggedUser={ loggedUser }/>
			}
			<AsideNav loggedUser={ loggedUser } className={ asideNavVisibilityClass }/>
		</header>
	)
}

export default Header