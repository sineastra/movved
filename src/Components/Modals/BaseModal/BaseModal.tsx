import styles from "./BaseModal.module.scss"
import React, { BaseSyntheticEvent, ReactElement } from "react"
import { RiCloseLine } from "react-icons/ri"
import { IconContext } from "react-icons"


interface propsIntF {
	heading: string,
	showModal: boolean,
	icon: ReactElement,
	setShowModal: (v: boolean) => void,
	modalClassName?: string,
}
const BaseModal: React.FC<propsIntF> = ({ heading, showModal, setShowModal, children, icon, modalClassName = '' }) => {

	const hideModalBackdrop = (e: BaseSyntheticEvent) => {
		const isNotCloseBtn = e.target.tagName !== "svg" && e.target.tagName !== "path"

		if (isNotCloseBtn && e.target.className.trim() === styles.backdrop) {
			setShowModal(false)
		}
	}

	return (
		<div className={ `${ styles.backdrop } ${ showModal ? '' : styles.hiddenBackdrop }` }
		     role="dialog"
		     onClick={ hideModalBackdrop }>
			<div className={ `${ styles.wrapper } ${ showModal ? '' : styles.hiddenWrapper } ${ modalClassName }` }
			     title="dialog window">
				<section className={ styles.headingSection }>
					<IconContext.Provider value={ { size: "1.4rem" } }>
						{ icon }
						<h3>{ heading }</h3>
						<div onClick={ () => setShowModal(false) }>
							<RiCloseLine role="graphics-document" aria-label="close-modal"
							             style={ { cursor: "pointer" } }/>
						</div>
					</IconContext.Provider>
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