import { mobilePropsInterface } from "../_misc/_interfaces"
import styles from "../Header.module.scss"
import { FaBars } from "react-icons/fa"


const MobileHeader = ({ toggleAsideNav, className = '' }: mobilePropsInterface) => {

	return (
		<div className={ className }>
			<div className={ styles.showSideMenuBtn } onClick={ toggleAsideNav }>
				<FaBars/>
			</div>
		</div>
	)
}

export default MobileHeader