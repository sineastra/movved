import SearchInput from "../../../Components/SearchInput/SearchInput"
import movieRequests from "../../../requests/movieRequests"
import SingleGridMovie from "../../../Components/SingleGridMovie/SingleGridMovie"
import styles from "./Search.module.scss"
import StyledPagination from "../../../Components/StyledPagination/StyledPagination"
import useFetchMoviesGrid from "../../../Custom Hooks/useFetchMoviesGrid"

const Search = () => {
	const request = (searchParams: URLSearchParams) => movieRequests.getSearchMovies(searchParams.toString())
	const { movies, activePage, allMoviesCount, changePage } = useFetchMoviesGrid({ request })

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

export default Search