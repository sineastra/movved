import styles from "./MobileHeader.module.scss"
import { FaBars } from "react-icons/fa"
import mainLogo from "../../../assets/main-logo.svg"
import SearchInput from "../../SearchInput/SearchInput"
import React from "react"
import { IconContext } from "react-icons"


interface mobilePropsInterface {
	toggleAsideNav: (event: React.MouseEvent) => void,
	className?: string
}

const MobileHeader = ({ toggleAsideNav, className = '' }: mobilePropsInterface) => {

	return (
		<div className={ ` ${ styles.wrapper } ${ className }` } data-testid="mobile-header">
			<div className={ styles.mainLogoWrapper }>
				<img src={ mainLogo } alt="main-logo"/>
			</div>
			<SearchInput pathname={ "/" } className={ styles.searchInput }/>
			<div className={ styles.toggleAsideNav } onClick={ toggleAsideNav }>
				<IconContext.Provider value={ { size: '1.5em' } }>
					<FaBars title="Open Side Menu"/>
				</IconContext.Provider>
			</div>
		</div>
	)
}

export default MobileHeader