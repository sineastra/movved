import LandingPageCarousel from "../../Components/LandingPageCarousel/LandingPageCarousel"
import image from "../../assets/tree-736885__480.jpeg"
import { slideIntF } from "../../Components/LandingPageCarousel/_interfaces"
import MoviesCategoryCarousel from "../../Components/MoviesCategoryCarousel/MoviesCategoryCarousel"
import { movieInterface } from "../../_misc/interfaces"
import styles from "./Landing.module.scss"


const mockedData: slideIntF[] = [
	{ image, link: '#' },
	{ image, link: '#' },
	{ image, link: '#' },
]

const mockedMovies: movieInterface[] = [
	{
		_id: '0',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
		trailerLink: 'a',
		comments: [{
			_id: 'a',
			user: {
				_id: '1',
				name: 'a',
				email: 'a',
				password: 'a',
				profilePic: 'a',
			}, comment: 'comment',
		}],
		actors: ['a', 'b'],
		director: 'a',
	},
	{
		_id: '1',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: false,
		isDubbed: true,
		year: 2022,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
		trailerLink: 'a',
		comments: [{
			_id: 'a',
			user: {
				_id: '1',
				name: 'a',
				email: 'a',
				password: 'a',
				profilePic: 'a',
			}, comment: 'comment',
		}],
		actors: ['a', 'b'],
		director: 'a',
	},
	{
		_id: '2',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: false,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
		trailerLink: 'a',
		comments: [{
			_id: 'a',
			user: {
				_id: '1',
				name: 'a',
				email: 'a',
				password: 'a',
				profilePic: 'a',
			}, comment: 'comment',
		}],
		actors: ['a', 'b'],
		director: 'a',
	},
	{
		_id: '3',
		title: 'Pesho',
		smallPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		bigPoster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: false,
		isDubbed: true,
		year: 2022,
		watchLink: 'a',
		engTitle: 'eng',
		genres: ['film'],
		trailerLink: 'a',
		comments: [{
			_id: 'a',
			user: {
				_id: '1',
				name: 'a',
				email: 'a',
				password: 'a',
				profilePic: 'a',
			}, comment: 'comment',
		}],
		actors: ['a', 'b'],
		director: 'a',
	},
]

interface singleCategoryPropsIntF {
	title: string,
	movies: movieInterface[]
}
const SingleCategory = ({ title, movies }: singleCategoryPropsIntF) => {
	return (
		<div className={ styles.singleCategoryWrapper }>
			<h2>{ title }</h2>
			<MoviesCategoryCarousel movies={ movies }/>
		</div>
	)
}

const Landing = () => {
	const headings: string[] = ['Нашите предложения', 'Нови филми', 'Нови сериали', 'Популярни', 'Дублирани на български']
	const promiseAllMock = [mockedMovies, mockedMovies, mockedMovies, mockedMovies, mockedMovies]

	return (
		<>
			<LandingPageCarousel slides={ mockedData }/>
			<section className={ styles.categoriesWrapper }>
				{ promiseAllMock.map((movies, index) => {
					return <SingleCategory movies={ movies } title={ headings[index] } key={ headings[index] }/>
				}) }
			</section>
		</>
	)
}

export default Landing