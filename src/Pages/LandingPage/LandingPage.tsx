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
		title: 'Pesho',
		poster: 'https://envymovies.com/wp-content/uploads/2022/01/8d1de36b28288851826469c3de3d8e14.jpg',
	},
	{
		title: 'Pesho',
		poster: 'https://envymovies.com/wp-content/uploads/2022/01/ca8ce1a203b820792ebb6049fbb157aa.jpg',
	},
	{
		title: 'Pesho',
		poster: 'https://envymovies.com/wp-content/uploads/2022/01/8d1de36b28288851826469c3de3d8e14.jpg',
	},
	{
		title: 'Pesho',
		poster: 'https://envymovies.com/wp-content/uploads/2022/01/ca8ce1a203b820792ebb6049fbb157aa.jpg',
	},
	{
		title: 'Pesho',
		poster: 'https://envymovies.com/wp-content/uploads/2022/01/8d1de36b28288851826469c3de3d8e14.jpg',
	},
	{
		title: 'Pesho',
		poster: 'https://envymovies.com/wp-content/uploads/2022/01/ca8ce1a203b820792ebb6049fbb157aa.jpg',
	},
]

const LandingPage = () => {
	return (
		<>
			<LandingPageCarousel slides={ mockedData }/>
			<div className={ styles.categoriesWrapper }>
				<MoviesCategoryCarousel movies={ mockedMovies }/>
			</div>
		</>
	)
}

export default LandingPage