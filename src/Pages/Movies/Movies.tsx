import FilterSelect from "../../Components/FIlterSelect/FilterSelect"
import filtersData from "../../_misc/misc"
import styles from "./Movies.module.scss"
import { BaseSyntheticEvent, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { movieInterface } from "../../_misc/interfaces"
import SingleGridMovie from "../../Components/SingleGridMovie/SingleGridMovie"
import movieRequests from "../../requests/movieRequests"
import Pagination from "react-js-pagination"
import StyledPagination from "../../Components/StyledPagination/StyledPagination"


const Movies = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [movies, setMovies] = useState<movieInterface[]>([])
	const [allMoviesCount, setAllMoviesCount] = useState(0)
	const [activePage, setActivePage] = useState<number | null>(0)

	useEffect(() => {
		const getData = async () => {
			const moviesData = await movieRequests.getSearchMovies(searchParams.toString())

			setMovies(moviesData.movies)
			setAllMoviesCount(moviesData.totalMoviesCount)
		}

		const page = searchParams.get('page')
		setActivePage(Number(page) || null)

		getData()
	}, [searchParams])

	const changePage = (e: number) => {
		setSearchParams({ ...searchParams, page: `${ e }` })
	}

	return (
		<div className={ styles.wrapper }>
			<section className={ styles.headingsWrapper }>
				<h1>Movies</h1>
				<h3>Watch awesome dubbed and subbed movies online.</h3>
			</section>
			<section className={ styles.filtersWrapper }>
				{ filtersData.map(x =>
					<FilterSelect
						name={ x.name }
						options={ x.options }
						title={ x.title }
						key={ x.name }
						ariaLabel={ x.name }
					/>) }
			</section>
			<section className={ styles.moviesGrid }>
				{ movies.map(x => (
					<div className={ styles.slideWrapper }>
						<SingleGridMovie movie={ x } key={ x._id }/>
					</div>
				)) }
			</section>
			<div className={ styles.paginationSection }>
				<StyledPagination
					activePage={ activePage || 1 }
					itemsCountPerPage={ 2 }
					totalItemsCount={ allMoviesCount }
					pageRangeDisplayed={ 5 }
					onChange={ changePage }
				/>
			</div>
			<article className={ styles.endArticle }>
				<h1>Онлайн Филми</h1>

				<p>
					Едно от най-добрите удобства на днешната технология е факта, че имаме възможност да се наслаждаваме
					на
					най-любимите си филми навсякъде и по всяко време. Гледането на онлайн филми е по-лесно от всякога,
					когато използвате специални уебсайтове, предназначени за точно тази цел.
				</p>
			</article>
		</div>
	)
}

export default Movies