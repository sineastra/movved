import React, { BaseSyntheticEvent } from "react"
import styles from "./WrapperBtn.module.scss"


interface propsIntF {
	title?: string,
	onClick?: (e: BaseSyntheticEvent) => void
}
const WrapperBtn: React.FC<propsIntF> = ({ children, onClick, title = '' }) => {

	return (
		<button className={ styles.btn } title={ title } onClick={ onClick }>
			{ children }
		</button>
	)
}

export default WrapperBtn