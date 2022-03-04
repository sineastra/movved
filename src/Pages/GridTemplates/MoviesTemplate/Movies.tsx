import filtersData from "../../../_misc/misc"
import FilterSelect from "../../../Components/FIlterSelect/FilterSelect"
import SingleGridMovie from "../../../Components/SingleGridMovie/SingleGridMovie"
import StyledPagination from "../../../Components/StyledPagination/StyledPagination"
import styles from "./Movies.module.scss"
import useFetchMoviesGrid from "../../../Custom Hooks/useFetchMoviesGrid"
import movieRequests from "../../../requests/movieRequests"


const Movies = () => {
	const request = (searchParams: URLSearchParams) => movieRequests.getFilterMovies(searchParams.toString())
	const { movies, activePage, allMoviesCount, changePage } = useFetchMoviesGrid({ request })

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