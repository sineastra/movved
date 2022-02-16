import { BsCameraVideo, BsChat, BsFlag, BsHeart } from "react-icons/bs"
import styles from "./MiscBtnsPlayMovieGroup.module.scss"
import WrapperBtn from "../WrapperBtn/WrapperBtn"
import { IconContext } from "react-icons"
import TrailerModal from "../Modals/TrailerModal/TrailerModal"
import { movieInterface } from "../../_misc/interfaces"
import { useState } from "react"
import CommentModal from "../Modals/CommentModal/CommentModal"


interface propsIntF {
	movie: movieInterface
}
const MiscBtnsPlayMovieGroup = ({ movie }: propsIntF) => {
	const [showTrailer, setShowTrailer] = useState(false)
	const [showComments, setShowComments] = useState(false)

	return (
		<>
			<div className={ styles.miscBtnsWrapper }>
				<IconContext.Provider value={ { className: styles.iconsClassName } }>
					<WrapperBtn title="watch trailer"
					            children={ <BsCameraVideo/> }
					            onClick={ () => setShowTrailer(true) }
					/>
					<WrapperBtn title="favourite" children={ <BsHeart/> }/>
					<WrapperBtn title="add comment"
					            children={ <BsChat/> }
					            onClick={ () => setShowComments(true) }
					/>
					<WrapperBtn title="report" children={ <BsFlag/> }/>
				</IconContext.Provider>
			</div>
			<TrailerModal
				movie={ movie }
				showModal={ showTrailer }
				setShowModal={ (v: boolean) => setShowTrailer(v) }
			/>
			<CommentModal
				movie={ movie }
				showModal={ showComments }
				setShowModal={ (v: boolean) => setShowComments(v) }
			/>
		</>
	)
}

export default MiscBtnsPlayMovieGroup