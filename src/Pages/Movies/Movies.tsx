import FilterSelect from "../../Components/FIlterSelect/FilterSelect"
import filtersData from "../../_misc/misc"
import styles from "./Movies.module.scss"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { movieInterface } from "../../_misc/interfaces"
import SingleGridMovie from "../../Components/SingleGridMovie/SingleGridMovie"
import movieRequests from "../../requests/movieRequests"


const Movies = () => {
	const location = useLocation()
	const [movies, setMovies] = useState<movieInterface[]>([])

	useEffect(() => {
		const getData = async () => {
			const moviesData = await movieRequests.getSearchMovies(location.search)

			setMovies(moviesData)
		}

		getData()
	}, [location.search])

	return (
		<div className={ styles.wrapper }>
			<section className={ styles.headingsWrapper }>
				<h1>Movies</h1>
				<h3>Watch awesome dubbed and subbed movies online.</h3>
			</section>
			<div className={ styles.filtersWrapper }>
				{ filtersData.map(x =>
					<FilterSelect
						name={ x.name }
						options={ x.options }
						title={ x.title }
						key={ x.name }
						ariaLabel={ x.name }
					/>) }
			</div>
			<div className={ styles.moviesGrid }>
				{ movies.map(x => (
					<div className={ styles.slideWrapper }>
						<SingleGridMovie movie={ x } key={ x._id }/>
					</div>
				)) }
			</div>
		</div>
	)
}

export default Movies