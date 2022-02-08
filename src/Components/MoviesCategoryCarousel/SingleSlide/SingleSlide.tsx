import { movie } from "../../../_misc/interfaces"
import { Link } from "react-router-dom"
import styles from "./SingleSlide.module.scss"


interface propsIntF {
	movie: movie,
	className?: string,
}

const SingleSlide = ({ movie, className = '' }: propsIntF) => {

	return (
		<div className={ className }>
			<Link to={ `/movie/${ movie.watchLink }` } className={ styles.link }>
				<span className={ styles.yearSpan }>{ movie.year }</span>
				{ movie.isDubbed && <span className={ styles.subSpan }>Dub</span> }
				{ movie.isSubbed && <span className={ styles.dubSpan }>Sub</span> }
				<img src={ movie.poster } alt="poster" className={ styles.slide }/>
				<h4 role="title">{ movie.title }</h4>
				<h5 role="eng-title">{ movie.engTitle }</h5>
				<h5 role="genre">{ movie.genre }</h5>
			</Link>
		</div>
	)
}

export default SingleSlide