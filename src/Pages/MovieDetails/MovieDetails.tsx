import styles from "./MovieDetails.module.scss"
import { FaPlayCircle } from "react-icons/fa"
import BigMoviePosterTest from "../../Components/BigMoviePoster/BigMoviePoster"
import bigPoster from "../../assets/exampleMoviePoster.jpg"


const mockedMovie = {
	_id: '0',
	title: 'Филма на Пешо',
	smallPoster: '',
	bigPoster: bigPoster,
	isSubbed: true,
	isDubbed: true,
	year: 1992,
	watchLink: 'd',
	engTitle: 'Bad Movie',
	genre: 'Peshovizum',
}

const MovieDetails = () => {

	return (
		<div className={ styles.wrapper }>
			<BigMoviePosterTest movie={ mockedMovie }/>
			<section className={ styles.content }>
				<div>
				</div>
				<div>
					<FaPlayCircle/>
					<button>Гледай</button>
				</div>
			</section>
		</div>
	)
}

export default MovieDetails