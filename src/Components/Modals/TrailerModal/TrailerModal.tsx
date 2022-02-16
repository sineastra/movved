import BaseModal from "../BaseModal/BaseModal"
import { movieInterface } from "../../../_misc/interfaces"
import React from "react"
import { BsCameraVideo } from "react-icons/bs"


interface propsIntF {
	movie: movieInterface,
	showModal: boolean,
	setShowModal: (v: boolean) => void,
}
const TrailerModal: React.FC<propsIntF> = ({ movie, showModal, setShowModal }) => {

	return (
		<BaseModal heading="Trailer" showModal={ showModal } setShowModal={ setShowModal } icon={ <BsCameraVideo/> }>
			<iframe style={ { width: "95%", height: "315px" } }
			        src={ showModal ? movie.trailerLink : '' }
			        title="Movie Trailer" frameBorder="0"
			        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			        allowFullScreen/>
		</BaseModal>
	)
}

export default TrailerModal