import styles from "./MovieDetails.module.scss"
import BigMoviePosterTest from "../../Components/BigMoviePoster/BigMoviePoster"
import bigPoster from "../../assets/exampleMoviePoster.jpg"
import WatchMovieButtons from "../../Components/WatchMovieButtons/WatchMovieButtons"
import { signedUserInfoInterface } from "../../_misc/interfaces"


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
	genres: ['Екшън Научна-фантастика Приключение'],
	trailerLink: 'https://www.youtube.com/embed/RX7TA3ezjHc',
	comments: [{
		_id: 'a',
		user: {
			_id: '1',
			name: 'pesho',
			email: 'a',
			password: 'a',
			profilePic: null,
		}, comment: 'comment',
	}, {
		_id: 'a',
		user: {
			_id: '1',
			name: 'pesho',
			email: 'a',
			password: 'a',
			profilePic: null,
		}, comment: 'comment',
	}, {
		_id: 'a',
		user: {
			_id: '1',
			name: 'pesho',
			email: 'a',
			password: 'a',
			profilePic: null,
		}, comment: 'comment',
	}],
	actors: ['a', 'b'],
	director: 'a',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam aperiam consequatur delectus distinctio expedita illum inventore laudantium minus quasi similique vitae, voluptatum. A blanditiis, consectetur debitis dicta dolore dolorem earum eum inventore iure laboriosam maxime nostrum placeat porro provident quasi quis, quisquam sint sit tenetur totam velit, voluptatum?',
}

const MovieDetails = () => {

	return (
		<div className={ styles.wrapper }>
			<BigMoviePosterTest movie={ mockedMovie }/>
			<WatchMovieButtons movie={ mockedMovie }/>
			<div className={ styles.descriptionWrapper }>
				<div className={ styles.genresWrapper }>
					<div>{ mockedMovie.year }</div>
					<div>{ mockedMovie.genres.join(', ') }</div>
				</div>
				<article>
					{ mockedMovie.description }
				</article>
				<div className={ styles.crewInfo }>
					<span className={ styles.diffColor }>Актьори: </span><span>{ mockedMovie.actors }</span>
				</div>
				<div className={ styles.crewInfo }>
					<span className={ styles.diffColor }>Режисьор: </span><span>{ mockedMovie.director }</span>
				</div>
				<div className={ styles.crewInfo }>
					<span
						className={ styles.diffColor }>Аудио: </span><span>{ mockedMovie.isDubbed ? 'Българско' : 'Субтитри' }</span>
				</div>
				<hr/>
			</div>
		</div>
	)
}

export default MovieDetails