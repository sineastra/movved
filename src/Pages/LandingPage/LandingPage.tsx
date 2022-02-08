import LandingPageCarousel from "../../Components/LandingPageCarousel/LandingPageCarousel"
import image from "../../assets/tree-736885__480.jpeg"
import { slideIntF } from "../../Components/LandingPageCarousel/_interfaces"
import MoviesCategoryCarousel from "../../Components/MoviesCategoryCarousel/MoviesCategoryCarousel"
import { movie } from "../../_misc/interfaces"
import styles from "./LandingPage.module.scss"


const mockedData: slideIntF[] = [
	{ image, link: '#' },
	{ image, link: '#' },
	{ image, link: '#' },
]

const mockedMovies: movie[] = [
	{
		_id: '0',
		title: 'Pesho',
		poster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: true,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genre: 'film',
	},
	{
		_id: '1',
		title: 'Pesho',
		poster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: false,
		isDubbed: true,
		year: 2022,
		watchLink: 'a',
		engTitle: 'eng',
		genre: 'film',
	},
	{
		_id: '2',
		title: 'Pesho',
		poster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: true,
		isDubbed: false,
		year: 1992,
		watchLink: 'a',
		engTitle: 'eng',
		genre: 'film',
	},
	{
		_id: '3',
		title: 'Pesho',
		poster: 'https://image.tmdb.org/t/p/w342/yYpNLw1j6BrtCpqjalLkjeXTUz9.jpg',
		isSubbed: false,
		isDubbed: true,
		year: 2022,
		watchLink: 'a',
		engTitle: 'eng',
		genre: 'film',
	},
]

const LandingPage = () => {
	return (
		<>
			<LandingPageCarousel slides={ mockedData }/>
			<div className={ styles.categoriesWrapper }>
				<h2>Нашите предложения</h2>
				<MoviesCategoryCarousel movies={ mockedMovies }/>
			</div>
		</>
	)
}

export default LandingPage