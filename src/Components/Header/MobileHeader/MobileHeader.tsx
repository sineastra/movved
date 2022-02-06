import styles from "./MobileHeader.module.scss"
import { FaBars } from "react-icons/fa"
import SearchInput from "../../SearchInput/SearchInput"
import React from "react"
import { IconContext } from "react-icons"
import MainLogo from "../../MainLogo/MainLogo"


interface mobilePropsInterface {
	toggleAsideNav: (event: React.MouseEvent) => void,
	className?: string
}

const MobileHeader = ({ toggleAsideNav, className = '' }: mobilePropsInterface) => {

	return (
		<div className={ ` ${ styles.mainWrapper } ${ className }` } data-testid="mobile-header">
			<div className={ styles.mainLogoWrapper }>
				<MainLogo/>
			</div>
			<SearchInput pathname={ "/" } className={ styles.searchInput }/>
			<div className={ styles.toggleAsideNav } onClick={ toggleAsideNav }>
				<IconContext.Provider value={ { size: '1.5em', className: styles.barsIcon } }>
					<FaBars title="Open Side Menu"/>
				</IconContext.Provider>
			</div>
		</div>
	)
}

export default MobileHeader