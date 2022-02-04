import styles from "../Header.module.scss"
import { FaBars } from "react-icons/fa"
import mainLogo from "../../../assets/main-logo.svg"
import SearchInput from "../../SearchInput/SearchInput"
import React from "react"


interface mobilePropsInterface {
	toggleAsideNav: (event: React.MouseEvent) => void,
	className?: string
}

const MobileHeader = ({ toggleAsideNav, className = '' }: mobilePropsInterface) => {

	return (
		<div className={ className } data-testid="mobile-header">
			<div className={ styles.mainLogoWrapper }>
				<img src={ mainLogo } alt="main-logo"/>
			</div>
			<SearchInput pathname={ "/" }/>
			<div className={ styles.showSideMenuBtn } onClick={ toggleAsideNav }>
				<FaBars title="Open Side Menu"/>
			</div>
		</div>
	)
}

export default MobileHeader