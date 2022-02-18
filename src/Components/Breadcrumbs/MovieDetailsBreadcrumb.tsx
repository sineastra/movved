import { useSelector } from "react-redux"
import { RootState } from "../../_state/app/store"


const MovieDetailsBreadcrumb = () => {
	const movie = useSelector((state: RootState) => state.movies.currentMovie)

	return (
		<span>{ movie && movie.title }</span>
	)
}

export default MovieDetailsBreadcrumb