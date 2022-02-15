import styles from "./BaseModal.module.scss"
import React, { BaseSyntheticEvent } from "react"
import { RiCloseLine } from "react-icons/ri"
import { IconContext } from "react-icons"


interface propsIntF {
	heading: string,
	showModal: boolean,
	setShowModal: (v: boolean) => void,
}
const BaseModal: React.FC<propsIntF> = ({ heading, showModal, setShowModal, children }) => {

	const hideModalBackdrop = (e: BaseSyntheticEvent) => {
		const isCloseBtn = e.target.tagName === "svg" || "path"
		
		if (!isCloseBtn && e.target.className.trim() === styles.backdrop) {
			setShowModal(false)
		}
	}

	return (
		<div className={ `${ styles.backdrop } ${ showModal ? '' : styles.hiddenBackdrop }` } role="dialog"
		     onClick={ hideModalBackdrop }>
			<div className={ `${ styles.wrapper } ${ showModal ? '' : styles.hiddenWrapper }` }>
				<section className={ styles.headingSection }>
					<h3>{ heading }</h3>
					<div onClick={ () => setShowModal(false) }>
						<IconContext.Provider value={ { size: "1.4rem" } }>
							<RiCloseLine/>
						</IconContext.Provider>
					</div>
				</section>
				<hr/>
				<section className={ styles.contentSection }>
					{ children }
				</section>
			</div>
		</div>
	)
}

export default BaseModal