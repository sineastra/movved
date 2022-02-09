import styles from "./BigMoviePoster.module.scss"
import { movie } from "../../_misc/interfaces"


interface propsIntF {
	movie: movie
}
const BigMoviePosterTest = ({ movie }: propsIntF) => {
	return (
		<section className={ styles.posterWrapper }>
			<img src={ movie.bigPoster } alt="big-poster"/>
			<div className={ styles.headingsWrapper }>
				<h2>{ movie.title }</h2>
				<h4>{ movie.engTitle }</h4>
			</div>
		</section>
	)
}

export default BigMoviePosterTest