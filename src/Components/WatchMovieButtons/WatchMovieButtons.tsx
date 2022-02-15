import styles from "./WatchMovieButtons.module.scss"
import PlayMovieBtn from "./PlayMovieBtn/PlayMovieBtn"
import MiscBtnsPlayMovieGroup from "../MiscBtnsPlayMovieGroup/MiscBtnsPlayMovieGroup"
import { movie } from "../../_misc/interfaces"


interface propsIntF {
	movie: movie
}
const WatchMovieButtons = ({ movie }: propsIntF) => {

	return (
		<section className={ styles.content }>
			<PlayMovieBtn/>
			<MiscBtnsPlayMovieGroup movie={ movie }/>
		</section>
	)
}

export default WatchMovieButtons