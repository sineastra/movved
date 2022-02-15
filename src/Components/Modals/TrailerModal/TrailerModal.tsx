import BaseModal from "../BaseModal/BaseModal"
import { movie } from "../../../_misc/interfaces"
import React from "react"


interface propsIntF {
	movie: movie,
	showModal: boolean,
	setShowModal: (v: boolean) => void,
}
const TrailerModal: React.FC<propsIntF> = ({ movie, showModal, setShowModal }) => {

	return (
		<BaseModal heading="Trailer" showModal={ showModal } setShowModal={ setShowModal }>
			<iframe style={ { width: "95%", height: "315px" } }
			        src={ showModal ? movie.trailerLink : '' }
			        title="Movie Trailer" frameBorder="0"
			        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			        allowFullScreen/>
		</BaseModal>
	)
}

export default TrailerModal