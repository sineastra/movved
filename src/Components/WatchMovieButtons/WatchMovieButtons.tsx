import styles from "./WatchMovieButtons.module.scss"
import PlayMovieBtn from "./PlayMovieBtn/PlayMovieBtn"
import MiscBtnsPlayMovieGroup from "../MiscBtnsPlayMovieGroup/MiscBtnsPlayMovieGroup"
import { movieInterface } from "../../_misc/interfaces"


interface propsIntF {
	movie: movieInterface
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