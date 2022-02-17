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
	genres: ['a'],
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
}

const MovieDetails = () => {

	return (
		<div className={ styles.wrapper }>
			<BigMoviePosterTest movie={ mockedMovie }/>
			<WatchMovieButtons movie={ mockedMovie }/>
		</div>
	)
}

export default MovieDetails