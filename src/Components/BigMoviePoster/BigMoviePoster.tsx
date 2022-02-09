import styles from "../../Pages/MovieDetails/MovieDetails.module.scss"
import { movie } from "../../_misc/interfaces"


interface propsIntF {
	movie: movie
}
const BigMoviePosterTest = ({ movie }: propsIntF) => {
	return (
		<section className={ styles.posterWrapper }>
			<img src={ movie.bigPoster } alt="big-poster"/>
			<h1>{ movie.title }</h1>
			<h4>{ movie.engTitle }</h4>
		</section>
	)
}

export default BigMoviePosterTest