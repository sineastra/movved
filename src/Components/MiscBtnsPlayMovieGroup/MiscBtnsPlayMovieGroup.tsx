import { BsCameraVideo, BsChat, BsFlag, BsHeart } from "react-icons/bs"
import styles from "./MiscBtnsPlayMovieGroup.module.scss"
import WrapperBtn from "../WrapperBtn/WrapperBtn"
import { IconContext } from "react-icons"
import TrailerModal from "../Modals/TrailerModal/TrailerModal"
import { movie } from "../../_misc/interfaces"
import { useState } from "react"


interface propsIntF {
	movie: movie
}
const MiscBtnsPlayMovieGroup = ({ movie }: propsIntF) => {
	const [showTrailer, setShowTrailer] = useState(false)

	return (
		<>
			<div className={ styles.miscBtnsWrapper }>
				<IconContext.Provider value={ { className: styles.iconsClassName } }>
					<WrapperBtn title="watch trailer" children={ <BsCameraVideo/> }
					            onClick={ () => setShowTrailer(true) }/>
					<WrapperBtn title="add comment" children={ <BsChat/> }/>
					<WrapperBtn title="favourite" children={ <BsHeart/> }/>
					<WrapperBtn title="report" children={ <BsFlag/> }/>
				</IconContext.Provider>
			</div>
			<TrailerModal
				movie={ movie }
				showModal={ showTrailer }
				setShowModal={ (v: boolean) => setShowTrailer(v) }
			/>
		</>
	)
}

export default MiscBtnsPlayMovieGroup