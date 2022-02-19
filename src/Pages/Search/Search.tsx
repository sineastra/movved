import SearchInput from "../../Components/SearchInput/SearchInput"
import { useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"
import movieRequests from "../../requests/movieRequests"
import { movieInterface } from "../../_misc/interfaces"
import SingleGridMovie from "../../Components/SingleGridMovie/SingleGridMovie"
import styles from "./Search.module.scss"
import StyledPagination from "../../Components/StyledPagination/StyledPagination"


const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [movies, setMovies] = useState<movieInterface[]>([])
	const [allMoviesCount, setAllMoviesCount] = useState<number>(1)
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
			<h2>I heard that more search bars improve code quality, so I am just gonna leave this one here.</h2>
			<div className={ styles.searchInputWrapper }>
				<SearchInput className={ styles.searchInput }/>
			</div>
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
		</div>
	)
}

export default SearchPage