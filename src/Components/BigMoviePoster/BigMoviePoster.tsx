import styles from "./BigMoviePoster.module.scss"
import { movieInterface } from "../../_misc/interfaces"


interface propsIntF {
	movie: movieInterface,
	className?: string
}
const BigMoviePosterTest = ({ movie, className = '' }: propsIntF) => {
	return (
		<section className={ `${ styles.posterWrapper } ${ className }` }>
			<img src={ movie.bigPoster } alt="big-poster"/>
			<div className={ styles.headingsWrapper }>
				<h2>{ movie.title }</h2>
				<h4>{ movie.engTitle }</h4>
			</div>
		</section>
	)
}

export default BigMoviePosterTest